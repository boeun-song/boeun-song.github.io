import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const StickyTitle = ({ title }: { title: string }) => {
  const stickyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <motion.div
      ref={stickyRef}
      style={{ y }}
      className="sticky top-0 z-20 bg-white/30 backdrop-blur p-3 md:p-4 shadow-md rounded-3xl"
    >
      <h2 className="text-l md:text-xl font-semibold text-center text-color-default">{title}</h2>
    </motion.div>
  );
};
