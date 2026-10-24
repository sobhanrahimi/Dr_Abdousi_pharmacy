'use client';

import React, { useState, useTransition, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Search,
  Filter,
  X,
  Star,
  CheckCircle2,
  ShieldAlert,
  ArrowUpRight,
  SlidersHorizontal,
  PackageX,
  RotateCcw,
} from 'lucide-react';
import { Product, Category } from '@/types/pharmacy';
import { getProducts } from '@/lib/services/product-service';

interface ProductsClientProps {
  initialProducts: Product[];
  categories: Category[];
}

function ProductsContent({
  initialProducts,
  categories,
}: ProductsClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlCategory = searchParams.get('category') || 'all';
  const urlSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory);
  const [searchQuery, setSearchQuery] = useState<string>(urlSearch);
  const [sortBy, setSortBy] = useState<'featured' | 'price_asc' | 'price_desc' | 'name'>('featured');
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    let isSubscribed = true;
    startTransition(async () => {
      const filtered = await getProducts({
        categoryId: selectedCategory,
        searchQuery,
        sortBy,
      });
      if (isSubscribed) {
        setProducts(filtered);
      }
    });
    return () => {
      isSubscribed = false;
    };
  }, [selectedCategory, searchQuery, sortBy]);

  const updateUrl = (cat: string, q: string) => {
    const params = new URLSearchParams();
    if (cat && cat !== 'all') params.set('category', cat);
    if (q.trim()) params.set('search', q.trim());
    const queryString = params.toString();
    router.replace(`/products${queryString ? `?${queryString}` : ''}`, { scroll: false });
  };

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    updateUrl(catId, searchQuery);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setSearchQuery(q);
    updateUrl(selectedCategory, q);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
    router.replace('/products', { scroll: false });
  };

  const hasActiveFilters = selectedCategory !== 'all' || searchQuery.trim() !== '' || sortBy !== 'featured';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Page Title Header */}
      <div className="mb-8 border-b border-slate-200 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              فهرست محصولات و مکمل‌ها
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              بررسی اقلام بهداشتی، آرایشی، مکمل‌های غذایی و ورزشی همراه با اطلاعات استاندارد
            </p>
          </div>
          <span className="text-xs font-medium text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-full self-start sm:self-auto border border-emerald-200">
            {products.length} کالا یافت شد
          </span>
        </div>
      </div>

      {/* Filter and Search Controls Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="جست‌وجو نام کالا، برند یا ترکیب..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-9 pr-9 text-sm text-slate-800 focus:outline-none focus:border-[#0d5c46] focus:bg-white transition-all placeholder:text-slate-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  updateUrl(selectedCategory, '');
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-4">
            <div className="relative flex items-center">
              <Filter className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-4 pr-9 text-sm text-slate-800 focus:outline-none focus:border-[#0d5c46] focus:bg-white transition-all appearance-none cursor-pointer"
              >
                <option value="all">همه دسته‌بندی‌ها</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({cat.productCount})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Select */}
          <div className="md:col-span-3">
            <div className="relative flex items-center">
              <SlidersHorizontal className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as 'featured' | 'price_asc' | 'price_desc' | 'name'
                  )
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-4 pr-9 text-sm text-slate-800 focus:outline-none focus:border-[#0d5c46] focus:bg-white transition-all appearance-none cursor-pointer"
              >
                <option value="featured">مرتب‌سازی: پیشنهادی</option>
                <option value="price_asc">قیمت: ارزان‌ترین به گران‌ترین</option>
                <option value="price_desc">قیمت: گران‌ترین به ارزان‌ترین</option>
                <option value="name">بر اساس نام (الف تا ی)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="hidden lg:flex items-center gap-2 pt-2 overflow-x-auto no-scrollbar border-t border-slate-100">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-[#0d5c46] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            همه موارد
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#0d5c46] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="mr-auto text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>پاک‌سازی فیلترها</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Grid or Empty State */}
      {isPending ? (
        <div className="py-20 text-center text-slate-500 text-sm">
          <div className="inline-block w-8 h-8 border-3 border-[#0d5c46] border-t-transparent rounded-full animate-spin mb-3" />
          <p>در حال بروزرسانی فهرست محصولات...</p>
        </div>
      ) : products.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4 my-10 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
            <PackageX className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-bold text-slate-900">محصولی با این مشخصات یافت نشد</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            لطفاً عبارات متفاوتی را جست‌وجو کنید یا فیلترهای اعمال‌شده را پاک فرمایید.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 bg-[#0d5c46] hover:bg-[#063d2e] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow"
          >
            <RotateCcw className="w-4 h-4" />
            <span>مشاهده همه محصولات</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image */}
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

                {/* Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-600">{product.brand || 'اصیل'}</span>
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
                  <span>مشاهده جزئیات کالا</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductsClient(props: ProductsClientProps) {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-500 text-sm">در حال بارگذاری فیلترها...</div>}>
      <ProductsContent {...props} />
    </Suspense>
  );
}
