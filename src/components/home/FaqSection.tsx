'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowLeft } from 'lucide-react';
import { mockFaqs } from '@/lib/data/mock-data';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(mockFaqs[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-[#0d5c46] uppercase bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
            سوالات متداول
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            پرسش‌های متداول مراجعه‌کنندگان
          </h2>
          <p className="text-slate-600 text-sm">
            پاسخ به سوالات رایج درباره قوانین دارویی، خدمات مشاوره و تحویل فرآورده‌ها
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {mockFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-right p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#0d5c46] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0d5c46] shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0d5c46]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0d5c46] hover:text-[#063d2e]"
          >
            <span>مشاهده فهرست کامل سوالات متداول</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
