import { COUNTRIES, MAP_IMAGE } from "../data";
import { CountryData, GameState } from "../types";
import { Compass, Settings, LogOut, Play, Sparkles } from "lucide-react";

interface MapScreenProps {
  gameState: GameState;
  onSelectCountry: (countryId: string) => void;
  onOpenSettings: () => void;
  onNavigate: (screen: 'map' | 'levels' | 'quiz') => void;
  onQuit: () => void;
}

export default function MapScreen({
  gameState,
  onSelectCountry,
  onOpenSettings,
  onNavigate,
  onQuit
}: MapScreenProps) {
  // We can calculate total stars earned across all countries
  const totalStars = COUNTRIES.reduce((acc, country) => {
    // Get corresponding stars from actual game progress if saved (or we can read from country levels later)
    return acc; // handled by parent App.tsx
  }, 0);

  // Connection path between country nodes in sequence
  // Coordinates are represented as percentages (x, y) relative to the 100x100 container
  const pathPoints = [
    { x: 34, y: 42 }, // USA
    { x: 39, y: 68 }, // BRASIL
    { x: 52, y: 61 }, // NIGERIA
    { x: 61, y: 58 }, // INDIA
    { x: 67, y: 46 }, // CHINA
    { x: 75, y: 48 }, // JAPÓN
    { x: 60, y: 32 }, // RUSIA
  ];

  // Helper function to generate SVG path string for a smooth curved or dotted line
  const generateDottedPath = () => {
    return pathPoints.map((p, index) => {
      return `${index === 0 ? 'M' : 'L'} ${p.x} ${p.y}`;
    }).join(' ');
  };

  // Find the next available country to guide the user!
  const getNextCountryName = () => {
    const uncompleted = COUNTRIES.find(c => {
      const isUnlocked = gameState.unlockedCountries.includes(c.id);
      return isUnlocked;
    });
    return uncompleted ? uncompleted.name : "¡Todos!";
  };

  return (
    <div 
      id="fantasy-container"
      className="w-full max-w-7xl mx-auto h-[92vh] flex flex-col justify-between p-4 bg-[#e3d9c3] rounded-3xl border-8 border-[#7d562d] relative shadow-2xl overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#fff8ef 10%, transparent 10%), radial-gradient(#fff8ef 10%, transparent 10%)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px"
      }}
    >
      {/* Wooden Corner Plate Borders */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-[#7d562d] border-b-4 border-r-4 border-[#2c1600] rounded-br-full flex items-center justify-center shadow-md">
        <div className="w-4 h-4 bg-[#ba1a1a] rounded-full border-2 border-white shadow-inner animate-pulse" />
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#7d562d] border-b-4 border-l-4 border-[#2c1600] rounded-bl-full flex items-center justify-center shadow-md">
        <div className="w-4 h-4 bg-[#31486b] rounded-full border-2 border-white shadow-inner" />
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#7d562d] border-t-4 border-r-4 border-[#2c1600] rounded-tr-full flex items-center justify-center shadow-md">
        <div className="w-4 h-4 bg-[#31486b] rounded-full border-2 border-white shadow-inner" />
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#7d562d] border-t-4 border-l-4 border-[#2c1600] rounded-tl-full flex items-center justify-center shadow-md">
        <div className="w-4 h-4 bg-[#ba1a1a] rounded-full border-2 border-white shadow-inner animate-pulse" />
      </div>

      {/* SUB-NAVIGATION TABS (Top Center) */}
      <div id="sub-nav-tabs" className="w-full flex justify-center z-10 pt-2">
        <div className="bg-[#fff8ef]/95 border-2 border-[#7d562d] rounded-full px-6 py-2 shadow-md flex items-center justify-center backdrop-blur-sm">
          <div className="font-sans font-black text-sm text-[#0f5238] flex items-center gap-1.5 uppercase tracking-widest">
            <Compass className="w-4 h-4 animate-spin-slow text-[#7d562d]" />
            Modo Exploración
          </div>
        </div>
      </div>

      {/* MAIN CIRCULAR MAP PORTAL */}
      <div className="flex-1 flex items-center justify-center my-4 relative">
        <div 
          id="circular-portal"
          className="w-[min(65vh,75vw)] h-[min(65vh,75vw)] rounded-full border-[10px] border-[#7d562d] shadow-2xl relative overflow-hidden bg-[#f1e7d0]"
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(0,0,0,0.4)"
          }}
        >
          {/* Circular Map Background */}
          <img 
            src={MAP_IMAGE} 
            alt="Fantasy World Map" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />

          {/* Dotted Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
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

          {/* Map Cover Overlay for parchment aged feeling */}
          <div className="absolute inset-0 bg-[#e3d9c3]/15 pointer-events-none mix-blend-multiply z-20" />

          {/* MAP TITLE HEADING */}
          <div className="absolute top-[8%] left-1/2 -translate-x-1/2 bg-[#fff8ef]/95 border-2 border-[#7d562d] rounded-lg px-4 py-1.5 shadow-md z-30 text-center max-w-[80%]">
            <h1 className="font-sans text-xs md:text-sm font-extrabold text-[#7d562d] tracking-wide uppercase">
              Página Principal - Atlas Mágico
            </h1>
            <p className="font-sans text-[10px] md:text-xs text-[#0f5238] font-medium italic">
              Explora el Mundo de Aethelgard
            </p>
          </div>

          {/* CENTRAL ATLAS CARD */}
          <div 
            style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
            className="absolute bg-[#fff8ef] border-2 border-[#7d562d] p-3 rounded-xl shadow-lg z-30 text-center w-24 md:w-28 cursor-default pointer-events-none"
          >
            <p className="font-sans text-[10px] font-bold text-[#7d562d] tracking-widest uppercase">ATLAS</p>
            <p className="font-sans text-[11px] font-extrabold text-[#31486b] uppercase leading-tight">MÁGICO</p>
            <div className="text-lg md:text-xl mt-1 text-[#ffca98]">⛵</div>
          </div>

          {/* FLOATING COUNTRY MARKERS */}
          {COUNTRIES.map((country) => {
            const isUnlocked = gameState.unlockedCountries.includes(country.id);
            // Count stars earned for this country
            const earnedStars = country.levels.reduce((acc, lvl) => {
              // We'll map live state stars
              return acc;
            }, 0);

            // Let's get the country's live stars from gameState level structure passed down
            // For now let's read the visual structure
            return (
              <button
                key={country.id}
                onClick={() => onSelectCountry(country.id)}
                style={{ left: `${country.coordinates.x}%`, top: `${country.coordinates.y}%` }}
                className={`absolute z-30 -translate-x-1/2 -translate-y-1/2 p-2 bg-[#fff8ef] hover:bg-[#fdf3db] border-2 border-[#7d562d] rounded-xl shadow-md flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer ${
                  isUnlocked 
                    ? "hover:scale-110 active:scale-95 border-[#7d562d]" 
                    : "opacity-60 grayscale border-dashed border-[#bfc9c1]"
                }`}
              >
                {/* Mini Marker Icon */}
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="text-xs md:text-sm">{country.flag}</span>
                  <span className="font-sans font-extrabold text-[9px] md:text-[10px] text-[#201b0d] tracking-tight group-hover:text-[#0f5238]">
                    {country.name}
                  </span>
                </div>

                {/* Level Tag */}
                <span className="font-mono text-[7px] md:text-[8px] text-[#7d562d] font-bold uppercase leading-none">
                  (Nivel {country.id === "usa" ? 1 : country.id === "brasil" ? 3 : country.id === "nigeria" ? 5 : country.id === "india" ? 2 : country.id === "china" ? 3 : country.id === "japon" ? 8 : country.id === "rusia" ? 3 : 8})
                </span>

                {/* Star Row Representation */}
                <div className="flex items-center gap-0.5 mt-0.5">
                  <span className="text-[7px] md:text-[8px] text-[#ffca98]">☆</span>
                  <span className="text-[7px] md:text-[8px] text-[#ffca98]">☆</span>
                  <span className="text-[7px] md:text-[8px] text-[#ffca98]">☆</span>
                </div>

                {/* Interactive locked badge */}
                {!isUnlocked && (
                  <div className="absolute inset-0 bg-black/5 rounded-xl flex items-center justify-center">
                    <span className="text-[9px] font-bold text-[#ba1a1a]">🔒</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* FOOTER WOODEN CONTROL PANEL (Matches bottom bar in Screenshot) */}
      <div 
        id="wood-footer"
        className="w-full bg-[#7d562d] rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t-4 border-[#2c1600] relative overflow-hidden"
        style={{
          boxShadow: "inset 0 4px 10px rgba(0,0,0,0.3)"
        }}
      >
        {/* Subtle diagonal wood lines */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-black/30 via-transparent to-black/30 pointer-events-none" />

        {/* Adjustments (Left) */}
        <button
          onClick={onOpenSettings}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#fdf3db]/10 hover:bg-[#fdf3db]/20 border-2 border-[#fffdbd]/20 hover:border-[#fffdbd]/40 rounded-xl text-[#fdf3db] font-sans font-extrabold text-xs tracking-wider uppercase transition-all duration-150 hover:-translate-y-0.5 shadow-md shrink-0 cursor-pointer"
        >
          <Settings className="w-4 h-4 text-[#ffca98]" />
          Ajustes
        </button>

        {/* INICIO (Center) */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => onSelectCountry('brasil')} // Defaults to Brasil as requested in screen 2
            className="relative px-12 py-3 bg-[#0f5238] hover:bg-[#2d6a4f] text-white rounded-full font-sans font-black text-sm tracking-widest uppercase transition-all duration-200 hover:-translate-y-1 active:translate-y-0 shadow-lg border-b-[4px] border-[#002114] flex items-center gap-2 cursor-pointer"
          >
            <Play className="fill-white w-4 h-4" />
            Inicio
          </button>
          <p className="text-[10px] font-mono text-[#ffca98]/80 mt-1 uppercase tracking-wider">
            Siguiente destino sugerido: {getNextCountryName()}
          </p>
        </div>

        {/* EXIT (Right) */}
        <button
          onClick={onQuit}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#fdf3db]/10 hover:bg-[#ba1a1a]/20 border-2 border-[#fffdbd]/20 hover:border-[#ba1a1a]/40 rounded-xl text-[#fdf3db] hover:text-[#ffdad6] font-sans font-extrabold text-xs tracking-wider uppercase transition-all duration-150 hover:-translate-y-0.5 shadow-md shrink-0 cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          Salir
        </button>
      </div>
    </div>
  );
}
