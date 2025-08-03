import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "~apps/constants/projects";
import { Badge } from "~apps/components/badges/Badge";

export const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const cardRef = useRef<HTMLDivElement>(null);

  const { preview } = project;
  return (
    <motion.div
      ref={(node) => {
        cardRef.current = node;
        ref.current = node;
      }}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col md:flex-row gap-5 md:gap-15 md:h-[200px] py-4 px-6 md:py-7 md:px-10 bg-white/30 rounded-xl border border-white/20 shadow-md cursor-pointer hover:shadow-xl"
    >
      <div className="w-[150px] md:w-[200px] h-[150px] md:h-full shrink-0 grow-0 overflow-hidden rounded-md pd-2">
        <img
          key={preview}
          src={preview}
          alt="preview"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <h3 className="text-l md:text-l font-semibold text-color-default">
              {project.title}
            </h3>
            <span className="text-m md:text-l text-deep-blue font-semibold italic">
              {project.date}
            </span>
          </div>

          <p className="text-sm mt-2 text-gray-600 line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-2 md:mt-0 flex gap-2">
          {project.tech.map((stack) => (
            <Badge label={stack} key={stack} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
