import ProjectsSection from "@/components/ProjectsSection";
import { fetchAllProjects } from "@/services/projects";

const ProjectsPage = async () => {
  const projects = await fetchAllProjects();

  return (
    <main>
      <ProjectsSection projects={projects} />
    </main>
  );
};

export default ProjectsPage;
