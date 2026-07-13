import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, CheckCircle, ChevronDown, Sparkles, Layers, Users, Zap, HelpCircle } from 'lucide-react';

interface ProgramModule {
  title: string;
  badge: string;
  icon: React.ReactNode;
  description: string;
  lessons: string[];
}

export default function CourseProgram() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const modules: ProgramModule[] = [
    {
      title: 'ТЕОРЕТИЧЕСКИЙ БЛОК: База безопасности и физиология',
      badge: 'Модуль 1',
      icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
      description: 'Перед началом практики вы получите прочную теоретическую базу для безопасной и эффективной работы. Узнаете, как скребок воздействует на фасции и как избежать ошибок.',
      lessons: [
        'Принципы работы с профессиональным инструментом "скребком"',
        'Медицинские показания к процедуре',
        'Абсолютные и относительные противопоказания (опасные зоны)',
        'Правильная эргономичная постановка техники рук массажиста',
        'Правильная подготовка кожи клиента к процедуре'
      ]
    },
    {
      title: 'ПРАКТИЧЕСКИЙ БЛОК: ЭТАП 1. СПИНА',
      badge: 'Модуль 2',
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      description: 'Самая востребованная зона у 90% клиентов. Полноценный глубокий протокол снятия болей, триггеров и мышечной усталости.',
      lessons: [
        'Подготовка клиента и диагностическое поглаживание',
        'Проработка верхней части ягодиц и крестцового сочленения',
        'Глубокий релиз поясничного отдела',
        'Проработка грудного отдела (широчайшие, паравертебральные мышцы)',
        'Снятие спазма шейно-воротниковой зоны',
        'Ювелирная работа с лопаткой и плечевым поясом',
        'Завершение процедуры и лимфодренаж'
      ]
    },
    {
      title: 'ПРАКТИЧЕСКИЙ БЛОК: ЭТАП 2. ВЕРХНИЕ КОНЕЧНОСТИ',
      badge: 'Модуль 3',
      icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
      description: 'Освобождение рук от напряжения для офисных работников, спортсменов и тех, кто работает за компьютером.',
      lessons: [
        'Проработка передней поверхности руки (бицепс, предплечье)',
        'Проработка боковой и задней поверхности (трицепс, дельтовидная)'
      ]
    },
    {
      title: 'ПРАКТИЧЕСКИЙ БЛОК: ЭТАП 3. ГРУДНАЯ КЛЕТКА',
      badge: 'Модуль 4',
      icon: <Zap className="w-5 h-5 text-emerald-600" />,
      description: 'Критически важный этап для раскрытия осанки, улучшения дыхания и лимфотока.',
      lessons: [
        'Работа с большими и малыми грудными мышцами',
        'Освобождение ключичной зоны и межреберных пространств'
      ]
    },
    {
      title: 'ПРАКТИЧЕСКИЙ БЛОК: ЭТАП 4. НИЖНИЕ КОНЕЧНОСТИ',
      badge: 'Модуль 5',
      icon: <Users className="w-5 h-5 text-emerald-600" />,
      description: 'Мощный антицеллюлитный, лимфодренажный и спортивный протокол для ног.',
      lessons: [
        'Глубокий массаж передней поверхности бедра (квадрицепс)',
        'Проработка задней поверхности бедра (бицепс бедра, фасциальный релиз)',
        'Скульптурирование ягодичной области',
        'Снятие спазмов задней поверхности голени (икроножные мышцы)'
      ]
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="program" className="bg-slate-50 py-24 px-4 md:px-8 border-b border-slate-200 relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 tracking-wide uppercase">
            Учебный план курса
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase font-display">
            Программа Обучения
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Полноценная система от простого к сложному. 5 тематических модулей, закрывающих все потребности ваших будущих клиентов.
          </p>
        </div>

        {/* Interactive Accordion Program */}
        <div className="space-y-4">
          {modules.map((mod, index) => {
            const isOpen = activeAccordion === index;
            return (
              <div 
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-emerald-600/40 shadow-sm' 
                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Header button */}
                <button
                  id={`program-accordion-btn-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl shrink-0 ${isOpen ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                      {mod.icon}
                    </div>
                    <div>
                      <span className="text-[10px] text-emerald-600 uppercase font-mono font-bold tracking-wider block mb-1">
                        {mod.badge}
                      </span>
                      <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-900 font-display">
                        {mod.title}
                      </h3>
                    </div>
                  </div>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-600 bg-emerald-50' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4">
                        <p className="text-sm text-slate-600 leading-relaxed max-w-2xl bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                          {mod.description}
                        </p>
                        
                        <div className="space-y-2.5">
                          <h4 className="text-xs uppercase font-extrabold text-slate-700 tracking-wider font-display">Содержание практических уроков:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {mod.lessons.map((lesson, lIdx) => (
                              <div key={lIdx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl hover:bg-slate-100/50 transition-colors border border-slate-200/40">
                                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="text-xs sm:text-sm text-slate-700 font-medium">{lesson}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Course Duration Highlight Badge */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 text-center space-y-4 shadow-sm">
          <div className="flex flex-wrap justify-around gap-6 items-center">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">7 ЧАСОВ</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Интенсивного концентрата знаний</div>
            </div>
            <div className="w-px h-10 bg-slate-800 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">20+ УРОКОВ</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Пошаговых видеоинструкций</div>
            </div>
            <div className="w-px h-10 bg-slate-800 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">100% ОНЛАЙН</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Доступ из любой точки мира</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
