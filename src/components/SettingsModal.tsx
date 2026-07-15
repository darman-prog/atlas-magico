import { Volume2, VolumeX, X, RotateCcw } from "lucide-react";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  volume: number;
  setVolume: (v: number) => void;
  soundEffects: boolean;
  setSoundEffects: (s: boolean) => void;
  onReset: () => void;
}

export default function SettingsModal({
  isOpen,
  onClose,
  volume,
  setVolume,
  soundEffects,
  setSoundEffects,
  onReset
}: SettingsModalProps) {
  if (!isOpen) return null;

  return (
    <div id="settings-overlay" className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div 
        id="settings-card"
        className="w-full max-w-md bg-[#fff8ef] border-4 border-[#7d562d] rounded-2xl p-6 shadow-2xl relative overflow-hidden"
        style={{
          boxShadow: "inset 0 0 40px rgba(125, 86, 45, 0.15), 0 20px 25px -5px rgba(0,0,0,0.5)"
        }}
      >
        {/* Metal Corner Rivets */}
        <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner" />
        <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner" />
        <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner" />
        <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner" />

        <div className="flex justify-between items-center mb-6">
          <h2 className="font-sans text-2xl font-bold text-[#7d562d] flex items-center gap-2">
            ⚙️ Ajustes del Atlas
          </h2>
          <button 
            id="close-settings"
            onClick={onClose}
            className="p-1 rounded-full hover:bg-[#ece2cb] transition-colors text-[#7d562d]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Volume Control */}
          <div className="space-y-2">
            <label className="font-sans font-semibold text-sm text-[#201b0d] flex justify-between">
              <span>Volumen de Música</span>
              <span className="font-mono text-xs">{volume}%</span>
            </label>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setVolume(volume > 0 ? 0 : 50)}
                className="p-2 rounded-lg bg-[#f7edd6] text-[#7d562d] hover:bg-[#ece2cb]"
              >
                {volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <input 
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full accent-[#0f5238] bg-[#ece2cb] h-2 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Sound Effects Toggle */}
          <div className="flex items-center justify-between p-3 bg-[#f7edd6] rounded-xl border border-[#ece2cb]">
            <div>
              <p className="font-sans font-semibold text-[#201b0d] text-sm">Efectos de Sonido</p>
              <p className="font-sans text-xs text-[#7d562d]">Sonidos al acertar o fallar</p>
            </div>
            <button
              onClick={() => setSoundEffects(!soundEffects)}
              className={`w-12 h-6 rounded-full transition-colors relative duration-200 ${
                soundEffects ? 'bg-[#0f5238]' : 'bg-[#bfc9c1]'
              }`}
            >
              <div 
                className={`w-5 h-5 bg-[#fff8ef] rounded-full absolute top-0.5 transition-all duration-200 shadow ${
                  soundEffects ? 'left-6' : 'left-1'
                }`}
              />
            </button>
          </div>

          <hr className="border-[#ece2cb]" />

          {/* Reset Progress Button */}
          <div className="space-y-2">
            <p className="font-sans text-xs text-[#ba1a1a]">⚠️ Esta acción es irreversible. Se reiniciarán todos tus puntos y estrellas acumulados.</p>
            <button
              id="reset-progress-btn"
              onClick={() => {
                if (window.confirm("¿Estás seguro de que quieres reiniciar tu viaje cartográfico? Volverás al nivel 1.")) {
                  onReset();
                  onClose();
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#ba1a1a] hover:bg-[#93000a] text-white rounded-xl font-sans font-bold text-sm transition-transform hover:-translate-y-0.5 shadow-md"
            >
              <RotateCcw className="w-4 h-4" />
              Reiniciar Progreso del Viaje
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
