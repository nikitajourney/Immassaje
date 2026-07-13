import { BookOpen, Video, Clock, LayoutGrid, Smartphone, ShieldCheck, Heart, UserCheck } from 'lucide-react';

export default function CourseIncludes() {
  const features = [
    {
      title: '5 модулей',
      desc: 'От фундаментальной теории до пошаговых схем отработки на каждую зону тела.',
      icon: LayoutGrid,
      bgClass: 'bg-amber-500/10 text-amber-600 border-amber-500/20'
    },
    {
      title: '20+ видеоуроков',
      desc: 'Подробный практический контент с крупными планами техники работы скребком.',
      icon: Video,
      bgClass: 'bg-blue-500/10 text-blue-600 border-blue-500/20'
    },
    {
      title: '7 часов концентрата',
      desc: 'Никакой лишней «воды» — только применимые техники и пошаговые протоколы.',
      icon: Clock,
      bgClass: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
    },
    {
      title: '6 месяцев доступа',
      desc: 'Изучайте материалы в удобном темпе с любого устройства (телефона или ПК) 24/7.',
      icon: Smartphone,
      bgClass: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20'
    },
    {
      title: 'Именной сертификат',
      desc: 'Получите электронный сертификат сразу и возможность заказать физический по почте.',
      icon: ShieldCheck,
      bgClass: 'bg-purple-500/10 text-purple-600 border-purple-500/20'
    },
    {
      title: 'Техподдержка 24/7',
      desc: 'Мы поможем с любым техническим вопросом во время прохождения обучения.',
      icon: UserCheck,
      bgClass: 'bg-rose-500/10 text-rose-600 border-rose-500/20'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-4">
            Что конкретно вы получаете?
          </h2>
          <p className="text-lg text-slate-300">
            Полный пакет материалов для быстрого старта. Обучение спроектировано по системе «от простого к сложному».
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className={`p-3 rounded-xl inline-block ${feat.bgClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="text-xs text-amber-500/60 font-medium select-none pt-2">
                  Входит в базовый тариф
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
