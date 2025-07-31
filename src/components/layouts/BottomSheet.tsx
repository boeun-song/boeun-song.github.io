import type { PropsWithChildren } from "react";

export const BottomSheet = ({ children }: PropsWithChildren) => {
  return <div className="bg-white/75 relative z-5 rounded-t-3xl">{children}</div>;
};
