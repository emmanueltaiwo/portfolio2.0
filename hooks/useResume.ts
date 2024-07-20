"use client";

import { getResume } from "@/services/skills";
import { useState, useEffect } from "react";

const useResume = () => {
  const [resumeLink, setResumeLink] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      setIsLoading(true);
      try {
        const resume = await getResume();
        setResumeLink(resume);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        throw new Error(error);
      }
    };

    fetchResume();
  }, []);

  return { resumeLink, isLoading };
};

export default useResume;
