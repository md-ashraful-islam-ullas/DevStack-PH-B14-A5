import type { Technology } from "../Technology";
import EmptyStack from "./EmptyStack";

interface YourStackCardProps {
  stack: Technology[];
}

const YourStackCard = ({ stack }: YourStackCardProps) => {
  return (
    <div className="w-96 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-gray-900">Your Stack</h3>

      {stack.length === 0 ? <EmptyStack /> : (
        <div className="mt-5 space-y-3">
          {stack.map((technology) => (
            <div key={technology.id}>{technology.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStackCard;
