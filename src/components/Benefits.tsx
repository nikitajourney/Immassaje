import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, PiggyBank, HeartHandshake, Eye, Award, CheckSquare, Zap, Smile } from 'lucide-react';

export default function Benefits() {
  const highlights = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-emerald-600" />,
      title: 'Здоровые суставы рук',
      description: 'Главная проблема массажистов — артриты, артрозы и туннельный синдром. Скребок переносит всю силу давления на крупные мышцы спины и плеч массажиста, полностью разгружая пальцы и мелкие суставы кисти.'
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-emerald-600" />,
      title: 'Высокий рост дохода',
      description: 'Многие клиенты готовы платить на 40-50% больше за технологичный и глубокий инструментальный массаж. Вы сможете повысить свой средний чек и зарабатывать больше на тех же сеансах.'
    },
    {
      icon: <Smile className="w-6 h-6 text-emerald-600" />,
      title: 'WOW-эффект у клиентов',
      description: 'Скребок обеспечивает невероятный фасциальный релиз, убирая "компьютерную шею", хронические боли и отечность за считанные минуты. Клиенты видят визуальный и чувствуют физический результат мгновенно.'
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: 'Быстрое освоение',
      description: 'Всего за 7 академических часов и 20+ подробных видеоуроков в макро-съемке вы полностью поставите технику и хват, независимо от вашего предыдущего стажа в массаже.'
    }
  ];

  return (
    <section id="benefits" className="bg-white py-24 px-4 md:px-8 border-b border-slate-200 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Header Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 tracking-wide uppercase">
            Почему это работает?
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase font-display">
            Тройной результат курса
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Инструментальный массаж — это не просто дань моде, это инвестиция в ваше долголетие в профессии и лояльность ваших любимых клиентов.
          </p>
        </div>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((h, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-emerald-600/30 rounded-2xl p-6 sm:p-8 space-y-4 transition-all duration-300 shadow-sm group text-left"
            >
              <div className="p-3 bg-emerald-100/70 text-emerald-700 rounded-xl border border-emerald-200/50 w-fit group-hover:bg-emerald-600 group-hover:text-white transition-all">
                {h.icon}
              </div>
              
              <div className="space-y-2">
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl group-hover:text-emerald-600 transition-colors font-display">
                  {h.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {h.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Interactive quote */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 text-left shadow-lg">
          <div className="aspect-square w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-slate-800 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80" 
              alt="Course Founder" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-2 flex-1">
            <p className="text-sm text-slate-300 italic leading-relaxed">
              «Раньше я думала, что массажист должен страдать ради результата, а боль в суставах — это профессиональное клеймо. Инструментальный массаж полностью перевернул мою реальность. Теперь я работаю легче, клиенты получают в разы больше эффекта, а мои руки чувствуют себя идеально отдохнувшими даже после 7-го сеанса за день.»
            </p>
            <div className="text-xs">
              <strong className="text-white block font-display">Ирина Сазонова</strong>
              <span className="text-slate-400">Основатель школы, спортивный массажист с 14-летним стажем</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
