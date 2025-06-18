import type { PropsWithChildren } from "react";

export const BottomSheet = ({ children }: PropsWithChildren) => {
  return <div className="bg-white absolute rounded-t-3xl">{children}</div>;
};
