import type { Technology } from "../Technology";
import CardWithStack from "./CardWithStack";
import EmptyStack from "./EmptyStack";

interface YourStackCardProps {
  stack: Technology[];
}

const YourStackCard = ({ stack }: YourStackCardProps) => {
  return (
    <div className="w-96 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-gray-900">Your Stack</h3>
      {stack.length === 0 ? (
        <EmptyStack />
      ) : (
        <div className="mt-2 space-y-3">
          <p className="text-gray-400">{stack.length} technologies selected.</p>
          {stack.map((technology) => (
            <CardWithStack key={technology.id} technology={technology} />
          ))}
          <button className="w-full rounded-xl border border-red-300 bg-white py-3 text-sm font-semibold text-red-500 hover:bg-red-50">
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStackCard;
