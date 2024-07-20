"use server";

import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { cookies } from "next/headers";

export const handleLoginUser = async (
  formData: FormData,
  prevState: StateResponse,
): Promise<AuthResponse> => {
  try {
    if (!formData) return { isLoggedIn: false };

    const adminRef = doc(db, "admin", "admin_access");
    const adminSnap = await getDoc(adminRef);

    if (!adminSnap.exists()) return { isLoggedIn: false };

    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();
    const secretCode = formData.get("code")?.toString().trim();

    if (
      email !== adminSnap.data().email ||
      password !== adminSnap.data().password ||
      secretCode !== adminSnap.data().secret_code
    )
      return { isLoggedIn: false };

    const generatedToken = adminSnap.data().token;
    await handleCookies("set", "token", generatedToken);

    return { isLoggedIn: true };
  } catch (error) {
    throw new Error();
  }
};

export const handleCookies = async (
  method: string,
  name?: string,
  setItem?: string
): Promise<string | boolean> => {
  // This method is used to store, get, delete items in cookiess
  try {
    if (method === "get" && name !== undefined) {
      const cookieData = cookies().get(name);
      if (!cookieData) return false;
      const data = cookieData.value;
      return data;
    }
    if (method === "set" && setItem !== undefined && name !== undefined) {
      cookies().set(name, setItem);
      return true;
    }

    if (method === "delete" && name !== undefined) {
      const data = cookies().get(name);
      if (!data) return false;
      cookies().delete(name);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const handleUserSignout = async (): Promise<boolean> => {
  try {
    await handleCookies("delete", "USER_ID");

    return true;
  } catch (error) {
    return false;
  }
};

export const verifyAdminToken = async (): Promise<string> => {
  try {
    const adminRef = doc(db, "admin", "admin_access");
    const adminSnap = await getDoc(adminRef);

    if (adminSnap.exists()) {
      const response = adminSnap.data();

      const token = response.token;

      return token;
    } else {
      return "error";
    }
  } catch (error) {
    throw new Error();
  }
};
