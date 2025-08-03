interface Props {
  href: string;
  siteName: string;
}

export const Link = ({ href, siteName }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 group/link text-sm md:text-md text-gray-600"
    >
      {siteName}

      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover/link:-translate-y-0.5"
      >
        ↗
      </span>
    </a>
  );
};
