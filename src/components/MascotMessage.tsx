import { MASCOT_IMAGE } from "../data";

interface MascotMessageProps {
  message: string;
  className?: string;
}

export default function MascotMessage({ message, className = "" }: MascotMessageProps) {
  return (
    <div id="mascot-container" className={`flex items-center gap-3 p-4 bg-[#fdf3db] border-2 border-[#7d562d] rounded-2xl relative ${className}`}>
      {/* Decorative metal rivets */}
      <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-[#707973] opacity-60" />
      <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#707973] opacity-60" />
      
      {/* Duck mascot circle avatar */}
      <div className="w-16 h-16 rounded-full border-2 border-[#7d562d] overflow-hidden bg-white shrink-0 shadow-md animate-bounce duration-1000">
        <img 
          src={MASCOT_IMAGE} 
          alt="Capitán Patito" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Speech bubble */}
      <div className="relative">
        <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-[#7d562d]" />
        <div className="font-sans text-[#201b0d] text-sm leading-relaxed font-medium">
          <span className="font-bold text-[#0f5238]">Capitán Patito:</span> "{message}"
        </div>
      </div>
    </div>
  );
}
