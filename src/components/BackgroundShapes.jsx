const BackgroundShapes = () => {
  return (
    <>
      {/* Large blurred circle top-left */}
      <div
        className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-30 filter blur-3xl animate-blob"
      />
      {/* Medium blurred circle bottom-right */}
      <div
        className="absolute bottom-[-60px] right-[-60px] w-56 h-56 rounded-full bg-gradient-to-br from-pink-500 to-red-500 opacity-20 filter blur-2xl animate-blob animation-delay-2000"
      />
      {/* Small blurred circle center-right */}
      <div
        className="absolute top-1/3 right-[-40px] w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 to-red-400 opacity-25 filter blur-xl animate-blob animation-delay-4000"
      />
    </>
  );
};

export default BackgroundShapes;
