import { StickyTitle } from "../layouts/StickyTitle";
import { Link } from "../link/Link";

const cardWrapperClass = "flex flex-col md:flex-row group/line"
const dateClass = "text-sm md:text-md italic text-deep-blue";
const titleClass = "text-md md:text-lg font-medium mb-2 text-color-default";
const lineClass =
  "w-[50px] h-[1px] bg-[#47a299] transition-all duration-200 group-hover/line:w-[200px]";
const paragraphClass = "text-sm md:text-md text-color-default";
const linkGroup = "mt-3 flex gap-5";

export const ExperienceSection = () => {
  return (
    <section>
      <StickyTitle title="Experience" />
      <div className="p-5 md:p-20 flex flex-col gap-10">
        <div className={cardWrapperClass}>
          <div className="md:w-[300px] grow-0 shrink-0">
            <span className={dateClass}>May 2022 – Apr 2025</span>
            <div className={lineClass} />
          </div>
          <div>
            <h3 className={titleClass}>Frontend Developer | 29CM (MUSINSA)</h3>
            <p className={paragraphClass}>
              Developed and maintained core frontend features using React,
              Next.js TypeScript, and Zustand—including checkout flows, product
              detail pages, and internal admin tools—on a high-traffic commerce
              platform serving 1.7M+ monthly users. Collaborated closely with
              cross-functional squads (Payment, Platform, Partner) to ship
              performant, scalable, and maintainable interface
            </p>
            <div className={linkGroup}>
              <Link href="https://www.29cm.co.kr" siteName="website" />
              <Link
                href="https://play.google.com/store/apps/details?id=com.the29cm.app29cm&hl=en_GB&pli=1"
                siteName="android"
              />
              <Link
                href="https://apps.apple.com/us/app/29cm/id789634744"
                siteName="apple"
              />
            </div>
          </div>
        </div>
        <div className={cardWrapperClass}>
          <div className="w-[300px] grow-0 shrink-0">
            <span className={dateClass}>May 2021 – Apr 2022</span>
            <div className={lineClass} />
          </div>
          <div>
            <h3 className={titleClass}>Frontend Developer | Testworks</h3>
            <p className={paragraphClass}>
              Migrated legacy PHP-based internal tools to React and developed
              web interfaces to support AI training data workflows. Built custom
              tools for crowdsourced data collection and validation—such as O/X
              accuracy checkers and video capture modules—enabling large-scale
              human-in-the-loop annotation for emotion analysis and model
              training.
            </p>
            <div className={linkGroup}>
              <Link href="https://aiworkx.ai/" siteName="website" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
