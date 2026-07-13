import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainResults from './components/MainResults';
import TrialLessons from './components/TrialLessons';
import Syllabus from './components/Syllabus';
import RoiCalculator from './components/RoiCalculator';
import CourseIncludes from './components/CourseIncludes';
import Certificate from './components/Certificate';
import Testimonials from './components/Testimonials';
import NotificationToast from './components/NotificationToast';
import LeadDashboard from './components/LeadDashboard';
import LeadForm from './components/LeadForm';
import { Database, ShieldCheck, Sparkles, Star } from 'lucide-react';

export default function App() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleScrollToTrial = () => {
    const element = document.getElementById('trial-lessons');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      
      {/* Premium Header */}
      <Header onOpenLeadForm={() => setIsLeadFormOpen(true)} />

      {/* Hero Banner Conversion */}
      <Hero 
        onOpenLeadForm={() => setIsLeadFormOpen(true)} 
        onScrollToTrial={handleScrollToTrial}
      />

      {/* Core results value chain */}
      <MainResults />

      {/* Trial lessons preview with interactive test quiz */}
      <TrialLessons onOpenLeadForm={() => setIsLeadFormOpen(true)} />

      {/* Detailed curriculum accordion breakdown */}
      <Syllabus />

      {/* Payback interactive cost calculator */}
      <RoiCalculator onOpenLeadForm={() => setIsLeadFormOpen(true)} />

      {/* What's included bento-grid */}
      <CourseIncludes />

      {/* Interactive dynamic certificate display */}
      <Certificate />

      {/* Reviews trust signals */}
      <Testimonials />

      {/* Pre-footer guarantee segment */}
      <section className="py-16 bg-slate-950 border-t border-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto border border-amber-500/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
            100% Гарантия возврата средств
          </h3>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Мы абсолютно уверены в качестве наших пошаговых видеоуроков. Если после изучения теоретического блока вы поймете, что инструментальная техника вам не подходит — мы полностью вернем вам всю стоимость курса в течение 14 дней без лишних вопросов.
          </p>
        </div>
      </section>

      {/* Site Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="block text-sm font-bold text-slate-300 uppercase tracking-tight">
                Инструментальный Массаж мягких тканей (IASTM)
              </span>
              <span className="block text-[11px] text-slate-500 mt-1">
                Сохраните здоровье своих рук и увеличьте доход за 7 часов обучения
              </span>
            </div>

            {/* Quick buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <button 
                onClick={() => setIsAdminOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 transition-all font-semibold cursor-pointer"
              >
                <Database className="w-4 h-4 text-amber-500" />
                <span>Админ-Панель Лидов</span>
              </button>
              
              <button
                onClick={() => setIsLeadFormOpen(true)}
                className="bg-amber-500 text-slate-950 font-bold py-2 px-4 rounded-xl hover:bg-amber-400 transition-all uppercase tracking-wider"
              >
                Купить курс за 4500₽
              </button>
            </div>
          </div>

          <div className="border-t border-slate-900/60 pt-8 flex flex-col sm:flex-row justify-between text-[11px] text-slate-600 gap-4">
            <p>© {new Date().getFullYear()} IASTM Course Academy. Все права защищены. Разработано как эффективный сайт-воронка.</p>
            <div className="flex gap-4">
              <span className="hover:text-slate-400 cursor-pointer">Политика конфиденциальности</span>
              <span className="hover:text-slate-400 cursor-pointer">Договор оферты</span>
              <span className="hover:text-slate-400 cursor-pointer">Отказ от ответственности</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Live active alerts toast */}
      <NotificationToast />

      {/* OVERLAY MODAL: Lead Registration & Checkout */}
      {isLeadFormOpen && (
        <LeadForm 
          onClose={() => setIsLeadFormOpen(false)} 
          onSuccess={() => {
            // Keep open slightly or let form show success state
          }} 
        />
      )}

      {/* OVERLAY MODAL: Admin Leads Dashboard */}
      {isAdminOpen && (
        <LeadDashboard onClose={() => setIsAdminOpen(false)} />
      )}

    </div>
  );
}
