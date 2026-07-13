import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, CreditCard, Loader2 } from 'lucide-react';
import { Lead } from '../types';

export default function LeadForm({ 
  onClose, 
  onSuccess 
}: { 
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'details' | 'payment' | 'completed'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitDetails = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;

    setIsSubmitting(true);
    
    // Simulate API request to register lead
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('payment');
    }, 1200);
  };

  const handlePay = () => {
    setIsSubmitting(true);

    // Simulate payment gateway interaction
    setTimeout(() => {
      setIsSubmitting(false);

      // Create a real lead item
      const newLead: Lead = {
        id: 'lead-' + Date.now(),
        name,
        phone,
        email,
        date: new Date().toLocaleString('ru-RU'),
        status: 'new'
      };

      // Read current leads, prepend new one, save to localStorage
      const existingLeadsStr = localStorage.getItem('massage_course_leads');
      let currentLeads: Lead[] = [];
      if (existingLeadsStr) {
        try {
          currentLeads = JSON.parse(existingLeadsStr);
        } catch (e) {
          console.error(e);
        }
      }
      localStorage.setItem('massage_course_leads', JSON.stringify([newLead, ...currentLeads]));

      setStep('completed');
      onSuccess();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: ENTER LEAD DETAILS */}
        {step === 'details' && (
          <form onSubmit={handleSubmitDetails} className="p-6 md:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Личная скидка -50% активна
              </div>
              <h3 className="text-2xl font-serif font-semibold text-white">Регистрация на курс</h3>
              <p className="text-sm text-slate-400">
                Заполните форму, чтобы зафиксировать стоимость обучения <strong>4 500 ₽</strong> (вместо 9 000 ₽) и получить доступ к платформе.
              </p>
            </div>

            <div className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Ваше имя:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-white text-sm transition-all"
                  placeholder="Мария Ковалева"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Номер телефона:
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-white text-sm transition-all"
                  placeholder="+7 (999) 000-00-00"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Ваш Email:
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none text-white text-sm transition-all"
                  placeholder="example@mail.ru"
                />
              </div>
            </div>

            {/* Price confirmation */}
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 flex justify-between items-center text-sm">
              <span className="text-slate-400">Итоговая стоимость курса:</span>
              <div className="text-right">
                <span className="block font-bold text-white text-lg">4 500 ₽</span>
                <span className="block text-[10px] line-through text-slate-500">9 000 ₽</span>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl active:scale-95 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Создание профиля...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Зафиксировать цену и перейти к оплате</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* STEP 2: SIMULATED PAYMENT SCREEN */}
        {step === 'payment' && (
          <div className="p-6 md:p-8 space-y-6">
            <div className="text-center space-y-2">
              <CreditCard className="w-12 h-12 text-amber-500 mx-auto" />
              <h3 className="text-xl font-serif font-bold text-white">Безопасная оплата</h3>
              <p className="text-xs text-slate-400">
                Платежный шлюз защищен 256-битным шифрованием. Вы оплачиваете доступ к онлайн-курсу «Инструментальный массаж».
              </p>
            </div>

            {/* Bill details */}
            <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Продукт:</span>
                <span className="font-medium text-white">Полный доступ (6 месяцев)</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Покупатель:</span>
                <span className="font-medium text-white">{name} ({email})</span>
              </div>
              <div className="border-t border-slate-800/80 pt-2 flex justify-between text-sm">
                <span className="font-semibold text-slate-300">К оплате:</span>
                <span className="font-bold text-amber-400">4 500 ₽</span>
              </div>
            </div>

            {/* Mock Credit card decoration */}
            <div className="bg-gradient-to-tr from-slate-950 to-slate-850 p-5 rounded-2xl border border-slate-800 relative overflow-hidden space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-10 h-7 bg-amber-500/20 rounded-md border border-amber-500/30 flex items-center justify-center text-[10px] text-amber-400 font-bold">
                  CHIP
                </div>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">IMA CARD</span>
              </div>
              <div className="text-base font-mono tracking-widest text-slate-200">
                ••••  ••••  ••••  4500
              </div>
              <div className="flex justify-between items-end text-xs text-slate-400 font-mono">
                <div>
                  <span className="block text-[8px] text-slate-600">CARDHOLDER</span>
                  <span>{name.toUpperCase() || 'STUDENT NAME'}</span>
                </div>
                <div>
                  <span className="block text-[8px] text-slate-600">EXPIRES</span>
                  <span>07/31</span>
                </div>
              </div>
            </div>

            {/* Pay buttons */}
            <div className="space-y-3">
              <button
                onClick={handlePay}
                disabled={isSubmitting}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl active:scale-95 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Авторизация платежа...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Оплатить 4 500 ₽ тестовой картой</span>
                  </>
                )}
              </button>
              
              <button
                onClick={() => setStep('details')}
                disabled={isSubmitting}
                className="w-full py-2 bg-transparent text-xs text-slate-400 hover:text-white font-medium transition-all"
              >
                Вернуться назад к заполнению анкеты
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: PAYMENT COMPLETED SUCCESS */}
        {step === 'completed' && (
          <div className="p-6 md:p-8 space-y-6 text-center">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-white">Оплата успешна!</h3>
              <p className="text-sm text-slate-300">
                Поздравляем, <strong>{name}</strong>! Вы успешно оплатили и зарегистрировались на онлайн-курс «Инструментальный массаж».
              </p>
            </div>

            <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800 text-left text-xs space-y-2.5 text-slate-400">
              <p className="font-semibold text-white text-sm mb-1">Что произойдет дальше?</p>
              <p>• На вашу почту <strong>{email}</strong> уже отправлена квитанция об оплате и ссылка для входа в личный кабинет.</p>
              <p>• Наш менеджер свяжется с вами по телефону <strong>{phone}</strong> в течение 10 минут, чтобы помочь настроить доступ.</p>
              <p>• Первые 2 демо-урока открыты для изучения прямо сейчас на главной странице сайта!</p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl active:scale-95 transition-all text-sm uppercase tracking-wider"
            >
              Отлично, к демо-урокам
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
