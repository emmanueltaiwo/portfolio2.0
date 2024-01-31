"use client";

import { deleteExistingProject } from "@/services/projects";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const DeleteProject = () => {
  const [projectId, setProjectId] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await deleteExistingProject(projectId);

    if (!response) {
      alert("Something went wrong");
      return;
    }
    alert("Project Deleted Successfully");
    setProjectId("");
  };

  return (
    <section className="flex flex-col gap-5 w-[95%] lg:w-[50%] mx-auto bg-gray-200 dark:bg-[#1c1c1c] my-auto p-5 md:p-10 rounded-lg">
      <h1 className="text-black dark:text-white text-[30px] font-[600]">
        Delete Project
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="email"
            className="text-black dark:text-white font-[400] text-[14px]"
          >
            Enter Project Id:
          </label>
          <Input
            type="text"
            placeholder="Enter Project Id"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
          />
        </div>

        <Button type="submit">Delete Skill</Button>
      </form>
    </section>
  );
};

export default DeleteProject;
