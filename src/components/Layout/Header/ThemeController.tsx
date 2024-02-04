const ThemeController = () => {
  const themes = [
    {
      value: "cupcake",
      label: "따뜻한 사람",
    },
    {
      value: "forest",
      label: "어둠운 사람",
    },
    {
      value: "retro",
      label: "그리운 사람",
    },
    {
      value: "nord",
      label: "차가운 사람",
    },
  ];

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        나는 어떤 사람?
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        {themes.map(({ value, label }) => (
          <ThemeButton key={value} value={value} label={label} />
        ))}
      </ul>
    </div>
  );
};

export default ThemeController;

interface ThemeButtonProps {
  value: string;
  label?: string;
}

const ThemeButton = ({ value, label }: ThemeButtonProps) => (
  <li>
    <input
      type="radio"
      name="theme-dropdown"
      className="theme-controller btn btn-sm btn-block btn-ghost justify-start capitalize"
      aria-label={label || value}
      value={value}
    />
  </li>
);
