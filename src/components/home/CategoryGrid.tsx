'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CategoryGrid() {
  const categories = [
    {
      id: 'mother-child',
      name: 'مادر و کودک',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
      href: '/products?category=cat-mother-child',
    },
    {
      id: 'equipment',
      name: 'تجهیزات پزشکی',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
      href: '/products?category=cat-orthopedic-equipment',
    },
    {
      id: 'supplements',
      name: 'مکمل‌های غذایی',
      image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop',
      href: '/products?category=cat-pharma-supplements',
    },
    {
      id: 'skincare',
      name: 'مراقبت و پوست و مو',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
      href: '/products?category=cat-skincare',
    },
    {
      id: 'cosmetics',
      name: 'آرایشی و بهداشتی',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
      href: '/products?category=cat-cosmetics',
    },
    {
      id: 'wellness',
      name: 'سلامت جنسی و تناسب اندام',
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=800&auto=format&fit=crop',
      href: '/products?category=cat-sports-supplements',
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div>
            <h2 className="text-base sm:text-lg font-black text-[#006654]">
              دسته‌بندی محصولات
            </h2>
            <p className="text-[11px] text-slate-500 mt-0.5">
              انتخاب آسان، سلامت مطمئن.
            </p>
          </div>
          <Link
            href="/products"
            className="text-xs font-bold text-[#006654] hover:text-[#004d3f] flex items-center gap-1 transition-colors group"
          >
            <span>مشاهده همه</span>
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories 6-Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group bg-gradient-to-b from-[#eef9f6] to-[#e4f4f0] hover:from-[#e1f5f0] hover:to-[#d2eee7] rounded-2xl p-3 text-center border border-emerald-100/80 transition-all hover:shadow-xs flex flex-col items-center justify-between min-h-[150px]"
            >
              {/* Category Image */}
              <div className="w-18 h-18 rounded-xl overflow-hidden bg-white p-1 shadow-2xs group-hover:scale-105 transition-transform duration-300 mb-2 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Category Title */}
              <h3 className="text-[11px] font-bold text-slate-800 group-hover:text-[#006654] transition-colors leading-tight">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
