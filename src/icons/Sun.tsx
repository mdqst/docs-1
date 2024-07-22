interface SunIconProps {
  className?: string;
}

export const SunIcon: React.FC<SunIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39983 4.39972C4.69272 4.10683 5.16759 4.10683 5.46049 4.39972L6.17049 5.10972C6.46338 5.40262 6.46338 5.87749 6.17049 6.17038C5.87759 6.46328 5.40272 6.46328 5.10983 6.17038L4.39983 5.46038C4.10693 5.16749 4.10693 4.69262 4.39983 4.39972ZM19.6002 4.39972C19.8931 4.69262 19.8931 5.16749 19.6002 5.46038L18.8902 6.17038C18.5973 6.46328 18.1224 6.46328 17.8295 6.17038C17.5366 5.87749 17.5366 5.40262 17.8295 5.10972L18.5395 4.39972C18.8324 4.10683 19.3073 4.10683 19.6002 4.39972ZM8.9948 8.9948C7.33507 10.6545 7.33507 13.3455 8.9948 15.0052C10.6545 16.6649 13.3455 16.6649 15.0052 15.0052C16.6649 13.3455 16.6649 10.6545 15.0052 8.9948C13.3455 7.33507 10.6545 7.33507 8.9948 8.9948ZM7.93413 7.93413C10.1796 5.68862 13.8204 5.68862 16.0659 7.93413C18.3114 10.1796 18.3114 13.8204 16.0659 16.0659C13.8204 18.3114 10.1796 18.3114 7.93413 16.0659C5.68862 13.8204 5.68862 10.1796 7.93413 7.93413ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM6.17049 17.8297C6.46338 18.1225 6.46338 18.5974 6.17049 18.8903L5.46049 19.6003C5.16759 19.8932 4.69272 19.8932 4.39983 19.6003C4.10693 19.3074 4.10693 18.8325 4.39983 18.5396L5.10983 17.8297C5.40272 17.5368 5.87759 17.5368 6.17049 17.8297ZM17.8295 17.8297C18.1224 17.5368 18.5973 17.5368 18.8902 17.8297L19.6002 18.5396C19.8931 18.8325 19.8931 19.3074 19.6002 19.6003C19.3073 19.8932 18.8324 19.8932 18.5395 19.6003L17.8295 18.8903C17.5366 18.5974 17.5366 18.1225 17.8295 17.8297ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z"
        fill="currentColor"
      />
    </svg>
  );
};