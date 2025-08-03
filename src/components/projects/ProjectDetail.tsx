import { Badge } from "~apps/components/badges/Badge";
import type { Project } from "~apps/constants/projects";
import { DemoItem } from "./DemoItem";
import { Row } from "./Row";

export const ProjectDetail = ({ project }: { project: Project }) => {
  return (
    <div className="md:px-12">
      <h3 className="text-l md:text-2xl font-semibold text-color-default mb-9 text-center">
        {project.title}
      </h3>
      <div className="space-y-10">
        <Row subTitle="Overview">
          <p className="description">{project.description}</p>
          <div className="mt-4 flex gap-2">
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
