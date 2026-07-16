import { ArrowLeft, Star, Trophy, Flag } from "lucide-react";
import { CountryData, GameState } from "../types";
import { MASCOT_IMAGE } from "../data";

interface LevelsScreenProps {
  country: CountryData;
  gameState: GameState;
  onSelectLevel: (levelId: string, levelIndex: number) => void;
  onBack: () => void;
}

const levelStyles = [
  {
    label: "Fácil",
    badge: "Nivel 1",
    border: "border-[#a8e7c5]",
    imageBg: "bg-[#a8e7c5]/30",
    accent: "bg-[#0f5238]",
    starBadge: "bg-[#0f5238]/90",
    title: "text-[#0f5238]",
    stars: 1
  },
  {
    label: "Medio",
    badge: "Nivel 2",
    border: "border-[#c7dbff]",
    imageBg: "bg-[#c7dbff]/30",
    accent: "bg-[#31486b]",
    starBadge: "bg-[#31486b]/90",
    title: "text-[#31486b]",
    stars: 2
  },
  {
    label: "Difícil",
    badge: "Nivel 3",
    border: "border-[#ffdad6]",
    imageBg: "bg-[#ffdad6]/30",
    accent: "bg-[#ba1a1a]",
    starBadge: "bg-[#ba1a1a]/95",
    title: "text-[#ba1a1a]",
    stars: 3
  }
] as const;

