import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  getProductById,
  getProducts,
  getPharmacyInfo,
} from '@/lib/services/product-service';
import {
  ChevronLeft,
  ShieldCheck,
  ShieldAlert,
  Star,
  Phone,
  Info,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Stethoscope,
  Building,
  ArrowUpRight,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) {
    return {
      title: 'محصول یافت نشد | داروخانه دکتر عبدوسی',
    };
  }
  return {
    title: `${product.name} | داروخانه دکتر عبدوسی`,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [product, allProducts, pharmacyInfo] = await Promise.all([
    getProductById(id),
    getProducts(),
    getPharmacyInfo(),
  ]);

  if (!product) {
    notFound();
  }

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap">
          <Link href="/" className="hover:text-[#0d5c46]">
            خانه
          </Link>
          <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/products" className="hover:text-[#0d5c46]">
            محصولات
          </Link>
          <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
          <Link
            href={`/products?category=${product.categoryId}`}
            className="hover:text-[#0d5c46]"
          >
            {product.categoryName}
          </Link>
          <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-medium truncate max-w-xs">
            {product.name}
          </span>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0d5c46] bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-sm transition-all"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به فهرست محصولات</span>
          </Link>
        </div>

        {/* Product Details Main Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-10">
            {/* Product Image Section */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <span className="text-xs font-bold bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full shadow">
                    {product.categoryName}
                  </span>
                  {product.isSamplePrice && (
                    <span className="text-xs font-bold bg-amber-500 text-white px-2.5 py-1 rounded-md shadow">
                      قیمت نمونه
                    </span>
                  )}
                </div>
              </div>

              {/* Verified Ribbon Box */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-3 text-xs text-emerald-900">
                <ShieldCheck className="w-6 h-6 text-[#0d5c46] shrink-0" />
                <div>
                  <strong className="block font-bold">تضمین اصالت سلامت کالا</strong>
                  <p className="text-slate-600">نگهداری در شرایط استاندارد انبارداری دارویی</p>
                </div>
              </div>
            </div>

            {/* Product Meta Section */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-[#0d5c46] bg-emerald-100 px-3 py-1 rounded-full">
                    برند: {product.brand || 'اصیل'}
                  </span>
                  {product.rating && (
                    <div className="flex items-center gap-1.5 text-xs text-amber-500 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span className="font-bold text-slate-800">{product.rating} از ۵</span>
                      <span className="text-slate-400">({product.reviewsCount} نظر)</span>
                    </div>
                  )}
                </div>

                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug">
                  {product.name}
                </h1>

                {product.englishName && (
                  <p className="text-xs font-mono text-slate-400 dir-ltr text-right">
                    {product.englishName}
                  </p>
                )}
              </div>

              {/* Price & Availability Box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500">قیمت (داده آزمایشی):</span>
                    <span className="text-2xl font-black text-[#0d5c46]">
                      {product.formattedPrice}
                    </span>
                  </div>

                  <span
                    className={`text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 ${
                      product.isPrescriptionRequired
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    {product.isPrescriptionRequired ? (
                      <>
                        <ShieldAlert className="w-4 h-4" />
                        <span>داروی نسخه‌ای (تحویل حضوری)</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>موجود در داروخانه</span>
                      </>
                    )}
                  </span>
                </div>

                {product.isPrescriptionRequired ? (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p>
                      <strong>توجه قانونی:</strong> طبق دستورالعمل‌های سازمان غذا و دارو، ارائه داروهای نسخه‌ای صرفاً با تحویل نسخه معتبر پزشک در محل داروخانه انجام می‌شود و امکان سفارش‌دهی یا فروش اینترنتی ندارد.
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-slate-500">
                    * قیمت درج‌شده صرفاً جنبه نمونه داده نرم‌افزاری دارد و جهت استعلام قیمت دقیق و موجودی روز می‌توانید با داروخانه تماس بگیرید.
                  </p>
                )}
              </div>

              {/* Brief Summary */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#0d5c46]" />
                  <span>معرفی کوتاه کالا</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {product.summary}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`tel:${pharmacyInfo.phone}`}
                  className="flex-1 bg-[#0d5c46] hover:bg-[#063d2e] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl transition-all shadow flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>استعلام تلفنی موجودی ({pharmacyInfo.phone})</span>
                </a>
                <Link
                  href="/contact"
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Stethoscope className="w-4 h-4 text-[#0d5c46]" />
                  <span>مشاوره تخصصی دارویی</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed Tabs/Sections Info */}
          <div className="border-t border-slate-200 p-6 lg:p-10 space-y-8 bg-slate-50/50">
            {/* Detailed Description */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-slate-900 border-r-4 border-[#0d5c46] pr-3">
                توضیحات تکمیلی و خواص
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-white p-5 rounded-2xl border border-slate-200">
                {product.description}
              </p>
            </div>

            {/* Usage Instructions & Packaging Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.usageInstructions && (
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0d5c46]" />
                    <span>روش و میزان مصرف</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {product.usageInstructions}
                  </p>
                </div>
              )}

              {product.packagingInfo && (
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#0d5c46]" />
                    <span>مشخصات بسته‌بندی و ساخت</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {product.packagingInfo}
                  </p>
                  {product.countryOfOrigin && (
                    <p className="text-xs text-slate-500 pt-1">
                      کشور سازنده: <strong>{product.countryOfOrigin}</strong>
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Warnings List */}
            {product.warnings && product.warnings.length > 0 && (
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-5 space-y-3">
                <h3 className="text-sm font-bold text-amber-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>هشدارهای مهم مصرف و شرایط نگهداری</span>
                </h3>
                <ul className="space-y-2 text-xs text-amber-900/90 list-disc list-inside leading-relaxed">
                  {product.warnings.map((warn, idx) => (
                    <li key={idx}>{warn}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-xl font-bold text-slate-900">اقلام مرتبط و پیشنهادی</h2>
              <Link
                href="/products"
                className="text-xs font-bold text-[#0d5c46] hover:text-[#063d2e] flex items-center gap-1"
              >
                <span>مشاهده همه محصولات</span>
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="aspect-4/3 w-full bg-slate-100 rounded-xl overflow-hidden relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-[#0d5c46] bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                      {rel.categoryName}
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-[#0d5c46]">
                      {rel.name}
                    </h3>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0d5c46]">
                      {rel.formattedPrice}
                    </span>
                    <Link
                      href={`/products/${rel.id}`}
                      className="text-xs font-semibold text-slate-600 hover:text-[#0d5c46] flex items-center gap-1"
                    >
                      <span>جزئیات</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
