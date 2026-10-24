import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FileQuestion, Home, PackageSearch } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="bg-white border border-slate-200 rounded-3xl p-10 max-w-lg w-full text-center space-y-5 shadow-sm">
          <div className="w-20 h-20 bg-emerald-50 text-[#0d5c46] rounded-3xl mx-auto flex items-center justify-center">
            <FileQuestion className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">صفحه یا محصول مورد نظر یافت نشد</h1>
          <p className="text-xs text-slate-600 leading-relaxed">
            ممکن است آدرس وارد شده اشتباه باشد یا این محصول از فهرست فرآورده‌های داروخانه حذف شده باشد.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/products"
              className="w-full sm:w-auto bg-[#0d5c46] hover:bg-[#063d2e] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow flex items-center justify-center gap-2"
            >
              <PackageSearch className="w-4 h-4" />
              <span>فهرست محصولات</span>
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>صفحه اصلی</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
