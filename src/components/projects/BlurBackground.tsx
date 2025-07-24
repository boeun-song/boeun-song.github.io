import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const BlurBackground = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });
  const [isMobile, setIsMobile] = useState(false);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["rgba(255,255,255,0.0)", "rgba(0, 0, 0, 0.7)"]
  );

  const blur = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["blur(0px)", "blur(3px)"]
  );

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) {
    return null;
  }
  return (
    <>
      <div
        ref={scrollRef}
        className="h-screen absolute top-0 left-0 w-full pointer-events-none"
      />

      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none"
        style={{
          backgroundColor,
          backdropFilter: blur,
          WebkitBackdropFilter: blur,
        }}
      />
    </>
  );
};
