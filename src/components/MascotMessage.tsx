import { MASCOT_IMAGE } from "../data";

interface MascotMessageProps {
  message: string;
  className?: string;
}

export default function MascotMessage({ message, className = "" }: MascotMessageProps) {
  return (
    <div id="mascot-container" className={`flex items-start sm:items-center gap-3 p-4 bg-[#fdf3db] border-2 border-[#7d562d] rounded-2xl relative ${className}`}>
      {/* Decorative metal rivets */}
      <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-[#707973] opacity-60 pointer-events-none" />
      <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#707973] opacity-60 pointer-events-none" />

      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#7d562d] overflow-hidden bg-white shrink-0 shadow-md animate-bounce motion-reduce:animate-none duration-1000">
        <img
          src={MASCOT_IMAGE}
          alt="Capitán Patito"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative min-w-0">
        <div className="absolute left-[-8px] top-6 sm:top-1/2 sm:-translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-[#7d562d]" />
        <div className="font-sans text-[#201b0d] text-sm leading-relaxed font-medium break-words">
          <span className="font-bold text-[#0f5238]">Capitán Patito:</span> "{message}"
        </div>
      </div>
    </div>
  );
}
