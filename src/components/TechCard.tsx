import { use } from "react";
import type { Technology } from "../Technology";
import TechnologyCard from "./TechnologyCard";

interface TechCardProps {
  techPromise: Promise<Technology[]>;
}

const TechCard = ({ techPromise }: TechCardProps) => {
  const technologies = use(techPromise);
  return (
    <div className="mt-15">
      <div className="container mx-auto grid grid-cols-3 gap-3">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} />
        ))}
      </div>


    </div>
  );
};

export default TechCard;
