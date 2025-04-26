const ConversionsCircle: React.FC = () => {
    return (
      <div className="relative w-[260px] h-[260px] mx-auto">
        {/* Background circular image */}
        <div className="absolute inset-0 rounded-full overflow-hidden transform -rotate-[79deg]">
          <img
            src="https://framerusercontent.com/images/DwRVRu6nFNURjOgcHHNzXb8Y9ro.png"
            alt="circle"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* White overlay with inner shadow */}
        <div className="absolute inset-0 rounded-full bg-white shadow-[inset_0_0_20px_rgba(79,70,229,0.2)]"></div>
  
        {/* Gradient button */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-gradient-to-b from-indigo-500 to-indigo-900 rounded-full shadow-[0_130px_35px_rgba(79,70,229,0.01),0_75px_36px_rgba(79,70,229,0.03),0_42px_30px_rgba(79,70,229,0.08),0_18px_22px_rgba(79,70,229,0.14),0_4px_12px_rgba(79,70,229,0.16)] px-6 py-2">
            <div className="bg-gradient-radial from-indigo-500 to-indigo-700 rounded-full border border-white/5 px-4 py-1">
              <p className="text-white text-lg font-bold text-center tracking-tight bg-clip-text text-transparent bg-gradient-radial from-indigo-100 to-white">
                Conversions
              </p>
            </div>
          </div>
        </div>
  
        {/* Optional: Pointing SVG */}
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-10 h-10">
          {/* Replace below with your actual SVG path */}
          <svg viewBox="0 0 48 50" fill="black" className="w-full h-full">
            <path d="M24 0 L48 50 H0 Z" />
          </svg>
        </div>
      </div>
    );
  };

export default ConversionsCircle;
  