import { Bounce, toast } from "react-toastify";
import type { Technology } from "../Technology";

interface CardWithStackProps {
  technology: Technology;
  removeFromStack: (technology: Technology) => void;
}

const CardWithStack = ({ technology, removeFromStack }: CardWithStackProps) => {
  const handleRemove = () => {
    removeFromStack(technology);
    toast.info(`${technology.name} removed from your stack`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
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
        <button onClick={handleRemove} className="btn btn-square btn-ghost">
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
