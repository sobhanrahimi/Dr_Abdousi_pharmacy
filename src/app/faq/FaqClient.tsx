'use client';

import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle as FaqIcon } from 'lucide-react';
import { FAQItem } from '@/types/pharmacy';

interface FaqClientProps {
  faqs: FAQItem[];
}

export default function FaqClient({ faqs }: FaqClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      {/* Search & Filter Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جست‌وجو در سوالات متداول..."
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-4 pr-10 text-sm text-slate-800 focus:outline-none focus:border-[#0d5c46] focus:bg-white transition-all placeholder:text-slate-400"
          />
          <Search className="w-5 h-5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-slate-100">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-[#0d5c46] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            همه موارد ({faqs.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#0d5c46] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQs List */}
      {filteredFaqs.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
          <FaqIcon className="w-12 h-12 text-slate-300 mx-auto" />
          <h2 className="text-base font-bold text-slate-800">هیچ پرسشی با این عبارت پیدا نشد</h2>
          <p className="text-xs text-slate-500">لطفاً واژه دیگری را جست‌وجو فرمایید.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-right p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#0d5c46] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#0d5c46] bg-emerald-50 px-2.5 py-1 rounded-full shrink-0">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0d5c46]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
