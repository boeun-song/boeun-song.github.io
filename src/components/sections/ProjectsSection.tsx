import { Modal } from "~apps/components/modals/Modal";
import { ProjectCard } from "~apps/components/projects/ProjectCard";
import { ProjectDetail } from "~apps/components/projects/ProjectDetail";
import { useSelectProject } from "~apps/components/sections/ProjectsSection.hooks";
import { projects } from "~apps/constants/projects";
import { StickyTitle } from "~apps/components/layouts/StickyTitle";

export const ProjectsSection = () => {
  const { selected, handleSelectProject, handleUnselectProject } =
    useSelectProject();

  return (
    <section>
      <StickyTitle title="Products" />

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

      {selected && (
        <Modal onClose={() => handleUnselectProject()}>
          <ProjectDetail project={selected} />
        </Modal>
      )}
    </section>
  );
};
