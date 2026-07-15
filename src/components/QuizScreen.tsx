import { useState, useEffect, useRef } from "react";
import { QuizQuestion, CountryData, GameState } from "../types";
import { Star, Trophy, ArrowRight, RefreshCw, Volume2, Sparkles, Brain, Loader2, ShieldAlert } from "lucide-react";
import { MASCOT_IMAGE } from "../data";
import { QUESTION_BANK } from "../questionBank";

interface QuizScreenProps {
  country: CountryData;
  levelId: string;
  levelIndex: number; // 1, 2, or 3
  gameState: GameState;
  onQuizComplete: (starsEarned: number, pointsEarned: number) => void;
  onBack: () => void;
}

export default function QuizScreen({
  country,
  levelId,
  levelIndex,
  gameState,
  onQuizComplete,
  onBack
}: QuizScreenProps) {
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(20);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(null);
  const [isTicking, setIsTicking] = useState<boolean>(true);
  const [lastQuestionId, setLastQuestionId] = useState<string | undefined>(undefined);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch quiz question from the local bank
  const fetchQuestion = () => {
    setLoading(true);
    setError(null);
    setSelectedOption(null);
    setShowExplanation(false);
    setAnsweredCorrectly(null);
    setTimeLeft(20);
    setIsTicking(false); // Pause ticking while "loading"

    // Simulate a brief loading delay for UX
    setTimeout(() => {
      try {
        const countryLower = country.id.toLowerCase();
        const countryQuestions = QUESTION_BANK[countryLower];
        if (!countryQuestions) {
          throw new Error(`No hay preguntas para el país: ${country.id}`);
        }

        const levelQuestions = countryQuestions[levelIndex];
        if (!levelQuestions || levelQuestions.length === 0) {
          throw new Error(`No hay preguntas para el nivel: ${levelIndex}`);
        }

        let availableQuestions = levelQuestions;
        if (lastQuestionId && levelQuestions.length > 1) {
          availableQuestions = levelQuestions.filter(q => q.id !== lastQuestionId);
        }

        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const selectedQuestion = availableQuestions[randomIndex];

        setQuestion(selectedQuestion);
        setLastQuestionId(selectedQuestion.id);
        setIsTicking(true);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Error al cargar la pregunta.");
      } finally {
        setLoading(false);
      }
    }, 600);
  };

  useEffect(() => {
    fetchQuestion();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [levelId]);

  // Timer countdown handler
  useEffect(() => {
    if (!isTicking || loading || error || showExplanation) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time is up!
          clearInterval(timerRef.current!);
          handleAnswerSelect(-1); // auto-submit incorrect/unanswered
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTicking, loading, error, showExplanation]);

  const handleAnswerSelect = (optionIdx: number) => {
    if (selectedOption !== null || showExplanation) return;

    setIsTicking(false);
    setSelectedOption(optionIdx);

    const isCorrect = optionIdx === question?.correctIndex;
    setAnsweredCorrectly(isCorrect);
    setShowExplanation(true);

    // Audio sound cues if active
    if (gameState.soundEffects) {
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        if (isCorrect) {
          // Cheer sound
          osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
          osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
          osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5
          gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.4);
        } else {
          // Buzzer sound
          osc.frequency.setValueAtTime(150, audioCtx.currentTime);
          osc.frequency.setValueAtTime(120, audioCtx.currentTime + 0.15);
          gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.35);
        }
      } catch (e) {
        console.warn("Audio Context blocked or failed:", e);
      }
    }
  };

  const handleContinue = () => {
    // Calculate rewards
    let starsEarned = 0;
    let pointsEarned = 0;

    if (answeredCorrectly) {
      // 3 stars if answered within 8s, 2 stars within 15s, 1 star otherwise
      if (timeLeft >= 12) {
        starsEarned = 3;
        pointsEarned = 150;
      } else if (timeLeft >= 5) {
        starsEarned = 2;
        pointsEarned = 100;
      } else {
        starsEarned = 1;
        pointsEarned = 50;
      }
    } else {
      starsEarned = 0;
      pointsEarned = 10; // Consolation prize for learning!
    }

    onQuizComplete(starsEarned, pointsEarned);
  };

  return (
    <div 
      id="quiz-screen-root" 
      className="w-full max-w-7xl mx-auto h-[92vh] flex flex-col justify-between p-6 bg-[#fff8ef] rounded-3xl border-8 border-[#7d562d] relative shadow-2xl overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#e3d9c3 10%, transparent 10%)",
        backgroundSize: "20px 20px"
      }}
    >
      {/* Map blurred background overlay */}
      <div className="absolute inset-0 bg-[#f1e7d0]/20 pointer-events-none mix-blend-multiply" />

      {/* TOP HEADER STATUS */}
      <div className="flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="px-4 py-1.5 bg-[#7d562d] hover:bg-[#623f18] text-[#fff8ef] rounded-lg font-sans font-bold text-xs shadow cursor-pointer"
          >
            ↩️ Volver
          </button>
          <span className="font-sans font-extrabold text-lg text-[#7d562d] uppercase tracking-wider hidden sm:inline">
            Atlas Mágico
          </span>
        </div>

        {/* Current Score bubble */}
        <div className="bg-[#f7edd6] border-2 border-[#7d562d] px-5 py-1.5 rounded-full flex items-center gap-2 shadow-sm shrink-0">
          <Trophy className="w-4 h-4 text-[#ffca98] fill-[#ffca98]" />
          <span className="font-mono font-bold text-sm text-[#7d562d]">
            {gameState.points} pts
          </span>
        </div>
      </div>

      {/* CORE PARCHMENT CARD */}
      <div className="flex-1 flex items-center justify-center my-4 z-10">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-12 bg-white/90 border-4 border-[#7d562d] rounded-2xl shadow-xl w-full max-w-xl text-center">
            <Loader2 className="w-12 h-12 text-[#0f5238] animate-spin mb-4" />
            <p className="font-sans font-extrabold text-[#7d562d] text-lg">Invocando el saber de los mares...</p>
            <p className="font-sans text-xs text-[#7d562d]/70 mt-2">Capitán Patito está consultando las cartas de navegación mágicas.</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center p-12 bg-white/90 border-4 border-[#ba1a1a] rounded-2xl shadow-xl w-full max-w-xl text-center">
            <ShieldAlert className="w-12 h-12 text-[#ba1a1a] mb-4" />
            <p className="font-sans font-extrabold text-[#ba1a1a] text-lg">{error}</p>
            <button
              onClick={fetchQuestion}
              className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-[#0f5238] text-white rounded-full font-sans font-bold shadow-md hover:bg-[#2d6a4f]"
            >
              <RefreshCw className="w-4 h-4" /> Reintentar
            </button>
          </div>
        ) : (
          <div 
            id="parchment-quiz-card"
            className="w-full max-w-xl bg-[#fdf3db] border-4 border-[#7d562d] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-visible"
            style={{
              boxShadow: "inset 0 0 30px rgba(125, 86, 45, 0.2), 0 20px 25px -5px rgba(0,0,0,0.3)"
            }}
          >
            {/* Rivets in corners */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner" />

            {/* COUNTDOWN TIMER RING (Top Center) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#7d562d] rounded-full flex flex-col items-center justify-center border-4 border-[#fff8ef] shadow-lg relative">
                {/* SVG circular progress ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle 
                    cx="24" 
                    cy="24" 
                    r="20" 
                    fill="transparent" 
                    stroke="#a8e7c5" 
                    strokeWidth="3"
                    className="opacity-20"
                  />
                  <circle 
                    cx="24" 
                    cy="24" 
                    r="20" 
                    fill="transparent" 
                    stroke={timeLeft > 5 ? "#0f5238" : "#ba1a1a"} 
                    strokeWidth="3"
                    strokeDasharray="125"
                    strokeDashoffset={125 - (125 * timeLeft) / 20}
                  />
                </svg>
                <span className="font-sans font-extrabold text-[8px] text-[#ffca98] leading-none uppercase">Tiempo</span>
                <span className={`font-mono font-black text-base leading-tight ${timeLeft <= 5 ? "text-[#ffdad6] animate-pulse" : "text-white"}`}>
                  {timeLeft}
                </span>
              </div>
            </div>

            {/* SAILOR DUCK STICKER (Top Right) */}
            <div className="absolute -top-12 -right-8 w-20 h-20 rotate-12 hidden md:block">
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-white shadow-lg p-0.5">
                <img 
                  src={MASCOT_IMAGE} 
                  alt="Duck sticker" 
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* LEVEL & COUNTRY PILL */}
            <div className="flex justify-center mt-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 bg-[#0f5238] text-[#a8e7c5] font-sans font-bold text-xs uppercase tracking-widest rounded-full shadow-inner">
                {country.flag} {country.name} • NIVEL {levelIndex}
              </span>
            </div>

            {/* QUESTION TEXT */}
            <h2 className="font-sans text-center text-lg md:text-xl font-extrabold text-[#201b0d] leading-relaxed mb-6 px-2">
              {question?.question}
            </h2>

            {/* TRIVIA OPTIONS BUTTONS (3 Options as shown in Image 3) */}
            <div className="space-y-3.5">
              {question?.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectAnswer = idx === question.correctIndex;
                const hasBeenAnswered = selectedOption !== null;

                let btnStyle = "bg-gradient-to-b from-[#ffdcbd] to-[#7d562d] text-white border-b-4 border-[#2c1600] hover:-translate-y-0.5 active:translate-y-0";
                
                if (hasBeenAnswered) {
                  if (isCorrectAnswer) {
                    // Correct green answer
                    btnStyle = "bg-gradient-to-b from-[#a8e7c5] to-[#0f5238] text-white border-b-4 border-[#002114]";
                  } else if (isSelected) {
                    // Wrong red answer selected
                    btnStyle = "bg-gradient-to-b from-[#ffdad6] to-[#ba1a1a] text-white border-b-4 border-[#93000a]";
                  } else {
                    // Not selected and not correct
                    btnStyle = "bg-[#ece2cb] text-[#7d562d]/50 border-b-4 border-[#ece2cb] opacity-50 cursor-not-allowed";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasBeenAnswered}
                    onClick={() => handleAnswerSelect(idx)}
                    className={`w-full py-3.5 px-6 rounded-xl font-sans font-bold text-sm md:text-base text-center transition-all duration-150 shadow-md flex items-center justify-center gap-2 cursor-pointer ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {hasBeenAnswered && isCorrectAnswer && <span className="text-sm">✨</span>}
                    {hasBeenAnswered && isSelected && !isCorrectAnswer && <span className="text-sm">❌</span>}
                  </button>
                );
              })}
            </div>

            {/* EXPLANATORY AND FEEDBACK SECTION */}
            {showExplanation && question && (
              <div className="mt-6 p-4 bg-[#fdf3db] border-2 border-dashed border-[#7d562d] rounded-xl relative overflow-hidden animate-fade-in">
                {answeredCorrectly ? (
                  <div className="flex items-center gap-1.5 text-[#0f5238] mb-1.5">
                    <span className="text-lg">🎉</span>
                    <p className="font-sans font-black text-sm uppercase tracking-wider">¡Excelente acierto!</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-[#ba1a1a] mb-1.5">
                    <span className="text-lg">🧭</span>
                    <p className="font-sans font-black text-sm uppercase tracking-wider">¡Buen intento de explorador!</p>
                  </div>
                )}
                
                <p className="font-sans text-xs md:text-sm text-[#201b0d] leading-relaxed">
                  {question.funFact}
                </p>

                <div className="mt-3 flex gap-3 items-start bg-[#fdf3db] border border-[#ffca98] p-2.5 rounded-lg">
                  <div className="w-8 h-8 rounded-full border border-[#7d562d] overflow-hidden bg-white shrink-0 shadow-inner">
                    <img src={MASCOT_IMAGE} alt="Mascot Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="font-sans font-extrabold text-[10px] text-[#7d562d] leading-none uppercase">Consejo Náutico</span>
                    <p className="font-sans italic text-[11px] text-[#7a532a] leading-tight mt-0.5">
                      "{question.mascotHint}"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* BOTTOM ACTION NAVIGATION */}
      <div className="flex justify-end z-10 pt-2">
        {showExplanation && (
          <button
            onClick={handleContinue}
            className="flex items-center gap-2 px-10 py-3 bg-[#0f5238] hover:bg-[#2d6a4f] text-white rounded-full font-sans font-black text-sm tracking-widest uppercase transition-all duration-200 hover:-translate-y-1 active:translate-y-0 shadow-lg border-b-[4px] border-[#002114] cursor-pointer"
          >
            Continuar <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
