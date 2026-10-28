'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowLeft } from 'lucide-react';

export default function FeaturedProducts() {
  const bestSellers = [
    {
      id: 'p-01',
      name: 'مکمل ویتامین D3',
      brand: 'DHC',
      price: '۳۹۰,۰۰۰ تومان',
      badge: 'بهداشتی طرفدار',
      badgeColor: 'bg-[#006654] text-white',
      image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop',
      href: '/products/p-01',
    },
    {
      id: 'p-03',
      name: 'کرم مرطوب‌کننده پوست',
      brand: 'Vichy',
      price: '۴۸۰,۰۰۰ تومان',
      badge: 'پرفروش',
      badgeColor: 'bg-emerald-600 text-white',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
      href: '/products/p-03',
    },
    {
      id: 'p-06',
      name: 'محلول پاک‌کننده پوست',
      brand: 'Bioderma',
      price: '۳۹۰,۰۰۰ تومان',
      badge: 'جامعه هدف',
      badgeColor: 'bg-emerald-700 text-white',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
      href: '/products/p-06',
    },
    {
      id: 'p-02',
      name: 'ژل شستشوی پوست',
      brand: 'La Roche-Posay',
      price: '۴۹۰,۰۰۰ تومان',
      badge: 'پرفروش',
      badgeColor: 'bg-[#006654] text-white',
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=800&auto=format&fit=crop',
      href: '/products/p-02',
    },
  ];

  return (
    <section className="py-10 bg-[#f8fcfb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Side: Skincare Campaign Banner */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#cbece2] via-[#e2f5f0] to-[#bde7dc] rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-emerald-200/80 shadow-xs min-h-[380px]">
            {/* Decorative Skincare Image Background */}
            <div className="absolute top-0 left-0 w-1/2 h-full opacity-20 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
                alt="Skincare Banner"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#006654] leading-tight">
                زیبایی و سلامت پوست با بهترین محصولات
              </h3>
              <p className="text-xs font-semibold text-slate-600">
                مراقبت حرفه‌ای، نتیجه ماندگار
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <Link
                href="/products?category=cat-skincare"
                className="inline-flex items-center gap-2 bg-[#006654] hover:bg-[#004d3f] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all shadow-md"
              >
                <span>مشاهده محصولات</span>
              </Link>
            </div>
          </div>

          {/* Right Side: Best Sellers Section & Product Cards */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div>
                <h2 className="text-lg font-extrabold text-[#006654]">
                  محصولات پرفروش
                </h2>
                <p className="text-xs text-slate-500">
                  محصولاتی که بیشتر از همه انتخاب می‌شوند
                </p>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold text-[#006654] hover:text-[#004d3f] flex items-center gap-1 transition-colors group"
              >
                <span>مشاهده همه</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 4 Best Seller Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {bestSellers.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative group"
                >
                  {/* Top Badges & Wishlist Heart */}
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <button
                      className="p-1 text-slate-300 hover:text-rose-500 transition-colors"
                      aria-label="افزودن به علاقه‌مندی"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-50 mb-3 flex items-center justify-center p-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Info & Price */}
                  <div className="text-center space-y-1 mb-3">
                    <h4 className="text-xs font-bold text-slate-800 line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-sans">
                      {item.brand}
                    </p>
                    <p className="text-xs font-extrabold text-[#006654] pt-1">
                      {item.price}
                    </p>
                  </div>

                  {/* Add to Cart Button */}
                  <Link
                    href={item.href}
                    className="w-full bg-[#006654] hover:bg-[#004d3f] text-white text-[11px] font-bold py-2 rounded-xl transition-colors text-center block"
                  >
                    افزودن به سبد خرید
                  </Link>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
