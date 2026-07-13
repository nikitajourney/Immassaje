import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'Где мне купить скребок и какой лучше выбрать?',
      answer: 'В первом бесплатном модуле курса мы подробно разбираем все виды инструментов, материалы (металл, рог, дерево, камень) и даем прямые ссылки на проверенных поставщиков. Для старта вам вполне подойдет недорогой скребок из медицинской стали или карельского нефрита стоимостью от 1200 рублей.'
    },
    {
      question: 'Нужен ли медицинский диплом для прохождения этого курса?',
      answer: 'Нет, для прохождения курса и овладения техникой медицинское образование не требуется. Инструментальный массаж относится к оздоровительным, спа- и эстетическим процедурам. Однако мы детально разбираем все противопоказания и правила безопасности, чтобы ваша работа была на 100% профессиональной и безопасной.'
    },
    {
      question: 'Как долго длится доступ к учебным материалам курса?',
      answer: 'В зависимости от выбранного тарифа, доступ предоставляется на период от 3 до 6 месяцев (а на бизнес-тарифе — бессрочно). Этого более чем достаточно, чтобы в спокойном темпе изучить теорию, поставить руку по видео и несколько раз отработать приемы на моделях.'
    },
    {
      question: 'Будет ли куратор проверять мою технику?',
      answer: 'Да! На тарифах «ПРОФЕССИОНАЛ» и «БИЗНЕС-СПА» за вами закрепляется персональный куратор — практикующий мастер. Вы сможете отправлять короткие видео своей отработки хватов и движений в чат поддержки, чтобы куратор помог скорректировать угол наклона скребка и эргономику.'
    },
    {
      question: 'Как отправляется бумажный именной сертификат?',
      answer: 'После успешной сдачи итогового онлайн-тестирования в личном кабинете, электронная версия сертификата мгновенно становится доступной для скачивания. Бумажный сертификат на плотной текстурной бумаге с мокрой гербовой печатью упаковывается в защитный конверт и отправляется Почтой РФ первым классом. Доставка бесплатна.'
    }
  ];

  return (
    <section id="faq" className="bg-slate-50 py-24 px-4 md:px-8 border-b border-slate-200 relative">
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 tracking-wide uppercase">
            Частые вопросы
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase font-display">
            Отвечаем на вопросы
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Не нашли нужный ответ? Мы собрали самые частые вопросы студентов перед началом обучения.
          </p>
        </div>

        {/* Collapsible items */}
        <div className="space-y-4 text-left">
          {faqItems.map((item, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen 
                    ? 'bg-white border-emerald-600' 
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => setActiveIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <span className="font-bold text-sm sm:text-base text-slate-900 font-display">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1 bg-slate-50 rounded-full text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-600 bg-emerald-50' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {item.answer}
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
