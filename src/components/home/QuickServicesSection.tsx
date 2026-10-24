import React from 'react';
import Link from 'next/link';
import {
  Stethoscope,
  FileText,
  Award,
  Sparkles,
  ChevronLeft,
  CheckCircle2,
} from 'lucide-react';
import { mockServices } from '@/lib/data/mock-data';

export default function QuickServicesSection() {
  const iconMap: Record<string, React.ElementType> = {
    Stethoscope,
    FileText,
    Award,
    Sparkles,
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#0d5c46] tracking-wider uppercase bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
            خدمات حرفه‌ای داروخانه
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            خدمات تخصصی و مشاوره سلامت
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            داروخانه دکتر عبدوسی فراتر از تحویل دارو، مرجعی برای ارائه راهنمایی‌های علمی دقیق و آگاهی‌بخشی به مراجعه‌کنندگان گرامی است.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockServices.map((service) => {
            const IconComp = iconMap[service.iconName] || Stethoscope;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0d5c46] flex items-center justify-center group-hover:bg-[#0d5c46] group-hover:text-white transition-colors duration-200">
                      <IconComp className="w-6 h-6" />
                    </div>
                    {service.badgeText && (
                      <span className="text-[11px] font-medium text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                        {service.badgeText}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#0d5c46] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-3">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d5c46] hover:text-[#063d2e] pt-2 border-t border-slate-100"
                >
                  <span>اطلاعات بیشتر</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
