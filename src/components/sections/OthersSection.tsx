import { others } from "~apps/constants/others";
import { StickyTitle } from "~apps/components/layouts/StickyTitle";

const titleClass = "text-md md:text-lg font-medium mb-2";
const paragraphClass = "text-sm md:text-md text-gray-600";
export const OthersSection = () => {
  return (
    <section>
      <StickyTitle title="Others" />

      <ul className="space-y-8 p-5 md:p-20">
        {others.map((item) => (
          <li key={item.title}>
            <h3 className={titleClass}>{item.title}</h3>
            <p className={paragraphClass}>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
