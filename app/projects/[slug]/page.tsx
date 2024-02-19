"use client";

import React, { useState, useLayoutEffect } from "react";
import Image from "next/image";
import TerminalIcon from "@mui/icons-material/Terminal";
import { fetchAllProjects } from "@/services/projects";

const Project = ({ params }: { params: { slug: string } }) => {
  const [project, setProject] = useState<ProjectList[]>([]);

  useLayoutEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetchAllProjects();
        const currentProject = response.filter(
          (project) => project.id.toString() === params.slug
        );

        setProject(currentProject);
      } catch (error) {
        throw new Error();
      }
    };

    fetchProjects();
  }, [params]);

  return (
    <main className="h-full w-full bg-[#e5e5e58f] dark:bg-[#0f0f0fa3] py-10">
      {project.map((project) => (
        <div
          key={project.id}
          className="mx-5 md:mx-0 md:ml-[50px] lg:ml-[100px] xl:ml-[200px] flex flex-col gap-5"
        >
          <h1 className="text-[25px] md:text-[50px] text-black dark:text-white font-[600]">
            {project.title}
          </h1>
          <Image
            src={project.coverImg}
            width={1000}
            height={1000}
            alt={project.title}
            className="rounded-lg w-full md:w-[90%] xl:w-[80%]"
          />

          <h2 className="text-blue-800 dark:text-white text-[30px] font-[500] border-b-2 border-blue-800 px-5 pb-2 w-fit mt-5">
            FEATURES
          </h2>

          <ul className="w-full md:w-[90%] xl:w-[80%] h-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.features.map((feature) => (
              <li
                key={feature.id}
                className="w-full h-fit py-5 bg-gray-300 hover:bg-gray-400 dark:bg-[#1d1d1d] hover:dark:bg-[#1a1a1a] p-3 rounded-md flex gap-5 items-center justify-center cursor-pointer transition-all duration-500"
              >
                <TerminalIcon className="mt-1" />

                <div className="flex flex-col gap-1">
                  <h4 className="text-black dark:text-white font-[500] text-[19px]">
                    {feature.title}
                  </h4>
                  <p className="text-black dark:text-white font-[300] text-[14px]">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-blue-800 dark:text-white text-[20px] md:text-[30px] font-[500] border-b-2 border-blue-800 px-5 pb-2 w-fit mt-5">
            CHALLENGES & SOLUTIONS
          </h2>
          <p className="text-black dark:text-white font-[300] text-[14px] w-full md:w-[90%] xl:w-[80%]">
            {project.challengesAndSolutions}
          </p>

          <h2 className="text-blue-800 dark:text-white text-[20px] md:text-[30px] font-[500] border-b-2 border-blue-800 px-5 pb-2 w-fit mt-5">
            RESULT
          </h2>
          <p className="text-black dark:text-white font-[300] text-[14px] w-full md:w-[90%] xl:w-[80%]">
            {project.result}
          </p>
        </div>
      ))}
    </main>
  );
};

export default Project;
