"use server";

import { db } from "@/firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const fetchAllProjects = async (): Promise<ProjectList[]> => {
  try {
    const projects: ProjectList[] = [];
    const querySnapshot = await getDocs(collection(db, "projects"));
    querySnapshot.forEach((doc) => {
      const project = doc.data() as ProjectList;
      projects.push(project);
    });

    return projects;
  } catch (error) {
    throw new Error();
  }
};

export const addNewProject = async (project: ProjectList): Promise<boolean> => {
  try {
    const projectId = `${project.id}_${project.title.split(" ")[0]}`;
    await setDoc(doc(db, "projects", projectId), project);
    return true;
  } catch (error) {
    throw new Error();
  }
};

export const updateExistingProject = async (
  projectId: string,
  newValue: ProjectList
): Promise<boolean> => {
  try {
    const projectRef = doc(db, "projects", projectId);

    const updatedProject: ProjectList = {
      id: newValue.id,
      title: newValue.title,
      description: newValue.description,
      coverImg: newValue.coverImg,
      techStack: newValue.techStack,
      liveLink: newValue.liveLink,
      githubRepo: newValue.githubRepo,
      features: newValue.features,
      challengesAndSolutions: newValue.challengesAndSolutions,
      result: newValue.result,
    };
    await updateDoc(projectRef, updatedProject);

    return true;
  } catch (error) {
    throw new Error();
  }
};

export const deleteExistingProject = async (
  projectId: string
): Promise<boolean> => {
  try {
    await deleteDoc(doc(db, "project", projectId));
    return true;
  } catch (error) {
    throw new Error();
  }
};
