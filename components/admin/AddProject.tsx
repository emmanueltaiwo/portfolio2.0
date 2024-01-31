"use client";

import { addNewProject } from "@/services/projects";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const AddProject = () => {
  const [projectFeature, setProjectFeature] = useState({
    featureOne: "",
    featureTwo: "",
    featureThree: "",
  });
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    coverImg: "",
    techStackString: "",
    liveLink: "",
    githubRepo: "",
    challengesAndSolutions: "",
    result: "",
  });

  const handleFeatureChange = (field: string, value: string) => {
    setProjectFeature((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      id,
      title,
      description,
      coverImg,
      techStackString,
      liveLink,
      githubRepo,
      challengesAndSolutions,
      result,
    } = formData;

    const techStack = [...techStackString.split(",")];

    const splitFeatureOne = projectFeature.featureOne.split(",");
    const [projectOneId, projectOneTitle, projectOneDescription] =
      splitFeatureOne;
    const featureOne = {
      id: projectOneId,
      title: projectOneTitle,
      description: projectOneDescription,
    };

    const splitFeatureTwo = projectFeature.featureTwo.split(",");
    const [projectTwoId, projectTwoTitle, projectTwoDescription] =
      splitFeatureTwo;
    const featureTwo = {
      id: projectTwoId,
      title: projectTwoTitle,
      description: projectTwoDescription,
    };

    const splitFeatureThree = projectFeature.featureThree.split(",");
    const [projectThreeId, projectThreeTitle, projectThreeDescription] =
      splitFeatureThree;
    const featureThree = {
      id: projectThreeId,
      title: projectThreeTitle,
      description: projectThreeDescription,
    };

    const features = [featureOne, featureTwo, featureThree];

    const newProject: ProjectList = {
      id,
      title,
      description,
      coverImg,
      techStack,
      liveLink,
      githubRepo,
      features,
      challengesAndSolutions,
      result,
    };

    const response = await addNewProject(newProject);

    if (!response) {
      alert("Something went wrong");
      return;
    }
    alert("Project Added Successfully");
    setProjectFeature({ featureOne: "", featureTwo: "", featureThree: "" });
    setFormData({
      id: "",
      title: "",
      description: "",
      coverImg: "",
      techStackString: "",
      liveLink: "",
      githubRepo: "",
      challengesAndSolutions: "",
      result: "",
    });
  };

  return (
    <section className="flex flex-col gap-5 w-[95%] lg:w-[45%] bg-gray-200 dark:bg-[#1c1c1c] p-5 md:p-10 rounded-lg">
      <h1 className="text-black dark:text-white text-[30px] font-[600]">
        Add Project
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="projectId"
            className="text-black dark:text-white font-[400] text-[14px]"
          >
            Enter Project Id:
          </label>
          <Input
            type="text"
            placeholder="Enter Project Id"
            value={formData.id}
            onChange={(e) => handleChange("id", e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="text"
              className="text-black dark:text-white font-[400] text-[14px]"
            >
              Enter Project Name:
            </label>
            <Input
              type="text"
              placeholder="Enter Project Name"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="text"
              className="text-black dark:text-white font-[400] text-[14px]"
            >
              Enter Project Description:
            </label>
            <Input
              type="text"
              placeholder="Enter Project Description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="text"
              className="text-black dark:text-white font-[400] text-[14px]"
            >
              Enter Project Cover Image:
            </label>
            <Input
              type="text"
              placeholder="Enter Project Cover Image"
              value={formData.coverImg}
              onChange={(e) => handleChange("coverImg", e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="text"
              className="text-black dark:text-white font-[400] text-[14px]"
            >
              Enter Project Tech Stack (Seperated by commas):
            </label>
            <Input
              type="text"
              placeholder="Enter Project Tech Stack"
              value={formData.techStackString}
              onChange={(e) => handleChange("techStackString", e.target.value)}
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="text"
              className="text-black dark:text-white font-[400] text-[14px]"
            >
              Enter Project Live Link:
            </label>
            <Input
              type="text"
              placeholder="Enter Project Live Link"
              value={formData.liveLink}
              onChange={(e) => handleChange("liveLink", e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4 w-full">
            <label
              htmlFor="text"
              className="text-black dark:text-white font-[400] text-[14px]"
            >
              Enter Project Github Repository:
            </label>
            <Input
              type="text"
              placeholder="Enter Project Github Repository"
              value={formData.githubRepo}
              onChange={(e) => handleChange("githubRepo", e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="text"
            className="text-black dark:text-white font-[400] text-[14px]"
          >
            Enter Project Feature One (Seperate by commas:{" "}
            {"ID, TITLE, DESCRIPTION"}):
          </label>
          <Input
            type="text"
            placeholder="Enter Project Feature One:"
            value={projectFeature.featureOne}
            onChange={(e) => handleFeatureChange("featureOne", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="text"
            className="text-black dark:text-white font-[400] text-[14px]"
          >
            Enter Project Feature Two (Seperate by commas:{" "}
            {"ID, TITLE, DESCRIPTION"}):
          </label>
          <Input
            type="text"
            placeholder="Enter Project Feature Two:"
            value={projectFeature.featureTwo}
            onChange={(e) => handleFeatureChange("featureTwo", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="text"
            className="text-black dark:text-white font-[400] text-[14px]"
          >
            Enter Project Feature Three (Seperate by commas:{" "}
            {"ID, TITLE, DESCRIPTION"}):
          </label>
          <Input
            type="text"
            placeholder="Enter Project Feature Three:"
            value={projectFeature.featureThree}
            onChange={(e) =>
              handleFeatureChange("featureThree", e.target.value)
            }
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="text"
            className="text-black dark:text-white font-[400] text-[14px]"
          >
            Enter Project Challenges & Solutions:
          </label>
          <Input
            type="text"
            placeholder="Enter Project Challenges & Solutions"
            value={formData.challengesAndSolutions}
            onChange={(e) =>
              handleChange("challengesAndSolutions", e.target.value)
            }
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="text"
            className="text-black dark:text-white font-[400] text-[14px]"
          >
            Enter Project Result:
          </label>
          <Input
            type="text"
            placeholder="Enter Project Result"
            value={formData.result}
            onChange={(e) => handleChange("result", e.target.value)}
          />
        </div>

        <Button type="submit">Add Project</Button>
      </form>
    </section>
  );
};

export default AddProject;
