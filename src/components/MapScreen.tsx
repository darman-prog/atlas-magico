import { useEffect, useState } from "react";
import { COUNTRIES, MAP_IMAGE } from "../data";
import { CountryData, GameState } from "../types";
import { Compass, Settings, LogOut, Play } from "lucide-react";

interface MapScreenProps {
  gameState: GameState;
  countries: CountryData[];
  onSelectCountry: (countryId: string) => void;
  onOpenSettings: () => void;
  onNavigate: (screen: "map" | "levels" | "quiz") => void;
  onQuit: () => void;
}

const pathPoints = [
  { x: 34, y: 42 },
  { x: 39, y: 68 },
  { x: 52, y: 61 },
  { x: 61, y: 58 },
  { x: 67, y: 46 },
  { x: 75, y: 48 },
  { x: 60, y: 32 }
];

const countryLevelLabels: Record<string, number> = {
  usa: 1,
  brasil: 3,
  nigeria: 5,
  india: 2,
  china: 3,
  japon: 8,
  rusia: 3,
  australia: 8
};

export default function MapScreen({
  gameState,
  countries,
  onSelectCountry,
  onOpenSettings,
  onQuit
}: MapScreenProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    mediaQuery.addEventListener?.("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener?.("change", updatePreference);
    };
  }, []);

  const generateDottedPath = () => {
    return pathPoints.map((p, index) => `${index === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  };

  const getNextCountryName = () => {
    const uncompleted = COUNTRIES.find(c => gameState.unlockedCountries.includes(c.id));
    return uncompleted ? uncompleted.name : "¡Todos!";
  };

  return (
    <div>
      <style>{`
        @keyframes map-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.5deg); }
        }

        .map-float {
          animation: map-float 7s ease-in-out infinite;
          transform-origin: center center;
        }

        @media (prefers-reduced-motion: reduce) {
          .map-float {
            animation: none;
          }
        }
      `}</style>
      <div
        id="fantasy-container"
        className="w-full max-w-7xl mx-auto min-h-[92svh] lg:h-[92vh] flex flex-col justify-between gap-4 p-3 sm:p-4 bg-[#e3d9c3] rounded-2xl sm:rounded-3xl border-[6px] sm:border-8 border-[#7d562d] relative shadow-2xl overflow-y-auto lg:overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#fff8ef 10%, transparent 10%), radial-gradient(#fff8ef 10%, transparent 10%)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px"
      }}
    >
      {/* Wooden Corner Plate Borders */}
      <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#7d562d] border-b-4 border-r-4 border-[#2c1600] rounded-br-full flex items-center justify-center shadow-md pointer-events-none">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#ba1a1a] rounded-full border-2 border-white shadow-inner animate-pulse" />
      </div>
      <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#7d562d] border-b-4 border-l-4 border-[#2c1600] rounded-bl-full flex items-center justify-center shadow-md pointer-events-none">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#31486b] rounded-full border-2 border-white shadow-inner" />
      </div>
      <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#7d562d] border-t-4 border-r-4 border-[#2c1600] rounded-tr-full flex items-center justify-center shadow-md pointer-events-none">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#31486b] rounded-full border-2 border-white shadow-inner" />
      </div>
      <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#7d562d] border-t-4 border-l-4 border-[#2c1600] rounded-tl-full flex items-center justify-center shadow-md pointer-events-none">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#ba1a1a] rounded-full border-2 border-white shadow-inner animate-pulse" />
      </div>

      {/* SUB-NAVIGATION TABS */}
      <div id="sub-nav-tabs" className="w-full flex justify-center z-10 pt-1 sm:pt-2">
        <div className="bg-[#fff8ef]/95 border-2 border-[#7d562d] rounded-full px-4 sm:px-6 py-2 shadow-md flex items-center justify-center backdrop-blur-sm max-w-[calc(100%-4rem)]">
          <div className="font-sans font-black text-xs sm:text-sm text-[#0f5238] flex items-center gap-1.5 uppercase tracking-widest text-center">
            <Compass className="w-4 h-4 animate-spin-slow text-[#7d562d] shrink-0" />
            Modo Exploración
          </div>
        </div>
      </div>

      {/* MAIN CIRCULAR MAP PORTAL */}
      <div className="flex-1 flex items-center justify-center my-2 sm:my-4 relative min-h-[300px]">
        <div
          id="circular-portal"
          className="w-[min(62vh,86vw)] h-[min(62vh,86vw)] max-w-[720px] max-h-[720px] rounded-full border-[8px] sm:border-[10px] border-[#7d562d] shadow-2xl relative overflow-hidden bg-[#f1e7d0] shrink-0"
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(0,0,0,0.4)"
          }}
        >
          <div className={`${prefersReducedMotion ? "" : "map-float"} absolute inset-0 w-full h-full`}>
              <img
                src={MAP_IMAGE}
                alt="Mapa fantástico del mundo"
                className="absolute inset-0 w-full h-full object-cover opacity-80 select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />

              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d={generateDottedPath()}
                  fill="none"
                  stroke="#ece2cb"
                  strokeWidth="1.2"
                  strokeDasharray="2, 2"
                  className="opacity-90"
                />
                <path
                  d={generateDottedPath()}
                  fill="none"
                  stroke="#ffca98"
                  strokeWidth="0.8"
                  strokeDasharray="2, 2"
                  className="opacity-70"
                />
              </svg>

              <div className="absolute inset-0 bg-[#e3d9c3]/15 pointer-events-none mix-blend-multiply z-20" />

              {/* MAP TITLE HEADING */}
              <div className="absolute top-[8%] left-1/2 -translate-x-1/2 bg-[#fff8ef]/95 border-2 border-[#7d562d] rounded-lg px-3 sm:px-4 py-1.5 shadow-md z-30 text-center max-w-[82%]">
                <h1 className="font-sans text-[10px] md:text-sm font-extrabold text-[#7d562d] tracking-wide uppercase leading-tight">
                  Atlas Mágico
                </h1>
              </div>
              {/* FLOATING COUNTRY MARKERS */}
              {countries.map((country) => {
                const isUnlocked = gameState.unlockedCountries.includes(country.id);
                const totalStars = country.levels.reduce((sum, l) => sum + l.starsEarned, 0);
                const filledStars = Math.min(3, Math.floor(totalStars / 3));

                return (
                  <button
                    key={country.id}
                    onClick={() => onSelectCountry(country.id)}
                    aria-disabled={!isUnlocked}
                    aria-label={`${country.name}, nivel ${countryLevelLabels[country.id] ?? country.levelRequired}`}
                    style={{ left: `${country.coordinates.x}%`, top: `${country.coordinates.y}%` }}
                    className={`absolute z-30 -translate-x-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-[#fff8ef] hover:bg-[#fdf3db] border-2 border-[#7d562d] rounded-xl shadow-md flex flex-col items-center justify-center transition-all duration-300 group max-w-[5.75rem] sm:max-w-[6.5rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#31486b] ${
                      isUnlocked
                        ? "hover:scale-110 active:scale-95 border-[#7d562d] cursor-pointer"
                        : "opacity-60 grayscale border-dashed border-[#bfc9c1] cursor-not-allowed"
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-0.5 max-w-full">
                      <span className="text-xs md:text-sm shrink-0" aria-hidden="true">{country.flag}</span>
                      <span className="font-sans font-extrabold text-[8px] md:text-[10px] text-[#201b0d] tracking-tight group-hover:text-[#0f5238] truncate min-w-0">
                        {country.name}
                      </span>
                    </div>

                    <span className="font-mono text-[7px] md:text-[8px] text-[#7d562d] font-bold uppercase leading-none whitespace-nowrap">
                      (Nivel {countryLevelLabels[country.id] ?? country.levelRequired})
                    </span>

                    <div className="flex items-center gap-0.5 mt-0.5" aria-hidden="true">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className={`text-[7px] md:text-[8px] ${
                            i < filledStars ? "text-[#ffca98]" : "text-[#ffca98]/30"
                          }`}
                        >
                          {i < filledStars ? "★" : "☆"}
                        </span>
                      ))}
                    </div>

                    {!isUnlocked && (
                      <div className="absolute inset-0 bg-black/5 rounded-xl flex items-center justify-center">
                        <span className="text-[9px] font-bold text-[#ba1a1a]" aria-hidden="true">🔒</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER WOODEN CONTROL PANEL */}
      <div
        id="wood-footer"
        className="w-full bg-[#7d562d] rounded-2xl p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t-4 border-[#2c1600] relative overflow-hidden"
        style={{
          boxShadow: "inset 0 4px 10px rgba(0,0,0,0.3)"
        }}
      >
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-black/30 via-transparent to-black/30 pointer-events-none" />

        <button
          onClick={onOpenSettings}
          className="min-h-[44px] w-full md:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#fdf3db]/10 hover:bg-[#fdf3db]/20 border-2 border-[#fffdbd]/20 hover:border-[#fffdbd]/40 rounded-xl text-[#fdf3db] font-sans font-extrabold text-xs tracking-wider uppercase transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 shadow-md shrink-0 cursor-pointer"
        >
          <Settings className="w-4 h-4 text-[#ffca98]" />
          Ajustes
        </button>

        <div className="flex flex-col items-center w-full md:w-auto">
          <button
            onClick={() => onSelectCountry("brasil")}
            className="relative min-h-[44px] w-full sm:w-auto px-12 py-3 bg-[#0f5238] hover:bg-[#2d6a4f] text-white rounded-full font-sans font-black text-sm tracking-widest uppercase transition-all duration-200 hover:-translate-y-1 active:translate-y-0 shadow-lg border-b-[4px] border-[#002114] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="fill-white w-4 h-4" />
            Inicio
          </button>
          <p className="text-[10px] font-mono text-[#ffca98]/80 mt-1 uppercase tracking-wider text-center break-words">
            Siguiente destino sugerido: {getNextCountryName()}
          </p>
        </div>

        <button
          onClick={onQuit}
          className="min-h-[44px] w-full md:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#fdf3db]/10 hover:bg-[#ba1a1a]/20 border-2 border-[#fffdbd]/20 hover:border-[#ba1a1a]/40 rounded-xl text-[#fdf3db] hover:text-[#ffdad6] font-sans font-extrabold text-xs tracking-wider uppercase transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 shadow-md shrink-0 cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          Salir
        </button>
      </div>
    </div>
  )
}
