import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white dark:bg-black mt-[10vh] h-[90vh] max-h-full w-full flex flex-col gap-5">
      <div className="mt-10 w-full flex flex-col gap-3 max-w-7xl mx-auto items-center justify-center">
        <h2 className="text-black dark:text-white text-[30px] md:text-[50px] lg:text-[60px] font-[600]">
          {"<About Me />"}
        </h2>

        <div className="mt-10 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[70%] h-full p-5 border-[1px] border-slate-800 dark:border-gray-600 rounded-md flex flex-col gap-5 justify-center transition-all duration-500">
          <p className="text-black dark:text-white text-[14px] lg:text-[17px] font-[400]">
            👋 Hi, I&apos;m Emmanuel, a results driven software engineer with
            multiple years of experience and a proven track record in developing
            robust and scalable software solutions. Specialized expertise in
            fullstack development.
            <br />
            <br />
            🚀 I&apos;ve built different software application in the Financial,
            E-commerce, Social Media Industry while looking to contribute and
            gain more experience in other industries, I deliver innovative
            solutions that drive operational efficiency and enhance user
            experiences.
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
            🎨 When I&apos;m not coding, you&apos;ll find me exploring the
            latest UI trends, enjoying a cup of coffee and playing football.
            Let&apos;s connect, collaborate, and turn your aspirations into a
            tangible reality!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
