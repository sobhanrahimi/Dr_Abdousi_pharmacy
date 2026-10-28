import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PrescriptionModal from '@/components/prescription/PrescriptionModal';
import { ShieldCheck, Stethoscope, Clock } from 'lucide-react';

export const metadata = {
  title: 'ثبت آنلاین نسخه | داروخانه دکتر عبدوسی',
  description: 'ثبت و استعلام آنلاین نسخه الکترونیک و کاغذی بیمه‌های تامین اجتماعی، خدمات درمانی و نیروهای مسلح در داروخانه دکتر عبدوسی',
};

export default function PrescriptionPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-vazirmatn dir-rtl">
      <Header />

      <main className="flex-1 py-12 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-block bg-emerald-100 text-[#0d5c46] text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
            خدمات آنلاین تحویل نسخه
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            ثبت نسخه الکترونیک و پذیرش دارویی
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            کد ملی یا کد رهگیری نسخه بیمه خود را وارد کنید تا کارشناسان داروساز ما وضعیت نسخ و موجودی داروها را استعلام و آماده فرآیند تحویل نمایند.
          </p>
        </div>

        {/* Prescription Form Section */}
        <PrescriptionModal />

        {/* Guidance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0d5c46] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">پوشش بیمه‌های پایه</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              پذیرش نسخه الکترونیک تمام بیمه‌های تامین اجتماعی، سلامت ایرانیان و نیروهای مسلح.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0d5c46] flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">بررسی مسئول فنی</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              کنترل دوز و تداخلات دارویی توسط مسئول فنی (دکتر داروساز) قبل از تحویل.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0d5c46] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">پاسخگویی سریع</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              ارسال پیامک تایید موجودی و اقلام نسخه در کمتر از ۳۰ دقیقه در ساعات کاری.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
