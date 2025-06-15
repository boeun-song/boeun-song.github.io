import { BlurBackground } from "~apps/components/projects/BlurBackground";
import { HeroSection } from "~apps/components/sections/HeroSection";
import { ProjectsSection } from "~apps/components/sections/ProjectsSection";
import { TechStackSection } from "~apps/components/sections/TechStackSection";

export default function App() {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-b from-white via-slate-100 to-white text-gray-900  py-12">
      <BlurBackground />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
    </main>
  );
}
