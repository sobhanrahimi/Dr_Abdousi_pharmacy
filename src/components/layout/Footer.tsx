import React from 'react';
import Link from 'next/link';
import {
  Cross,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ChevronLeft,
  Send,
  MessageCircle,
  Globe,
} from 'lucide-react';
import { mockPharmacyInfo } from '@/lib/data/mock-data';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8 border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Pharmacy Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0d5c46] flex items-center justify-center text-white shadow-md">
                <Cross className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">داروخانه دکتر عبدوسی</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {mockPharmacyInfo.description}
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>شماره پروانه تاسیس: <strong className="text-slate-200">{mockPharmacyInfo.licenseNumber}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>صادرکننده: {mockPharmacyInfo.licenseIssuer}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:right-0 after:w-8 after:h-0.5 after:bg-emerald-500">
              دسترسی سریع
            </h3>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'صفحه اصلی', href: '/' },
                { label: 'فهرست محصولات و مکمل‌ها', href: '/products' },
                { label: 'خدمات مشاوره دارویی', href: '/services' },
                { label: 'سوالات متداول (FAQ)', href: '/faq' },
                { label: 'درباره داروخانه دکتر عبدوسی', href: '/about' },
                { label: 'تماس و نشانی روی نقشه', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:right-0 after:w-8 after:h-0.5 after:bg-emerald-500">
              دسته‌بندی‌ها
            </h3>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'محصولات بدون نسخه (OTC)', href: '/products?category=cat-otc' },
                { label: 'مکمل‌ها و ویتامین‌ها', href: '/products?category=cat-supplements' },
                { label: 'مراقبت پوست و مو', href: '/products?category=cat-skincare' },
                { label: 'محصولات بهداشتی', href: '/products?category=cat-hygiene' },
                { label: 'مادر و کودک', href: '/products?category=cat-mother-child' },
                { label: 'تجهیزات پزشکی', href: '/products?category=cat-equipment' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:right-0 after:w-8 after:h-0.5 after:bg-emerald-500">
              ارتباط با ما
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{mockPharmacyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span dir="ltr" className="text-right">{mockPharmacyInfo.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-slate-400">
                  <p>{mockPharmacyInfo.workingHours.weekdays}</p>
                  <p>{mockPharmacyInfo.workingHours.thursday}</p>
                </div>
              </div>

              {/* Social Placeholders */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={mockPharmacyInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#0d5c46] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="اینستاگرام"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href={mockPharmacyInfo.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#0d5c46] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="تلگرام"
                >
                  <Send className="w-4 h-4" />
                </a>
                <a
                  href={mockPharmacyInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#0d5c46] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="واتس‌اپ"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Warning Box */}
        <div className="my-8 bg-slate-800/80 border border-slate-700/60 rounded-2xl p-4 text-xs leading-relaxed text-slate-400 flex flex-col md:flex-row items-start md:items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <p>
            <strong className="text-slate-200">سلب مسئولیت عمومی و مقررات دارویی:</strong> اطلاعات مندرج در این سایت صرفاً جهت آگاهی‌بخشی و آشنایی با فرآورده‌های بهداشتی، مکمل‌ها و اقلام غیردارویی است. داروهای نسخه‌ای مطابق قوانین رسمی کشور صرفاً به‌صورت حضوری تحویل می‌گردند و امکان فروش اینترنتی دارو وجود ندارد.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800/60">
          <p>© ۲۰۲۵ داروخانه دکتر عبدوسی. کلیه حقوق محفوظ است.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>طراحی تخصصی سامانه خدمات دارویی</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
