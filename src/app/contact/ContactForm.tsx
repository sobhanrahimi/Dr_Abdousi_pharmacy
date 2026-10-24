'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Info } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    subject: 'مشاوره دارویی',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'لطفاً نام و نام خانوادگی خود را وارد کنید.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'لطفاً شماره تماس را وارد کنید.';
    } else if (!/^09\d{9}$/.test(formData.phone.trim()) && !/^\d{8,11}$/.test(formData.phone.trim())) {
      errs.phone = 'لطفاً یک شماره تلفن معتبر وارد نمایید (مانند ۰۹۱۲۱۲۳۴۵۶۷).';
    }
    if (!formData.message.trim()) {
      errs.message = 'لطفاً متن پیام یا سوال خود را بنویسید.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'پیام باید حداقل ۱۰ کاراکتر باشد.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      <div className="space-y-1 border-b border-slate-100 pb-4">
        <h2 className="text-xl font-bold text-slate-900">فرم ارسال پیام و درخواست مشاوره</h2>
        <p className="text-xs text-slate-500">
          سوالات عمومی درباره محصولات غیردارویی، ساعات حضور مسئول فنی یا فرم مشاوره آنلاین
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#0d5c46] mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#0d5c46]">
            پیام شما با موفقیت اعتبارسنجی شد (حالت آزمایشی)
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
            با تشکر از پیام شما، <strong>{formData.fullName}</strong> عزیز. فرم شما در محیط آزمایشی فرانت‌اند تایید شد. در فاز بعدی پس از اتصال سرویس پیامک و سیستم مدیریت، پیام‌های شما به‌صورت واقعی برای مسئول فنی ارسال خواهند شد.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ fullName: '', phone: '', subject: 'مشاوره دارویی', message: '' });
            }}
            className="bg-[#0d5c46] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#063d2e] transition-all"
          >
            ارسال پیام جدید
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#0d5c46] shrink-0 mt-0.5" />
            <p>
              این فرم در حال حاضر در حالت پیش‌نمایش آزمایشی قرار دارد. اعتبارسنجی ورودی‌ها فعال بوده و هیچ اطلاعاتی در دیتابیس یا سرور ذخیره نمی‌شود.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                نام و نام خانوادگی <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="مثلاً: علی محمدی"
                className={`w-full bg-slate-50 border ${
                  errors.fullName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                } rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0d5c46] focus:bg-white transition-all`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-rose-600 font-medium">{errors.fullName}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                شماره تماس <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="مثلاً: ۰۹۱۲۱۲۳۴۵۶۷"
                className={`w-full bg-slate-50 border ${
                  errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
                } rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0d5c46] focus:bg-white transition-all`}
              />
              {errors.phone && (
                <p className="text-[11px] text-rose-600 font-medium">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">موضوع درخواست</label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0d5c46] focus:bg-white transition-all"
            >
              <option value="مشاوره دارویی">مشاوره دارویی و نحوه مصرف</option>
              <option value="استعلام موجودی مکمل">استعلام موجودی مکمل‌ها و بهداشتی</option>
              <option value="سوالات بیمه و نسخه">سوالات مربوط به بیمه و نسخه‌پیچی</option>
              <option value="انتقاد و پیشنهاد">انتقادات و پیشنهادات</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">
              شرح پیام / سوال <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="لطفاً پیام یا سوال خود را با جزئیات وارد کنید..."
              className={`w-full bg-slate-50 border ${
                errors.message ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200'
              } rounded-xl p-3.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0d5c46] focus:bg-white transition-all`}
            />
            {errors.message && (
              <p className="text-[11px] text-rose-600 font-medium">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#0d5c46] hover:bg-[#063d2e] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl transition-all shadow flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>ثبت و ارسال پیام (آزمایشی)</span>
          </button>
        </form>
      )}
    </div>
  );
}
