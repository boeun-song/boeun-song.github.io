import { BlurBackground } from "~apps/components/projects/BlurBackground";
import { HeroSection } from "~apps/components/sections/HeroSection";
import { ProjectsSection } from "~apps/components/sections/ProjectsSection";
import { TechStackSection } from "~apps/components/sections/TechStackSection";
import { BottomSheet } from "./components/layouts/BottomSheet";
import { OthersSection } from "./components/sections/OthersSection";
import { ContactSection } from "./components/sections/ContactSection";

export default function App() {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-b from-white via-slate-100 to-white text-gray-900  py-12">
      <HeroSection />
      <BlurBackground />
      <TechStackSection />
      <BottomSheet>
        <ProjectsSection />
        <OthersSection />
        <ContactSection />
        <div
          className="absolute inset-x-0 bottom-0 h-40
                      bg-gradient-to-t from-gray-300 to-transparent pointer-events-none"
        />
      </BottomSheet>
    </main>
  );
}
