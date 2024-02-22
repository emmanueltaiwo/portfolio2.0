import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { getResume } from "@/services/skills";

export default async function Home() {
  const resumeLink = await getResume();
  return (
    <main>
      <HeroSection resumeLink={resumeLink} />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
