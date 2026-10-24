import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getPharmacyInfo } from '@/lib/services/product-service';
import {
  ShieldCheck,
  Award,
  Stethoscope,
  Heart,
  CheckCircle2,
  FileCheck,
  Phone,
} from 'lucide-react';

export const metadata = {
  title: 'درباره داروخانه دکتر عبدوسی | تاریخچه و ارزش‌های حرفه‌ای',
  description:
    'معرفی رسمی داروخانه دکتر عبدوسی، اهداف و ماموریت در ارتقای سلامت جامعه، پروانه تاسیس و استانداردهای خدمات دارویی.',
};

export default async function AboutPage() {
  const info = await getPharmacyInfo();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-1">
        {/* Page Header Banner */}
        <section className="bg-gradient-to-b from-slate-900 via-[#073629] to-[#094032] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-700/60 inline-block">
              درباره داروخانه دکتر عبدوسی
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              تعهد به سلامت، صیانت از اصالت
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light max-w-2xl mx-auto">
              معرفی مأموریت، رویکرد علمی و استانداردهای تخصصی داروخانه دکتر عبدوسی در ارائه خدمات دارویی و مراقبت‌های سلامتی.
            </p>
          </div>
        </section>

        {/* Core Vision Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-right">
              <h2 className="text-2xl font-extrabold text-slate-900">
                ماموریت و فلسفه خدمت‌رسانی
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {info.description}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                ما بر این باوریم که داروخانه تنها محلی برای تحویل دارو نیست؛ بلکه پایگاهی مطمئن برای ارتقای دانش سلامت عمومی، پاسخگویی مسئولانه به پرسش‌های دارویی و راهنمایی دقیق در انتخاب فرآورده‌های بهداشتی و مکمل‌های اصیل است.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#0d5c46] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">اصالت و کیفیت ۱۰۰٪</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      تهیه کلیه محصولات صرفاً از شرکت‌های پخش سراسری دارای مجوز رسمی
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <Stethoscope className="w-5 h-5 text-[#0d5c46] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">مشاوره علمی مسئولانه</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      پاسخگویی مستقیم دکتر داروساز در زمینه تداخلات و دوز مصرفی
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* License Box */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0d5c46] flex items-center justify-center">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">مجوزهای رسمی و نظارتی</h3>
                  <p className="text-xs text-slate-500">سازمان غذا و دارو</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                  <span>شماره پروانه تاسیس:</span>
                  <strong className="text-slate-900">{info.licenseNumber}</strong>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                  <span>مرجع صادرکننده:</span>
                  <strong className="text-slate-900">{info.licenseIssuer}</strong>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                  <span>مسئول فنی / مدیر:</span>
                  <strong className="text-slate-900">{info.doctorName}</strong>
                </div>
              </div>

              <div className="pt-2 text-center">
                <Link
                  href="/contact"
                  className="w-full bg-[#0d5c46] hover:bg-[#063d2e] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all shadow inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>ارتباط مستقیم با داروخانه</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold text-[#0d5c46] uppercase bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
                ارزش‌های ما
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                مبانی اخلاق حرفه‌ای داروخانه
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-3 text-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0d5c46] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">صداقت علمی</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  توصیه فرآورده‌ها صرفاً بر اساس نیاز واقعی بیمار و بدون تبلیغات کاذب یا ادعاهای ثابت نشده درمانی.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-3 text-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0d5c46] mx-auto flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">استانداردهای نگهداری</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  کنترل دائم دمای یخچال، سیستم تهویه هوای استاندارد انبار و پایش تاریخ انقضای تمامی فرآورده‌ها.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-3 text-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0d5c46] mx-auto flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">کرامت و حریم مراجعه‌کننده</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  حفظ کامل رازدارای دارویی، ایجاد فضای گفتگو آرام جهت طرح سوالات پزشکی و احترام به انتخاب بیمار.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
