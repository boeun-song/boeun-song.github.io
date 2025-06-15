type TechStack = "frontend" | "eventTracking" | "collaboration";

export const techStack: Record<TechStack, string[]> = {
  frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Tailwind CSS",
    "Styled Components",
  ],
  eventTracking: ["Snowplow", "Amplitude"],
  collaboration: ["Figma", "Jira", "Notion"],
};
