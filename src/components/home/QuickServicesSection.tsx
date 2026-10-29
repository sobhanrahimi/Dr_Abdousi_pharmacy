'use client';

import React from 'react';
import Link from 'next/link';
import {
  User,
  Truck,
  Bot,
  Stethoscope,
} from 'lucide-react';

export default function QuickServicesSection() {
  const services = [
    {
      title: 'حساب کاربری و پرونده مشتری',
      desc: 'سفارش‌ها، نسخه‌ها و امتیازها و تاریخچه خرید',
      icon: User,
      href: '/contact',
    },
    {
      title: 'پیگیری وضعیت سفارش',
      desc: 'نمایش لحظه‌ای مراحل ارسال و تحویل توسط پیک',
      icon: Truck,
      href: '/prescription',
    },
    {
      title: 'دستیار هوشمند مصرف دارو',
      desc: 'یادآور، پیگیری و راهنمای مصرف بر اساس دستور دارو',
      icon: Bot,
      href: '/services',
    },
    {
      title: 'مشاوره آنلاین پزشک',
      desc: 'ارتباط با پزشک صادرکننده نسخه (یا مجوز دسترسی محدود)',
      icon: Stethoscope,
      href: '/contact',
    },
  ];

  return (
    <section className="py-10 bg-[#f4fbf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Side: Mobile Web App App Showcase Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-4">
              {/* Smartphone Mockup Graphic */}
              <div className="w-16 h-28 rounded-2xl bg-[#006654] p-1.5 text-white flex flex-col justify-between shadow-md shrink-0">
                <div className="w-8 h-1 bg-white/30 rounded-full mx-auto" />
                <div className="bg-white/10 rounded-xl p-1 text-[8px] text-center">
                  DAP WebApp
                </div>
                <div className="w-3 h-3 rounded-full bg-white/40 mx-auto" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-800">
                  همراه شما، همیشه و همه جا
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  با وب‌اپ DAP، تجربه خرید و مدیریت داروها را در گوشی خود داشته باشید
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/prescription"
                className="w-full bg-[#006654] hover:bg-[#004d3f] text-white text-xs font-bold py-2.5 rounded-xl transition-colors text-center block shadow-2xs"
              >
                دانلود و نصب وب‌اپ
              </Link>
              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">App Store</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Google Play</span>
              </div>
            </div>
          </div>

          {/* Right Side: 4 Special Services Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="bg-white p-5 rounded-3xl border border-emerald-100/80 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between text-center space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#006654] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#006654] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
