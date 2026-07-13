import { ShieldAlert, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export default function MainResults() {
  const steps = [
    {
      id: 'step-1',
      title: '🛡️ Здоровые суставы рук',
      description: 'Скребок забирает на себя до 65% осевой нагрузки. Суставы ваших пальцев и кистей больше не болят, не деформируются и отдыхают во время работы.',
      badge: 'Безопасность',
      colorClass: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'step-2',
      title: '💵 Рост вашего дохода',
      description: 'Вы сможете обслуживать крупных клиентов без усталости и проводить на 3-4 сеанса в день больше. Это увеличит вашу месячную прибыль на 45 000 ₽+',
      badge: 'Эффективность',
      colorClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 'step-3',
      title: '😲 WOW-эффект у клиентов',
      description: 'Инструментальное воздействие обеспечивает невероятную глубину проработки фасций. Клиенты видят и чувствуют результат декомпрессии уже после 1-го сеанса.',
      badge: 'Лояльность',
      colorClass: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    }
  ];

  return (
    <section className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-slate-900 mb-4">
            Главный результат вашего обучения
          </h2>
          <p className="text-lg text-slate-600">
            Освоив скребковую технику, вы перейдете на абсолютно новый уровень качества работы, сохраняя свое физическое здоровье.
          </p>
        </div>

        {/* 3 Step Visual Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => (
            <div 
              key={step.id}
              className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 relative flex flex-col justify-between hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group"
            >
              {/* Connector Arrow for desktops */}
              {idx < 2 && (
                <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-10 p-2 bg-white rounded-full border border-slate-200 shadow-md">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              )}

              <div className="space-y-6">
                {/* Metric / Index badge */}
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${step.colorClass}`}>
                    {step.badge}
                  </span>
                  <span className="text-4xl font-serif font-bold text-slate-200 select-none group-hover:text-amber-500/20 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-amber-600">
                <span>Подробнее в программе</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
