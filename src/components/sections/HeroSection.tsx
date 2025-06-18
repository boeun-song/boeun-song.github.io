import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const HeroSection = () => {
  const [cursor, setCursor] = useState(true);

  const [text] = useTypewriter({
    words: ["Boeun Song | Frontend Engineer Focused on Performance & UX"],
    loop: 1,
    onLoopDone: () => setCursor(false),
  });
  
  return (
    <div className="px-20">
      <h3 className="animate-typewriter text-4xl font-semibold text-gray-800 ">
        {text}
        {cursor && <Cursor />}
      </h3>

      <p className="text-lg text-gray-700 text-left mt-10 leading-relaxed">
        I’m a frontend engineer with over three years of experience building
        scalable, user-centric interfaces for high-traffic and data-driven
        applications. <br />
        Most recently at 29CM —a leading Korean fashion commerce platform
        serving 1.7 million monthly users— I partnered across multiple squads to
        streamline checkout conversion, accelerate page performance, unify
        analytics, and deliver robust admin tools.
        <br />
        Earlier at TestWorks -AI company, I developed front-end modules for AI-powered image
        and video data collection and maintained the corporate website.
        <br />
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
