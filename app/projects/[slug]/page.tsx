import Image from "next/image";
import TerminalIcon from "@mui/icons-material/Terminal";
import { fetchAllProjects } from "@/services/projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { redirect } from "next/navigation";

const Project = async ({ params }: { params: { slug: string } }) => {
  const allProjects = await fetchAllProjects();
  const currentProject = allProjects.find(
    (project) => project.id === params.slug
  );

  if (!currentProject) {
    redirect("/projects");
  }

  return (
    <main className="h-full w-full bg-white dark:bg-black mt-[10vh] py-10">
      <div className="mx-5 md:mx-0 md:ml-[50px] lg:ml-[100px] xl:ml-[200px] flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <h1 className="text-[25px] md:text-[50px] text-black dark:text-white font-[600]">
            {currentProject.title}
          </h1>

          <div className="h-5 border-l-[1px] ml-2 border-black dark:border-white" />

          <a className="ml-2" href={currentProject.githubRepo} target="_blank">
            <GitHubIcon className="dark:text-white text-black" />
          </a>

          <a href={currentProject.liveLink} target="_blank">
            <OpenInNewRoundedIcon className="dark:text-white text-black" />
          </a>
        </div>

        <Image
          src={currentProject.coverImg}
          width={1000}
          height={1000}
          alt={currentProject.title}
          className="rounded-lg w-full md:w-[90%] xl:w-[80%]"
        />

        <h2 className="text-blue-800 dark:text-white text-[30px] font-[500] border-b-2 border-blue-800 px-5 pb-2 w-fit mt-5">
          FEATURES
        </h2>

        <ul className="w-full md:w-[90%] xl:w-[80%] h-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {currentProject.features.map((feature) => (
            <li
              key={feature.id}
              className="w-full h-fit py-5 bg-gray-300 hover:bg-gray-400 dark:bg-[#1d1d1d] hover:dark:bg-[#1a1a1a] p-3 rounded-md flex gap-5 items-center justify-center cursor-pointer transition-all duration-500"
            >
              <TerminalIcon className="mt-1" />

              <div className="flex flex-col gap-1">
                <h4 className="text-black dark:text-white font-[500] text-[19px]">
                  {feature.title}
                </h4>
                <p className="text-black dark:text-white font-[300] text-[14px]">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="text-blue-800 dark:text-white text-[20px] md:text-[30px] font-[500] border-b-2 border-blue-800 px-5 pb-2 w-fit mt-5">
          CHALLENGES & SOLUTIONS
        </h2>
        <p className="text-black dark:text-white font-[300] text-[14px] w-full md:w-[90%] xl:w-[80%]">
          {currentProject.challengesAndSolutions}
        </p>

        <h2 className="text-blue-800 dark:text-white text-[20px] md:text-[30px] font-[500] border-b-2 border-blue-800 px-5 pb-2 w-fit mt-5">
          RESULT
        </h2>
        <p className="text-black dark:text-white font-[300] text-[14px] w-full md:w-[90%] xl:w-[80%]">
          {currentProject.result}
        </p>
      </div>
    </main>
  );
};

export default Project;
