'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  ShieldCheck,
  Stethoscope,
  ArrowLeft,
  Award,
  Sparkles,
  HeartPulse,
} from 'lucide-react';

export default function HeroSection() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#073629] to-[#094032] text-white py-16 lg:py-24">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-inner">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>مرجع تخصصی خدمات و مشاوره دارویی - دکتر عبدوسی</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight lg:leading-[1.25]">
              سلامت و آسودگی خاطر شما،{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-300 via-teal-200 to-white">
                تعهد حرفه‌ای ماست
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              سامانه اطلاع‌رسانی داروخانه دکتر عبدوسی؛ ارائه راهنمایی علمی درباره مصرف داروها، مکمل‌های تقویتی و محصولات آرایشی-بهداشتی اصیل تحت نظارت دکتر داروساز.
            </p>

            {/* Hero Search Box */}
            <form onSubmit={handleSearch} className="max-w-xl pt-2">
              <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-xl border border-emerald-500/30">
                <Search className="w-5 h-5 text-slate-400 mx-3 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="جست‌وجوی اسم دارو، مکمل یا برند آرایشی..."
                  className="w-full text-slate-800 text-sm bg-transparent outline-none placeholder:text-slate-400 py-1"
                />
                <button
                  type="submit"
                  className="bg-[#0d5c46] hover:bg-[#063d2e] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow shrink-0 flex items-center gap-1.5"
                >
                  <span>جست‌وجو</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center gap-2"
              >
                <span>مشاهده محصولات و مکمل‌ها</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-medium px-6 py-3 rounded-xl transition-all flex items-center gap-2"
              >
                <Stethoscope className="w-4 h-4 text-emerald-400" />
                <span>دریافت مشاوره دارویی</span>
              </Link>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-6 border-t border-emerald-900/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>اصالت ۱۰۰٪ کالاهای بهداشتی</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>پروانه رسمی وزارت بهداشت</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>پاسخگویی مسئول فنی</span>
              </div>
            </div>
          </div>

          {/* Visual Card / Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-gradient-to-tr from-[#0d5c46] to-emerald-800/80 p-1 rounded-3xl shadow-2xl border border-emerald-500/30">
              <div className="bg-slate-900/90 backdrop-blur-md rounded-[22px] p-6 text-white space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">مرکز خدمات تخصصی دارویی</h3>
                      <p className="text-xs text-emerald-400">تحت نظارت دکتر عبدوسی</p>
                    </div>
                  </div>
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="space-y-3 text-xs leading-relaxed text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/50 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/80 text-emerald-300 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <p>بررسی تداخلات دارویی و راهنمایی دوز صحیح مصرف</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/50 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/80 text-emerald-300 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <p>معرفی مکمل‌های استاندارد با تاییدیه سازمان غذا و دارو</p>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-400 bg-slate-800/90 px-3 py-1.5 rounded-full inline-block border border-slate-700">
                    پاسخگویی تلفنی و حضوری در ساعات کاری
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
