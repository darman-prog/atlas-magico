import { useState, useEffect, useRef } from "react";
import { QuizQuestion, CountryData, GameState } from "../types";
import { Trophy, ArrowRight, RefreshCw, Loader2, ShieldAlert, ArrowLeft } from "lucide-react";
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

const TIMER_SECONDS = 20;
const TIMER_CIRCUMFERENCE = 138.23;

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
  const [timeLeft, setTimeLeft] = useState<number>(TIMER_SECONDS);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(null);
  const [isTicking, setIsTicking] = useState<boolean>(true);
  const [lastQuestionId, setLastQuestionId] = useState<string | undefined>(undefined);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchQuestion = () => {
    setLoading(true);
    setError(null);
    setSelectedOption(null);
    setShowExplanation(false);
    setAnsweredCorrectly(null);
    setTimeLeft(TIMER_SECONDS);
    setIsTicking(false);

    window.setTimeout(() => {
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

  useEffect(() => {
    if (!isTicking || loading || error || showExplanation) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleAnswerSelect(-1);
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

    if (gameState.soundEffects) {
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        if (isCorrect) {
          osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
          osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
          osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2);
          gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.4);
        } else {
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
    let starsEarned = 0;
    let pointsEarned = 0;

    if (answeredCorrectly) {
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
      pointsEarned = 10;
    }

    onQuizComplete(starsEarned, pointsEarned);
  };

  return (
    <div
      id="quiz-screen-root"
      className="w-full max-w-7xl mx-auto min-h-[92svh] lg:h-[92vh] flex flex-col justify-between gap-4 p-4 sm:p-6 bg-[#fff8ef] rounded-2xl sm:rounded-3xl border-[6px] sm:border-8 border-[#7d562d] relative shadow-2xl overflow-y-auto lg:overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#e3d9c3 10%, transparent 10%)",
        backgroundSize: "20px 20px"
      }}
    >
      <div className="absolute inset-0 bg-[#f1e7d0]/20 pointer-events-none mix-blend-multiply" />

      {/* TOP HEADER STATUS */}
      <div className="flex justify-between items-center gap-3 z-10">
        <div className="flex items-center gap-2 min-w-0">
          <button
            onClick={onBack}
            className="min-h-[44px] flex items-center gap-2 px-4 py-2 bg-[#7d562d] hover:bg-[#623f18] active:scale-95 text-[#fff8ef] rounded-lg font-sans font-bold text-xs shadow cursor-pointer transition-all shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </button>
          <span className="font-sans font-extrabold text-base sm:text-lg text-[#7d562d] uppercase tracking-wider hidden sm:inline truncate">
            Atlas Mágico
          </span>
        </div>

        <div className="bg-[#f7edd6] border-2 border-[#7d562d] px-4 sm:px-5 py-2 rounded-full flex items-center gap-2 shadow-sm shrink-0">
          <Trophy className="w-4 h-4 text-[#ffca98] fill-[#ffca98]" />
          <span className="font-mono font-bold text-sm text-[#7d562d] whitespace-nowrap">
            {gameState.points} pts
          </span>
        </div>
      </div>

      {/* CORE PARCHMENT CARD */}
      <div className="flex-1 flex items-center justify-center my-2 sm:my-4 z-10">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-6 sm:p-12 bg-white/90 border-4 border-[#7d562d] rounded-2xl shadow-xl w-full max-w-xl text-center">
            <Loader2 className="w-12 h-12 text-[#0f5238] animate-spin mb-4" />
            <p className="font-sans font-extrabold text-[#7d562d] text-lg">Invocando el saber de los mares...</p>
            <p className="font-sans text-xs text-[#7d562d]/70 mt-2 break-words">Capitán Patito está consultando las cartas de navegación mágicas.</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center p-6 sm:p-12 bg-white/90 border-4 border-[#ba1a1a] rounded-2xl shadow-xl w-full max-w-xl text-center">
            <ShieldAlert className="w-12 h-12 text-[#ba1a1a] mb-4" />
            <p className="font-sans font-extrabold text-[#ba1a1a] text-lg break-words">{error}</p>
            <button
              onClick={fetchQuestion}
              className="mt-6 min-h-[44px] flex items-center gap-2 px-6 py-2.5 bg-[#0f5238] text-white rounded-full font-sans font-bold shadow-md hover:bg-[#2d6a4f] active:translate-y-0 transition-all"
            >
              <RefreshCw className="w-4 h-4" /> Reintentar
            </button>
          </div>
        ) : (
          <div
            id="parchment-quiz-card"
            className="w-full max-w-xl bg-[#fdf3db] border-4 border-[#7d562d] rounded-2xl p-4 pt-10 sm:p-6 sm:pt-10 md:p-8 md:pt-10 shadow-2xl relative overflow-visible"
            style={{
              boxShadow: "inset 0 0 30px rgba(125, 86, 45, 0.2), 0 20px 25px -5px rgba(0,0,0,0.3)"
            }}
          >
            {/* Rivets in corners */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-[#707973] border border-[#bfc9c1] shadow-inner pointer-events-none" />

            {/* COUNTDOWN TIMER RING */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
              <div className="w-14 h-14 bg-[#7d562d] rounded-full flex flex-col items-center justify-center border-4 border-[#fff8ef] shadow-lg relative">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56" aria-hidden="true">
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    fill="transparent"
                    stroke="#a8e7c5"
                    strokeWidth="3"
                    className="opacity-20"
                  />
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    fill="transparent"
                    stroke={timeLeft > 5 ? "#0f5238" : "#ba1a1a"}
                    strokeWidth="3"
                    strokeDasharray={TIMER_CIRCUMFERENCE}
                    strokeDashoffset={TIMER_CIRCUMFERENCE - (TIMER_CIRCUMFERENCE * timeLeft) / TIMER_SECONDS}
                  />
                </svg>
                <span className="font-sans font-extrabold text-[8px] text-[#ffca98] leading-none uppercase">Tiempo</span>
                <span className={`font-mono font-black text-base leading-tight ${timeLeft <= 5 ? "text-[#ffdad6] animate-pulse" : "text-white"}`}>
                  {timeLeft}
                </span>
              </div>
            </div>

            {/* SAILOR DUCK STICKER */}
            <div className="absolute -top-12 -right-6 w-20 h-20 rotate-12 hidden md:block">
              <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-white shadow-lg p-0.5">
                <img
                  src={MASCOT_IMAGE}
                  alt="Capitán Patito"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* LEVEL & COUNTRY PILL */}
            <div className="flex justify-center mt-2 mb-4">
              <span className="inline-flex items-center justify-center gap-1.5 max-w-full px-4 py-1 bg-[#0f5238] text-[#a8e7c5] font-sans font-bold text-xs uppercase tracking-widest rounded-full shadow-inner text-center break-words">
                {country.flag} {country.name} • NIVEL {levelIndex}
              </span>
            </div>

            {/* QUESTION TEXT */}
            <h2 className="font-sans text-center text-lg md:text-xl font-extrabold text-[#201b0d] leading-relaxed mb-6 px-1 sm:px-2 break-words">
              {question?.question}
            </h2>

            {/* TRIVIA OPTIONS BUTTONS */}
            <div className="space-y-3.5">
              {question?.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectAnswer = idx === question.correctIndex;
                const hasBeenAnswered = selectedOption !== null;

                let btnStyle = "bg-gradient-to-b from-[#ffdcbd] to-[#7d562d] text-white border-b-4 border-[#2c1600] hover:-translate-y-0.5 active:translate-y-0";

                if (hasBeenAnswered) {
                  if (isCorrectAnswer) {
                    btnStyle = "bg-gradient-to-b from-[#a8e7c5] to-[#0f5238] text-white border-b-4 border-[#002114]";
                  } else if (isSelected) {
                    btnStyle = "bg-gradient-to-b from-[#ffdad6] to-[#ba1a1a] text-white border-b-4 border-[#93000a]";
                  } else {
                    btnStyle = "bg-[#ece2cb] text-[#7d562d]/50 border-b-4 border-[#ece2cb] opacity-50 cursor-not-allowed";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasBeenAnswered}
                    onClick={() => handleAnswerSelect(idx)}
                    className={`w-full min-h-[44px] py-3.5 px-4 sm:px-6 rounded-xl font-sans font-bold text-sm md:text-base text-center transition-all duration-150 shadow-md flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#31486b] ${btnStyle}`}
                  >
                    <span className="break-words">{opt}</span>
                    {hasBeenAnswered && isCorrectAnswer && <span className="text-sm" aria-hidden="true">✨</span>}
                    {hasBeenAnswered && isSelected && !isCorrectAnswer && <span className="text-sm" aria-hidden="true">✕</span>}
                  </button>
                );
              })}
            </div>

            {/* EXPLANATORY AND FEEDBACK SECTION */}
            {showExplanation && question && (
              <div className="mt-6 p-4 bg-[#fdf3db] border-2 border-dashed border-[#7d562d] rounded-xl relative overflow-hidden animate-fade-in">
                {answeredCorrectly ? (
                  <div className="flex items-center gap-1.5 text-[#0f5238] mb-1.5">
                    <span className="text-lg" aria-hidden="true">✓</span>
                    <p className="font-sans font-black text-sm uppercase tracking-wider">¡Excelente acierto!</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-[#ba1a1a] mb-1.5">
                    <span className="text-lg" aria-hidden="true">✕</span>
                    <p className="font-sans font-black text-sm uppercase tracking-wider">¡Buen intento de explorador!</p>
                  </div>
                )}

                <p className="font-sans text-xs md:text-sm text-[#201b0d] leading-relaxed break-words">
                  {question.funFact}
                </p>

                <div className="mt-3 flex gap-3 items-start bg-[#fdf3db] border border-[#ffca98] p-2.5 rounded-lg">
                  <div className="w-8 h-8 rounded-full border border-[#7d562d] overflow-hidden bg-white shrink-0 shadow-inner">
                    <img src={MASCOT_IMAGE} alt="Capitán Patito" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-sans font-extrabold text-[10px] text-[#7d562d] leading-none uppercase">Consejo Náutico</span>
                    <p className="font-sans italic text-[11px] text-[#7a532a] leading-tight mt-0.5 break-words">
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
            className="w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2 px-10 py-3 bg-[#0f5238] hover:bg-[#2d6a4f] text-white rounded-full font-sans font-black text-sm tracking-widest uppercase transition-all duration-200 hover:-translate-y-1 active:translate-y-0 shadow-lg border-b-[4px] border-[#002114] cursor-pointer"
          >
            Continuar <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
