"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchAllSkils } from "@/services/skills";

const SkillsSection = () => {
  const [skills, setSkills] = useState<SkillsList[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetchAllSkils();
        setSkills(response);
      } catch (error) {
        throw new Error();
      }
    };
    fetchSkills();
  }, []);

  return (
    <section
      id="skills"
      className="h-full w-full bg-[#e5e5e58f] dark:bg-[#0f0f0fa3] py-10 flex flex-col gap-5 items-center justify-center"
    >
      <h2 className="text-blue-800 dark:text-white text-[30px] font-[500] border-b-2 border-blue-800 px-5 pb-2">
        SKILLS
      </h2>
      <p className="text-black dark:text-white text-[14px] font-[400] w-[80%] text-center">
        These are my development toolkit, where I leverage a variety of tools
        and programming languages to create innovative solutions.
      </p>

      <ul className="w-[90%] sm:w-full md:w-[60%] mx-auto place-items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-10 md:gap-10 lg:gap-6 xl:gap-3 mt-5">
        {skills
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((item) => (
            <li
              key={item.id}
              className="w-[150px] h-[150px] bg-gray-300 hover:bg-gray-400 dark:bg-[#1d1d1d] hover:dark:bg-[#1a1a1a] p-3 rounded-md flex flex-col gap-5 items-center justify-center cursor-pointer transition-all duration-500"
            >
              <Image
                src={item.logo}
                width={50}
                height={50}
                alt={item.name}
                className={`${item.isDark === "true" && "dark:invert"}`}
              />
              <p className="text-black dark:text-white font-[500] text-[16px]">
                {item.name}
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
