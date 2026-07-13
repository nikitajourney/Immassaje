import { MessageSquare, Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  city: string;
  avatar: string;
  rating: number;
  careerResult: string;
  healthResult: string;
  comment: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Мария Семенова',
    city: 'Екатеринбург',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop',
    rating: 5,
    careerResult: 'Подняла цену сеанса с 1200₽ до 2200₽',
    healthResult: 'Пальцы рук больше не болят вообще',
    comment: 'Скребок буквально спас мою карьеру массажиста! Раньше после 3-го клиента за день большие пальцы выкручивало от боли, плакала по вечерам. Теперь со скребком работаю легко, глубина проработки сумасшедшая. Все клиенты в восторге, запись на 2 недели вперед!'
  },
  {
    name: 'Артем Григорьев',
    city: 'Краснодар',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop',
    rating: 5,
    careerResult: 'Окупил курс за 1 день работы',
    healthResult: 'Снизилась утомляемость спины и рук',
    comment: 'Офигенный курс! Все очень четко, без воды. Практические видео сняты очень крупно, видно каждый хват и угол наклона. Применил технику уже на следующий день после изучения. Клиенты говорят, что ощущения намного глубже, чем при обычном массаже рук.'
  },
  {
    name: 'Ольга Кузнецова',
    city: 'Нижний Новгород',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop',
    rating: 5,
    careerResult: 'Добавила новую услугу IASTM в прайс',
    healthResult: 'Прошли постоянные мозоли на суставах',
    comment: 'Купила курс с сомнением из-за низкой цены 4500 руб, думала будет ерунда. Но качество превзошло все ожидания! 5 модулей, прекрасный разбор противопоказаний, очень ответственный подход к анатомии. Сертификат получила сразу в PDF, распечатала и повесила в кабинете.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
            <MessageSquare className="w-4 h-4 text-amber-600" />
            <span>Отзывы выпускников</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-4">
            Истории успеха наших учеников
          </h2>
          <p className="text-lg text-slate-300">
            Смотрите, как инструментальный массаж изменил рабочие процессы и доходы практикующих массажистов.
          </p>
        </div>

        {/* Testimonials list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((test, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-850 p-6 md:p-8 rounded-3xl flex flex-col justify-between relative hover:border-slate-700 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-6">
                
                {/* Header Rating & Quote */}
                <div className="flex justify-between items-start">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-slate-700/60 flex-shrink-0" />
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{test.comment}"
                </p>

              </div>

              {/* Success Metrics / Badges */}
              <div className="pt-6 mt-6 border-t border-slate-850 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-emerald-400">💵 Карьера:</span>
                  <span className="text-slate-300">{test.careerResult}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-amber-400">🛡️ Здоровье:</span>
                  <span className="text-slate-300">{test.healthResult}</span>
                </div>
              </div>

              {/* Bio details */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-850">
                <img 
                  src={test.avatar} 
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-700"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-0.5">
                  <span className="block text-sm font-bold text-white leading-tight">{test.name}</span>
                  <span className="block text-[11px] text-slate-400 font-medium">г. {test.city}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
