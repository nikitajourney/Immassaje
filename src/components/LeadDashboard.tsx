import { useState, useEffect } from 'react';
import { User, Phone, Mail, Clock, ShieldCheck, Database, Check, RefreshCw, X } from 'lucide-react';
import { Lead } from '../types';

export default function LeadDashboard({ onClose }: { onClose: () => void }) {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    // Load leads from localStorage
    const savedLeads = localStorage.getItem('massage_course_leads');
    if (savedLeads) {
      try {
        setLeads(JSON.parse(savedLeads));
      } catch (e) {
        console.error('Error parsing saved leads', e);
      }
    } else {
      // Seed some starting leads so the dashboard is not empty
      const defaultLeads: Lead[] = [
        {
          id: 'lead-1',
          name: 'Екатерина Власова',
          phone: '+7 (920) 441-23-45',
          email: 'vlasova.kate@mail.ru',
          date: '13.07.2026, 11:32',
          status: 'new'
        },
        {
          id: 'lead-2',
          name: 'Александр Белов',
          phone: '+7 (911) 322-54-12',
          email: 'belov.sasha@gmail.com',
          date: '12.07.2026, 17:45',
          status: 'contacted'
        },
        {
          id: 'lead-3',
          name: 'Татьяна Репина',
          phone: '+7 (905) 540-11-22',
          email: 'repina.t@yandex.ru',
          date: '12.07.2026, 14:15',
          status: 'completed'
        }
      ];
      localStorage.setItem('massage_course_leads', JSON.stringify(defaultLeads));
      setLeads(defaultLeads);
    }
  }, []);

  const updateStatus = (id: string, newStatus: 'new' | 'contacted' | 'completed') => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    localStorage.setItem('massage_course_leads', JSON.stringify(updated));
    setLeads(updated);
  };

  const clearAllLeads = () => {
    if (window.confirm('Вы действительно хотите удалить все заявки?')) {
      localStorage.removeItem('massage_course_leads');
      setLeads([]);
    }
  };

  const getStatusBadge = (status: 'new' | 'contacted' | 'completed') => {
    switch (status) {
      case 'new':
        return 'bg-amber-500/15 text-amber-500 border border-amber-500/30';
      case 'contacted':
        return 'bg-blue-500/15 text-blue-400 border border-blue-500/30';
      case 'completed':
        return 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30';
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-xl border border-amber-500/20">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">Панель управления лидами</h3>
              <p className="text-xs text-slate-400">Внутренний трекер заявок для проверки конверсии воронки</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stats segment */}
        <div className="grid grid-cols-3 gap-4 p-6 bg-slate-950/20 border-b border-slate-800/80">
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-800/50">
            <span className="text-xs text-slate-400 font-medium">Всего заявок</span>
            <div className="text-2xl font-bold text-white mt-1">{leads.length}</div>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-800/50">
            <span className="text-xs text-slate-400 font-medium">Потенциальная выручка</span>
            <div className="text-2xl font-bold text-amber-400 mt-1">{(leads.length * 4500).toLocaleString()} ₽</div>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-800/50">
            <span className="text-xs text-slate-400 font-medium">Конверсия воронки (демо)</span>
            <div className="text-2xl font-bold text-emerald-400 mt-1">14.8%</div>
          </div>
        </div>

        {/* Scrollable list of leads */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {leads.length === 0 ? (
            <div className="text-center py-12 text-slate-500 space-y-2">
              <User className="w-12 h-12 mx-auto stroke-1" />
              <p>Заявки пока отсутствуют</p>
              <p className="text-xs text-slate-600">Оставьте тестовую заявку через форму заказа на сайте!</p>
            </div>
          ) : (
            leads.map((lead) => (
              <div 
                key={lead.id}
                className="bg-slate-950/40 border border-slate-850 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base">{lead.name}</span>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${getStatusBadge(lead.status)}`}>
                      {lead.status === 'new' ? 'Новая' : lead.status === 'contacted' ? 'Связались' : 'Обучается'}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-amber-500" />
                      {lead.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {lead.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {lead.date}
                    </span>
                  </div>
                </div>

                {/* Status action toggles */}
                <div className="flex items-center gap-2 self-start md:self-center border-t border-slate-850 md:border-none pt-3 md:pt-0 w-full md:w-auto">
                  <button 
                    onClick={() => updateStatus(lead.id, 'contacted')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      lead.status === 'contacted' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-750'
                    }`}
                  >
                    Связаться
                  </button>
                  <button 
                    onClick={() => updateStatus(lead.id, 'completed')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      lead.status === 'completed' 
                        ? 'bg-emerald-500 text-slate-950' 
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-750'
                    }`}
                  >
                    Завершить
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer controls */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/40 flex justify-between items-center text-xs">
          <span className="text-slate-500">
            Данные хранятся в вашей локальной СУБД (LocalStorage)
          </span>
          <button 
            onClick={clearAllLeads}
            className="text-rose-400 hover:text-rose-300 font-semibold transition-colors cursor-pointer"
          >
            Очистить все лиды
          </button>
        </div>

      </div>
    </div>
  );
}
