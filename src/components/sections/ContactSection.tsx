const contactClass = "font-semibold text-m text-green-900 hover:text-green-700";

export const ContactSection = () => {
  return (
    <div className="pb-20 text-center">
      <h2 className="text-2xl font-bold mb-10">📬 Contact</h2>
      <p>
        <a
          href="mailto:boeunsong05@gmail.com"
          className={contactClass}
          target="_blank"
        >
          📧 boeunsong05@gmail.com
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/boeun-song-8622a61a3"
          className={contactClass}
          target="_blank"
        >
          💼 https://www.linkedin.com/in/boeun-song
        </a>
      </p>
      <p>
        <a
          href="https://github.com/boeun-song"
          className={contactClass}
          target="_blank"
        >
          👨‍💻 https://github.com/boeun-song
        </a>
      </p>
    </div>
  );
};
