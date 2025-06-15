import { Badge } from "~apps/components/badges/Badge";
import { techStack } from "~apps/constants/techStack";

const techCategoryClass = "flex flex-wrap justify-center gap-2";
const techLabelClass = "font-semibold w-full text-center";

export const TechStackSection = () => {
  const { frontend, eventTracking, collaboration } = techStack;
  return (
    <div className="flex flex-col items-center gap-4 mt-8 mb-12 text-sm text-gray-600">
      <div className={techCategoryClass}>
        <span className={techLabelClass}>Frontend</span>

        {frontend.map((tech) => (
          <Badge key={tech} label={tech} />
        ))}
      </div>
      <div className={techCategoryClass}>
        <span className={techLabelClass}>Event Tracking</span>
        {eventTracking.map((tool) => (
          <Badge key={tool} label={tool} />
        ))}
      </div>
      <div className={techCategoryClass}>
        <span className={techLabelClass}>Collaboration</span>
        {collaboration.map((tool) => (
          <Badge key={tool} label={tool} />
        ))}
      </div>
    </div>
  );
};
