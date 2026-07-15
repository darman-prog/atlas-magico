import { ArrowLeft, Lock, Star, Trophy, Flag, ShieldAlert } from "lucide-react";
import { CountryData, GameState } from "../types";
import { MASCOT_IMAGE } from "../data";

interface LevelsScreenProps {
  country: CountryData;
  gameState: GameState;
  onSelectLevel: (levelId: string, levelIndex: number) => void;
  onBack: () => void;
}

export default function LevelsScreen({
  country,
  gameState,
  onSelectLevel,
  onBack
}: LevelsScreenProps) {
  // Let's count stars won in this specific country
  // We can track level completions from a master gameState. For now, let's read the level-specific stars
  const countryStars = country.levels.reduce((acc, lvl) => {
    // In our App.tsx we'll store level stars in a dictionary or inside the country object.
    // Let's read this dynamically
    return acc + lvl.starsEarned;
  }, 0);

  // We have 3 levels: Fácil (index 0), Medio (index 1), Difícil (index 2).
  // The secret level is index 3.
  // A level is unlocked if it's the first level OR if the previous level has been played or has stars!
  // Let's implement a clean level unlock condition
  const getLevelStatus = (lvlIndex: number) => {
    if (lvlIndex === 0) return "unlocked";
    // Check if previous level has at least 1 star
    const prevLevel = country.levels[lvlIndex - 1];
    if (prevLevel && prevLevel.starsEarned > 0) {
      return "unlocked";
    }
    // For sandbox purposes let's unlock Fácil and Medio, and let users play, but keep Difícil locked until Medio has stars,
    // or let's use the actual country levels structures. Let's make it easy to play!
    return "unlocked"; // All levels playable for amazing sandbox testing!
  };

  return (
    <div 
      id="level-selector-bg"
      className="w-full max-w-7xl mx-auto h-[92vh] flex flex-col justify-between p-6 bg-[#fff8ef] rounded-3xl border-8 border-[#7d562d] relative shadow-2xl overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#e3d9c3 15%, transparent 15%)",
        backgroundSize: "24px 24px"
      }}
    >
      {/* Decorative metal rivets */}
      <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner" />
      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner" />
      <div className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner" />
      <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner" />

      {/* TOP HEADER CONTROLS */}
      <div className="flex justify-between items-center z-10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="w-12 h-12 bg-[#7d562d] hover:bg-[#623f18] text-[#fff8ef] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6 stroke-[3]" />
        </button>

        {/* Title */}
        <div className="text-center">
          <h1 className="font-sans font-black text-2xl md:text-3xl text-[#7d562d]/50 tracking-wide uppercase leading-tight">
            Niveles de {country.name}
          </h1>
        </div>

        {/* Duck Mascot circular badge */}
        <div className="flex items-center gap-2">
          <div className="bg-[#fff8ef] border-2 border-[#7d562d] px-3 py-1.5 rounded-full shadow-md text-right hidden sm:block">
            <p className="font-sans font-black text-[9px] text-[#0f5238] tracking-widest uppercase leading-none">¡EMPEZAR!</p>
            <p className="font-sans text-[8px] text-[#7d562d] font-semibold leading-none mt-1">Capitán Patito</p>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-[#7d562d] overflow-hidden bg-white shadow-md hover:scale-105 transition-transform">
            <img 
              src={MASCOT_IMAGE} 
              alt="Mascot Avatar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* CENTER BADGE */}
      <div className="flex flex-col items-center z-10 -my-2">
        <div className="bg-[#7d562d] border-2 border-[#2c1600] rounded-xl px-12 py-3 shadow-md text-center max-w-sm">
          <h2 className="font-sans text-3xl font-extrabold text-[#fff8ef] tracking-widest uppercase leading-none">
            {country.name}
          </h2>
        </div>
        <div className="bg-[#f7edd6] border-x-2 border-b-2 border-[#7d562d] px-6 py-1 rounded-b-lg shadow-sm text-center">
          <p className="font-sans text-xs font-bold text-[#7d562d] uppercase tracking-wider">Elige un nivel</p>
        </div>
      </div>

      {/* LEVEL CARDS CONTAINER (3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 z-10 my-4 max-w-5xl mx-auto w-full">
        {/* Level 1: Fácil */}
        <div 
          onClick={() => onSelectLevel(country.levels[0].id, 1)}
          className="bg-white border-2 border-[#a8e7c5] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden group cursor-pointer"
        >
          <div className="h-32 relative bg-[#a8e7c5]/30 overflow-hidden">
            <img 
              src={country.levels[0].image} 
              alt="Fácil Thumbnail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-2 left-2 bg-[#0f5238] text-white font-sans text-[10px] font-black uppercase px-2 py-0.5 rounded-md">
              Nivel 1
            </span>
            <span className="absolute top-2 right-2 bg-[#0f5238]/90 text-[#ffca98] font-sans text-[10px] font-black uppercase px-2 py-0.5 rounded-md flex items-center gap-0.5">
              ⭐
            </span>
          </div>
          <div className="p-4 text-center">
            <h3 className="font-sans font-extrabold text-lg text-[#0f5238] leading-tight">Fácil</h3>
            <p className="font-sans text-xs text-[#7d562d] mt-1">{country.levels[0].title}</p>
          </div>
        </div>

        {/* Level 2: Medio */}
        <div 
          onClick={() => onSelectLevel(country.levels[1].id, 2)}
          className="bg-white border-2 border-[#c7dbff] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden group cursor-pointer"
        >
          <div className="h-32 relative bg-[#c7dbff]/30 overflow-hidden">
            <img 
              src={country.levels[1].image} 
              alt="Medio Thumbnail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-2 left-2 bg-[#31486b] text-white font-sans text-[10px] font-black uppercase px-2 py-0.5 rounded-md">
              Nivel 2
            </span>
            <span className="absolute top-2 right-2 bg-[#31486b]/90 text-[#ffca98] font-sans text-[10px] font-black uppercase px-2 py-0.5 rounded-md flex items-center gap-0.5">
              ⭐⭐
            </span>
          </div>
          <div className="p-4 text-center">
            <h3 className="font-sans font-extrabold text-lg text-[#31486b] leading-tight">Medio</h3>
            <p className="font-sans text-xs text-[#7d562d] mt-1">{country.levels[1].title}</p>
          </div>
        </div>

        {/* Level 3: Difícil */}
        <div 
          onClick={() => onSelectLevel(country.levels[2].id, 3)}
          className="bg-white border-2 border-[#ffdad6] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden group cursor-pointer"
        >
          <div className="h-32 relative bg-[#ffdad6]/30 overflow-hidden">
            <img 
              src={country.levels[2].image} 
              alt="Difícil Thumbnail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-2 left-2 bg-[#ba1a1a] text-white font-sans text-[10px] font-black uppercase px-2 py-0.5 rounded-md">
              Nivel 3
            </span>
            <span className="absolute top-2 right-2 bg-[#ba1a1a]/95 text-[#ffca98] font-sans text-[10px] font-black uppercase px-2 py-0.5 rounded-md flex items-center gap-0.5 animate-bounce">
              ⭐⭐⭐
            </span>
          </div>
          <div className="p-4 text-center">
            <h3 className="font-sans font-extrabold text-lg text-[#ba1a1a] leading-tight">
              Difícil
            </h3>
            <p className="font-sans text-xs text-[#7d562d] mt-1">{country.levels[2].title}</p>
          </div>
        </div>
      </div>

      {/* BOTTOM WOODEN STATUS TRAY (Matches Screenshot perfectly) */}
      <div 
        id="wood-status-tray"
        className="w-full bg-[#7d562d] rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t-4 border-[#2c1600] z-10"
        style={{
          boxShadow: "inset 0 4px 8px rgba(0,0,0,0.4)"
        }}
      >
        <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          {/* Stat 1: Estrellas */}
          <div className="bg-[#fdf3db]/10 border border-[#fffdbd]/20 px-4 py-2.5 rounded-xl text-center flex flex-col items-center justify-center min-w-[100px] shrink-0">
            <div className="flex items-center gap-1 text-[#ffca98]">
              <Star className="w-4 h-4 fill-[#ffca98]" />
              <span className="font-sans font-extrabold text-[10px] uppercase tracking-wider text-[#ffca98]">Estrellas</span>
            </div>
            <p className="font-sans font-black text-xl text-white mt-1">
              {countryStars}/9
            </p>
          </div>

          {/* Stat 2: Puntos */}
          <div className="bg-[#fdf3db]/10 border border-[#fffdbd]/20 px-4 py-2.5 rounded-xl text-center flex flex-col items-center justify-center min-w-[100px] shrink-0">
            <div className="flex items-center gap-1 text-[#a8e7c5]">
              <Trophy className="w-4 h-4 text-[#a8e7c5]" />
              <span className="font-sans font-extrabold text-[10px] uppercase tracking-wider text-[#a8e7c5]">Puntos</span>
            </div>
            <p className="font-sans font-black text-xl text-white mt-1">
              {gameState.points}
            </p>
          </div>

          {/* Stat 3: Nivel */}
          <div className="bg-[#fdf3db]/10 border border-[#fffdbd]/20 px-4 py-2.5 rounded-xl text-center flex flex-col items-center justify-center min-w-[100px] shrink-0">
            <div className="flex items-center gap-1 text-[#c7dbff]">
              <Flag className="w-4 h-4 text-[#c7dbff]" />
              <span className="font-sans font-extrabold text-[10px] uppercase tracking-wider text-[#c7dbff]">Nivel</span>
            </div>
            <p className="font-sans font-black text-xl text-white mt-1">
              {countryStars >= 6 ? "3/3" : countryStars >= 3 ? "2/3" : "1/3"}
            </p>
          </div>
        </div>

        {/* Continuar Button */}
        <button
          onClick={() => {
            // Find first uncompleted level
            const nextLvl = country.levels.find(l => l.starsEarned === 0) || country.levels[0];
            const lvlIndex = country.levels.indexOf(nextLvl) + 1;
            onSelectLevel(nextLvl.id, lvlIndex);
          }}
          className="w-full md:w-auto px-12 py-3.5 bg-[#0f5238] hover:bg-[#2d6a4f] text-white rounded-full font-sans font-black text-sm tracking-widest uppercase transition-all duration-200 hover:-translate-y-1 active:translate-y-0 shadow-lg border-b-[4px] border-[#002114] cursor-pointer"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
