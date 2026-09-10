import bannerStack from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="mt-30 container mx-auto flex justify-between">
      <div className="mt-30">
        <p className="text-7xl font-bold">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
        </p>
        <p className="text-2xl font-light leading-9 text-[#475569] mt-10 mb-17">
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>
        <div>
            <button className="px-4 py-3 bg-amber-400 text-white rounded-xl bg-linear-to-r from-[#F97316] to-[#EC4899] mr-5 cursor-pointer">Explore Technologies</button>
            <button className="px-11 py-3 text-[#374151] border-2 border-gray-300 rounded-xl cursor-pointer">Learn More</button>
        </div>
      </div>

      <img className="mt-10 h-150" src={bannerStack} alt="" />
    </div>
  );
};

export default Banner;
