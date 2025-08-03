import { HeroSection } from "~apps/components/sections/HeroSection";
import { ProjectsSection } from "~apps/components/sections/ProjectsSection";
import { TechStackSection } from "~apps/components/sections/TechStackSection";
import { WaterDropCursor } from "./components/cursor/WaterDropCursor";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { OthersSection } from "./components/sections/OthersSection";
import { WaveBackground } from "./components/sections/WaveBackground";

export default function App() {
  return (
    <main className="text-gray-900 md:min-h-screen">
      <WaterDropCursor />
      <section className="relative w-screen h-full">
        <div className="absolute inset-0 z-[-10] w-full">
          <WaveBackground />
        </div>

        <div className="relative inset-0 z-5 h-full py-13 md:py-20 flex flex-col gap-10">
          <HeroSection />
          <TechStackSection />
        </div>
      </section>
      <ExperienceSection />
      <ProjectsSection />
      <OthersSection />
      <ContactSection />
    </main>
  );
}
