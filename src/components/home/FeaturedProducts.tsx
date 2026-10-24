import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, ShieldAlert, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { mockProducts } from '@/lib/data/mock-data';

export default function FeaturedProducts() {
  const featured = mockProducts.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#0d5c46] uppercase bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
              اقلام منتخب
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              محصولات و مکمل‌های مورد استقبال
            </h2>
            <p className="text-slate-600 text-sm">
              نمونه کالاهای بهداشتی، تجهیزات و مکمل‌های موجود با برچسب نمونه داده
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0d5c46] hover:text-[#063d2e] shrink-0"
          >
            <span>مشاهده همه محصولات</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                    <span className="text-[10px] font-bold bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-full shadow">
                      {product.categoryName}
                    </span>
                    {product.isSamplePrice && (
                      <span className="text-[9px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded-md shadow">
                        قیمت نمونه
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium text-slate-600">{product.brand || 'اصیل'}</span>
                    {product.rating && (
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="font-bold text-slate-800">{product.rating}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0d5c46] transition-colors leading-snug line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {product.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 space-y-3">
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400">قیمت تخمینی/آزمایشی</span>
                    <span className="text-sm font-extrabold text-[#0d5c46]">
                      {product.formattedPrice}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                      product.isPrescriptionRequired
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {product.isPrescriptionRequired ? (
                      <>
                        <ShieldAlert className="w-3 h-3" />
                        <span>نسخه‌ای</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>موجود</span>
                      </>
                    )}
                  </span>
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="w-full bg-slate-100 hover:bg-[#0d5c46] text-slate-800 hover:text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <span>مشاهده جزئیات</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
