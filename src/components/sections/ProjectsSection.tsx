import { StickyTitle } from "~apps/components/layouts/StickyTitle";
import { Modal } from "~apps/components/modals/Modal";
import { ProjectDetail } from "~apps/components/projects/ProjectDetail";
import { useSelectProject } from "~apps/components/sections/ProjectsSection.hooks";
import { projects } from "~apps/constants/projects";
import { ProjectCard } from "../projects/ProjectCard";

export const ProjectsSection = () => {
  const { selected, handleSelectProject, handleUnselectProject } =
    useSelectProject();

  return (
    <section>
      <StickyTitle title="Products" />

      <div className="flex flex-col gap-8 mb-16 md:mb-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index}
            project={project}
            onClick={() => handleSelectProject(project)}
          />
        ))}
      </div>

      {selected && (
        <Modal onClose={() => handleUnselectProject()}>
          <ProjectDetail project={selected} />
        </Modal>
      )}
    </section>
  );
};
