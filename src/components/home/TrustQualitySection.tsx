import React from 'react';
import { ShieldCheck, Award, Lock, Stethoscope } from 'lucide-react';

export default function TrustQualitySection() {
  const points = [
    {
      title: 'تضمین اصالت کالا',
      desc: 'تمامی فرآورده‌های آرایشی، بهداشتی و مکمل‌ها دارای کد اصالت سازمان غذا و دارو (TTAC) می‌باشند.',
      icon: ShieldCheck,
    },
    {
      title: 'نظارت مسئول فنی',
      desc: 'پاسخگویی، استعلام و راهنمایی مستقیم زیر نظر دکتر داروساز صورت می‌پذیرد.',
      icon: Stethoscope,
    },
    {
      title: 'استاندارد نگهداری',
      desc: 'کنترل دائم دما، رطوبت و رعایت دقیق شرایط انبارداری فرآورده‌های دارویی حساس.',
      icon: Award,
    },
    {
      title: 'حفظ محرمانگی بیمار',
      desc: 'صیانت کامل از اطلاعات پزشکی و حریم خصوصی مراجعه‌کنندگان گرامی.',
      icon: Lock,
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-[#0d5c46] uppercase bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
            اصول و ارزش‌های کاری
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            استانداردهای کیفیت و اعتماد
          </h2>
          <p className="text-slate-600 text-sm">
            ارزش‌های قابل اثبات و تعهدی که در خدمت‌رسانی دارویی به آن پایبندیم
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm text-center space-y-3 hover:border-emerald-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0d5c46] mx-auto flex items-center justify-center">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
