const TechCardLoading = () => {
  return (
    <div className="mt-15 container mx-auto flex flex-col items-center justify-center gap-3 py-20 text-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#D81B7E]" />

      <p className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-lg font-semibold text-transparent">
        Loading Technologies...
      </p>

      <p className="text-sm text-gray-400">
        Fetching the best tools and frameworks for you
      </p>
    </div>
  );
};

export default TechCardLoading;