"use client";

import { deleteExistingSkill } from "@/services/skills";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const DeleteSkill = () => {
  const [skillId, setSkillId] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await deleteExistingSkill(skillId);

    if (!response) {
      alert("Something went wrong");
      return;
    }
    alert("Skill Deleted Successfully");
    setSkillId("");
  };

  return (
    <section className="flex flex-col gap-5 w-[95%] lg:w-[50%] mx-auto bg-gray-200 dark:bg-[#1c1c1c] my-auto p-5 md:p-10 rounded-lg">
      <h1 className="text-black dark:text-white text-[30px] font-[600]">
        Delete Skill
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="email"
            className="text-black dark:text-white font-[400] text-[14px]"
          >
            Enter Skill Id:
          </label>
          <Input
            type="text"
            placeholder="Enter Skill Id"
            value={skillId}
            onChange={(e) => setSkillId(e.target.value)}
          />
        </div>

        <Button type="submit">Delete Skill</Button>
      </form>
    </section>
  );
};

export default DeleteSkill;
