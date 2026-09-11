import type { Technology } from "../Technology";

interface CardWithStackProps {
  technology: Technology;
}

const CardWithStack = ({ technology }: CardWithStackProps) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="list-row">
        <div>
          <img
            className="size-10 rounded-box"
            alt="Tailwind CSS list item"
            src={technology.icon}
          />
        </div>
        <div>
          <div>{technology.name}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {technology.category}
          </div>
        </div>
        <button className="btn btn-square btn-ghost">
          <svg
            aria-label="Remove"
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </g>
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default CardWithStack;
