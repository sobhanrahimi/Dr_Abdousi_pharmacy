'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Stethoscope,
  ShoppingBag,
  Truck,
  Gift,
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">

          {/* Right Side: 5 Benefits Bar */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-3 order-2 lg:order-1">
            {benefits.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f2faf7] p-2.5 rounded-xl border border-emerald-100/80 flex items-center gap-2"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#006654] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-800 leading-tight">
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

          {/* Left Side: Newsletter Subscription Card */}
          <div className="lg:col-span-4 bg-gradient-to-r from-[#eef9f6] via-[#e4f4f0] to-[#eef9f6] p-3.5 rounded-xl border border-emerald-200/80 flex items-center justify-between gap-3 order-1 lg:order-2">
            <div className="space-y-0.5 shrink-0">
              <h3 className="text-xs font-bold text-[#006654]">
                عضویت در خبرنامه
              </h3>
              <p className="text-[9px] text-slate-500">
                از تخفیف‌ها باخبر شوید
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex items-center gap-1.5 flex-1 max-w-xs">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل خود را وارد کنید..."
                className="w-full bg-white border border-slate-200 focus:border-[#006654] text-[10px] rounded-lg py-1.5 px-2.5 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="bg-[#006654] hover:bg-[#004d3f] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors shrink-0 flex items-center gap-1"
              >
                <span>عضویت</span>
              </button>
            </form>

            {subscribed && (
              <div className="text-[10px] text-emerald-800 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#006654]" />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
