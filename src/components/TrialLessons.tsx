import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, CheckCircle2, Lock, Sparkles, BookOpen, Clock, AlertTriangle } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  isUnlocked: boolean;
  videoThumb: string;
  steps: string[];
  tips: string[];
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

const trialLessons: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Теория: 3 основных хвата скребка для снижения нагрузки',
    duration: '08:40',
    description: 'Узнайте, как правильно удерживать инструмент (скребок IASTM), чтобы пальцы и кисти не уставали при работе с крупными клиентами. Разбор эргономики рук.',
    isUnlocked: true,
    videoThumb: 'https://images.unsplash.com/photo-1519823551278-64ac92834909?q=80&w=600&auto=format&fit=crop',
    steps: [
      'Хват «Триггерный» — для точечной работы по спазмам',
      'Хват «Ладонный» — для длинных дренажных линий',
      'Хват «Двуручный» — для глубокой проработки плотных фасций спины'
    ],
    tips: [
      'Никогда не сжимайте скребок слишком сильно. Инструмент должен лежать расслабленно.',
      'Угол наклона скребка к телу должен быть примерно 45 градусов.'
    ],
    quiz: {
      question: 'Под каким углом к поверхности кожи рекомендуется удерживать скребок при массаже?',
      options: [
        '90 градусов (строго вертикально)',
        '45 градусов (под наклоном)',
        '10-15 градусов (практически плашмя)'
      ],
      correctIndex: 1,
      explanation: 'Правильный ответ: 45 градусов. Это оптимальный рабочий угол для безопасного скольжения скребка и захвата фасции без травмирования кожи.'
    }
  },
  {
    id: 'lesson-2',
    title: 'Практика: Шейно-воротниковая зона (ШВЗ)',
    duration: '12:15',
    description: 'Пошаговый протокол декомпрессии верхнего плечевого пояса. Техники снятия спазма с трапециевидной мышцы без боли для клиента.',
    isUnlocked: true,
    videoThumb: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=600&auto=format&fit=crop',
    steps: [
      'Нанесение массажного масла и подготовка зоны',
      'Прогрев зоны ладонями (мануальное введение)',
      'Работа по ходу мышечных волокон трапеции',
      'Проработка мест прикрепления мышц у основания черепа'
    ],
    tips: [
      'Избегайте прямого контакта скребка с остистыми отростками позвонков.',
      'Всегда контролируйте натяжение кожи свободной рукой.'
    ],
    quiz: {
      question: 'Можно ли работать скребком непосредственно по костным выступам (позвонкам)?',
      options: [
        'Да, это помогает быстрее убрать спазм',
        'Нет, это категорически запрещено и может быть травматичным',
        'Можно, но только очень быстро'
      ],
      correctIndex: 1,
      explanation: 'Правильный ответ: Нет! Работа по костным выступам запрещена. Инструмент должен скользить исключительно по мягким тканям и мышцам.'
    }
  },
  {
    id: 'lesson-3',
    title: 'Полный протокол: Спина и Поясничный отдел',
    duration: '24:50',
    description: 'Премиум-урок из платного курса. Подготовка клиента, глубокая работа с длинными мышцами спины, триггерные точки поясницы.',
    isUnlocked: false,
    videoThumb: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop',
    steps: [],
    tips: []
  }
];

