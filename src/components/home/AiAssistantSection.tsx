'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bot,
  Sparkles,
  ShieldAlert,
  Send,
  Pill,
} from 'lucide-react';

export default function AiAssistantSection() {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    {
      sender: 'bot',
      text: 'سلام! من دستیار هوشمند داروخانه دکتر عبدوسی (DAP) هستم. چطور می‌توانم در زمینه اطلاعات مکمل‌ها، نحوه مصرف داروها یا محصولات بهداشتی راهنمایی‌تان کنم؟',
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');

  const quickPrompts = [
    'بهترین زمان مصرف قرص زینک و مولتی‌ویتامین چه زمانی است؟',
    'آیا مکمل کراتین با داروهای مکمل مفاصل تداخل دارد؟',
    'محصولات مناسب پوست‌های حساس و مستعد آکنه کدامند؟',
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputQuery;
    if (!text.trim()) return;

    const userMsg = text.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    if (!textToSend) setInputQuery('');

    // Simulated Bot AI Response
    setTimeout(() => {
      let reply =
        'پاسخ آزمایشگاهی: مصرف کلیه مکمل‌ها و داروها باید مطابق دستورالعمل و شرایط بدنی شما انجام پذیرد. جهت بررسی دقیق‌تر، می‌توانید با دکتر داروساز مجموعه در ارتباط باشید.';
      if (userMsg.includes('زینک') || userMsg.includes('ویتامین')) {
        reply =
          'قرص زینک بهتر است همراه با وعده غذایی (ترجیحاً ناهار) جهت جلوگیری از تهوع مصرف شود. از مصرف همزمان آن با چای یا مکمل کلسیم پرهیز کنید.';
      } else if (userMsg.includes('کراتین') || userMsg.includes('ورزشی')) {
        reply =
          'مکمل کراتین مونوهیدرات به افزایش توان عضلانی کمک می‌کند. حتماً روزانه حداقل ۲.۵ لیتر آب بنوشید تا به کلیه‌ها فشاری وارد نشود.';
      } else if (userMsg.includes('پوست') || userMsg.includes('آکنه')) {
        reply =
          'برای پوست‌های چرب و مستعد آکنه، شوینده‌های فاقد صابون (سوندت) و مرطوب‌کننده‌های فاقد چربی (Oil-Free) حاوی اسید سالیسیلیک پیشنهاد می‌شود.';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-[#063d2e] to-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-semibold px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>پاسخگویی سریع هوش مصنوعی</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              دستیار هوشمند سلامت و مشاور دارویی{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-300 via-teal-200 to-white">
                DAP AI
              </span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              سیستم هوشمند پاسخگویی به پرسش‌های رایج در خصوص نحوه مصرف داروها، عوارض جانبی عمومی، تداخلات مکمل‌های ورزشی و راهنمای انتخاب محصولات مراقبت از پوست و مو.
            </p>

            {/* Features */}
            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                <Bot className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>پاسخگویی ۲۴ ساعته بر پایه الگوریتم‌های استاندارد دارویی</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                <Pill className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>راهنمایی جامع مکمل‌ها و محصولات آرایشی و بهداشتی</span>
              </div>
            </div>

            {/* Warning Banner */}
            <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-800/50 text-amber-200 text-xs leading-relaxed flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p>
                <strong>تذکر:</strong> پاسخ‌های دستیار هوشمند جنبه اطلاع‌رسانی دارد و نباید جایگزین تشخیص یا تجویز مستقیم پزشک و داروساز شود.
              </p>
            </div>
          </div>

          {/* Interactive Chat Mockup */}
          <div className="lg:col-span-7 bg-slate-800/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-5 shadow-2xl flex flex-col h-[460px]">
            {/* Chat Box Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0d5c46] to-emerald-500 flex items-center justify-center text-white shadow-md">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                    دستیار دارویی DAP
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-[11px] text-emerald-300">آنلاین | آماده پاسخگویی به سوالات شما</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="text-xs text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                ارتباط با دکتر داروساز
              </Link>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto py-4 space-y-3 px-1 text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-2xl leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-[#0d5c46] text-white rounded-br-none'
                        : 'bg-slate-700/80 text-slate-100 rounded-bl-none border border-slate-600/50'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Suggestions */}
            <div className="pb-3 flex flex-wrap gap-1.5 border-t border-slate-700/60 pt-3">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  className="text-[11px] bg-slate-700/60 hover:bg-[#0d5c46] text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors border border-slate-600/40 text-right truncate max-w-full"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="relative">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="سوال خود را درباره مکمل‌ها یا داروها بنویسید..."
                className="w-full bg-slate-900/90 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={() => handleSendMessage()}
                className="absolute left-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#0d5c46] hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
