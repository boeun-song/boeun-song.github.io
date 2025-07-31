import { useEffect, useState } from "react";

export const WaterDropCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // 실시간 마우스 위치 저장
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "rgba(255, 255, 150, 0.5)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
        pointerEvents: "none",
        mixBlendMode: "screen",
        zIndex: 9999,
      }}
    />
  );
};
