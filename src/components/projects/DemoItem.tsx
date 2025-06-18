import clsx from "clsx";
import type { DemoItem as DemoItemType } from "~apps/constants/projects";

export const DemoItem = ({ item }: { item: DemoItemType }) => {
  const getMediaClass = (size: "sm" | "md" | "lg" = "md") =>
    clsx(
      "rounded-lg mb-5 mx-auto shadow-[0_4px_10px_0_rgba(0,0,0,0.1)]",
      {
        sm: "w-[350px]",
        md: "w-[650px]",
        lg: "w-[1000px]",
      }[size]
    );

  return (
    <div className="flex flex-col items-center text-center">
      {item.type === "video" && (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          className={getMediaClass(item.size)}
        />
      )}
      {item.type === "image" && (
        <img
          src={item.src}
          alt={item.type}
          className={getMediaClass(item.size)}
        />
      )}
      {item.type === "component" && item.component}
      {typeof item.description === "string" ? (
        <p className="description">
          {item.description}
        </p>
      ) : (
        item.description
      )}
    </div>
  );
};
