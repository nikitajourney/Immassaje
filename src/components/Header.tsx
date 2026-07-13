import { useState, useEffect } from 'react';
import { Sparkles, Calendar, BookOpen, Calculator, MessageSquare, Phone } from 'lucide-react';

export default function Header({ onOpenLeadForm }: { onOpenLeadForm: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-950 font-serif font-extrabold shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-all">
              M
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm font-bold tracking-tight text-white uppercase">
                Инструментальный Массаж
              </span>
              <span className="block text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                Онлайн-курс • IASTM
              </span>
            </div>
          </div>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button 
              onClick={() => scrollToSection('trial-lessons')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              Пробные уроки
            </button>
            <button 
              onClick={() => scrollToSection('syllabus')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              Программа
            </button>
            <button 
              onClick={() => scrollToSection('roi-calculator')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              Окупаемость
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Отзывы
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenLeadForm}
              className="hidden lg:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              Заказать звонок
            </button>
            <button
              onClick={onOpenLeadForm}
              className="bg-amber-500 text-slate-950 font-semibold py-2.5 px-5 rounded-xl hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/10 active:scale-95 transition-all duration-300 text-xs uppercase tracking-wider"
            >
              Начать обучение за 4500₽
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
