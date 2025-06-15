

export const CalendarIcon = ({
  className,
  color = "#375FFF",
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.25 2.5H3.75C2.92157 2.5 2.25 3.17157 2.25 4V14.5C2.25 15.3284 2.92157 16 3.75 16H14.25C15.0784 16 15.75 15.3284 15.75 14.5V4C15.75 3.17157 15.0784 2.5 14.25 2.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 7H15.75"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1V4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 1V4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
