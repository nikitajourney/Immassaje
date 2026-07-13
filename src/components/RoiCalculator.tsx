import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, DollarSign, Calendar, TrendingUp, ShieldCheck, HelpCircle } from 'lucide-react';

export default function RoiCalculator({ onOpenLeadForm }: { onOpenLeadForm: () => void }) {
  const [sessionPrice, setSessionPrice] = useState<number>(1500);
  const [clientsPerWeek, setClientsPerWeek] = useState<number>(5);
  const courseCost = 4500;

  // Calculations
  const sessionsToPayback = Math.ceil(courseCost / sessionPrice);
  const weeksToPayback = (sessionsToPayback / clientsPerWeek).toFixed(1);
  const monthlyRevenue = clientsPerWeek * sessionPrice * 4.33; // 4.33 weeks per month
  const annualRevenue = clientsPerWeek * sessionPrice * 52;

  // Let's also calculate hand workload relief
  const handReliefPercentage = 65; // Estimated fatigue reduction with scrapers

  return (
    <section id="roi-calculator" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Visual background decor */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-slate-200 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 text-slate-800 text-sm font-medium mb-4 border border-slate-900/10">
            <Calculator className="w-4 h-4 text-amber-600" />
            <span>Калькулятор окупаемости</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-slate-900 mb-4">
            Посчитайте свою выгоду и окупаемость
          </h2>
          <p className="text-lg text-slate-600">
            Курс — это не расходы, а инвестиция. Скребковый массаж позволяет поднять чек на услугу и работать без усталости рук.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Inputs Section (5 columns) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-lg shadow-slate-100 flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2 pb-4 border-b border-slate-100">
                <span>Параметры вашей работы</span>
              </h3>

              {/* Slider 1: Session Price */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-slate-600">Средняя стоимость вашего сеанса:</span>
                  <span className="font-bold text-amber-600 text-lg">{sessionPrice.toLocaleString()} ₽</span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="4000"
                  step="100"
                  value={sessionPrice}
                  onChange={(e) => setSessionPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>800 ₽</span>
                  <span>1 500 ₽ (Средняя)</span>
                  <span>4 000 ₽</span>
                </div>
              </div>

              {/* Slider 2: Clients Per Week */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-slate-600">Количество сеансов со скребком в неделю:</span>
                  <span className="font-bold text-amber-600 text-lg">{clientsPerWeek} сеансов</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  step="1"
                  value={clientsPerWeek}
                  onChange={(e) => setClientsPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>1 сеанс</span>
                  <span>10 сеансов</span>
                  <span>25 сеансов</span>
                </div>
              </div>
            </div>

            {/* Health Shield Benefit Card */}
            <div className="mt-8 bg-amber-500/5 rounded-2xl p-4 border border-amber-500/10 flex gap-3.5">
              <ShieldCheck className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-slate-900">Защита здоровья ваших суставов</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Использование массажного инструмента снижает физическую нагрузку на ваши большие пальцы и суставы кисти на <strong className="text-amber-700">{handReliefPercentage}%</strong>, увеличивая срок вашей профессиональной карьеры на годы.
                </p>
              </div>
            </div>
          </div>

          {/* Outputs Section (7 columns) */}
          <div className="lg:col-span-7 bg-slate-900 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Background glowing sphere */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full filter blur-[80px]" />

            <div className="space-y-6 relative z-10">
              <h3 className="text-xl font-semibold text-slate-200 pb-4 border-b border-slate-800">
                Результаты расчёта окупаемости
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Payback Metric */}
                <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-800">
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    Полная окупаемость
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-serif font-semibold text-white">
                      за {sessionsToPayback} {sessionsToPayback === 1 ? 'сеанс' : sessionsToPayback >= 2 && sessionsToPayback <= 4 ? 'сеанса' : 'сеансов'}
                    </div>
                    <p className="text-xs text-slate-400">
                      Это всего {weeksToPayback} {Number(weeksToPayback) <= 1 ? 'недели' : 'недель'} работы при вашей нагрузке!
                    </p>
                  </div>
                </div>

                {/* Return on Investment % */}
                <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-800">
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    Прибыль в первый месяц
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-serif font-semibold text-emerald-400">
                      +{Math.round(monthlyRevenue - courseCost).toLocaleString()} ₽
                    </div>
                    <p className="text-xs text-slate-400">
                      С учетом стоимости курса в 4 500 ₽
                    </p>
                  </div>
                </div>
              </div>

              {/* Income Growth Visual Chart */}
              <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800 space-y-4">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                  Прогноз дополнительного дохода на основе выбранных параметров:
                </span>

                <div className="space-y-3.5">
                  {/* Monthly Projection Row */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Дополнительно в месяц:</span>
                      <span className="font-bold text-white">{Math.round(monthlyRevenue).toLocaleString()} ₽</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-amber-500 h-full rounded-full" 
                        style={{ width: `${Math.min(100, (monthlyRevenue / 107500) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Annual Projection Row */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Дополнительно за год:</span>
                      <span className="font-bold text-amber-400 text-lg">{Math.round(annualRevenue).toLocaleString()} ₽</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full" 
                        style={{ width: `${Math.min(100, (annualRevenue / 1290000) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payback Action Button */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-4 relative z-10">
              <div className="text-center sm:text-left">
                <div className="text-xs text-slate-400">Стоимость курса обучения:</div>
                <div className="text-2xl font-bold text-white flex items-baseline gap-1.5 justify-center sm:justify-start">
                  4 500 ₽
                  <span className="text-xs line-through text-slate-500 font-normal">9 000 ₽</span>
                </div>
              </div>
              <button
                onClick={onOpenLeadForm}
                className="w-full sm:w-auto sm:ml-auto bg-amber-500 text-slate-950 font-semibold py-3.5 px-8 rounded-xl hover:bg-amber-400 active:scale-95 transition-all duration-300 shadow-lg shadow-amber-500/10 text-sm uppercase tracking-wider"
              >
                Начать обучение
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
