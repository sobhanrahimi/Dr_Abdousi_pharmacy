import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FaqClient from './FaqClient';
import { getFaqs } from '@/lib/services/product-service';

export const metadata = {
  title: 'سوالات متداول | داروخانه دکتر عبدوسی',
  description: 'پاسخ‌های کامل به سوالات شایع درباره قوانین دارویی، مشاوره، اصالت کالا و نحوه مراجعه.',
};

export default async function FaqPage() {
  const faqs = await getFaqs();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-gradient-to-b from-slate-900 via-[#073629] to-[#094032] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-700/60 inline-block">
              مرکز پاسخگویی
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              پرسش‌های متداول مراجعه‌کنندگان
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light max-w-2xl mx-auto">
              پاسخ به سوالات رایج درباره استانداردهای دارویی، بیمه، مشاوره و نحوه دریافت خدمات.
            </p>
          </div>
        </section>

        <FaqClient faqs={faqs} />
      </main>

      <Footer />
    </div>
  );
}
