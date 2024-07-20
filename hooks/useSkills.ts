"use client";

import { useState, useEffect } from "react";
import { fetchAllSkils } from "@/services/skills";

const useSkills = () => {
  const [skills, setSkills] = useState<SkillsList[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSkills = async () => {
      setIsLoading(true);
      try {
        const response = await fetchAllSkils();
        setSkills(response);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error();
      }
    };
    fetchSkills();
  }, []);

  return { skills, isLoading };
};

export default useSkills;
