"use client";

import { addNewSkill } from "@/services/skills";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const AddSkill = () => {
  const [formData, setFormData] = useState<SkillsList>({
    id: "",
    name: "",
    logo: "",
    isDark: "false",
  });

  const handleChange = (field: keyof SkillsList, value: string | boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: field === "isDark" ? String(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await addNewSkill(formData);

    if (!response) {
      alert("Something went wrong");
      return;
    }
    alert("Skill Added Successfully");
    setFormData({
      id: "",
      name: "",
      logo: "",
      isDark: "false",
    });
  };

  return (
    <section className="flex flex-col gap-5 w-[95%] lg:w-[45%] bg-gray-200 dark:bg-[#1c1c1c] p-5 md:p-10 rounded-lg">
      <h1 className="text-black dark:text-white text-[30px] font-[600]">
        Add Skill
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="w-full flex flex-col md:flex-row items-center gap-5">
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
              value={formData.id}
              onChange={(e) => handleChange("id", e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="password"
              className="text-black dark:text-white font-[400] text-[14px]"
            >
              Enter Skill Name:
            </label>
            <Input
              type="text"
              placeholder="Enter Skill Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="password"
            className="text-black dark:text-white font-[400] text-[14px]"
          >
            Enter Skill Logo:
          </label>
          <Input
            type="text"
            placeholder="Enter Skill Logo"
            value={formData.logo}
            onChange={(e) => handleChange("logo", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="isDark"
            className="text-black dark:text-white font-[400] text-[14px]"
          >
            Is Skill Logo Dark:
          </label>
          <select
            value={formData.isDark}
            onChange={(e) => handleChange("isDark", e.target.value === "true")}
            required
            className="w-full p-4 rounded-[10px] border-2 border-black dark:border-white text-black dark:text-white placeholder:text-black dark:placeholder:text-white font-[400] text-[14px] bg-transparent outline-none"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <Button type="submit">Add Skill</Button>
      </form>
    </section>
  );
};

export default AddSkill;
