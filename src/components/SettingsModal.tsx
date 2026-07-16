import { useEffect, useRef } from "react";
import { Settings, Volume2, VolumeX, X, RotateCcw } from "lucide-react";

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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button, input, select, textarea, [href], [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div id="settings-overlay" className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div
        ref={dialogRef}
        id="settings-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
        className="w-full max-w-md max-h-[calc(100svh-2rem)] overflow-y-auto bg-[#fff8ef] border-4 border-[#7d562d] rounded-2xl p-5 sm:p-6 shadow-2xl relative"
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
          <h2 id="settings-title" className="font-sans text-xl sm:text-2xl font-bold text-[#7d562d] flex items-center gap-2 pr-3">
            <Settings className="w-6 h-6 shrink-0" />
            Ajustes del Atlas
          </h2>
          <button
            ref={closeButtonRef}
            id="close-settings"
            onClick={onClose}
            aria-label="Cerrar ajustes"
            className="min-h-[44px] min-w-[44px] rounded-full hover:bg-[#ece2cb] active:scale-95 transition-all text-[#7d562d] flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Volume Control */}
          <div className="space-y-2">
            <label className="font-sans font-semibold text-sm text-[#201b0d] flex justify-between gap-3">
              <span>Volumen de Música</span>
              <span className="font-mono text-xs">{volume}%</span>
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setVolume(volume > 0 ? 0 : 50)}
                aria-label={volume === 0 ? "Activar música" : "Silenciar música"}
                className="min-h-[44px] min-w-[44px] rounded-lg bg-[#f7edd6] text-[#7d562d] hover:bg-[#ece2cb] active:scale-95 transition-all flex items-center justify-center"
              >
                {volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                aria-label="Volumen de música"
                className="w-full accent-[#0f5238] bg-[#ece2cb] h-2 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Sound Effects Toggle */}
          <div className="flex items-center justify-between gap-4 p-3 bg-[#f7edd6] rounded-xl border border-[#ece2cb]">
            <div className="min-w-0">
              <p className="font-sans font-semibold text-[#201b0d] text-sm">Efectos de Sonido</p>
              <p className="font-sans text-xs text-[#7d562d]">Sonidos al acertar o fallar</p>
            </div>
            <button
              onClick={() => setSoundEffects(!soundEffects)}
              aria-label={soundEffects ? "Desactivar efectos de sonido" : "Activar efectos de sonido"}
              aria-pressed={soundEffects}
              className={`w-12 h-7 rounded-full transition-colors relative duration-200 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#31486b] ${
                soundEffects ? "bg-[#0f5238]" : "bg-[#bfc9c1]"
              }`}
            >
              <div
                className={`w-5 h-5 bg-[#fff8ef] rounded-full absolute top-1 transition-all duration-200 shadow ${
                  soundEffects ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>

          <hr className="border-[#ece2cb]" />

          {/* Reset Progress Button */}
          <div className="space-y-2">
            <p className="font-sans text-xs text-[#ba1a1a] break-words">
              Esta acción es irreversible. Se reiniciarán todos tus puntos y estrellas acumulados.
            </p>
            <button
              id="reset-progress-btn"
              onClick={() => {
                if (window.confirm("¿Estás seguro de que quieres reiniciar tu viaje cartográfico? Volverás al nivel 1.")) {
                  onReset();
                  onClose();
                }
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 bg-[#ba1a1a] hover:bg-[#93000a] active:translate-y-0 text-white rounded-xl font-sans font-bold text-sm transition-transform hover:-translate-y-0.5 shadow-md"
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
