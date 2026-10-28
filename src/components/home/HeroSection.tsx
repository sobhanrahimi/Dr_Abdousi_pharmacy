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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eef9f6] via-[#e6f5f0] to-[#f4fbf8] py-8 lg:py-12 border-b border-emerald-100/60">
      {/* Background Subtle Watermark Decorative Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#006654_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Left Panel: 4 Glassmorphism Quick Action Cards */}
          <div className="lg:col-span-3 space-y-3 order-2 lg:order-1">

            {/* Card 1: AI Assistant */}
            <div className="bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-emerald-100/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all group flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#006654] to-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#006654] transition-colors">
                  دستیار هوشمند DAP
                </h4>
                <p className="text-[10px] text-slate-500 mt-0.5">پرسش و پاسخ سریع دارویی</p>
              </div>
            </div>

            {/* Card 2: Online Prescription Submission */}
            <Link href="/prescription" className="block">
              <div className="bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-emerald-100/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all group flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#006654] border border-emerald-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#006654] transition-colors">
                    ثبت نسخه آنلاین
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">ارسال و پیگیری آنلاین نسخه</p>
                </div>
              </div>
            </Link>

            {/* Card 3: Express Order Tracking */}
            <div className="bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-emerald-100/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all group flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#006654] border border-emerald-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#006654] transition-colors">
                  پیگیری سفارش
                </h4>
                <p className="text-[10px] text-slate-500 mt-0.5">وضعیت لحظه‌ای ارسال اسنپ پیک</p>
              </div>
            </div>

            {/* Card 4: Doctor & Pharmacist Consultation */}
            <Link href="/contact" className="block">
              <div className="bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-emerald-100/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all group flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#006654] border border-emerald-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#006654] transition-colors">
                    مشاوره با پزشک و داروساز
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">ارتباط تخصصی آنلاین و تلفنی</p>
                </div>
              </div>
            </Link>

          </div>

          {/* Center Panel: Large DAP Emblem & Main Title */}
          <div className="lg:col-span-6 text-center space-y-4 order-1 lg:order-2 py-4">
            {/* Main Emblem Graphic */}
            <div className="mx-auto w-36 h-28 sm:w-44 sm:h-32 relative flex items-center justify-center">
              <img
                src="/Dr_Abdousi_pharmacy/images/dap-logo.jpg"
                alt="DAP Main Emblem"
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#006654] tracking-tight">
                داروخانه دکتر عبدوسی
              </h1>
              <p className="text-xs sm:text-sm font-extrabold text-slate-700 tracking-wider font-sans">
                DR. ABDOOSI PHARMACY
              </p>
            </div>

            {/* Slogan */}
            <p className="text-xs sm:text-sm text-emerald-800 font-semibold pt-1">
              سلامت امروز، زیبایی فردا
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="bg-[#006654] hover:bg-[#004d3f] text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                مشاهده محصولات
              </Link>
              <Link
                href="/about"
                className="bg-white hover:bg-slate-50 text-[#006654] border border-emerald-300 text-xs font-bold px-6 py-2.5 rounded-full transition-all shadow-2xs"
              >
                آشنایی با داروخانه
              </Link>
            </div>
          </div>

          {/* Right Panel: Skincare & Beauty Showcase */}
          <div className="lg:col-span-3 order-3 flex flex-col items-center justify-center text-center space-y-3">
            <div className="relative w-full max-w-[220px] aspect-4/3 rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-100 to-white p-2 border border-emerald-200/60 shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
                alt="Skincare Product Showcase"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs p-1.5 rounded-xl border border-emerald-100 shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#006654]" />
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
