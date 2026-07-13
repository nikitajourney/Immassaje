import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, Mail, FileDown, CheckCircle2, Sparkles } from 'lucide-react';

export default function CertificateShowcase() {
  const [studentName, setStudentName] = useState<string>('Елена Колесникова');
  const [certType, setCertType] = useState<'digital' | 'physical'>('digital');
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const todayDate = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  return (
    <section id="certificate" className="bg-slate-50 py-24 px-4 md:px-8 border-b border-slate-200 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 tracking-wide uppercase">
            Официальное подтверждение
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase font-display">
            Именной Сертификат
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Сделайте примерку вашего будущего документа. Напишите свои данные ниже и посмотрите, как будет выглядеть ваш именной сертификат после окончания обучения.
          </p>
        </div>

        {/* Certificate Designer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Box (Col span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2 font-display">
                <Award className="w-5 h-5 text-emerald-600" />
                <span>Введите ваши данные</span>
              </h3>

              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Имя и фамилия на сертификате:</label>
                <input
                  id="cert-student-name-input"
                  type="text"
                  maxLength={40}
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value || 'Ваше Имя')}
                  placeholder="Иван Иванов"
                  className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none transition-all"
                />
                <span className="text-[10px] text-slate-400 leading-normal block">
                  *Рекомендуется вводить полностью фамилию и имя для официальной регистрации в реестре выпускников.
                </span>
              </div>

              {/* Certificate Type Toggle */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Формат получения:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    id="cert-type-digital-btn"
                    onClick={() => setCertType('digital')}
                    className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer flex items-center justify-center gap-2 ${
                      certType === 'digital'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-800 font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-100/50'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Электронный</span>
                  </button>

                  <button
                    id="cert-type-physical-btn"
                    onClick={() => setCertType('physical')}
                    className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer flex items-center justify-center gap-2 ${
                      certType === 'physical'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-800 font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-100/50'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Физический почтой</span>
                  </button>
                </div>
              </div>

              {/* Key Features about certificate */}
              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Электронная версия</strong> генерируется автоматически сразу после сдачи итогового теста.</span>
                </div>
                <div className="flex gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Физический сертификат</strong> изготавливается на фактурной плотной бумаге с тиснением и гербовой печатью.</span>
                </div>
                <div className="flex gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Документ имеет уникальный номер лицензии и подтверждает квалификацию мастера.</span>
                </div>
              </div>

              {/* Interactive Download Call */}
              <button
                id="cert-download-btn"
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-xl text-xs sm:text-sm uppercase flex items-center justify-center gap-2 shadow-sm transform active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isDownloading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Генерация макета...</span>
                  </>
                ) : (
                  <>
                    <FileDown className="w-4 h-4" />
                    <span>Получить демонстрационный PDF</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Certificate Graphic Showcase (Col span 7) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-xl aspect-[1.414/1] bg-amber-50/95 border-8 border-stone-800 p-4 sm:p-8 md:p-10 rounded-lg shadow-xl text-stone-800 flex flex-col justify-between select-none overflow-hidden font-serif">
              
              {/* Guilloche border watermark layout */}
              <div className="absolute inset-2 border border-stone-400/40 pointer-events-none" />
              <div className="absolute inset-3 border-2 border-stone-600/20 pointer-events-none" />
              
              {/* Abstract decorative background seals */}
              <div className="absolute -right-16 -bottom-16 w-48 h-48 border-8 border-stone-200/20 rounded-full pointer-events-none" />
              <div className="absolute -left-16 -top-16 w-48 h-48 border-8 border-stone-200/20 rounded-full pointer-events-none" />

              {/* Top Row: School Label & Stamp */}
              <div className="flex justify-between items-start">
                <div className="space-y-0.5">
                  <div className="text-[9px] sm:text-[11px] font-sans font-black tracking-widest text-stone-900 uppercase">
                    ACADEMY OF MASSAGE
                  </div>
                  <div className="text-[7px] sm:text-[9px] font-sans text-stone-500 tracking-wider uppercase font-medium">
                    Лицензия № RU-44390-EM
                  </div>
                </div>

                {/* Simulated Certificate ID */}
                <div className="text-right text-[7px] sm:text-[9px] font-mono text-stone-500">
                  ID: GUA-2026-{(studentName.length * 7).toString().padStart(4, '0')}
                </div>
              </div>

              {/* Middle Section: Main Text */}
              <div className="text-center space-y-3 sm:space-y-4 my-auto relative z-10">
                <span className="text-[10px] sm:text-[12px] font-sans font-extrabold tracking-[0.25em] text-stone-500 uppercase">
                  СЕРТИФИКАТ
                </span>
                
                <h3 className="text-stone-900 text-lg sm:text-2xl font-semibold tracking-normal max-w-md mx-auto leading-relaxed">
                  Настоящим подтверждается, что
                </h3>

                {/* Student Name: Dynamically Rendered */}
                <div className="relative py-1.5 inline-block min-w-[200px] sm:min-w-[300px]">
                  <div className="text-xl sm:text-3xl font-black text-emerald-950 px-4 py-0.5 font-sans italic border-b border-stone-400 tracking-wide break-words">
                    {studentName}
                  </div>
                  <div className="absolute -top-1 -right-4 text-emerald-600">
                    <Sparkles className="w-3 sm:w-4.5 h-3 sm:h-4.5 animate-pulse" />
                  </div>
                </div>

                <p className="text-[8px] sm:text-[11px] text-stone-600 font-sans max-w-sm sm:max-w-md mx-auto leading-relaxed">
                  успешно прошел(ла) теоретическое и практическое обучение по курсу
                </p>
                
                <div className="text-stone-900 text-xs sm:text-base font-sans font-black uppercase tracking-wider">
                  «ИНСТРУМЕНТАЛЬНЫЙ МАССАЖ И ГУАША-ТЕРАПИЯ»
                </div>
                
                <p className="text-[8px] sm:text-[10px] text-stone-500 font-sans max-w-sm mx-auto">
                  Объем программы: 7 академических часов лекционных материалов и более 20 пошаговых видеоинструкций.
                </p>
              </div>

              {/* Bottom Row: Signatures and Stamp */}
              <div className="flex justify-between items-end pt-2 border-t border-stone-200">
                <div className="text-left space-y-1">
                  <div className="text-[7px] sm:text-[9px] text-stone-500 font-sans">Ведущий инструктор:</div>
                  <div className="text-[9px] sm:text-[11px] font-sans font-bold text-stone-800 italic tracking-wider">
                    Д-р А. В. Сазонов
                  </div>
                </div>

                {/* Simulated Gold/Emerald Seal */}
                <div className="relative flex items-center justify-center w-10 sm:w-16 h-10 sm:h-16 shrink-0 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-full border-2 border-stone-400 shadow-lg text-white">
                  <div className="absolute inset-1.5 border border-dashed border-stone-300 rounded-full" />
                  <Award className="w-4 sm:w-7 h-4 sm:h-7 text-amber-300" />
                  <div className="absolute -bottom-1 -right-1 bg-amber-400 text-black font-sans font-bold text-[5px] sm:text-[7px] px-1 rounded-full shadow border border-stone-400">
                    SEAL
                  </div>
                </div>

                <div className="text-right space-y-1">
                  <div className="text-[7px] sm:text-[9px] text-stone-500 font-sans">Дата выдачи:</div>
                  <div className="text-[8px] sm:text-[10px] font-sans font-medium text-stone-800 font-mono">
                    {todayDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 max-w-md w-full rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-xl"
            >
              <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase font-display">МАКЕТ СГЕНЕРИРОВАН!</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Демонстрационный PDF-файл сертификата на имя <strong className="text-slate-800">«{studentName}»</strong> успешно подготовлен. В реальном курсе вы получите официальный документ с мокрой печатью и номером лицензии!
                </p>
              </div>

              {certType === 'physical' && (
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs text-emerald-800 leading-normal">
                  📦 Физический сертификат будет напечатан на плотном картоне и отправлен заказным письмом Почтой РФ сразу после сдачи итогового теста. Трек-номер придет на ваш email.
                </div>
              )}

              <button
                id="close-success-modal-btn"
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl text-xs sm:text-sm uppercase hover:bg-slate-800 transition-all cursor-pointer"
              >
                Отлично, понятно!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
