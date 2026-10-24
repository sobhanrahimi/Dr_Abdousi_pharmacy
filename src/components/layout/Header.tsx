'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Phone,
  Clock,
  Search,
  Menu,
  X,
  Cross,
  ChevronLeft,
  Stethoscope,
  Info,
  Package,
  Home,
  HelpCircle,
  MapPin,
} from 'lucide-react';
import { mockPharmacyInfo } from '@/lib/data/mock-data';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'خانه', href: '/', icon: Home },
    { name: 'محصولات', href: '/products', icon: Package },
    { name: 'خدمات داروخانه', href: '/services', icon: Stethoscope },
    { name: 'سوالات متداول', href: '/faq', icon: HelpCircle },
    { name: 'درباره ما', href: '/about', icon: Info },
    { name: 'تماس با ما', href: '/contact', icon: MapPin },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Announcement Bar */}
      <div className="bg-[#063d2e] text-emerald-100 text-xs py-2 px-4 border-b border-emerald-800/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-200">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>ساعات کاری: {mockPharmacyInfo.workingHours.weekdays}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-200">
              <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
              <span>مشاوره دارویی: {mockPharmacyInfo.consultationPhone}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-emerald-300">
            <span className="hidden lg:inline bg-emerald-900/60 text-emerald-300 text-[11px] px-2.5 py-0.5 rounded-full border border-emerald-700/50">
              تحت نظارت سازمان غذا و دارو - پروانه: {mockPharmacyInfo.licenseNumber}
            </span>
            <a
              href={`tel:${mockPharmacyInfo.phone}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-sans text-[12px]">{mockPharmacyInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`bg-white/95 backdrop-blur-md border-b transition-all duration-200 ${
          isScrolled ? 'shadow-md border-slate-200 py-3' : 'border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo & Brand Emblem */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0d5c46] to-[#063d2e] flex items-center justify-center text-white shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform duration-200">
              <Cross className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#0d5c46] transition-colors">
                داروخانه دکتر عبدوسی
              </span>
              <span className="text-xs text-emerald-700 font-medium">
                مرجع تخصصی مشاوره و سلامت
              </span>
            </div>
          </Link>

          {/* Central Search Bar (Desktop) */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-md mx-4 relative"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جست‌وجوی کالا، مکمل یا برند..."
              className="w-full bg-slate-100 border border-slate-200 focus:border-[#0d5c46] focus:bg-white text-slate-800 text-sm rounded-full py-2.5 pl-10 pr-4 outline-none transition-all placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="absolute left-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0d5c46] hover:bg-[#063d2e] text-white flex items-center justify-center transition-colors"
              aria-label="جست‌وجو"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#0d5c46] hover:bg-[#063d2e] text-white text-xs md:text-sm font-medium px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Stethoscope className="w-4 h-4 text-emerald-300" />
              <span>ارتباط و مشاوره</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="منوی موبایل"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu Bar (Desktop) */}
      <nav className="hidden md:block bg-slate-900 text-slate-100 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ul className="flex items-center gap-1 py-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const IconComponent = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors ${
                      active
                        ? 'bg-[#0d5c46] text-white shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${active ? 'text-emerald-300' : 'text-slate-400'}`} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-xs bg-white h-full shadow-2xl flex flex-col p-5 overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#0d5c46] flex items-center justify-center text-white">
                  <Cross className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-900 text-base">داروخانه دکتر عبدوسی</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Search Input */}
            <form onSubmit={handleSearchSubmit} className="mb-6 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جست‌وجوی محصولات..."
                className="w-full bg-slate-100 border border-slate-200 rounded-xl py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:border-[#0d5c46]"
              />
              <button
                type="submit"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 text-emerald-800"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1 mb-6">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? 'bg-emerald-50 text-[#0d5c46] border border-emerald-200/60 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-5 h-5 ${active ? 'text-[#0d5c46]' : 'text-slate-400'}`} />
                      <span>{item.name}</span>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Contact Box */}
            <div className="mt-auto pt-4 border-t border-slate-100 bg-slate-50 p-4 rounded-xl text-xs text-slate-600 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1">
                <Clock className="w-4 h-4 text-[#0d5c46]" />
                <span>ساعات مراجعه و مشاوره</span>
              </div>
              <p>{mockPharmacyInfo.workingHours.weekdays}</p>
              <div className="flex items-center gap-2 text-emerald-800 font-medium mt-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${mockPharmacyInfo.phone}`} className="hover:underline">
                  {mockPharmacyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
