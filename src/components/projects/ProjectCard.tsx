import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import React, { useRef } from "react";
import type { Project } from "~apps/constants/projects";

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

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={(node) => {
        cardRef.current = node;
        ref.current = node;
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.04 }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="p-4 rounded-xl border border-white/20 shadow-md cursor-pointer hover:shadow-xl h-[480px]"
    >
      <div className="w-full h-[300px] rounded-md pd-2 flex gap-2 justify-center align-middle">
        {project.previews.map((preview) => {
          return (
            <img
              key={preview}
              src={preview}
              alt="preview"
              className="w-auto h-auto"
            />
          );
        })}
      </div>
      <h2 className="text-xl font-semibold text-gray-900 m-4">
        {project.title}
      </h2>
      <p className="text-sm text-gray-600 line-clamp-3">
        {project.description}
      </p>
    </motion.div>
  );
};
