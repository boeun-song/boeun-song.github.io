type TechStack = "languagesAndFrameworks" | "styling" | "libraries" | "collaboration";

export const techStack: Record<TechStack, string[]> = {
  languagesAndFrameworks: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
  ],
  styling: ["CSS", "TailwindCSS", "CSS-in-JS", "Responsive Design"],
  libraries: ["Zustand", "React-query", "Three.js(Now learning)"],
  collaboration: ["Figma to Code handoff", "Peer code reviews", "Agile/Scrum", "Git"],
};
