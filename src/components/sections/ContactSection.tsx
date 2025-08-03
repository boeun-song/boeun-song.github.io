import { StickyTitle } from "~apps/components/layouts/StickyTitle";

const contactClass = "text-sm md:text-lg hover:font-semibold";

export const ContactSection = () => {
  return (
    <section className="pb-30 text-center">
      <StickyTitle title="Contacts" />
      <div className="flex flex-col gap-3 md:gap-4 pt-10 md:pt-20">
        <a
          href="mailto:boeunsong05@gmail.com"
          className={contactClass}
          target="_blank"
        >
          📧 boeunsong05@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/boeun-song-8622a61a3"
          className={contactClass}
          target="_blank"
        >
          💼 https://www.linkedin.com/in/boeun-song
        </a>
        <a
          href="https://github.com/boeun-song"
          className={contactClass}
          target="_blank"
        >
          👨‍💻 https://github.com/boeun-song
        </a>
      </div>
    </section>
  );
};
