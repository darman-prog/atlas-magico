export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  funFact: string;
  mascotHint: string;
}

export interface LevelData {
  id: string;
  name: string;
  title: string;
  image: string;
  starsEarned: number; // 0 to 3
  status: 'unlocked' | 'locked' | 'completed';
  description: string;
}

export interface CountryData {
  id: string;
  name: string;
  flag: string;
  levelRequired: number;
  iconType: 'flag' | 'paw' | 'temple' | 'shrine' | 'star';
  coordinates: { x: number; y: number }; // Percentage values for mapping
  levels: LevelData[];
  description: string;
}

export interface GameState {
  points: number;
  stars: number;
  activeCountryId: string | null;
  activeLevelId: string | null;
  currentScreen: 'map' | 'levels' | 'quiz';
  unlockedCountries: string[];
  volume: number; // 0 to 100
  soundEffects: boolean;
}
