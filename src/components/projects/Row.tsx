import type { PropsWithChildren } from "react";

interface Props {
  subTitle: string;
}

export const Row = ({ subTitle, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <h3 className="sub-title text-deep-blue mt-2">{subTitle}</h3>
      {children}
    </div>
  );
};
