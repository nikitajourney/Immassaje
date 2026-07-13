import { useState } from 'react';
import { Award, Mail, Send, CheckCircle } from 'lucide-react';

export default function Certificate() {
  const [userName, setUserName] = useState('Александра Ковалева');

  return (
    <section className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Inputs Content Info (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-800 text-sm font-medium border border-amber-500/20">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Именной Сертификат</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-slate-900">
                Подтвердите квалификацию
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Сразу после успешного прохождения онлайн-тестирования вам будет сгенерирован официальный электронный сертификат.
              </p>
            </div>

            {/* Dynamic input to test certificate name */}
            <div className="space-y-3 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Введите ваше имя для предпросмотра:
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                maxLength={30}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all"
                placeholder="Например: Иван Иванов"
              />
              <p className="text-xs text-slate-400">
                Имя мгновенно обновится на бланке справа ⚡
              </p>
            </div>

            {/* Certificate physical shipping details */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-slate-900 text-sm">Мгновенный электронный сертификат</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Доступен для скачивания в формате PDF высокого разрешения сразу по окончании курса.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-600 flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-slate-900 text-sm">Физический оригинал по почте</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    По запросу мы изготовим премиальный печатный сертификат с тиснением и отправим его Почтой России или СДЭКом в защитном тубусе.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Beautiful Certificate Render (7 columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
              
              {/* Premium Certificate visual look */}
              <div className="aspect-[4/3] rounded-2xl border-[12px] border-slate-950 p-6 md:p-10 flex flex-col justify-between relative bg-stone-50 overflow-hidden shadow-inner select-none">
                
                {/* Certificate Background ornaments */}
                <div className="absolute inset-0 border border-slate-300 m-2 pointer-events-none" />
                <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-amber-600 m-4 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-amber-600 m-4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-amber-600 m-4 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-amber-600 m-4 pointer-events-none" />
                
                {/* Micro logo header */}
                <div className="text-center space-y-1">
                  <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                    СЕРТИФИКАТ КВАЛИФИКАЦИИ
                  </span>
                  <span className="block text-[11px] font-serif uppercase tracking-widest text-amber-700 font-semibold">
                    INTERNATIONAL MASSAGE ACADEMY
                  </span>
                </div>

                {/* Main text body */}
                <div className="text-center space-y-4">
                  <span className="block text-[10px] text-slate-500 italic">
                    Настоящим подтверждается, что
                  </span>
                  
                  {/* Dynamic Name */}
                  <span className="block text-2xl md:text-3xl font-serif font-bold text-slate-900 border-b-2 border-slate-200 pb-2 max-w-md mx-auto truncate px-4">
                    {userName || 'Ваше Имя'}
                  </span>

                  <span className="block text-[10px] text-slate-600 leading-relaxed max-w-md mx-auto">
                    Успешно завершил(а) полный курс профессиональной подготовки по направлению
                    <strong className="block text-xs uppercase tracking-wide text-slate-900 mt-1 font-semibold">
                      «Инструментальный мобилизационный массаж мягких тканей (IASTM)»
                    </strong>
                  </span>
                </div>

                {/* Footer Signatures & stamp */}
                <div className="flex justify-between items-end px-4 text-[9px] text-slate-400 pt-6">
                  <div className="text-left space-y-1">
                    <span className="block font-medium text-slate-600">Руководитель Академии:</span>
                    <span className="block font-serif text-[11px] font-semibold text-slate-800 italic">Козлов А. В.</span>
                  </div>

                  {/* Simulated Academy Gold Stamp */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-amber-500/40 bg-amber-500/10 flex items-center justify-center relative -bottom-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-dashed border-amber-500/60 flex items-center justify-center">
                      <Award className="w-5 h-5 text-amber-600" />
                    </div>
                  </div>

                  <div className="text-right space-y-1">
                    <span className="block font-medium text-slate-600">Регистрационный номер:</span>
                    <span className="block font-mono text-slate-500 uppercase">IMA-2026-98442</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
