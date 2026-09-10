import { use } from "react";
import type { Technology } from "../Technology";
import TechnologyCard from "./TechnologyCard";

interface TechCardProps {
  techPromise: Promise<Technology[]>;
}

const TechCard = ({ techPromise }: TechCardProps) => {
  const technologies = use(techPromise);
  return (
    <div className="mt-15 flex container mx-auto gap-5 items-start">
      <div className="grid grid-cols-3 gap-5">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} />
        ))}
      </div>

      <div className="w-96 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-bold text-gray-900">Your Stack</h3>
        <p className="mt-2 text-gray-400">No technologies selected yet.</p>
        <div className="mt-5 flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-gray-200">
          <span className="text-gray-400">Your stack is empty.</span>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
