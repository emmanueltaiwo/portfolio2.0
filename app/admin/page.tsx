"use client";

import React, { useState, useEffect } from "react";
import LoginForm from "@/components/admin/LoginForm";
import { handleCookies, verifyAdminToken } from "@/services/auth";
import { useRouter } from "next/navigation";
import SkillsSection from "@/components/SkillsSection";
import AddSkill from "../../components/admin/AddSkill";
import UpdateSkill from "@/components/admin/UpdateSkill";
import DeleteSkill from "@/components/admin/DeleteSkill";
import AddProject from "@/components/admin/AddProject";
import ProjectsSection from "@/components/ProjectsSection";
import DeleteProject from "@/components/admin/DeleteProject";
import UpdateProject from "@/components/admin/UpdateProject";
import { fetchAllProjects } from "@/services/projects";

const Admin = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [projectsFetched, setProjectsFetched] = useState<boolean>(false);

  useEffect(() => {
    const redirect = async () => {
      try {
        const token = await handleCookies("get", "token");
        if (token === false || typeof token !== "string") {
          setIsLoggedIn(false);
          return;
        }

        const realToken = await verifyAdminToken();
        if (token !== realToken) {
          setIsLoggedIn(false);
          return;
        }

        router.push("/admin");
        setIsLoggedIn(true);

        await fetchAllProjects();
        setProjectsFetched(true);
      } catch (errror) {
        throw new Error();
      }
    };

    redirect();
  }, [router]);

  return (
    <main
      className={`${
        !isLoggedIn && "h-screen flex items-center justify-center"
      } ${isLoggedIn && "bg-[#e5e5e58f] dark:bg-[#0f0f0fa3]"}`}
    >
      {!isLoggedIn ? (
        <LoginForm />
      ) : (
        <section className="py-5">
          <h1 className="text-black dark:text-white text-[30px] font-[500] text-center py-10 underline">
            ADMIN PANEL
          </h1>
          <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex flex-col lg:flex-row gap-5 items-center lg:items-start justify-center">
              <AddSkill />
              <UpdateSkill />
            </div>
            <DeleteSkill />
            <SkillsSection />
          </div>

          <hr className="border-2 my-10" />

          <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex flex-col lg:flex-row gap-5 items-center lg:items-start justify-center">
              <AddProject />
              <UpdateProject />
            </div>
            <DeleteProject />
            {projectsFetched && <ProjectsSection />}
          </div>
        </section>
      )}
    </main>
  );
};

export default Admin;
