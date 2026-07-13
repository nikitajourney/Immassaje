import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Sparkles, Flame, Play, Calculator, Award } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-center overflow-hidden pt-28 pb-16 px-4 md:px-8 border-b border-slate-200">
      {/* Geometric background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wide w-fit"
          >
            <Flame className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>ИНСТРУМЕНТАЛЬНЫЙ МАССАЖ • ОНЛАЙН-КУРС</span>
          </motion.div>

          {/* Title */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none uppercase text-slate-900 font-display"
            >
              СОХРАНИ СВОИ РУКИ.<br />
              <span className="text-emerald-600 font-black">
                УДВОЙ СВОЙ ДОХОД.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 text-base md:text-lg max-w-xl leading-relaxed"
            >
              Научитесь работать с глубокими тканями без нагрузки на суставы. Пошаговая техника использования скребков для профессионалов. Снизьте нагрузку на кисти на <span className="text-emerald-600 font-bold">80%</span>.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <button
              onClick={() => onScrollToSection('demo-lessons')}
              className="group flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-md shadow-emerald-600/10 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>СМОТРЕТЬ ДЕМО-УРОКИ</span>
            </button>
            <button
              onClick={() => onScrollToSection('calculator')}
              className="flex items-center justify-center gap-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold px-8 py-4 rounded-xl shadow-sm transition-all duration-300 cursor-pointer"
            >
              <Calculator className="w-5 h-5 text-emerald-600" />
              <span>КАЛЬКУЛЯТОР ОКУПАЕМОСТИ</span>
            </button>
          </motion.div>

          {/* Quick Core Outcomes */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200"
          >
            <div className="flex items-center gap-3 p-1">
              <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">🛡️ Здоровые суставы</h4>
                <p className="text-xs text-slate-500">Защита кистей и пальцев</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-1">
              <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">💵 Рост дохода</h4>
                <p className="text-xs text-slate-500">Повышение чека от 40%</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-1">
              <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">😲 WOW-эффект</h4>
                <p className="text-xs text-slate-500">Клиенты в восторге</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Visual Feature Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Aesthetic geometric frame */}
          <div className="absolute -inset-1.5 bg-emerald-600 rounded-3xl opacity-10 blur-sm"></div>
          
          <div className="relative bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="aspect-[4/3] bg-slate-800 rounded-xl overflow-hidden relative border border-slate-700 flex items-center justify-center group shadow-inner">
              {/* Photo backdrop */}
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80" 
                alt="Instrumental Massage Scraper technique"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-80 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
              
              {/* Play symbol on visualization */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-slate-950/80 backdrop-blur-md p-3 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">Демо-доступ открыт</span>
                </div>
                <span className="text-[10px] text-slate-300 bg-white/10 px-2 py-0.5 rounded uppercase font-mono">3 урока бесплатно</span>
              </div>
            </div>

            {/* Quick specifications */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white flex items-center gap-2 font-display">
                <Award className="w-5 h-5 text-emerald-400" />
                <span>Обучение за 7 часов</span>
              </h3>
              
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>5 модулей:</strong> от физиологии до продвинутых протоколов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>20+ уроков:</strong> макро-съемка каждого хвата и угла</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Именной сертификат:</strong> электронный + физический</span>
                </li>
              </ul>

              {/* Conversion Trust Factor */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider font-mono">Средняя окупаемость</div>
                  <div className="text-lg font-black text-white mt-0.5">3 сеанса массажа</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Старт курса</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">Сразу после оплаты</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-xs text-slate-400 tracking-widest cursor-pointer hover:text-emerald-600 transition-colors" onClick={() => onScrollToSection('program')}>
        <span>ПРОГРАММА КУРСА</span>
        <div className="w-5 h-8 border border-slate-300 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-emerald-600 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
