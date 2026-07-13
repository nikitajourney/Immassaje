import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Users, MessageSquare } from 'lucide-react';

interface AlertItem {
  id: string;
  message: string;
  icon: any;
}

const notifications: AlertItem[] = [
  {
    id: 'n-1',
    message: 'Екатерина из г. Самара только что оставила заявку на курс',
    icon: Sparkles
  },
  {
    id: 'n-2',
    message: 'Алексей из г. Москва только что прошел демо-тест на 100%',
    icon: Users
  },
  {
    id: 'n-3',
    message: 'Ольга из г. Псков забронировала место со скидкой -50%',
    icon: Sparkles
  },
  {
    id: 'n-4',
    message: 'Дмитрий из г. Сургут только что начал проходить демо-урок по ШВЗ',
    icon: MessageSquare
  },
  {
    id: 'n-5',
    message: 'Внимание: осталось всего 4 места по специальной цене 4 500 ₽',
    icon: Sparkles
  }
];

export default function NotificationToast() {
  const [currentAlert, setCurrentAlert] = useState<AlertItem | null>(null);

  useEffect(() => {
    // Show first notification after 6 seconds
    const initialTimeout = setTimeout(() => {
      setCurrentAlert(notifications[0]);
    }, 6000);

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % notifications.length;
      setCurrentAlert(notifications[currentIndex]);

      // Automatically hide after 5 seconds
      setTimeout(() => {
        setCurrentAlert(null);
      }, 5000);

    }, 18000); // Trigger every 18 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[90] max-w-sm pointer-events-none">
      <AnimatePresence>
        {currentAlert && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-slate-900/95 border border-slate-800 text-white p-4 rounded-2xl shadow-2xl backdrop-blur-md pointer-events-auto flex items-center gap-3.5"
          >
            <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 flex-shrink-0">
              <currentAlert.icon className="w-4 h-4" />
            </div>
            
            <div className="space-y-0.5">
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Активность на сайте</span>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                {currentAlert.message}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
