import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="h-full w-full bg-gray-100 dark:bg-black py-10 flex flex-col gap-7 items-center justify-center"
    >
      <h2 className="text-blue-800 dark:text-white text-[30px] font-[500] border-b-2 border-blue-800 px-5 pb-2">
        ABOUT ME
      </h2>

      <div className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-full p-5 bg-gray-200 hover:bg-gray-300 dark:bg-[#272727] hover:dark:bg-[#1a1a1a] rounded-md flex flex-col gap-5 justify-center cursor-pointer transition-all duration-500">
        <p className="text-black dark:text-white text-[14px] font-[400]">
          👋 Hi, I&apos;m Emmanuel, a results driven software engineer with
          multiple years of experience and a proven track record in developing
          robust and scalable software solutions. Specialized expertise in
          fullstack development.
          <br />
          <br />
          🚀 I&apos;ve built different software application in the Financial,
          E-commerce, Social Media Industry while looking to contribute and gain
          more experience in other industries, I deliver innovative solutions
          that drive operational efficiency and enhance user experiences.
          <br />
          <br />
          🤝 Collaboration is a key strength of mine. I thrive in team
          environments, valuing diverse perspectives and actively contributing
          to a collective effort. My collaborative approach extends to
          cross-functional teams, where I appreciate the synergy of combining
          technical expertise with insights from other disciplines to achieve
          holistic solutions.
          <br />
          <br />
          🎨 When I&apos;m not coding, you&apos;ll find me exploring
          the latest UI trends, enjoying a cup of coffee and playing football.
          Let&apos;s connect, collaborate, and turn your aspirations into a
          tangible reality!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
