"use client";

import { FULL_NAME } from "@/constants";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-black h-[90vh] xl:pb-24 lg:pb-[200px] flex-1 flex flex-col lg:flex-row justify-between lg:items-center xl:items-start gap-5">
      <div className="mt-[150px] ml-[10px] sm:ml-[20px] md:ml-[50px] lg:ml-[100px] xl:ml-[200px] flex flex-col md:gap-2 gap-3">
        <h3 className="text-blue-600 font-bold text-[35px] sm:text-[40px] md:text-[80px] lg:text-[50px]">
          HI!
        </h3>
        <h4 className="text-[20px] sm:text-[35px] md:text-[50px] lg:text-[30px] font-[450] mt-2">
          My name is{" "}
          <span className="text-blue-500 font-[600]">{FULL_NAME}</span>
        </h4>
        <p className="text-black dark:text-white text-[14px] sm:text-[20px] md:text-[25px] lg:text-[15px] font-[300] w-[85%] sm:w-[80%] md:w-[550px] lg:w-[480px]">
          I&apos;m a software engineer turning creative ideas into functioning
          applications. I use code to solve problems efficiently.
        </p>
        <a
          href="/assets/documents/Taiwo Emmanuel Resume.pdf"
          target="_blank"
          className="w-fit h-fit px-14 sm:px-20 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-3 rounded-md bg-blue-800 hover:bg-blue-900 text-white text-center mt-5"
        >
          My Resume
        </a>
      </div>

      <div className="hidden lg:inline lg:mt-[20px] md:mr-[50px] lg:mr-[100px] xl:mr-[200px]">
        <Image
          src="/assets/images/hero-bg.png"
          width={1000}
          height={500}
          alt="hero image"
          className="xl:max-w-[600px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
