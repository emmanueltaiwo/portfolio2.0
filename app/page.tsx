import HeroSection from "@/components/HeroSection";
import { getResume } from "@/services/skills";

export default async function Home() {
  const resumeLink = await getResume();

  return (
    <main>
      <HeroSection resumeLink={resumeLink} />
    </main>
  );
}
