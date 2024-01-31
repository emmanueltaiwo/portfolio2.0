"use client";

import React from "react";
import { useFormState } from "react-dom";
import { handleLoginUser } from "@/services/auth";
import { useRouter } from "next/navigation";

const initialState = {
  isLoggedIn: false,
};

const LoginForm = () => {
  const router = useRouter();

  const loginUser = async (prevState: AuthResponse, formData: FormData) => {
    try {
      const login = await handleLoginUser(formData, prevState);

      if (!login.isLoggedIn) {
        router.push("/");
      }

      router.push("/admin");
      return login;
    } catch (error) {
      throw new Error();
    }
  };

  const [state, formAction] = useFormState(loginUser, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 w-[95%] lg:w-[50%] mx-auto bg-gray-200 dark:bg-[#1c1c1c] my-auto p-5 md:p-10 rounded-lg"
    >
      <h1 className="text-black dark:text-white text-[30px] font-[600]">
        Login
      </h1>

      <div className="flex flex-col gap-4 w-full">
        <label
          htmlFor="email"
          className="text-black dark:text-white font-[400] text-[14px]"
        >
          Enter E-mail Address:
        </label>
        <input
          type="email"
          placeholder="Enter Email Address"
          name="email"
          required
          className="w-full p-4 rounded-[10px] border-2 border-black dark:border-white text-black dark:text-white placeholder:text-black dark:placeholder:text-white font-[400] text-[14px] bg-transparent outline-none"
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <label
          htmlFor="password"
          className="text-black dark:text-white font-[400] text-[14px]"
        >
          Enter Password:
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          className="w-full p-4 rounded-[10px] border-2 border-black dark:border-white text-black dark:text-white placeholder:text-black dark:placeholder:text-white font-[400] text-[14px] bg-transparent outline-none"
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <label
          htmlFor="password"
          className="text-black dark:text-white font-[400] text-[14px]"
        >
          Enter Secret Code:
        </label>
        <input
          type="password"
          placeholder="Enter Secret Code"
          name="code"
          required
          className="w-full p-4 rounded-[10px] border-2 border-black dark:border-white text-black dark:text-white placeholder:text-black dark:placeholder:text-white font-[400] text-[14px] bg-transparent outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full p-4 rounded-[10px] bg-[#1c1c1c] hover:bg-[#141414] dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-black font-[400] text-[16px]"
      >
        Login
      </button>

      {state.isLoggedIn ? (
        <p className="text-green-600 text-[17px] font-[400]">
          You&apos;ve Logged in Successfully
        </p>
      ) : (
        <p className="text-red-600 text-[17px] font-[400]">Access Denied</p>
      )}
    </form>
  );
};

export default LoginForm;
