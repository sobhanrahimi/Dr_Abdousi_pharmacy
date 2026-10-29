'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  MessageCircle,
} from 'lucide-react';
import { mockPharmacyInfo } from '@/lib/data/mock-data';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-emerald-100 text-slate-600 pt-10 pb-6 font-vazirmatn dir-rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-100">

          {/* Col 1: DAP Logo */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/Dr_Abdousi_pharmacy/images/dap-logo.jpg"
                alt="لوگوی DAP"
                className="w-12 h-12 rounded-xl object-cover border border-emerald-100"
              />
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-[#006654]">
                  داروخانه دکتر عبدوسی
                </span>
                <span className="text-[10px] font-bold text-slate-400 font-sans">
                  DR. ABDOOSI PHARMACY
                </span>
              </div>
            </Link>
            <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
              {mockPharmacyInfo.tagline}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#006654]">
              دسترسی سریع
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li><Link href="/" className="hover:text-[#006654] transition-colors">صفحه اصلی</Link></li>
              <li><Link href="/products" className="hover:text-[#006654] transition-colors">محصولات</Link></li>
              <li><Link href="/products" className="hover:text-[#006654] transition-colors">دسته‌بندی‌ها</Link></li>
              <li><Link href="/services" className="hover:text-[#006654] transition-colors">مشاوره دارویی</Link></li>
            </ul>
          </div>

          {/* Col 3: Customer Services */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#006654]">
              خدمات مشتریان
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li><Link href="/about" className="hover:text-[#006654] transition-colors">راهنمای خرید</Link></li>
              <li><Link href="/faq" className="hover:text-[#006654] transition-colors">سوالات متداول</Link></li>
              <li><Link href="/about" className="hover:text-[#006654] transition-colors">شرایط و ضوابط</Link></li>
              <li><Link href="/contact" className="hover:text-[#006654] transition-colors">تماس با ما</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-2 text-xs text-slate-500">
            <h4 className="text-xs font-bold text-[#006654]">
              تماس با ما
            </h4>
            <div className="flex items-start gap-2 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#006654] shrink-0 mt-0.5" />
              <span className="text-[11px] leading-relaxed">آدرس: گیلان، رشت، بلسار معلم...</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#006654] shrink-0" />
              <span dir="ltr" className="text-[11px]">تلفن: 013-90000001</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#006654] shrink-0" />
              <span className="text-[11px] font-sans">ایمیل: info@dap-pharmacy.ir</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Socials */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2025 داروخانه دکتر عبدوسی. تمامی حقوق محفوظ است.</p>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">با ما در ارتباط باشید</span>
            <div className="flex items-center gap-2">
              <a href={mockPharmacyInfo.socials.instagram} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-emerald-50 text-[#006654] flex items-center justify-center hover:bg-[#006654] hover:text-white transition-colors">
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a href={mockPharmacyInfo.socials.telegram} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-emerald-50 text-[#006654] flex items-center justify-center hover:bg-[#006654] hover:text-white transition-colors">
                <Send className="w-3.5 h-3.5" />
              </a>
              <a href={mockPharmacyInfo.socials.whatsapp} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-emerald-50 text-[#006654] flex items-center justify-center hover:bg-[#006654] hover:text-white transition-colors">
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
