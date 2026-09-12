import { Bounce, toast } from "react-toastify";
import type { Technology } from "../Technology";
import { useState } from "react";

interface TechnologyCardProps {
  technology: Technology;
  addToStack: (technology: Technology) => void;
}

const TechnologyCard = ({ technology, addToStack }: TechnologyCardProps) => {
  const [added, setAdded] = useState(false);

  const handleAddToStack = () => {
    if (added) return;
    addToStack(technology);
    toast.success(`${technology.name} added to your stack!`, {
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
    setAdded(true);
  };
  return (
    <div className="w-80 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-6 w-6"
          />
        </div>

        <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm text-gray-500">{technology.description}</p>

      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-600">
          {technology.category}
        </span>

        <span className="text-sm text-gray-600">{technology.difficulty}</span>

        <div className="flex items-center gap-1">
          <span className="text-yellow-400">★</span>

          <span className="text-sm font-medium text-gray-900">
            {technology.rating}
          </span>
        </div>
      </div>

      <button
        onClick={handleAddToStack}
        disabled={added}
        className="mt-5 w-full rounded-xl border border-transparent bg-gray-900 py-3 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-white disabled:hover:bg-white"
      >
        {added ? (
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            ✓ Added
          </span>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
};

export default TechnologyCard;
