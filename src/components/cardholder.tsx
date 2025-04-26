import { useState } from "react";

const CardHoverPopout = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isPreviewHovered, setIsPreviewHovered] = useState(false);

  const cards = [
    {
      id: "card1",
      src: "https://framerusercontent.com/images/FXuSPfOHqoXncL66rl9o1qw84g0.png",
      rotate: "-10deg",
      z: "z-10",
      translateX: "-56px",
    },
    {
      id: "card2",
      src: "https://framerusercontent.com/images/bmMuVSstg1QzluMf2AG0sb1fcg.png",
      rotate: "5deg",
      z: "z-20",
      translateX: "28px",
    },
  ];

  const handleLeave = () => {
    if (!isPreviewHovered) {
      setHoveredCard(null);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-20">
      {/* Hover Preview */}
      <div
        className={`absolute -top-44 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-2xl overflow-hidden z-50 shadow-2xl transition-all duration-300 ${
          hoveredCard ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        onMouseEnter={() => setIsPreviewHovered(true)}
        onMouseLeave={() => {
          setIsPreviewHovered(false);
          setHoveredCard(null);
        }}
      >
        {hoveredCard && (
          <img
            src={cards.find((card) => card.id === hoveredCard)?.src}
            alt="hover-preview"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Cards */}
      <div className="relative w-[140px] h-[120px]">
  {cards.map((card) => (
    <div
      key={card.id}
      className={`absolute top-12 left-0 rounded-xl overflow-hidden ${card.z} transition-transform duration-300`}
      style={{
        transform: `rotate(${card.rotate}) translateX(${card.translateX})`,
      }}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={handleLeave}
    >
      <img
        src={card.src}
        alt={card.id}
        className="w-[240px] h-[120px] object-cover rounded-xl"
      />
    </div>
  ))}
</div>


      {/* Title */}
     
    </div>
  );
};

export default CardHoverPopout;
