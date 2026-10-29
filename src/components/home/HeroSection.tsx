'use client';

import React from 'react';
import Link from 'next/link';
import {
  Bot,
  FileText,
  Truck,
  Stethoscope,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e3f4ee] via-[#dcf0e8] to-[#e8f6f1] py-10 lg:py-16 border-b border-emerald-100/60">

      {/* Botanical leaves and water droplet background graphic simulation */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#006654_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Left Panel: 4 Compact Glassmorphism Quick Action Cards */}
          <div className="lg:col-span-3 space-y-3 order-2 lg:order-1">

            {/* Card 1: DAP AI Assistant */}
            <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-xs hover:shadow-md transition-all group flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#006654] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Bot className="w-5 h-5" />
              </div>
              <div className="text-right">
                <h4 className="text-xs font-black text-[#006654]">
                  دستیار هوشمند DAP
                </h4>
                <p className="text-[10px] text-slate-500 mt-0.5">پرسش و پاسخ سریع</p>
              </div>
            </div>

            {/* Card 2: Online Prescription Submission */}
            <Link href="/prescription" className="block">
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-xs hover:shadow-md transition-all group flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#006654] border border-emerald-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <h4 className="text-xs font-black text-[#006654]">
                    ثبت نسخه آنلاین
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">ارسال و پیگیری نسخه</p>
                </div>
              </div>
            </Link>

            {/* Card 3: Express Order Tracker */}
            <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-xs hover:shadow-md transition-all group flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#006654] border border-emerald-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Truck className="w-5 h-5" />
              </div>
              <div className="text-right">
                <h4 className="text-xs font-black text-[#006654]">
                  پیگیری سفارش
                </h4>
                <p className="text-[10px] text-slate-500 mt-0.5">وضعیت لحظه‌ای پیک</p>
              </div>
            </div>

            {/* Card 4: Doctor & Pharmacist Consultation */}
            <Link href="/contact" className="block">
              <div className="bg-white/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-xs hover:shadow-md transition-all group flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#006654] border border-emerald-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <h4 className="text-xs font-black text-[#006654]">
                    مشاوره با پزشک و داروساز
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">آنلاین و مطمئن</p>
                </div>
              </div>
            </Link>

          </div>

          {/* Center Panel: Main DAP Emblem, Slogan, and CTA Buttons */}
          <div className="lg:col-span-6 text-center space-y-4 order-1 lg:order-2 py-2">

            {/* Main Emblem Graphic */}
            <div className="mx-auto w-48 h-28 sm:w-56 sm:h-32 relative flex items-center justify-center">
              <img
                src="/Dr_Abdousi_pharmacy/images/dap-logo.jpg"
                alt="DAP Logo Emblem"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-black text-[#006654] tracking-tight">
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

            {/* CTA Buttons */}
            <div className="pt-2 flex items-center justify-center gap-3">
              <Link
                href="/products"
                className="bg-[#006654] hover:bg-[#004d3f] text-white text-xs font-extrabold px-6 py-2.5 rounded-full transition-all shadow-2xs"
              >
                مشاهده محصولات
              </Link>
              <Link
                href="/about"
                className="bg-white/80 hover:bg-white text-[#006654] border border-emerald-300 text-xs font-extrabold px-6 py-2.5 rounded-full transition-all shadow-2xs"
              >
                آشنایی با داروخانه
              </Link>
            </div>

            {/* 3 Carousel Pagination Dots */}
            <div className="pt-3 flex items-center justify-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#006654]" />
              <span className="w-2 h-2 rounded-full bg-emerald-300" />
              <span className="w-2 h-2 rounded-full bg-emerald-300" />
            </div>

          </div>

          {/* Right Panel: Skincare Product Showcase & Tagline */}
          <div className="lg:col-span-3 order-3 flex flex-col items-center justify-center text-center space-y-3">
            <p className="text-xs font-extrabold text-[#006654] font-serif italic">
              مراقبت از خود یک انتخاب است...
            </p>

            <div className="relative w-full max-w-[200px] aspect-3/4 rounded-3xl overflow-hidden bg-white/70 p-2 border border-emerald-100 shadow-2xs group">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
                alt="Skincare Product Bottle Showcase"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
