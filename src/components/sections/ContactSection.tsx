import { StickyTitle } from "~apps/components/layouts/StickyTitle";

const contactClass = "font-semibold text-m text-black-500 hover:text-green-900";

export const ContactSection = () => {
  return (
    <section className="pb-50 text-center">
      <StickyTitle title="Contacts" />
      <div className="flex flex-col pt-20">
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
