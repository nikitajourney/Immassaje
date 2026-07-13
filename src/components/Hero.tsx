import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Shield, Award, TrendingUp, Play } from 'lucide-react';

export default function Hero({ 
  onOpenLeadForm,
  onScrollToTrial 
}: { 
  onOpenLeadForm: () => void;
  onScrollToTrial: () => void;
}) {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Premium ambient light glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-yellow-600/10 rounded-full filter blur-[130px] pointer-events-none" />
      
      {/* Interactive geometric mesh lines overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content Info (7 columns) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tag/Badge of Trust */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold tracking-wider uppercase mx-auto lg:mx-0"
            >
              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>Освойте IASTM-технику за 7 часов</span>
            </motion.div>

            {/* Main Punchy Sales Heading */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight leading-tight text-white"
              >
                Инструментальный <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  массаж скребком
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Облегчите нагрузку на руки и пальцы на <strong>65%</strong> без потери глубины проработки. Научитесь уверенно работать с крупными клиентами и зарабатывать больше.
              </motion.p>
            </div>

            {/* Micro value badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 pt-2 text-left"
            >
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 space-y-1">
                <Shield className="w-5 h-5 text-amber-500" />
                <div className="text-xs text-slate-400">Суставы рук</div>
                <div className="text-sm font-bold text-slate-100">Здоровы на 100%</div>
              </div>
              
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 space-y-1">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <div className="text-xs text-slate-400">Окупаемость</div>
                <div className="text-sm font-bold text-slate-100">всего за 3 сеанса</div>
              </div>

              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 space-y-1">
                <Award className="w-5 h-5 text-amber-500" />
                <div className="text-xs text-slate-400">Сертификат</div>
                <div className="text-sm font-bold text-slate-100">Электронный & Почтой</div>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onOpenLeadForm}
                className="w-full sm:w-auto bg-amber-500 text-slate-950 font-bold py-4 px-8 rounded-2xl hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/20 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
              >
                <span>Начать обучение</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToTrial}
                className="w-full sm:w-auto bg-slate-900 text-slate-200 font-semibold py-4 px-8 rounded-2xl hover:bg-slate-800 hover:text-white border border-slate-800 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <Play className="w-4 h-4 text-amber-500 fill-current" />
                <span>Смотреть пробные уроки</span>
              </button>
            </motion.div>

            {/* Quick social proof bullet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Уже более 340+ массажистов прошли обучение в этом месяце</span>
            </motion.div>

          </div>

          {/* Right Hero Visuals / Presentation Frame (5 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full"
          >
            {/* MOBILE/TABLET VIEW: Square Photo (1:1 Aspect) */}
            <div className="block lg:hidden relative mx-auto max-w-sm rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl p-2.5">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600&h=600&auto=format&fit=crop" 
                  alt="Преподаватель со скребком (мобильная версия)" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating reviews badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 flex items-center gap-3 shadow-xl">
                  <div className="w-9 h-9 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4.9
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-xs font-semibold text-white">Средняя оценка</span>
                    <span className="block text-[9px] text-slate-400">На основе 240+ отзывов</span>
                  </div>
                </div>

                {/* Scraper highlight outline effect */}
                <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-lg">
                  IASTM Техника
                </div>
              </div>
            </div>

            {/* DESKTOP/PC VIEW: Wide Photo (3:2 Aspect for maximum visual impact) */}
            <div className="hidden lg:block relative mx-auto max-w-xl rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl p-3">
              <div className="aspect-[3/2] rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&h=800&auto=format&fit=crop" 
                  alt="Преподаватель со скребком (версия для ПК)" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating reviews badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex items-center gap-3.5 shadow-xl">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold flex-shrink-0">
                    4.9
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-xs font-semibold text-white">Средняя оценка выпускников</span>
                    <span className="block text-[10px] text-slate-400">На основе 240+ подробных отзывов</span>
                  </div>
                </div>

                {/* Scraper highlight outline effect */}
                <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-lg">
                  IASTM Техника
                </div>
              </div>
            </div>

            {/* Extra side decorative blur element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-500/20 rounded-full filter blur-[40px] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
