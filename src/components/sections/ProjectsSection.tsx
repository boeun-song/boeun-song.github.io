import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "~apps/components/projects/ProjectCard";
import { ProjectDetail } from "~apps/components/projects/ProjectDetail";
import { Modal } from "~apps/components/modals/Modal";
import { useSelectProject } from "~apps/components/sections/ProjectsSection.hooks";
import { projects } from "~apps/constants/projects";
import { ContactSection } from "~apps/components/sections/ContactSection";

export const ProjectsSection = () => {
  const { selected, handleSelectProject, handleUnselectProject } =
    useSelectProject();

  const stickyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-white absolute rounded-t-3xl">
      <motion.div
        ref={stickyRef}
        style={{ y, opacity }}
        className="sticky top-0 z-20 bg-white/90 backdrop-blur p-4 shadow-md rounded-3xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6">📁 My Projects</h2>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index}
            project={project}
            onClick={() => handleSelectProject(project)}
          />
        ))}
      </div>
      <ContactSection/>
      {selected && (
        <Modal onClose={() => handleUnselectProject()}>
          <ProjectDetail project={selected} />
        </Modal>
      )}
    </div>
  );
};
