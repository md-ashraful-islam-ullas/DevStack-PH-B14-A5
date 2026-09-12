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
  };

  const removeFromStack = (technology: Technology) => {
    const restStack = stack.filter(
      (stackedTech) => stackedTech.id !== technology.id,
    );

    setStack(restStack);
  };

  const removeAll = () => setStack([]);

  return (
    <div className="mt-15 flex container mx-auto gap-10 items-start">
      <div className="grid grid-cols-3 gap-5">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            addToStack={addToStack}
            isInStack={stack.some((t) => t.id === technology.id)}
          />
        ))}
      </div>

      <YourStackCard stack={stack} removeFromStack={removeFromStack} removeAll={removeAll} />
    </div>
  );
};

export default TechCard;
