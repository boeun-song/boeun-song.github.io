import { Badge } from "~apps/components/badges/Badge";
import type { Project } from "~apps/constants/projects";
import { DemoItem } from "./DemoItem";

export const ProjectDetail = ({ project }: { project: Project }) => {
  return (
    <div className="text-gray-900 px-4 sm:px-8 md:px-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {project.title}
        </h2>
        <p className="text-l text-gray-900 leading-relaxed max-w-3xl mx-auto whitespace-pre-line text-left">
          {project.description}
        </p>
        <div className="mt-5 flex gap-2">
          {project.tech.map((stack) => (
            <Badge label={stack} key={stack} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-25 mt-7">
        {project.demo?.map((item, idx) => (
          <DemoItem item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};
