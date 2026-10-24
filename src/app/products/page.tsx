import React, { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductsClient from './ProductsClient';
import { getProducts, getCategories } from '@/lib/services/product-service';

export const metadata = {
  title: 'فهرست محصولات و مکمل‌ها | داروخانه دکتر عبدوسی',
  description: 'مشاهده و بررسی کامل محصولات بدون نسخه، مکمل‌های ورزشی و غذایی، کرم‌های مراقبت پوستی و ملزومات پزشکی.',
};

export default async function ProductsPage() {
  const [initialProducts, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="py-20 text-center text-slate-500 text-sm">
              در حال بارگذاری کاتالوگ محصولات...
            </div>
          }
        >
          <ProductsClient initialProducts={initialProducts} categories={categories} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
