"use client";

import React, { useState } from "react";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";
import Image from "next/image";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import FlipMove from "react-flip-move";

const ProjectsSection = ({ projects }: { projects: ProjectList[] }) => {
  const [batch, setBatch] = useState<number[]>([0, 2]);

  const totalProjects = projects.length;
  const totalBatches = Math.ceil(totalProjects / (batch[1] - batch[0]));

  const handleBatchChange = (index: number) => {
    const start = index * (batch[1] - batch[0]);
    setBatch([start, start + (batch[1] - batch[0])]);
  };

  return (
    <section className="bg-white dark:bg-black mt-[10vh] h-[90vh] max-h-full w-full flex flex-col gap-5">
      <div className="mt-10 w-full flex flex-col gap-3 max-w-7xl mx-auto items-center justify-center">
        <h2 className="text-black dark:text-white text-[30px] md:text-[50px] lg:text-[60px] font-[600]">
          {"<Projects />"}
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
                  className="lg:w-[450px] xl:w-[500px] max-h-[300px] h-[300px] rounded-lg w-full"
                />

                <div className="flex items-center gap-2">
                  <Link
                    href={`/projects/${item.id}`}
                    className="flex gap-3 items-center no-underline"
                  >
                    <h3 className="text-[20px] font-[700] dark:text-white text-black">
                      {item.title}
                    </h3>
                  </Link>

                  <div className="h-5 border-l-[1px] ml-2 border-black dark:border-white" />

                  <a className="ml-2" href={item.githubRepo} target="_blank">
                    <GitHubIcon className="dark:text-white text-black" />
                  </a>

                  <a href={item.liveLink} target="_blank">
                    <OpenInNewRoundedIcon className="dark:text-white text-black" />
                  </a>
                </div>
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
      </div>
    </section>
  );
};

export default ProjectsSection;
