import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const HeroSection = () => {
  const [cursor, setCursor] = useState(true);

  const [text] = useTypewriter({
    words: ["Boeun Song | Frontend Engineer Focused on Performance & UX"],
    loop: true,
    onLoopDone: () => setCursor(false),
  });

  return (
    <div className="px-5 md:px-20">
      <h3 className="animate-typewriter text-xl md:text-4xl font-semibold text-gray-600 h-[50px]">
        {text}
        {cursor && <Cursor />}
      </h3>

      <p className="text-sm md:text-lg text-color-default text-left mt-5 leading-relaxed">
        Hi, I’m a frontend engineer with over three years of experience building
        scalable, user-centric interfaces for high-traffic and data-driven
        applications. 
        
        
        <br /> Known for a strong sense of ownership, I consistently deliver
        projects on time and proactively surface and resolve unexpected
        challenges.
        <br />I thrive in cross-functional environments—working closely with
        designers, backend engineers, data teams, and product managers—to drive
        measurable outcomes, ensure clean UI, and create exceptional user
        experiences.
      </p>
    </div>
  );
};
