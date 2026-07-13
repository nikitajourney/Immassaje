import React from 'react';
import { Award, Zap, Mail, Phone, MapPin, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 px-4 md:px-8 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        {/* Brand column */}
        <div className="md:col-span-4 space-y-4">
          <button 
            onClick={() => onScrollToSection('hero')}
            className="flex items-center gap-2.5 text-left bg-transparent border-0 cursor-pointer text-white hover:opacity-90"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-black tracking-widest block uppercase font-mono leading-none text-white">
                АКУПУНКТУРА
              </span>
              <span className="text-[9px] text-emerald-400 font-bold block tracking-wider uppercase">
                Инструментальный массаж
              </span>
            </div>
          </button>
          
          <p className="text-slate-400 leading-relaxed text-xs">
            Официальный представитель профессиональной учебной платформы. Лицензированные материалы, соответствующие государственным стандартам спа-эстетики и восстановительной терапии.
          </p>

          <p className="text-[11px] text-slate-500">
            © {currentYear} ACADEMY OF INSTRUMENTAL MASSAGE. Все права защищены.
          </p>
        </div>

        {/* Navigation column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider font-display">Разделы сайта</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onScrollToSection('program')} className="text-slate-400 hover:text-emerald-400 cursor-pointer">
                Программа обучения
              </button>
            </li>
            <li>
              <button onClick={() => onScrollToSection('demo-lessons')} className="text-slate-400 hover:text-emerald-400 cursor-pointer">
                Бесплатные демо-уроки
              </button>
            </li>
            <li>
              <button onClick={() => onScrollToSection('calculator')} className="text-slate-400 hover:text-emerald-400 cursor-pointer">
                Калькулятор окупаемости
              </button>
            </li>
            <li>
              <button onClick={() => onScrollToSection('certificate')} className="text-slate-400 hover:text-emerald-400 cursor-pointer">
                Примерка сертификата
              </button>
            </li>
            <li>
              <button onClick={() => onScrollToSection('pricing')} className="text-slate-400 hover:text-emerald-400 cursor-pointer">
                Тарифы и оплата
              </button>
            </li>
          </ul>
        </div>

        {/* Contacts column */}
        <div className="md:col-span-5 space-y-4 text-xs">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider font-display">Контакты и Поддержка</h4>
          
          <div className="space-y-3 text-slate-400">
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>info@acupuncture-massage.ru</span>
            </div>
            
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>8 (800) 555-39-40 (звонок бесплатный по РФ)</span>
            </div>

            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>г. Москва, ул. Ленинский проспект, д. 45, офис 302</span>
            </div>
          </div>

          {/* Legal Compliance */}
          <div className="pt-4 border-t border-slate-800 space-y-1.5 text-[10px] text-slate-500 leading-normal">
            <p>ИП Сазонов А.В. ОГРНИП 320774600123456 • ИНН 772812345678</p>
            <p>Договор-оферта • Политика конфиденциальности • Согласие на обработку персональных данных</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