export default function LevelsScreen({
  country,
  gameState,
  onSelectLevel,
  onBack
}: LevelsScreenProps) {
  const countryStars = country.levels.reduce((acc, lvl) => acc + lvl.starsEarned, 0);

  return (
    <div
      id="level-selector-bg"
      className="w-full max-w-7xl mx-auto min-h-[92svh] lg:h-[92vh] flex flex-col justify-between gap-4 p-4 sm:p-6 bg-[#fff8ef] rounded-2xl sm:rounded-3xl border-[6px] sm:border-8 border-[#7d562d] relative shadow-2xl overflow-y-auto lg:overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#e3d9c3 15%, transparent 15%)",
        backgroundSize: "24px 24px"
      }}
    >
      {/* Decorative metal rivets */}
      <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner pointer-events-none" />
      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner pointer-events-none" />

      {/* TOP HEADER CONTROLS */}
      <div className="flex justify-between items-center gap-3 z-10">
        <button
          onClick={onBack}
          aria-label="Volver al mapa"
          className="min-w-[44px] min-h-[44px] sm:w-12 sm:h-12 bg-[#7d562d] hover:bg-[#623f18] active:scale-95 text-[#fff8ef] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer shrink-0"
        >
          <ArrowLeft className="w-6 h-6 stroke-[3]" />
        </button>

        <div className="text-center min-w-0">
          <h1 className="font-sans font-black text-xl md:text-3xl text-[#7d562d]/70 tracking-wide uppercase leading-tight break-words">
            Niveles de {country.name}
          </h1>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="bg-[#fff8ef] border-2 border-[#7d562d] px-3 py-1.5 rounded-full shadow-md text-right hidden sm:block">
            <p className="font-sans font-black text-[9px] text-[#0f5238] tracking-widest uppercase leading-none">¡EMPEZAR!</p>
            <p className="font-sans text-[8px] text-[#7d562d] font-semibold leading-none mt-1">Capitán Patito</p>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-[#7d562d] overflow-hidden bg-white shadow-md hover:scale-105 transition-transform">
            <img
              src={MASCOT_IMAGE}
              alt="Capitán Patito"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* CENTER BADGE */}
      <div className="flex flex-col items-center z-10">
        <div className="bg-[#7d562d] border-2 border-[#2c1600] rounded-xl px-6 sm:px-12 py-3 shadow-md text-center max-w-sm w-full sm:w-auto">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#fff8ef] tracking-widest uppercase leading-none break-words">
            {country.name}
          </h2>
        </div>
        <div className="bg-[#f7edd6] border-x-2 border-b-2 border-[#7d562d] px-6 py-1 rounded-b-lg shadow-sm text-center">
          <p className="font-sans text-xs font-bold text-[#7d562d] uppercase tracking-wider">Elige un nivel</p>
        </div>
      </div>

      {/* LEVEL CARDS CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 px-0 sm:px-4 z-10 my-2 max-w-5xl mx-auto w-full">
        {country.levels.slice(0, 3).map((level, index) => {
          const style = levelStyles[index];

          return (
            <button
              key={level.id}
              onClick={() => onSelectLevel(level.id, index + 1)}
              aria-label={`Jugar nivel ${style.label}: ${level.title}`}
              className={`bg-white border-2 ${style.border} rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-200 overflow-hidden group cursor-pointer text-left min-h-[248px] flex flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#31486b]`}
            >
              <div className={`h-32 relative ${style.imageBg} overflow-hidden shrink-0`}>
                <img
                  src={level.image}
                  alt={`Imagen del nivel ${style.label}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className={`absolute top-2 left-2 ${style.accent} text-white font-sans text-[10px] font-black uppercase px-2 py-0.5 rounded-md`}>
                  {style.badge}
                </span>
                <span className={`absolute top-2 right-2 ${style.starBadge} text-[#ffca98] font-sans text-[10px] font-black uppercase px-2 py-0.5 rounded-md flex items-center gap-0.5`}>
                  {"★".repeat(style.stars)}
                </span>
              </div>
              <div className="p-4 text-center flex-1 flex flex-col justify-center">
                <h3 className={`font-sans font-extrabold text-lg ${style.title} leading-tight`}>
                  {style.label}
                </h3>
                <p className="font-sans text-xs text-[#7d562d] mt-1 break-words">
                  {level.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* BOTTOM WOODEN STATUS TRAY */}
      <div
        id="wood-status-tray"
        className="w-full bg-[#7d562d] rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t-4 border-[#2c1600] z-10"
        style={{
          boxShadow: "inset 0 4px 8px rgba(0,0,0,0.4)"
        }}
      >
        <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <div className="bg-[#fdf3db]/10 border border-[#fffdbd]/20 px-4 py-2.5 rounded-xl text-center flex flex-col items-center justify-center min-w-[100px] shrink-0">
            <div className="flex items-center gap-1 text-[#ffca98]">
              <Star className="w-4 h-4 fill-[#ffca98]" />
              <span className="font-sans font-extrabold text-[10px] uppercase tracking-wider text-[#ffca98]">Estrellas</span>
            </div>
            <p className="font-sans font-black text-xl text-white mt-1">
              {countryStars}/9
            </p>
          </div>

          <div className="bg-[#fdf3db]/10 border border-[#fffdbd]/20 px-4 py-2.5 rounded-xl text-center flex flex-col items-center justify-center min-w-[100px] shrink-0">
            <div className="flex items-center gap-1 text-[#a8e7c5]">
              <Trophy className="w-4 h-4 text-[#a8e7c5]" />
              <span className="font-sans font-extrabold text-[10px] uppercase tracking-wider text-[#a8e7c5]">Puntos</span>
            </div>
            <p className="font-sans font-black text-xl text-white mt-1">
              {gameState.points}
            </p>
          </div>

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

        <button
          onClick={() => {
            const nextLvl = country.levels.find(l => l.starsEarned === 0) || country.levels[0];
            const lvlIndex = country.levels.indexOf(nextLvl) + 1;
            onSelectLevel(nextLvl.id, lvlIndex);
          }}
          className="w-full md:w-auto min-h-[44px] px-12 py-3.5 bg-[#0f5238] hover:bg-[#2d6a4f] text-white rounded-full font-sans font-black text-sm tracking-widest uppercase transition-all duration-200 hover:-translate-y-1 active:translate-y-0 shadow-lg border-b-[4px] border-[#002114] cursor-pointer"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
