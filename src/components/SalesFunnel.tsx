import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Check, ArrowRight, UserCheck, MessageSquare, CreditCard, Gift, Ticket, Award, CheckCircle } from 'lucide-react';
import { PRICING_PACKAGES } from '../data';
import { PricingPackage } from '../types';

export default function SalesFunnel() {
  const [funnelStep, setFunnelStep] = useState<'survey' | 'packages' | 'checkout' | 'success'>('survey');
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingPackage>(PRICING_PACKAGES[1]);
  
  // Checkout states
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [promoCode, setPromoCode] = useState<string>('');
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [studentId, setStudentId] = useState<string>('');

  const surveyProfiles = [
    {
      id: 'beginner',
      title: 'Начинающий специалист',
      description: 'Хочу освоить массаж с нуля для подработки, новой профессии или помощи близким.',
      advice: 'Идеальный тариф для вас: «ИНТЕНСИВ» или «ПРОФЕССИОНАЛ». Вы научитесь безопасным хватам скребка и базовой эргономике с нуля без риска травмировать суставы.'
    },
    {
      id: 'master',
      title: 'Опытный массажист',
      description: 'Имею практику. Хочу разгрузить пальцы/кисти, поднять чек, удивить постоянных клиентов.',
      advice: 'Рекомендуемый тариф: «ПРОФЕССИОНАЛ». Вы получите полный пошаговый разбор 4-х зон, сертификат с отправкой и готовые маркетинговые памятки для клиентов.'
    },
    {
      id: 'salon',
      title: 'Владелец салона / SPA-студии',
      description: 'Хочу обучить команду новым техникам, расширить прайс-лист и поднять прибыль бизнеса.',
      advice: 'Вам идеально подойдет тариф «БИЗНЕС-СПА». Он включает лицензию на обучение до 5 мастеров салона, готовый маркетинговый пакет и личный созвон с автором.'
    }
  ];

  const handleProfileSelect = (profileId: string) => {
    setSelectedProfile(profileId);
    
    // Auto map profile to recommended plan to speed up conversion funnel
    if (profileId === 'beginner') {
      setSelectedPlan(PRICING_PACKAGES[0]); // Интенсив
    } else if (profileId === 'master') {
      setSelectedPlan(PRICING_PACKAGES[1]); // Профессионал
    } else {
      setSelectedPlan(PRICING_PACKAGES[2]); // Бизнес-СПА
    }

    setTimeout(() => {
      setFunnelStep('packages');
    }, 1200);
  };

  const applyPromo = () => {
    if (promoCode.trim().toLowerCase() === 'суставы' || promoCode.trim().toLowerCase() === 'gua2026') {
      setPromoApplied(true);
      setDiscountPercent(10);
    } else {
      alert('Промокод не найден. Попробуйте ввести промокод: СУСТАВЫ');
    }
  };

  const getPriceAfterDiscount = (basePrice: number) => {
    if (!promoApplied) return basePrice;
    return Math.round(basePrice * (1 - discountPercent / 100));
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone || !clientEmail) {
      alert('Пожалуйста, заполните все обязательные поля!');
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setStudentId('STUDENT-' + Math.floor(100000 + Math.random() * 900000));
      setFunnelStep('success');
    }, 1500);
  };

  return (
    <section id="pricing" className="bg-slate-50 py-24 px-4 md:px-8 border-b border-slate-200 relative overflow-hidden">
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Progress Tracker (Visible except success) */}
        {funnelStep !== 'success' && (
          <div className="flex justify-center items-center gap-2 mb-12 max-w-md mx-auto">
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${funnelStep === 'survey' ? 'bg-emerald-600' : 'bg-slate-200'}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${funnelStep === 'packages' ? 'bg-emerald-600' : funnelStep === 'checkout' ? 'bg-slate-200' : 'bg-slate-200/50'}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${funnelStep === 'checkout' ? 'bg-emerald-600' : 'bg-slate-200/50'}`} />
          </div>
        )}

        {/* Step 1: Survey Funnel */}
        {funnelStep === 'survey' && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <span className="inline-flex items-center bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 tracking-wide uppercase">
                Шаг 1 из 3 • Персонализация
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight font-display">
                Пройдите опрос перед стартом
              </h2>
              <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Выберите ваш текущий статус, чтобы система подобрала оптимальную траекторию обучения и активировала персональную скидку 10%.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {surveyProfiles.map((p) => {
                const isSelected = selectedProfile === p.id;
                return (
                  <button
                    key={p.id}
                    id={`funnel-profile-btn-${p.id}`}
                    onClick={() => handleProfileSelect(p.id)}
                    className={`text-left p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden cursor-pointer ${
                      isSelected 
                        ? 'bg-emerald-50 border-emerald-600 shadow-sm shadow-emerald-600/5' 
                        : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50 shadow-sm'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-emerald-600 group-hover:bg-emerald-100'
                      }`}>
                        <UserCheck className="w-5 h-5" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors font-display">
                          {p.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </div>

                    {/* Advice Widget on hover/active */}
                    {isSelected && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-800 leading-relaxed"
                      >
                        {p.advice}
                      </motion.div>
                    )}

                    <div className="mt-6 flex justify-end">
                      <div className={`p-1.5 rounded-full transition-all ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:text-emerald-600'}`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Plan Choice */}
        {funnelStep === 'packages' && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <span className="inline-flex items-center bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 tracking-wide uppercase">
                Шаг 2 из 3 • Выберите тариф
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight font-display">
                Тарифные планы
              </h2>
              <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Определитесь с набором модулей и поддержкой. Все тарифы включают мгновенный доступ к личному кабинету сразу после оформления.
              </p>
            </div>

            {/* Micro promo banner */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0">
                  <Gift className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-emerald-900 uppercase font-display">Активирована скидка опроса!</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">Используйте секретный промокод <strong className="text-emerald-700 font-mono">СУСТАВЫ</strong> на этапе оформления, чтобы получить -10%</div>
                </div>
              </div>
              <div className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                -10% НА ВСЁ
              </div>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-4xl mx-auto">
              {PRICING_PACKAGES.map((pkg) => {
                const isSelected = selectedPlan.id === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    className={`bg-white rounded-3xl border flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 shadow-sm ${
                      pkg.isPopular 
                        ? 'border-emerald-600 scale-102 z-10 shadow-md' 
                        : 'border-slate-200/85 hover:border-slate-300'
                    }`}
                  >
                    {pkg.badge && (
                      <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                        {pkg.badge}
                      </span>
                    )}

                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="space-y-1 text-left">
                        <span className="text-[10px] text-emerald-600 uppercase tracking-widest font-mono font-bold block">Тариф</span>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight font-display">{pkg.title}</h3>
                        <p className="text-xs text-slate-500 leading-normal">{pkg.subtitle}</p>
                      </div>

                      {/* Pricing block */}
                      <div className="flex items-baseline gap-2.5 pt-2 border-t border-slate-100">
                        <span className="text-3xl sm:text-4xl font-mono font-black text-slate-900">
                          {pkg.price.toLocaleString('ru-RU')} ₽
                        </span>
                        <span className="text-xs sm:text-sm text-slate-400 line-through font-mono">
                          {pkg.oldPrice.toLocaleString('ru-RU')} ₽
                        </span>
                      </div>

                      {/* Feature Bullet Points */}
                      <ul className="space-y-3 pt-4 border-t border-slate-100 text-left">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 sm:p-8 pt-0">
                      <button
                        id={`pricing-choose-btn-${pkg.id}`}
                        onClick={() => {
                          setSelectedPlan(pkg);
                          setFunnelStep('checkout');
                        }}
                        className={`w-full py-4 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          pkg.isPopular 
                            ? 'bg-emerald-600 hover:bg-emerald-500 text-white' 
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span>Выбрать {pkg.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Back button */}
            <div className="text-center pt-4">
              <button
                id="back-to-survey-btn"
                onClick={() => setFunnelStep('survey')}
                className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
              >
                Вернуться к профилированию
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Checkout Form */}
        {funnelStep === 'checkout' && (
          <div className="max-w-xl mx-auto space-y-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="text-center space-y-2">
              <span className="inline-flex items-center bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-800 tracking-wide uppercase">
                Шаг 3 из 3 • Оформление доступа
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight font-display">Оплата и зачисление</h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Заполните контактные данные выпускника для регистрации личного кабинета и отправки кураторам.
              </p>
            </div>

            {/* Selected Plan Summary Row */}
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex justify-between items-center">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Выбранный тариф:</span>
                <span className="text-sm font-black text-slate-800 uppercase font-display">{selectedPlan.title}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Стоимость:</span>
                <span className="text-sm font-black text-emerald-600 font-mono">
                  {getPriceAfterDiscount(selectedPlan.price).toLocaleString('ru-RU')} ₽
                </span>
                {promoApplied && (
                  <span className="text-[10px] text-slate-400 line-through font-mono block">
                    {selectedPlan.price.toLocaleString('ru-RU')} ₽
                  </span>
                )}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleCheckoutSubmit} className="space-y-5 text-left">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">ФИО Ученика <span className="text-red-500">*</span></label>
                <input
                  id="checkout-name-input"
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Иванов Иван Иванович"
                  className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Телефон <span className="text-red-400">*</span></label>
                <input
                  id="checkout-phone-input"
                  type="tel"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="+7 (999) 123-45-67"
                  className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Ваш Email <span className="text-red-400">*</span></label>
                <input
                  id="checkout-email-input"
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="your-email@mail.ru"
                  className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none transition-all"
                />
              </div>

              {/* Promo code field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Промокод на скидку:</label>
                <div className="flex gap-2">
                  <input
                    id="checkout-promo-input"
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="ВВЕДИТЕ: СУСТАВЫ"
                    className="flex-1 bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none transition-all font-mono"
                  />
                  <button
                    id="apply-promo-btn"
                    type="button"
                    onClick={applyPromo}
                    className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold px-4 rounded-xl text-xs uppercase cursor-pointer"
                  >
                    Применить
                  </button>
                </div>
                {promoApplied && (
                  <span className="text-[10px] text-emerald-600 font-bold block mt-1">
                    ✓ Промокод успешно применен! Получена скидка 10%
                  </span>
                )}
              </div>

              {/* Simulated Card Details disclaimer */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs font-display">
                  <CreditCard className="w-4 h-4" />
                  <span>Безопасная тестовая оплата</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Оплата проходит в демонстрационном безопасном режиме. Реальное списание средств производиться не будет. Доступ к симулятору ученика откроется мгновенно!
                </p>
              </div>

              {/* Submit Checkout button */}
              <button
                id="submit-payment-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-xl text-xs sm:text-sm uppercase flex items-center justify-center gap-2 shadow-sm transform active:scale-95 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Проведение платежа...</span>
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    <span>Оплатить {getPriceAfterDiscount(selectedPlan.price).toLocaleString('ru-RU')} ₽</span>
                  </>
                )}
              </button>
            </form>

            {/* Back button */}
            <div className="text-center">
              <button
                id="back-to-plans-btn"
                onClick={() => setFunnelStep('packages')}
                className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
              >
                Вернуться к выбору тарифов
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Success & Student Dashboard Mockup */}
        {funnelStep === 'success' && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-8 text-center shadow-md relative overflow-hidden"
          >
            {/* Confetti decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-100 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
              <CheckCircle className="w-16 h-16 animate-pulse" />
            </div>

            <div className="space-y-3">
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold font-mono px-3 py-1 rounded-full uppercase tracking-widest">
                ОПЛАТА УСПЕШНО ЗАВЕРШЕНА
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight font-display">Добро пожаловать на курс!</h2>
              <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                Поздравляем, <strong className="text-slate-800">{clientName}</strong>! Ваш личный кабинет успешно зарегистрирован, а учебный план тарифа <strong className="text-emerald-700 uppercase font-display">«{selectedPlan.title}»</strong> активирован.
              </p>
            </div>

            {/* Student ID Card Widget */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left max-w-md mx-auto space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest font-mono">СТАТУС: СТУДЕНТ АКТИВЕН</span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">{studentId}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block uppercase font-mono text-[9px]">Ученик:</span>
                  <span className="font-bold text-slate-800 block mt-0.5">{clientName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-mono text-[9px]">Email:</span>
                  <span className="font-bold text-slate-800 block mt-0.5">{clientEmail}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-mono text-[9px]">Активированный тариф:</span>
                  <span className="font-bold text-emerald-600 block mt-0.5 uppercase">{selectedPlan.title}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-mono text-[9px]">Доступ к урокам:</span>
                  <span className="font-bold text-slate-800 block mt-0.5">6 Месяцев (24/7)</span>
                </div>
              </div>
            </div>

            {/* Simulated Student Dashboard Quick Links */}
            <div className="space-y-3 pt-4 border-t border-slate-150 max-w-md mx-auto">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600 text-left flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>На вашу почту <strong className="text-slate-800">{clientEmail}</strong> отправлено приветственное письмо с индивидуальной ссылкой на платформу GetCourse.</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600 text-left flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Вы зачислены в общий чат потока. Ссылка на закрытый Telegram-канал кураторов отправлена по СМС на номер <strong className="text-white">{clientPhone}</strong>.</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto pt-4">
              <button
                id="reset-funnel-btn"
                onClick={() => {
                  setFunnelStep('survey');
                  setSelectedProfile(null);
                  setPromoApplied(false);
                  setPromoCode('');
                }}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3.5 px-6 rounded-xl text-xs uppercase border border-slate-200 transition-all cursor-pointer"
              >
                Вернуться на сайт
              </button>
              
              <button
                id="go-to-student-cabinet-btn"
                onClick={() => alert('Перенаправление на учебный симулятор GetCourse...')}
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transform active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                Войти в кабинет
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
