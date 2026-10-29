'use client';

import React from 'react';
import Link from 'next/link';
import {
  Bot,
  FileText,
  Truck,
  Stethoscope,
  Sparkles,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf6f2] via-[#e2f3ed] to-[#edf8f4] py-8 lg:py-12 border-b border-emerald-100/60">

      {/* Botanical / Water Droplet Background Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Left Panel: 4 Compact Glassmorphism Service Cards */}
          <div className="lg:col-span-3 space-y-2.5 order-2 lg:order-1">

            {/* Service 1: DAP AI Assistant */}
            <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-emerald-100/80 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all group flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#006654] to-emerald-500 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Bot className="w-4 h-4" />
              </div>
              <div className="text-right">
                <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#006654] transition-colors leading-tight">
                  دستیار هوشمند DAP
                </h4>
                <p className="text-[10px] text-slate-500">پرسش و پاسخ سریع</p>
              </div>
            </div>

            {/* Service 2: Online Prescription Submission */}
            <Link href="/prescription" className="block">
              <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-emerald-100/80 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all group flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#006654] border border-emerald-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#006654] transition-colors leading-tight">
                    ثبت نسخه آنلاین
                  </h4>
                  <p className="text-[10px] text-slate-500">ارسال و پیگیری نسخه</p>
                </div>
              </div>
            </Link>

            {/* Service 3: Express Order Tracker */}
            <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-emerald-100/80 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all group flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#006654] border border-emerald-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Truck className="w-4 h-4" />
              </div>
              <div className="text-right">
                <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#006654] transition-colors leading-tight">
                  پیگیری سفارش
                </h4>
                <p className="text-[10px] text-slate-500">وضعیت لحظه‌ای پیک</p>
              </div>
            </div>

            {/* Service 4: Doctor & Pharmacist Consultation */}
            <Link href="/contact" className="block">
              <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-emerald-100/80 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all group flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#006654] border border-emerald-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#006654] transition-colors leading-tight">
                    مشاوره با پزشک و داروساز
                  </h4>
                  <p className="text-[10px] text-slate-500">آنلاین و مطمئن</p>
                </div>
              </div>
            </Link>

          </div>

          {/* Center Panel: Large DAP Emblem & Title Slogan */}
          <div className="lg:col-span-6 text-center space-y-3 order-1 lg:order-2 py-2">

            {/* Large Emblem Graphic */}
            <div className="mx-auto w-40 h-28 sm:w-48 sm:h-32 relative flex items-center justify-center">
              <img
                src="/Dr_Abdousi_pharmacy/images/dap-logo.jpg"
                alt="DAP Logo Emblem"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>

            {/* Title Block */}
            <div className="space-y-0.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#006654] tracking-tight">
                داروخانه دکتر عبدوسی
              </h1>
              <p className="text-xs sm:text-sm font-black text-slate-700 tracking-wider font-sans">
                DR. ABDOOSI PHARMACY
              </p>
            </div>

            {/* Slogan */}
            <p className="text-xs font-extrabold text-emerald-800">
              سلامت امروز، زیبایی فردا
            </p>

            {/* Hero Action CTA Buttons */}
            <div className="pt-2 flex items-center justify-center gap-3">
              <Link
                href="/products"
                className="bg-[#006654] hover:bg-[#004d3f] text-white text-xs font-bold px-6 py-2 rounded-full transition-all shadow-xs"
              >
                مشاهده محصولات
              </Link>
              <Link
                href="/about"
                className="bg-white hover:bg-slate-50 text-[#006654] border border-emerald-300 text-xs font-bold px-6 py-2 rounded-full transition-all shadow-2xs"
              >
                آشنایی با داروخانه
              </Link>
            </div>

          </div>

          {/* Right Panel: Skincare Product Showcase */}
          <div className="lg:col-span-3 order-3 flex flex-col items-center justify-center text-center space-y-2">
            <div className="relative w-full max-w-[210px] aspect-4/3 rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-100 to-white p-2 border border-emerald-200/80 shadow-xs group">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
                alt="Skincare Product Showcase"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs p-1.5 rounded-xl border border-emerald-100 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#006654]" />
              </div>
            </div>

            <p className="text-xs font-bold text-slate-700 font-serif italic">
              مراقبت از خود یک انتخاب است...
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
