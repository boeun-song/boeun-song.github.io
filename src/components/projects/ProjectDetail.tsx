import { Badge } from "~apps/components/badges/Badge";
import type { Project } from "~apps/constants/projects";
import { DemoItem } from "./DemoItem";
import { Row } from "./Row";

export const ProjectDetail = ({ project }: { project: Project }) => {
  return (
    <div className="text-gray-900 px-4 sm:px-8 md:px-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-9 text-center">
        {project.title}
      </h2>
      <div className="space-y-10">
        <Row subTitle="Overview">
          <p className="description">{project.description}</p>
          <div className="mt-5 flex gap-2">
            {project.tech.map((stack) => (
              <Badge label={stack} key={stack} />
            ))}
          </div>
        </Row>
        {project.impacts && (
          <Row subTitle="Impacts">
            <p className="description">{project.impacts}</p>
          </Row>
        )}

        <Row subTitle="Details">
          <div className="flex flex-col gap-25 mt-5">
            {project.demo?.map((item, idx) => (
              <DemoItem item={item} key={idx} />
            ))}
          </div>
        </Row>
      </div>
    </div>
  );
};
