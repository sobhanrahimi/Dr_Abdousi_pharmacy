import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from './ContactForm';
import { getPharmacyInfo } from '@/lib/services/product-service';
import {
  MapPin,
  Phone,
  Clock,
  Building2,
  Globe,
  Send,
} from 'lucide-react';

export const metadata = {
  title: 'تماس با ما | داروخانه دکتر عبدوسی',
  description:
    'نشانی دقیق، شماره تلفن‌های تماس، مشاوره دارویی و ساعات کاری داروخانه دکتر عبدوسی در تهران.',
};

export default async function ContactPage() {
  const info = await getPharmacyInfo();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-gradient-to-b from-slate-900 via-[#073629] to-[#094032] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-700/60 inline-block">
              اطلاعات تماس و مراجعه
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              راه‌های ارتباطی با داروخانه دکتر عبدوسی
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light max-w-2xl mx-auto">
              پاسخگویی به مراجعین محترم در ساعات کاری به صورت تلفنی و حضوری.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Contact Cards & Map Box */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
                  اطلاعات دقیق داروخانه
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0d5c46] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold mb-0.5">آدرس حضوری:</strong>
                      <p className="leading-relaxed">{info.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#0d5c46] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold mb-0.5">تلفن‌های ثابت:</strong>
                      <div className="space-y-1">
                        <p>شماره اصلی: <a href={`tel:${info.phone}`} className="font-mono text-[#0d5c46] hover:underline">{info.phone}</a></p>
                        <p>مشاوره دارویی: <a href={`tel:${info.consultationPhone}`} className="font-mono text-[#0d5c46] hover:underline">{info.consultationPhone}</a></p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#0d5c46] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold mb-0.5">ساعات کاری:</strong>
                      <div className="space-y-1 text-slate-500">
                        <p>{info.workingHours.weekdays}</p>
                        <p>{info.workingHours.thursday}</p>
                        <p>{info.workingHours.friday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="block text-xs font-bold text-slate-800">شبکه‌های اجتماعی:</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={info.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-[#0d5c46] hover:text-white text-xs font-medium text-slate-700 transition-colors flex items-center gap-1.5"
                    >
                      <Globe className="w-4 h-4" />
                      <span>اینستاگرام</span>
                    </a>
                    <a
                      href={info.socials.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-[#0d5c46] hover:text-white text-xs font-medium text-slate-700 transition-colors flex items-center gap-1.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>تلگرام</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Visual Map Placeholder */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>موقعیت مکانی داروخانه</span>
                </div>
                <div className="aspect-16/9 bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center justify-center p-6 text-center space-y-2">
                  <Building2 className="w-8 h-8 text-emerald-400 opacity-80" />
                  <p className="text-xs text-slate-300 font-medium">
                    خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲۴
                  </p>
                  <span className="text-[10px] text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                    جایگاه نقشه تعاملی مسیریابی (موقعیت تثبیت‌شده)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
