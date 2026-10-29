'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  ChevronLeft,
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'صفحه اصلی', href: '/' },
    { name: 'محصولات', href: '/products' },
    { name: 'دسته‌بندی‌ها', href: '/products' },
    { name: 'مشاوره دارویی', href: '/services' },
    { name: 'درباره ما', href: '/about' },
    { name: 'تماس با ما', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f4fbf8]/95 backdrop-blur-md border-b border-emerald-100/60 shadow-2xs">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-4">

        {/* Right Section: DAP Official Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="h-10 w-auto overflow-hidden group-hover:scale-105 transition-transform duration-200">
            <img
              src="/Dr_Abdousi_pharmacy/images/dap-logo.jpg"
              alt="DAP Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Center Section: Navigation Menu Items & Search Bar */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-6 max-w-4xl mx-2">
          <nav className="flex items-center gap-1.5 shrink-0">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[12px] font-black px-2.5 py-1.5 rounded-xl transition-all ${
                    active
                      ? 'text-[#006654] font-black underline underline-offset-8 decoration-2 decoration-[#006654]'
                      : 'text-slate-600 hover:text-[#006654]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Search Bar matching reference */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex-1 max-w-xs"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجوی محصولات... مثلاً قطره موثره..."
              className="w-full bg-slate-100/80 border border-slate-200 focus:border-[#006654] focus:bg-white text-slate-800 text-[11px] rounded-full py-1.5 pr-8 pl-3 outline-none transition-all placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#006654] transition-colors"
              aria-label="جست‌وجو"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Left Section: Cart Badge & Account Button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href="/products"
            className="relative w-9 h-9 rounded-full bg-emerald-50 hover:bg-emerald-100/80 text-[#006654] flex items-center justify-center transition-colors border border-emerald-200/60"
            aria-label="سبد خرید"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 bg-[#006654] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
              ۲
            </span>
          </Link>

          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200 transition-all shadow-2xs"
          >
            <User className="w-3.5 h-3.5 text-[#006654]" />
            <span>ورود / ثبت نام</span>
          </Link>

          {/* Mobile Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="منوی موبایل"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-xs bg-white h-full shadow-2xl flex flex-col p-5 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <img
                src="/Dr_Abdousi_pharmacy/images/dap-logo.jpg"
                alt="DAP Logo"
                className="h-8 w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="mb-4 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جست‌وجوی محصولات..."
                className="w-full bg-slate-100 border border-slate-200 rounded-xl py-2 pr-8 pl-3 text-xs focus:outline-none focus:border-[#006654]"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
            </form>

            <div className="flex flex-col gap-1 mb-6">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-colors ${
                      active
                        ? 'bg-emerald-50 text-[#006654]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
