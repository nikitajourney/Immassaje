import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronDown, CheckCircle, Flame, GraduationCap, ShieldAlert, Heart, Activity } from 'lucide-react';

interface SyllabusSection {
  title: string;
  subtitle: string;
  type: 'theory' | 'practice';
  icon: any;
  lessons: string[];
}

const syllabusData: SyllabusSection[] = [
  {
    title: 'ТЕОРЕТИЧЕСКИЙ БЛОК',
    subtitle: 'Базовые основы для безопасной и уверенной работы',
    type: 'theory',
    icon: GraduationCap,
    lessons: [
      'Принципы работы с инструментом «скребком»',
      'Показания и противопоказания к процедуре инструментального массажа',
      'Правильная постановка техники рук и корпуса массажиста',
      'Подготовка клиента и рабочего места к процедуре'
    ]
  },
  {
    title: 'ПРАКТИКА: ЭТАП 1. СПИНА',
    subtitle: 'Базовый протокол снятия напряжения по всей длине позвоночника',
    type: 'practice',
    icon: Activity,
    lessons: [
      'Подготовка клиента (нанесение средства, разогрев)',
      'Проработка верха ягодиц и крестца',
      'Снятие спазма в поясничном отделе',
      'Проработка грудного отдела спины',
      'Шейно-воротниковая зона (ШВЗ)',
      'Работа с лопаткой и плечевым поясом',
      'Завершение процедуры (дренажный вывод)'
    ]
  },
  {
    title: 'ПРАКТИКА: ЭТАП 2. ВЕРХНИЕ КОНЕЧНОСТИ',
    subtitle: 'Снятие усталости рук и плечевого сустава',
    type: 'practice',
    icon: Heart,
    lessons: [
      'Работа с передней поверхностью рук',
      'Проработка боковой поверхности и предплечья'
    ]
  },
  {
    title: 'ПРАКТИКА: ЭТАП 3. ГРУДНАЯ КЛЕТКА',
    subtitle: 'Раскрытие диафрагмы и снятие зажимов грудных мышц',
    type: 'practice',
    icon: ShieldAlert,
    lessons: [
      'Техника безопасной работы с большими грудными мышцами'
    ]
  },
  {
    title: 'ПРАКТИКА: ЭТАП 4. НИЖНИЕ КОНЕЧНОСТИ',
    subtitle: 'Антицеллюлитный и спортивный протоколы проработки ног',
    type: 'practice',
    icon: Flame,
    lessons: [
      'Работа с передней поверхностью бедра',
      'Глубокая проработка задней поверхности бедра',
      'Ягодичная область (тонизирование и снятие триггеров)',
      'Задняя поверхность голени (икроножные мышцы)'
    ]
  }
];

export default function Syllabus() {
  const [openSectionIndex, setOpenSectionIndex] = useState<number>(0);

  const toggleSection = (index: number) => {
    setOpenSectionIndex(openSectionIndex === index ? -1 : index);
  };

  return (
    <section id="syllabus" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-sm font-medium mb-4 border border-amber-500/20">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Программа курса</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-slate-900 mb-4">
            Полноценная пошаговая программа
          </h2>
          <p className="text-lg text-slate-600">
            Каждый этап содержит пошаговую видеоинструкцию с подробными комментариями и разбором техники. Обучение построено от простого к сложному.
          </p>
        </div>

        {/* Syllabus Accordion list */}
        <div className="space-y-4">
          {syllabusData.map((section, idx) => {
            const isOpen = openSectionIndex === idx;
            const IconComponent = section.icon;

            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-amber-500/60 bg-amber-500/[0.02] shadow-md shadow-amber-500/[0.02]' 
                    : 'border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl mt-0.5 ${
                      section.type === 'theory' 
                        ? 'bg-slate-100 text-slate-800' 
                        : 'bg-amber-500/10 text-amber-600'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                          section.type === 'theory' 
                            ? 'bg-slate-200 text-slate-700' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {section.type === 'theory' ? 'Теория' : 'Практический Блок'}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {section.lessons.length} {section.lessons.length === 1 ? 'урок' : section.lessons.length <= 4 ? 'урока' : 'уроков'}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {section.title}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className={`p-1.5 rounded-full border transition-transform duration-300 mt-2 ${
                    isOpen ? 'border-amber-500 text-amber-600 rotate-180' : 'border-slate-200 text-slate-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Collapsible content panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-slate-100 bg-white/60 p-6 md:p-8 space-y-3.5">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Что внутри этого модуля:
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {section.lessons.map((lesson, lessonIdx) => (
                            <motion.div 
                              key={lessonIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: lessonIdx * 0.05 }}
                              className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100"
                            >
                              <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                              <div className="space-y-0.5">
                                <span className="text-xs text-slate-400 font-medium">Урок {lessonIdx + 1}</span>
                                <p className="text-sm font-semibold text-slate-800 leading-snug">{lesson}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
