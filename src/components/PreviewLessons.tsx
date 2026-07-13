import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Lock, Unlock, CheckCircle, AlertTriangle, ChevronRight, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { LESSONS } from '../data';
import { Lesson, QuizQuestion } from '../types';

interface PreviewLessonsProps {
  onScrollToSection: (id: string) => void;
}

export default function PreviewLessons({ onScrollToSection }: PreviewLessonsProps) {
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(LESSONS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'video' | 'quiz'>('video');
  
  // Quiz states
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Convert duration string "MM:SS" to seconds
  const parseDuration = (dur: string): number => {
    const [m, s] = dur.split(':').map(Number);
    return m * 60 + s;
  };

  const totalDurationSeconds = parseDuration(selectedLesson.duration);

  // Handle Play/Pause timer simulation
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDurationSeconds) {
            setIsPlaying(false);
            if (timerRef.current) clearInterval(timerRef.current);
            return totalDurationSeconds;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, totalDurationSeconds]);

  // Update progress bar
  useEffect(() => {
    setProgress((currentTime / totalDurationSeconds) * 100);
  }, [currentTime, totalDurationSeconds]);

  // Reset video player states when lesson changes
  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setIsPlaying(false);
    setCurrentTime(0);
    setProgress(0);
    setActiveTab('video');
    // Reset Quiz
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
    setIsQuizCompleted(false);
  };

  const handlePlayToggle = () => {
    if (selectedLesson.isLocked) return;
    setIsPlaying(!isPlaying);
  };

  const formatTime = (secs: number): string => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Quiz submission handler
  const handleAnswerSubmit = (qIndex: number, optionIndex: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(optionIndex);
  };

  const submitAnswer = () => {
    if (selectedAnswer === null || !selectedLesson.quiz) return;
    
    const correctAns = selectedLesson.quiz[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAns) {
      setQuizScore((prev) => prev + 1);
    }
    setIsAnswerSubmitted(true);
  };

  const nextQuestion = () => {
    if (!selectedLesson.quiz) return;
    
    if (currentQuestionIndex + 1 < selectedLesson.quiz.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
    setIsQuizCompleted(false);
  };

  return (
    <section id="demo-lessons" className="bg-slate-50 py-24 px-4 md:px-8 relative border-b border-slate-200">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 tracking-wide uppercase">
            Тест-драйв обучения
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase font-display">
            Попробуйте бесплатно
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Открываем частичный доступ к первым трем полноценным урокам теории и практики. Посмотрите видео, сдайте мини-тест и прочувствуйте формат обучения лично!
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200/80 shadow-sm">
          
          {/* Left Side: Playlist Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider px-2 font-display">Список уроков курса</h3>
              <p className="text-[11px] text-slate-500 px-2 mt-1">Первые 3 урока открыты для ознакомления</p>
            </div>

            <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
              {LESSONS.map((lesson) => {
                const isCurrent = lesson.id === selectedLesson.id;
                return (
                  <button
                    key={lesson.id}
                    id={`lesson-select-btn-${lesson.id}`}
                    onClick={() => handleLessonSelect(lesson)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-start gap-3 border cursor-pointer ${
                      isCurrent 
                        ? 'bg-emerald-50 border-emerald-600/30' 
                        : 'bg-slate-50 border-slate-200/50 hover:bg-slate-100/50'
                    }`}
                  >
                    <div className="mt-0.5">
                      {lesson.isLocked ? (
                        <div className="p-1.5 bg-red-50 text-red-600 rounded-lg">
                          <Lock className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className={`p-1.5 rounded-lg ${isCurrent ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-50 text-emerald-600'}`}>
                          <Unlock className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className={`text-[10px] uppercase font-mono tracking-wider font-bold ${
                          lesson.category === 'теория' ? 'text-emerald-700' : 'text-teal-700'
                        }`}>
                          {lesson.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">{lesson.duration}</span>
                      </div>
                      
                      <h4 className={`text-xs font-bold leading-snug line-clamp-2 ${isCurrent ? 'text-slate-900' : 'text-slate-500'}`}>
                        {lesson.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Micro funnel under playlist */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-2xl p-4 text-center">
              <p className="text-xs text-slate-300 font-bold leading-relaxed">Понравился формат? Разблокируйте все 5 модулей и получите диплом!</p>
              <button
                onClick={() => onScrollToSection('pricing')}
                className="w-full mt-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transform active:scale-95 transition-all cursor-pointer shadow-md"
              >
                <span>ПРИНЯТЬ УЧАСТИЕ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Side: Player + Tabs (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            
            {/* Unlocked Lesson Content View */}
            {!selectedLesson.isLocked ? (
              <div className="flex flex-col h-full justify-between space-y-6">
                
                {/* Custom Tabs */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex gap-2">
                    <button
                      id="tab-btn-video"
                      onClick={() => setActiveTab('video')}
                      className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg tracking-wider transition-all cursor-pointer ${
                        activeTab === 'video' 
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200/50' 
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      ВИДЕОУРОК
                    </button>
                    {selectedLesson.quiz && selectedLesson.quiz.length > 0 && (
                      <button
                        id="tab-btn-quiz"
                        onClick={() => setActiveTab('quiz')}
                        className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                          activeTab === 'quiz' 
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200/50' 
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        <span>ПРОВЕРИТЬ ЗНАНИЯ (ТЕСТ)</span>
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                      </button>
                    )}
                  </div>

                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">{selectedLesson.module}</span>
                </div>

                {/* Tab 1: Interactive Simulated Video Player */}
                {activeTab === 'video' && (
                  <div className="space-y-4">
                    <div className="aspect-video bg-black rounded-2xl overflow-hidden relative border border-slate-800 group shadow-inner">
                      {/* Video image with glowing active aura if playing */}
                      <img 
                        src={selectedLesson.videoUrl} 
                        alt={selectedLesson.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'opacity-70 scale-105' : 'opacity-50 blur-[1px]'}`}
                        referrerPolicy="no-referrer"
                      />

                      {/* Moving geometric waves if playing */}
                      {isPlaying && (
                        <div className="absolute inset-0 bg-emerald-500/5 mix-blend-color flex items-center justify-center pointer-events-none">
                          <div className="flex gap-1.5 items-end h-8">
                            <motion.span animate={{ height: [12, 32, 12] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-emerald-400 rounded-full" />
                            <motion.span animate={{ height: [8, 24, 8] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-emerald-400 rounded-full" />
                            <motion.span animate={{ height: [16, 40, 16] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-emerald-400 rounded-full" />
                            <motion.span animate={{ height: [10, 20, 10] }} transition={{ repeat: Infinity, duration: 1.4 }} className="w-1 bg-emerald-400 rounded-full" />
                          </div>
                        </div>
                      )}

                      {/* Backdrop shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 flex flex-col justify-between p-4 opacity-100 transition-opacity duration-300">
                        {/* Top badge */}
                        <div className="flex justify-between items-center">
                          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400 border border-white/5 uppercase">
                            Демо-режим
                          </span>
                        </div>

                        {/* Center Play Button Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <button
                            id="video-center-play-btn"
                            onClick={handlePlayToggle}
                            className="w-16 h-16 rounded-full bg-emerald-600 hover:scale-110 active:scale-95 text-white flex items-center justify-center shadow-2xl transition-all cursor-pointer"
                          >
                            {isPlaying ? (
                              <Pause className="w-6 h-6 fill-white text-white" />
                            ) : (
                              <Play className="w-6 h-6 fill-white text-white ml-1" />
                            )}
                          </button>
                        </div>

                        {/* Bottom controls panel */}
                        <div className="space-y-2.5 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/5">
                          {/* Timeline bar */}
                          <div className="relative h-1 w-full bg-white/20 rounded-full overflow-hidden cursor-pointer">
                            <div 
                              className="h-full bg-emerald-500 rounded-full transition-all duration-100 ease-linear" 
                              style={{ width: `${progress}%` }}
                            />
                          </div>

                          {/* Action row */}
                          <div className="flex items-center justify-between text-xs text-white">
                            <div className="flex items-center gap-3">
                              <button id="video-bottom-play-btn" onClick={handlePlayToggle} className="hover:text-emerald-400 cursor-pointer">
                                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                              </button>
                              <span className="font-mono text-[11px]">
                                {formatTime(currentTime)} / {selectedLesson.duration}
                              </span>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">1080p HD</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Lesson description */}
                    <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg font-display">{selectedLesson.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{selectedLesson.description}</p>
                    </div>
                  </div>
                )}

                {/* Tab 2: Interactive Lesson Quiz */}
                {activeTab === 'quiz' && selectedLesson.quiz && (
                  <div className="space-y-6 min-h-[350px] flex flex-col justify-between">
                    {!isQuizCompleted ? (
                      <div className="space-y-6">
                        {/* Progress */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>Вопрос {currentQuestionIndex + 1} из {selectedLesson.quiz.length}</span>
                            <span className="font-bold text-emerald-600">Правильно: {quizScore}</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-emerald-600 transition-all duration-300"
                              style={{ width: `${((currentQuestionIndex + 1) / selectedLesson.quiz.length) * 100}%` }}
                            />
                          </div>
                        </div>

                        {/* Question Text */}
                        <div className="bg-emerald-50/50 border border-emerald-200/60 p-5 rounded-2xl">
                          <h3 className="font-bold text-sm sm:text-base text-slate-800 font-display">
                            {selectedLesson.quiz[currentQuestionIndex].text}
                          </h3>
                        </div>

                        {/* Options */}
                        <div className="space-y-3">
                          {selectedLesson.quiz[currentQuestionIndex].options.map((option, idx) => {
                            let optionStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100/50 text-slate-700';
                            
                            if (selectedAnswer === idx) {
                              optionStyle = 'bg-emerald-50 border-emerald-600/40 text-emerald-800 font-semibold';
                            }
                            
                            if (isAnswerSubmitted) {
                              const isCorrect = idx === selectedLesson.quiz![currentQuestionIndex].correctAnswer;
                              if (isCorrect) {
                                optionStyle = 'bg-emerald-100 border-emerald-600 text-emerald-900 font-bold';
                              } else if (selectedAnswer === idx) {
                                optionStyle = 'bg-red-50 border-red-200 text-red-800';
                              } else {
                                optionStyle = 'opacity-45 bg-slate-50 border-slate-100 text-slate-400';
                              }
                            }

                            return (
                              <button
                                key={idx}
                                id={`quiz-option-btn-${idx}`}
                                onClick={() => handleAnswerSubmit(currentQuestionIndex, idx)}
                                disabled={isAnswerSubmitted}
                                className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${optionStyle}`}
                              >
                                <span>{option}</span>
                                {isAnswerSubmitted && idx === selectedLesson.quiz![currentQuestionIndex].correctAnswer && (
                                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation & Action Panel */}
                        <div className="flex flex-col gap-4">
                          {isAnswerSubmitted && (
                            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 leading-relaxed">
                              <span className="font-bold text-slate-900 block mb-1">Пояснение:</span>
                              {selectedLesson.quiz[currentQuestionIndex].explanation}
                            </div>
                          )}

                          <div className="flex justify-end">
                            {!isAnswerSubmitted ? (
                              <button
                                id="submit-answer-btn"
                                onClick={submitAnswer}
                                disabled={selectedAnswer === null}
                                className="bg-slate-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs uppercase hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm"
                              >
                                Подтвердить ответ
                              </button>
                            ) : (
                              <button
                                id="next-question-btn"
                                onClick={nextQuestion}
                                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs uppercase transition-all cursor-pointer shadow-sm"
                              >
                                {currentQuestionIndex + 1 < selectedLesson.quiz.length ? 'Далее' : 'Завершить тест'}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Quiz Completed screen */
                      <div className="text-center py-10 space-y-6 max-w-md mx-auto">
                        <div className="inline-flex p-4 bg-emerald-100 text-emerald-600 rounded-full border border-emerald-200">
                          <CheckCircle className="w-12 h-12" />
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-display">ТЕСТ ПРОЙДЕН!</h3>
                          <p className="text-sm text-slate-500">
                            Вы ответили правильно на <span className="text-emerald-600 font-bold font-mono">{quizScore}</span> из <span className="font-bold font-mono text-slate-800">{selectedLesson.quiz.length}</span> вопросов.
                          </p>
                        </div>

                        {/* Motivation widget */}
                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-800 leading-relaxed">
                          {quizScore === selectedLesson.quiz.length ? (
                            <span>🎉 Идеальный результат! У вас потрясающее усвоение теоретического материала. Рекомендуем закрепить его на полной практической части курса.</span>
                          ) : (
                            <span>👍 Хороший старт! Теория освоена. Продолжайте двигаться вперед к практическим урокам, чтобы поставить технику рук на 100%.</span>
                          )}
                        </div>

                        <div className="flex gap-4 justify-center">
                          <button
                            id="restart-quiz-btn"
                            onClick={restartQuiz}
                            className="bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-2.5 px-5 rounded-xl border border-slate-200 text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Пройти заново</span>
                          </button>
                          
                          <button
                            id="pricing-funnel-btn"
                            onClick={() => onScrollToSection('pricing')}
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-5 rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                          >
                            <span>Открыть все уроки</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              /* Locked Lesson Screen (Block overlay) */
              <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 md:p-16 bg-slate-900 text-white rounded-3xl border border-slate-800 min-h-[450px] space-y-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="p-4 bg-slate-800 text-emerald-400 rounded-full border border-slate-700">
                  <Lock className="w-12 h-12" />
                </div>

                <div className="space-y-2 max-w-md">
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-extrabold font-mono px-3 py-1 rounded-full uppercase tracking-wider">
                    Урок заблокирован
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase mt-2 font-display">{selectedLesson.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Этот урок относится к платным этапам практического блока. Вы сможете разблокировать его и ещё 17+ подробных видеоинструкций сразу после покупки курса.
                  </p>
                </div>

                {/* Exclusive values list */}
                <div className="grid grid-cols-2 gap-3 max-w-sm w-full pt-2">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 text-left">
                    <span className="text-[10px] text-slate-400 font-mono block">ПРОТОКОЛ</span>
                    <span className="text-xs text-white font-bold">100% безопасная техника</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 text-left">
                    <span className="text-[10px] text-slate-400 font-mono block">ПОДДЕРЖКА</span>
                    <span className="text-xs text-white font-bold">Кураторы 24/7</span>
                  </div>
                </div>

                <button
                  id="unlock-now-cta"
                  onClick={() => onScrollToSection('pricing')}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-8 py-3.5 rounded-xl text-sm flex items-center gap-2 transform active:scale-95 transition-all shadow-lg shadow-emerald-500/10 cursor-pointer"
                >
                  <span>КУПИТЬ КУРС И РАЗБЛОКИРОВАТЬ</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