export default function TrialLessons({ onOpenLeadForm }: { onOpenLeadForm: () => void }) {
  const [activeLesson, setActiveLesson] = useState<Lesson>(trialLessons[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Simulate progress when video is "playing"
  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const selectLesson = (lesson: Lesson) => {
    if (!lesson.isUnlocked) return;
    setActiveLesson(lesson);
    setIsPlaying(false);
    setVideoProgress(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  return (
    <section id="trial-lessons" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-yellow-600/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Тест-драйв курса</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-4">
            Пробные уроки
          </h2>
          <p className="text-lg text-slate-300">
            Оцените качество съемки, подачу материала и удобство онлайн-платформы еще до оплаты курса. Начните с первых двух уроков прямо сейчас.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Simulated Video Area (8 columns on large) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
              {/* Thumbnail / Video Simulation Background */}
              <img 
                src={activeLesson.videoThumb} 
                alt={activeLesson.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Video State Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* Fake Timeline Progress Bar */}
              <div className="absolute bottom-16 left-6 right-6 h-1 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
                <motion.div 
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-400"
                  initial={{ width: '0%' }}
                  animate={{ width: isPlaying ? '100%' : '12%' }}
                  transition={{ duration: isPlaying ? 300 : 0.5, ease: 'linear' }}
                />
              </div>

              {/* Playback Controls */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayToggle}
                  className="p-5 md:p-6 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl shadow-amber-500/20 z-10"
                >
                  {isPlaying ? <Pause className="w-8 md:w-10 h-8 md:h-10 fill-current" /> : <Play className="w-8 md:w-10 h-8 md:h-10 fill-current ml-1" />}
                </button>
              </div>

              {/* Duration and Floating Info */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-sm text-slate-200">
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg backdrop-blur-md border border-slate-700">
                  <Clock className="w-4 h-4 text-amber-400" />
                  {activeLesson.duration}
                </span>
                <span className="bg-amber-500 text-slate-950 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  Демо-доступ
                </span>
              </div>
            </div>

            {/* Lesson details / Accordion description */}
            <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-800 backdrop-blur-sm space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white flex items-center gap-2">
                  <span className="text-amber-400">#</span> {activeLesson.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-base">{activeLesson.description}</p>
              </div>

              {activeLesson.steps.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Ключевые шаги в уроке:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
                    {activeLesson.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 bg-slate-900/40 p-3 rounded-xl border border-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeLesson.tips.length > 0 && (
                <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20 flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-sm font-semibold text-amber-300">Секретный совет от преподавателя:</span>
                    {activeLesson.tips.map((tip, idx) => (
                      <p key={idx} className="text-sm text-slate-300 leading-relaxed">
                        • {tip}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Quiz / Testing understanding */}
              {activeLesson.quiz && (
                <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-800 mt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded border border-emerald-500/30">
                      Интерактивный тест
                    </span>
                    <span className="text-xs text-slate-400">Проверьте свои знания</span>
                  </div>
                  <p className="font-medium text-slate-100">{activeLesson.quiz.question}</p>
                  
                  <div className="space-y-2.5">
                    {activeLesson.quiz.options.map((option, index) => {
                      let btnStyle = "bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-200";
                      if (selectedAnswer !== null) {
                        if (index === activeLesson.quiz?.correctIndex) {
                          btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300";
                        } else if (selectedAnswer === index) {
                          btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300";
                        } else {
                          btnStyle = "bg-slate-800/40 border-slate-800 text-slate-500 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={selectedAnswer !== null}
                          className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-300 flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{option}</span>
                          {selectedAnswer !== null && index === activeLesson.quiz?.correctIndex && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {showExplanation && activeLesson.quiz && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`p-4 rounded-lg text-sm leading-relaxed ${
                          selectedAnswer === activeLesson.quiz.correctIndex
                            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                        }`}
                      >
                        <p className="font-semibold mb-1">
                          {selectedAnswer === activeLesson.quiz.correctIndex ? '✨ Абсолютно верно!' : '💡 Почти угадали! Обратите внимание:'}
                        </p>
                        <p className="text-slate-300">{activeLesson.quiz.explanation}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* Side Lesson Picker (4 columns) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2 pl-1">
              Программа демо-уроков
            </h4>
            <div className="space-y-3">
              {trialLessons.map((lesson) => {
                const isActive = activeLesson.id === lesson.id;
                return (
                  <button
                    key={lesson.id}
                    onClick={() => selectLesson(lesson)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative group flex gap-3.5 ${
                      isActive
                        ? 'bg-amber-500/10 border-amber-500 text-white'
                        : lesson.isUnlocked
                        ? 'bg-slate-800/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-300'
                        : 'bg-slate-950/40 border-slate-900/50 text-slate-500 cursor-not-allowed opacity-75'
                    }`}
                  >
                    {/* Visual indicators */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-950 relative">
                        <img 
                          src={lesson.videoThumb} 
                          alt="" 
                          className="w-full h-full object-cover opacity-60"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40">
                          {lesson.isUnlocked ? (
                            <Play className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-white'}`} />
                          ) : (
                            <Lock className="w-4 h-4 text-slate-500" />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-slate-400">{lesson.duration}</span>
                        {!lesson.isUnlocked && (
                          <span className="text-[10px] bg-slate-900 text-slate-500 px-1.5 py-0.5 rounded border border-slate-800 font-medium">
                            Закрыто
                          </span>
                        )}
                      </div>
                      <h5 className="font-medium text-sm leading-snug group-hover:text-white transition-colors">
                        {lesson.title}
                      </h5>
                    </div>

                    {!lesson.isUnlocked && (
                      <div className="absolute top-4 right-4 text-slate-600 group-hover:text-amber-500 transition-colors">
                        <Lock className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Banner CTA */}
            <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl p-6 text-slate-950 shadow-xl shadow-amber-500/10 space-y-4">
              <h4 className="font-serif font-semibold text-lg leading-snug">
                Освойте полный курс и станьте сертифицированным мастером
              </h4>
              <p className="text-xs text-slate-900 font-medium leading-relaxed">
                Доступ ко всем 5 модулям, пошаговым видеоурокам скребкового массажа и именному сертификату. Окупаемость всего за 3 сеанса!
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenLeadForm}
                  className="w-full text-center bg-slate-950 text-white font-semibold py-3 px-4 rounded-xl hover:bg-slate-900 active:scale-95 transition-all duration-300 text-xs uppercase tracking-wider"
                >
                  Начать обучение за 4500₽
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
