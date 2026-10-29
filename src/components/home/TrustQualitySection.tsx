'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Stethoscope,
  ShoppingBag,
  Truck,
  Gift,
  Send,
  CheckCircle2,
} from 'lucide-react';

export default function TrustQualitySection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const benefits = [
    {
      title: 'مشاوره دارویی رایگان',
      desc: 'توسط داروسازان متخصص',
      icon: ShieldCheck,
    },
    {
      title: 'دسترسی آسان، سریع',
      desc: 'ارتباط با پزشک معالج',
      icon: Stethoscope,
    },
    {
      title: 'خرید آسان و پرداخت امن',
      desc: 'پرداخت امن سریع',
      icon: ShoppingBag,
    },
    {
      title: 'پیگیری سفارش و پیک',
      desc: 'همراه شما تا درب منزل',
      icon: Truck,
    },
    {
      title: 'باشگاه مشتریان',
      desc: 'امتیاز و تخفیف ویژه',
      icon: Gift,
    },
  ];

  return (
    <section className="py-6 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">

        {/* Horizontal 5 Benefits Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#f2faf7] p-3 rounded-xl border border-emerald-100/80 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-[#006654] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[9px] text-slate-500 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter / Customer Club Subscription Card */}
        <div className="bg-gradient-to-r from-[#eef9f6] via-[#e4f4f0] to-[#eef9f6] p-4 sm:p-5 rounded-2xl border border-emerald-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center md:text-right">
            <h3 className="text-xs font-bold text-[#006654]">
              عضویت در خبرنامه
            </h3>
            <p className="text-[10px] text-slate-600">
              از جدیدترین تخفیف‌ها و محصولات باخبر شوید
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل خود را وارد کنید..."
              className="flex-1 bg-white border border-slate-200 focus:border-[#006654] text-[11px] rounded-xl py-2 px-3 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="bg-[#006654] hover:bg-[#004d3f] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shrink-0 flex items-center gap-1"
            >
              <Send className="w-3.5 h-3.5" />
              <span>عضویت</span>
            </button>
          </form>

          {subscribed && (
            <div className="text-[11px] text-emerald-800 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#006654]" />
              <span>ایمیل شما با موفقیت ثبت شد!</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
