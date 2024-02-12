"use client";

import React, { useState, useEffect } from "react";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { Link } from "@mui/material";
import Image from "next/image";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import FlipMove from "react-flip-move";
import { fetchAllProjects } from "@/services/projects";

const ProjectsSection = () => {
  const [projects, setProjects] = useState<ProjectList[]>([]);
  const [batch, setBatch] = useState<number[]>([0, 2]);

  const totalProjects = projects.length;
  const totalBatches = Math.ceil(totalProjects / (batch[1] - batch[0]));

  const handleBatchChange = (index: number) => {
    const start = index * (batch[1] - batch[0]);
    setBatch([start, start + (batch[1] - batch[0])]);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetchAllProjects();
        console.log(response);
        setProjects(response);
      } catch (error) {
        throw new Error();
      }
    };
    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="h-full w-full bg-[#e5e5e58f] dark:bg-[#0f0f0fa3] py-10 flex flex-col gap-5 items-center justify-center"
    >
      <h2 className="text-blue-800 dark:text-white text-[30px] font-[500] border-b-2 border-blue-800 px-5 pb-2">
        PROJECTS
      </h2>

      <FlipMove className="w-full mx-auto flex flex-col lg:flex-row gap-10 justify-center mt-5 transition-all duration-500">
        {projects
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .slice(batch[0], batch[1])
          .map((item) => (
            <li
              key={item.id}
              className="w-[90%] mx-auto lg:mx-0 lg:w-fit flex flex-col gap-5 transition-all duration-500"
            >
              <Image
                src={item.coverImg}
                width={500}
                height={500}
                alt={item.title}
                className="lg:w-[450px] xl:w-[500px] rounded-lg w-full"
              />
              <Link
                href={`/projects/${item.id}`}
                className="flex gap-3 items-center no-underline"
              >
                <h3 className="text-[20px] font-[700] dark:text-white text-black">
                  {item.title}
                </h3>

                <OpenInNewRoundedIcon className="dark:text-white text-black" />
              </Link>

              <p className="text-[13px] font-[300] dark:text-white text-black lg:w-[430px] xl:w-[480px]">
                {item.description}
              </p>

              <div className="lg:w-[430px] xl:w-[480px] flex gap-4 items-center flex-wrap">
                {item.techStack.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-[500] text-black dark:text-gray-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </li>
          ))}
      </FlipMove>

      <div className="flex mt-5">
        {[...Array(totalBatches)].map((item, index: number) => (
          <CircleRoundedIcon
            key={item}
            onClick={() => handleBatchChange(index)}
            className={`cursor-pointer mx-2 ${
              index * (batch[1] - batch[0]) === batch[0]
                ? "text-blue-500"
                : "text-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
