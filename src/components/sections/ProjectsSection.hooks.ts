import { useEffect, useState } from "react";
import type { Project } from "~apps/constants/projects";

export const useSelectProject = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleUnselectProject();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleSelectProject = (project: Project) => setSelected(project);
  const handleUnselectProject = () => setSelected(null);

  return {
    selected,
    handleSelectProject,
    handleUnselectProject,
  };
};
