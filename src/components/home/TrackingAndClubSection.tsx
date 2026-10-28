'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Truck,
  Gift,
  Search,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowLeft,
  Bell,
  ShieldCheck,
} from 'lucide-react';

export default function TrackingAndClubSection() {
  const [trackCode, setTrackCode] = useState('');
  const [trackResult, setTrackResult] = useState<string | null>(null);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackCode.trim()) return;

    if (trackCode.toUpperCase().startsWith('DAP')) {
      setTrackResult('نسخه شما توسط مسئول فنی بررسی شده و در وضعیت «آماده ارسال با پیک فوری اسنپ» قرار دارد.');
    } else {
      setTrackResult('کد پیگیری واردشده در سامانه یافت شد: وضعیت سفارش «تایید شده و در حال بسته‌بندی» است.');
    }
  };

  return (
    <section className="py-12 bg-slate-100/80 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Snapp / Express Delivery Tracking Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0d5c46] flex items-center justify-center border border-emerald-100">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">پیگیری ارسال و پیک شهری</h3>
                <p className="text-xs text-slate-500">استعلام وضعیت تحویل نسخه و مرسولات دارویی</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              کد پیگیری نسخه یا شماره سفارش خود را وارد کنید تا از آخرین وضعیت آماده‌سازی و تحویل مرسوله مطلع شوید.
            </p>

            <form onSubmit={handleTrackSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={trackCode}
                  onChange={(e) => setTrackCode(e.target.value)}
                  placeholder="کد پیگیری (مثال: DAP-123456)..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#0d5c46] focus:bg-white text-slate-800 text-xs sm:text-sm rounded-xl py-3 pr-4 pl-24 outline-none transition-all placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="absolute left-1.5 top-1/2 -translate-y-1/2 bg-[#0d5c46] hover:bg-[#063d2e] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>پیگیری</span>
                </button>
              </div>
            </form>

            {trackResult && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-[#0d5c46] leading-relaxed flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{trackResult}</span>
              </div>
            )}

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>ارسال اکسپرس در کمتر از ۲ ساعت در تهران</span>
              </span>
              <span className="text-emerald-700 font-semibold">پیک اختصاصی DAP</span>
            </div>
          </div>

          {/* Customer Club Card */}
          <div className="bg-gradient-to-br from-[#0d5c46] to-[#063d2e] p-6 sm:p-8 rounded-3xl text-white shadow-md flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 text-xs px-3 py-1 rounded-full">
                  <Gift className="w-3.5 h-3.5 text-emerald-400" />
                  <span>باشگاه مشتریان DAP Club</span>
                </div>
                <Sparkles className="w-5 h-5 text-emerald-300" />
              </div>

              <h3 className="text-xl font-extrabold text-white">
                عضویت در باشگاه وفاداری داروخانه دکتر عبدوسی
              </h3>

              <p className="text-xs text-slate-200 leading-relaxed font-light">
                با عضویت در باشگاه مشتریان، از امتیاز خدمات مشاوره‌ای، اطلاع‌رسانی شارژ مجدد داروهای نایاب و تخفیف‌های ویژه مکمل‌های غذایی بهره‌مند شوید.
              </p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs text-emerald-100">
                <div className="bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-700/40 flex items-center gap-2">
                  <Bell className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>هشدار شارژ مجدد دارو</span>
                </div>
                <div className="bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-700/40 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>تخفیف ویژه جشنواره‌ها</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full bg-white text-[#0d5c46] hover:bg-emerald-50 font-bold text-xs sm:text-sm py-3 rounded-xl transition-all shadow text-center flex items-center justify-center gap-2"
              >
                <span>عضویت رایگان با شماره موبایل</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
