"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ resumeLink }: { resumeLink: string }) => {
  return (
    <section className="bg-white dark:bg-black mt-[10vh] h-[90vh] max-h-full w-full flex flex-col gap-5">
      <div className="mt-20 flex flex-col gap-3  max-w-7xl mx-auto items-center justify-center">
        <h1 className="text-black dark:text-white text-[30px] md:text-[50px] lg:text-[90px] font-[600]">
          Software Engineer
        </h1>
        <h3 className="lg:w-[550px] mx-auto text-center text-[14px] font-[400] text-gray-700 dark:text-gray-300">
          {
            "{ JavaScript, Typescript, React, Next.js, Tailwind, React Native, Node.js ... }"
          }
        </h3>
        <p className="text-black dark:text-white text-[13px] font-[300] w-[90%] sm:w-[70%] md:w-[430px] text-center mx-auto">
          I&apos;m a Results-driven Software Engineer with multiple years of
          experience and a proven track record in developing robust and scalable
          software solutions.
        </p>

        <div className="mt-5 flex items-center gap-10">
          <Link
            href="/projects"
            className="text-white dark:text-black px-8 py-3 bg-[#50a9f7] hover:bg-[#2975b8] transition-all duration-500 rounded-full"
          >
            See my projects
          </Link>

          <a
            href={resumeLink}
            target="_blank"
            className="text-[15px] font-[400] text-[#50a9f7] border-b-[1px] hover:text-[#2975b8] hover:border-[#2975b8] border-[#50a9f7] pb-1 px-1"
          >
            My Resume
          </a>
        </div>

        <Image
          src="/assets/images/hero.jpg"
          width={1000}
          height={500}
          alt="hero image"
          className="xl:max-w-[600px] w-[450px] h-[300px] rounded-[50px] mt-10"
        />
      </div>

      {/*  className="bg-gray-100 dark:bg-black h-[90vh] xl:pb-24 lg:pb-[200px] flex-1 flex flex-col lg:flex-row justify-between lg:items-center xl:items-start gap-5" */}
      {/* <div className="mt-[150px] ml-[10px] sm:ml-[20px] md:ml-[50px] lg:ml-[100px] xl:ml-[200px] flex flex-col md:gap-2 gap-3">
        <h3 className="text-blue-600 font-bold text-[35px] sm:text-[40px] md:text-[80px] lg:text-[50px]">
          HI!
        </h3>
        <h4 className="text-[22px] sm:text-[35px] md:text-[50px] lg:text-[30px] font-[450] mt-2">
          My name is{" "}
          <span className="text-blue-500 font-[600]">{FULL_NAME}</span>
        </h4>
        <p className="text-black dark:text-white text-[14px] sm:text-[20px] md:text-[25px] lg:text-[15px] font-[300] w-[90%] sm:w-[80%] md:w-[550px] lg:w-[480px]">
          I&apos;m a software engineer specialising in building software
          solutions. I use code to solve problems efficiently.
        </p>
        <a
          href={resumeLink}
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
      </div> */}
    </section>
  );
};

export default HeroSection;
