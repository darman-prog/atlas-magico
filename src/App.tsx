import { useState } from "react";
import { COUNTRIES as INITIAL_COUNTRIES } from "./data";
import { CountryData, GameState, LevelData } from "./types";
import MapScreen from "./components/MapScreen";
import LevelsScreen from "./components/LevelsScreen";
import QuizScreen from "./components/QuizScreen";
import SettingsModal from "./components/SettingsModal";

export default function App() {
  const getPrePopulatedCountries = (): CountryData[] => {
    return INITIAL_COUNTRIES.map((country) => {
      if (country.id === "brasil") {
        return {
          ...country,
          levels: country.levels.map((level, idx) => {
            if (idx === 0) return { ...level, starsEarned: 2, status: "completed" };
            if (idx === 1) return { ...level, starsEarned: 2, status: "completed" };
            return level;
          }),
        };
      }
      return country;
    });
  };

  const [countries, setCountries] = useState<CountryData[]>(getPrePopulatedCountries);
  const [gameState, setGameState] = useState<GameState>({
    points: 820,
    stars: 4,
    activeCountryId: null,
    activeLevelId: null,
    currentScreen: "map",
    unlockedCountries: ["usa", "brasil", "nigeria", "india", "china", "japon", "rusia", "australia"],
    volume: 60,
    soundEffects: true,
  });

  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [activeLevelIndex, setActiveLevelIndex] = useState<number>(1);

  const handleSelectCountry = (countryId: string) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;

    const isUnlocked = gameState.unlockedCountries.includes(countryId);
    if (!isUnlocked) {
      alert("Este país está custodiado por misterios antiguos. ¡Supera los niveles anteriores para desbloquear!");
      return;
    }

    setGameState((prev) => ({
      ...prev,
      activeCountryId: countryId,
      currentScreen: "levels",
    }));
  };

  const handleSelectLevel = (levelId: string, levelIndex: number) => {
    setActiveLevelIndex(levelIndex);
    setGameState((prev) => ({
      ...prev,
      activeLevelId: levelId,
      currentScreen: "quiz",
    }));
  };

  const handleQuizComplete = (starsEarned: number, pointsEarned: number) => {
    const updatedCountries = countries.map((country) => {
      if (country.id === gameState.activeCountryId) {
        return {
          ...country,
          levels: country.levels.map((level) => {
            if (level.id === gameState.activeLevelId) {
              const prevStars = level.starsEarned;
              const finalStars = Math.max(prevStars, starsEarned);
              const status: LevelData["status"] = finalStars > 0 ? "completed" : "unlocked";
              return {
                ...level,
                starsEarned: finalStars,
                status,
              };
            }
            return level;
          }),
        };
      }
      return country;
    });

    setCountries(updatedCountries);

    const newTotalStars = updatedCountries.reduce((total, c) => {
      return total + c.levels.reduce((acc, l) => acc + l.starsEarned, 0);
    }, 0);

    setGameState((prev) => ({
      ...prev,
      points: prev.points + pointsEarned,
      stars: newTotalStars,
      currentScreen: "levels",
    }));

    if (starsEarned > 0) {
      alert(`¡Excelente! Ganaste ${starsEarned} ★ y +${pointsEarned} Puntos para tu Atlas.`);
    } else {
      alert(`Aprendizaje completado. +${pointsEarned} Puntos sumados a tu bitácora.`);
    }
  };

  const handleResetProgress = () => {
    setCountries(INITIAL_COUNTRIES);
    setGameState((prev) => ({
      ...prev,
      points: 0,
      stars: 0,
      activeCountryId: null,
      activeLevelId: null,
      currentScreen: "map",
    }));
  };

  const activeCountry = countries.find(c => c.id === gameState.activeCountryId) || countries[0];

  return (
    <div className="min-h-screen w-full bg-[#353021] flex items-center justify-center p-2 sm:p-4 overflow-x-hidden selection:bg-[#ffca98] selection:text-[#2c1600]">
      {gameState.currentScreen === "map" && (
        <MapScreen
          gameState={gameState}
          countries={countries}
          onSelectCountry={handleSelectCountry}
          onOpenSettings={() => setSettingsOpen(true)}
          onNavigate={(screen) => setGameState(prev => ({ ...prev, currentScreen: screen }))}
          onQuit={() => {
            if (window.confirm("¿Seguro que quieres cerrar el Atlas Mágico? Tu diario quedará guardado.")) {
              window.close();
            }
          }}
        />
      )}

      {gameState.currentScreen === "levels" && activeCountry && (
        <LevelsScreen
          country={activeCountry}
          gameState={gameState}
          onSelectLevel={handleSelectLevel}
          onBack={() => setGameState(prev => ({ ...prev, currentScreen: "map", activeCountryId: null }))}
        />
      )}

      {gameState.currentScreen === "quiz" && activeCountry && gameState.activeLevelId && (
        <QuizScreen
          country={activeCountry}
          levelId={gameState.activeLevelId}
          levelIndex={activeLevelIndex}
          gameState={gameState}
          onQuizComplete={handleQuizComplete}
          onBack={() => setGameState(prev => ({ ...prev, currentScreen: "levels", activeLevelId: null }))}
        />
      )}

      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        volume={gameState.volume}
        setVolume={(v) => setGameState(prev => ({ ...prev, volume: v }))}
        soundEffects={gameState.soundEffects}
        setSoundEffects={(s) => setGameState(prev => ({ ...prev, soundEffects: s }))}
        onReset={handleResetProgress}
      />
    </div>
  );
}
