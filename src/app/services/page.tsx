import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getPharmacyServices } from '@/lib/services/product-service';
import {
  Stethoscope,
  FileText,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  AlertCircle,
} from 'lucide-react';

export const metadata = {
  title: 'خدمات داروخانه | داروخانه دکتر عبدوسی',
  description:
    'خدمات تخصصی مشاوره دارویی، راهنمایی استعلام نسخه‌های درمانی، مشاوره مکمل‌های ورزشی و مراقبت درموکاسماتیک پوست و مو.',
};

export default async function ServicesPage() {
  const services = await getPharmacyServices();

  const iconMap: Record<string, React.ElementType> = {
    Stethoscope,
    FileText,
    Award,
    Sparkles,
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-gradient-to-b from-slate-900 via-[#073629] to-[#094032] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-700/60 inline-block">
              خدمات تخصصی داروخانه
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              خدمات مشاوره و راهنمایی دارویی
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light max-w-2xl mx-auto">
              معرفی کامل خدمات تخصصی مشاوره دارویی، بررسی مکمل‌های غذایی و پروتکل‌های سلامت داروخانه دکتر عبدوسی.
            </p>
          </div>
        </section>

        {/* Services Detail Cards */}
        <section className="py-16 px-4 max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv) => {
              const IconComp = iconMap[srv.iconName] || Stethoscope;
              return (
                <div
                  key={srv.id}
                  className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#0d5c46] flex items-center justify-center">
                        <IconComp className="w-7 h-7" />
                      </div>
                      {srv.badgeText && (
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                          {srv.badgeText}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-slate-900">{srv.title}</h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <h3 className="text-xs font-bold text-slate-800 mb-3">ویژگی‌ها و حوزه‌های راهنمایی:</h3>
                      <ul className="space-y-2">
                        {srv.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-[#0d5c46] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">مشاوره حضوری یا تلفنی</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d5c46] hover:text-[#063d2e]"
                    >
                      <span>درخواست تماس مشاوره</span>
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legal Prescription Policy Card */}
          <div className="bg-amber-50/90 border border-amber-200 rounded-3xl p-8 text-amber-900 space-y-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-amber-700 shrink-0" />
              <h2 className="text-base font-bold">راهنمای قوانین و ضوابط نسخه‌پیچی</h2>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-amber-900/90">
              توجه داشته باشید که کلیه نسخه‌های درمانی تحت پوشش بیمه‌های تأمین اجتماعی، خدمات درمانی و بیمه‌های تکمیلی، صرفاً با روئیت و استعلام نسخه معتبر در سامانه رسمی الکترونیک بهداشت و تحویل حضوری در محل داروخانه تحویل می‌گردند. وب‌سایت داروخانه دکتر عبدوسی فروش اینترنتی داروهای نسخه‌ای انجام نمی‌دهد.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
