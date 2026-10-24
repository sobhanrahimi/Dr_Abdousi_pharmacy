import React from 'react';
import Link from 'next/link';
import {
  Pill,
  Zap,
  Sparkles,
  ShieldCheck,
  Heart,
  Activity,
  ArrowLeft,
} from 'lucide-react';
import { mockCategories } from '@/lib/data/mock-data';

export default function CategoryGrid() {
  const iconMap: Record<string, React.ElementType> = {
    Pill,
    Zap,
    Sparkles,
    ShieldCheck,
    Heart,
    Activity,
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#0d5c46] uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              دسته‌بندی‌های اصلی
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              بررسی اقلام بهداشتی و سلامت
            </h2>
            <p className="text-slate-600 text-sm">
              دسته‌بندی‌های تخصصی فرآورده‌های غیردارویی، مکمل‌ها و ملزومات پزشکی
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0d5c46] hover:text-[#063d2e] shrink-0"
          >
            <span>مشاهده همه گروه‌ها</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCategories.map((cat) => {
            const IconComp = iconMap[cat.iconName] || Pill;
            return (
              <Link
                key={cat.id}
                href={`/products?category=${cat.id}`}
                className="group bg-slate-50 hover:bg-[#0d5c46] border border-slate-200 hover:border-[#0d5c46] rounded-2xl p-6 transition-all duration-200 shadow-sm hover:shadow-md flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-emerald-800 text-[#0d5c46] group-hover:text-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:border-emerald-700 transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-white transition-colors truncate">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] font-medium text-slate-500 group-hover:text-emerald-200 bg-white group-hover:bg-emerald-900/60 px-2 py-0.5 rounded-full border border-slate-200 group-hover:border-emerald-700 shrink-0">
                      {cat.productCount} کالا
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 group-hover:text-emerald-100 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
