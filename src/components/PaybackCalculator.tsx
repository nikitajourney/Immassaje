import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, Calendar, Users, TrendingUp, HelpCircle, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';

export default function PaybackCalculator() {
  const [sessionPrice, setSessionPrice] = useState<number>(1800);
  const [sessionsPerWeek, setSessionsPerWeek] = useState<number>(12);
  const [selectedPlanPrice, setSelectedPlanPrice] = useState<number>(9900);
  const [selectedPlanName, setSelectedPlanName] = useState<string>('Профессионал');

  const plans = [
    { name: 'Интенсив', price: 6900 },
    { name: 'Профессионал', price: 9900 },
    { name: 'Бизнес-СПА', price: 19900 },
  ];

  const weeklyIncome = sessionPrice * sessionsPerWeek;
  const monthlyIncome = Math.round(weeklyIncome * 4.33);
  const sessionsToPayback = Math.ceil(selectedPlanPrice / sessionPrice);
  
  // Assuming a massagist does average of 4 sessions a day, calculate workdays to recoup
  const averageSessionsPerDay = Math.min(Math.ceil(sessionsPerWeek / 5), 5) || 3;
  const daysToPayback = Math.ceil(sessionsToPayback / averageSessionsPerDay);

  return (
    <section id="calculator" className="bg-slate-50 py-24 px-4 md:px-8 border-b border-slate-200 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 tracking-wide uppercase">
            Интерактивный расчет
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase font-display">
            Калькулятор окупаемости
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Посмотрите, как быстро оправдаются ваши вложения в обучение, и оцените потенциал роста вашего личного дохода.
          </p>
        </div>

        {/* Calculator Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls (Col span 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-8 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-bold text-slate-900 text-lg sm:text-xl flex items-center gap-2 mb-6 uppercase font-display">
                <Calculator className="w-5 h-5 text-emerald-600" />
                <span>Настройте свои параметры</span>
              </h3>

              {/* Slider 1: Session Price */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">Стоимость вашего сеанса массажа:</label>
                  <span className="text-emerald-600 font-black text-lg sm:text-xl font-mono">
                    {sessionPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <input
                  id="calc-session-price-slider"
                  type="range"
                  min="1000"
                  max="5000"
                  step="100"
                  value={sessionPrice}
                  onChange={(e) => setSessionPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>1 000 ₽</span>
                  <span className="text-emerald-600/80 font-bold">Рекомендуемый минимум от 1 500 ₽</span>
                  <span>5 000 ₽</span>
                </div>
              </div>

              {/* Slider 2: Sessions per week */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">Количество сеансов в неделю:</label>
                  <span className="text-emerald-800 font-black text-lg sm:text-xl font-mono">
                    {sessionsPerWeek} сеансов
                  </span>
                </div>
                <input
                  id="calc-sessions-week-slider"
                  type="range"
                  min="2"
                  max="30"
                  step="1"
                  value={sessionsPerWeek}
                  onChange={(e) => setSessionsPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>2 сеанса (хобби)</span>
                  <span>15 сеансов (норма)</span>
                  <span>30 сеансов (максимум)</span>
                </div>
              </div>

              {/* Plan selector button group */}
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-bold text-slate-700 block">Выберите желаемый тариф курса:</label>
                <div className="grid grid-cols-3 gap-2">
                  {plans.map((p) => {
                    const isSelected = selectedPlanPrice === p.price;
                    return (
                      <button
                        key={p.name}
                        id={`calc-plan-btn-${p.name}`}
                        onClick={() => {
                          setSelectedPlanPrice(p.price);
                          setSelectedPlanName(p.name);
                        }}
                        className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-800'
                            : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-100/50'
                        }`}
                      >
                        <div className="uppercase tracking-wider font-display">{p.name}</div>
                        <div className="font-mono text-[10px] mt-0.5 text-slate-400">
                          {p.price.toLocaleString('ru-RU')} ₽
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contrast Comparison message */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 bg-red-50 border border-red-100 rounded-xl text-xs">
                <div className="flex items-center gap-1.5 text-red-700 font-bold mb-1 font-display">
                  <HeartPulse className="w-3.5 h-3.5 text-red-500" />
                  <span>Классический массаж</span>
                </div>
                <p className="text-slate-500 leading-normal">
                  Ограничен физическими силами массажиста. Износ суставов пальцев и кистей за 3–5 лет. Боли к концу дня.
                </p>
              </div>

              <div className="p-3.5 bg-emerald-50 border border-emerald-100 rounded-xl text-xs">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold mb-1 font-display">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Инструментальный массаж</span>
                </div>
                <p className="text-slate-600 leading-normal">
                  Скребок заменяет пальцы. Экономия сил до 80%. Проводите больше сеансов в удовольствие и без боли!
                </p>
              </div>
            </div>
          </div>

          {/* Results Display Panel (Col span 5) */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <span className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-widest inline-block font-mono">
                Ваш финансовый результат
              </span>
              
              {/* Financial metrics */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">Доход в неделю:</div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono mt-0.5">
                    {weeklyIncome.toLocaleString('ru-RU')} ₽
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">Доход в месяц:</div>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-0.5">
                    {monthlyIncome.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
              </div>

              {/* Payback speed visualization */}
              <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="text-xs text-slate-300 font-bold uppercase tracking-wider font-display">
                  Показатель окупаемости тарифа «{selectedPlanName}»:
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-950/40 border border-emerald-500/10 rounded-xl p-3 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                      {sessionsToPayback}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase mt-1">Сеансов / клиентов</div>
                  </div>

                  <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                      {daysToPayback}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase mt-1">Рабочих дней</div>
                  </div>
                </div>
                
                <p className="text-xs text-slate-400 text-center leading-relaxed">
                  *при средней нагрузке {averageSessionsPerDay} сеансов в рабочий день
                </p>
              </div>
            </div>

            {/* Quick trust factor & marketing hook */}
            <div className="pt-6 border-t border-slate-800 mt-6 space-y-4">
              <div className="flex gap-2.5 items-start text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Вы получаете готовые навыки, которые внедряются в прайс на следующий же день после завершения обучения.
                </span>
              </div>
              
              <div className="flex gap-2.5 items-start text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Инструментальный массаж позволяет поднять чек на <strong className="text-white">40-60%</strong> за счет премиального позиционирования и выраженного WOW-эффекта.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
