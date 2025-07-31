import { useRef } from "react";

interface Props {
  label: string;
}

const randomColors = [
  "text-green-500",
  "text-green-800",
  "text-pink-300",
  "text-blue-700",
];

export const Badge = ({ label }: Props) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const currentColorRef = useRef<string>("");

  const handlePointerOn = () => {
    const el = spanRef.current;
    if (!el) return;

    if (currentColorRef.current) {
      el.classList.remove(currentColorRef.current);
      currentColorRef.current = "";
    }

    const random =
      randomColors[Math.floor(Math.random() * randomColors.length)];
    el.classList.add(random);
    currentColorRef.current = random;
  };

  const handlePointerOut = () => {
    const el = spanRef.current;
    if (!el) return;

    if (currentColorRef.current) {
      el.classList.remove(currentColorRef.current);
      currentColorRef.current = "";
    }
  };

  return (
    <span
      ref={spanRef}
      onPointerOver={handlePointerOn}
      onPointerOut={handlePointerOut}
      className="px-3 py-1 text-xs md:text-sm bg-white/40 rounded-full border border-white shadow-sm text--700"
    >
      {label}
    </span>
  );
};
