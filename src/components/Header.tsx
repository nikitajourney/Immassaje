import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Zap, Menu, X, Sparkles, Flame } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (id: string) => void;
  activeSection: string;
}

export default function Header({ onScrollToSection, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Программа', id: 'program' },
    { label: 'Тест-драйв', id: 'demo-lessons' },
    { label: 'Окупаемость', id: 'calculator' },
    { label: 'Сертификат', id: 'certificate' },
    { label: 'Тарифы', id: 'pricing' }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onScrollToSection('hero')}
          className="flex items-center gap-2 text-left bg-transparent border-0 cursor-pointer text-slate-900 hover:opacity-90"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            M
          </div>
          <div>
            <span className="text-sm font-black tracking-tighter block uppercase leading-none text-slate-900 font-display">
              MASSAGE.EDU
            </span>
            <span className="text-[9px] text-emerald-600 font-bold block tracking-wider uppercase">
              Инструментальный массаж
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 border border-slate-200/60 p-1 rounded-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`header-nav-btn-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all uppercase cursor-pointer ${
                  isActive 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-200/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Quick Purchase CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => onScrollToSection('pricing')}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2 rounded-full text-xs uppercase tracking-wide transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <Flame className="w-3.5 h-3.5 text-emerald-400" />
            <span>Начать обучение</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button 
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left p-3.5 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-emerald-600 transition-all uppercase tracking-wider cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleNavClick('pricing')}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-emerald-600/10"
                >
                  <span>ЗАПИСАТЬСЯ НА КУРС</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
