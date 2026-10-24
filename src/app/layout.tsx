import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "داروخانه دکتر عبدوسی | ارائه آنلاین اطلاعات و خدمات دارویی",
  description:
    "وب‌سایت رسمی داروخانه دکتر عبدوسی. بررسی اطلاعات اقلام بهداشتی، آرایشی، مکمل‌های ورزشی و غذایی، و دریافت مشاوره تخصصی دارویی.",
  keywords: [
    "داروخانه",
    "دکتر عبدوسی",
    "مشاوره دارویی",
    "مکمل غذایی",
    "آرایشی و بهداشتی",
    "داروخانه آنلاین",
  ],
  authors: [{ name: "داروخانه دکتر عبدوسی" }],
  openGraph: {
    title: "داروخانه دکتر عبدوسی",
    description: "مرجع اطلاعات و خدمات دارویی، آرایشی و بهداشتی با استانداردهای تخصصی",
    type: "website",
    locale: "fa_IR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className={`${vazirmatn.className} antialiased min-h-screen flex flex-col bg-slate-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
