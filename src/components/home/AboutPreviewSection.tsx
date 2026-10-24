import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, HeartHandshake, ArrowLeft, Stethoscope } from 'lucide-react';
import { mockPharmacyInfo } from '@/lib/data/mock-data';

export default function AboutPreviewSection() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl border border-slate-800 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0d5c46] flex items-center justify-center text-white">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">رویکرد تخصصی داروخانه</h3>
                  <p className="text-xs text-emerald-400">تحت مدیریت مسئول فنی داروساز</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
                <p>
                  در داروخانه دکتر عبدوسی، حفظ ارتقای سلامت مراجعه‌کنندگان و ارائه مشاوره دارویی علمی، اولویت اصلی تمام فعالیت‌های ماست.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>تضمن ۱۰۰٪ اصالت کلیه اقلام بهداشتی و مکمل‌ها</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>رعایت دقیق زنجیره سرد و شرایط استاندارد نگهداری</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <HeartHandshake className="w-4 h-4 text-emerald-400" />
                    <span>احترام به حقوق بیمار و حفظ محرمانگی نسخه</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                پروانه تاسیس: <strong className="text-slate-200">{mockPharmacyInfo.licenseNumber}</strong>
              </div>
            </div>
          </div>

          {/* Right Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <span className="text-xs font-bold text-[#0d5c46] uppercase bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
              درباره داروخانه
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              در داروخانه دکتر عبدوسی، سلامت شما مرکز توجه ماست
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              داروخانه دکتر عبدوسی با اتکا به تجربه، دانش تخصصی داروسازی و بهره‌گیری از کادری مجرب، محیطی امن و مطمئن را برای پاسخگویی به نیازهای دارویی، مکمل‌های رژیمی و بهداشتی مراجعه‌کنندگان فراهم ساخته است.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              تلاش ما این است که علاوه بر ارائه اقلام باکیفیت و اصیل، اطلاعات کاربردی و دوز مصرفی صحیح داروها را در اختیار شما قرار دهیم تا با اطمینان خاطر در مسیر سلامت گام بردارید.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="bg-[#0d5c46] hover:bg-[#063d2e] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow flex items-center gap-2"
              >
                <span>مطالعه بیشتر درباره ما</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-medium px-6 py-3 rounded-xl transition-all"
              >
                ارتباط مستقیم و نشانی
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
