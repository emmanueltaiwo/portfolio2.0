"use client";

import Image from "next/image";

const SkillsSection = ({ skills }: { skills: SkillsList[] }) => {
  return (
    <section className="bg-white dark:bg-black mt-[10vh] h-[90vh] max-h-full w-full flex flex-col gap-5">
      <div className="mt-10 w-full flex flex-col gap-3 max-w-7xl mx-auto items-center justify-center">
        <h2 className="text-black dark:text-white text-[30px] md:text-[50px] lg:text-[60px] font-[600]">
          {"<Skills />"}
        </h2>
        <p className="text-black dark:text-white text-[13px] font-[300] w-[90%] sm:w-[70%] md:w-[430px] text-center mx-auto">
          These are my development toolkit, where I leverage a variety of tools
          and programming languages to create innovative solutions.
        </p>
        <ul className="w-[90%] sm:w-full mx-auto place-items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-5 sm:gap-10 md:gap-10 lg:gap-6 xl:gap-3 mt-5">
          {skills
            .toSorted((a, b) => parseInt(a.id) - parseInt(b.id))
            .map((item) => (
              <li
                key={item.id}
                className="w-[150px] h-[150px] bg-gray-100 hover:bg-gray-200 dark:bg-[#1d1d1d] hover:dark:bg-[#1a1a1a] p-3 rounded-md flex flex-col gap-5 items-center justify-center cursor-pointer transition-all duration-500"
              >
                <Image
                  src={item.logo}
                  width={50}
                  height={50}
                  alt={item.name}
                  className={`${item.isDark === "true" && "dark:invert"}`}
                />
                <p className="text-black dark:text-white font-[500] text-[16px] text-center">
                  {item.name}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
