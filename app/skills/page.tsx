import SkillsSection from "@/components/SkillsSection";
import { fetchAllSkils } from "@/services/skills";

const SkillsPage = async () => {
  const skills = await fetchAllSkils();
  
  return (
    <main>
      <SkillsSection skills={skills} />
    </main>
  );
};

export default SkillsPage;
