import { use, useState } from "react";
import type { Technology } from "../Technology";
import TechnologyCard from "./TechnologyCard";
import YourStackCard from "./YourStackCard";

interface TechCardProps {
  techPromise: Promise<Technology[]>;
}

const TechCard = ({ techPromise }: TechCardProps) => {
  const technologies = use(techPromise);
  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    setStack([...stack, technology]);
  }


  return (
    <div className="mt-15 flex container mx-auto gap-10 items-start">
      <div className="grid grid-cols-3 gap-5">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} addToStack={addToStack} />
        ))}
      </div>

      <YourStackCard stack={stack} />
    </div>
  );
};

export default TechCard;
