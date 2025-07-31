import { HeroSection } from "~apps/components/sections/HeroSection";
import { ProjectsSection } from "~apps/components/sections/ProjectsSection";
import { TechStackSection } from "~apps/components/sections/TechStackSection";
import { BottomSheet } from "./components/layouts/BottomSheet";
import { ContactSection } from "./components/sections/ContactSection";
import { OthersSection } from "./components/sections/OthersSection";
import { WaveBackground } from "./components/sections/WaveBackground";
import { WaterDropCursor } from "./components/cursor/WaterDropCursor";

export default function App() {
  return (
    <main className="text-gray-900 md:min-h-screen">
      <WaterDropCursor />
      <section className="relative w-screen min-h-screen h-full">
        <div className="absolute inset-0 z-0 w-full">
          <WaveBackground />
        </div>

        <div className="relative inset-0 z-5 min-h-screen h-full py-20 flex flex-col justify-between">
          <HeroSection />
          <TechStackSection />
        </div>
      </section>

      <BottomSheet>
        <ProjectsSection />
        <OthersSection />
        <ContactSection />
      </BottomSheet>
    </main>
  );
}
