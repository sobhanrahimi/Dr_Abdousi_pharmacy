'use client';

import React, { useState } from 'react';
import {
  FileText,
  Upload,
  CheckCircle2,
  ShieldCheck,
  User,
  Phone,
  Building2,
  Clock,
  X,
} from 'lucide-react';

interface PrescriptionModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function PrescriptionModal({ isOpen = true, onClose }: PrescriptionModalProps) {
  const [nationalId, setNationalId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [patientName, setPatientName] = useState('');
  const [insuranceType, setInsuranceType] = useState('tamin');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFileError('حجم فایل نباید بیشتر از ۵ مگابایت باشد.');
        setSelectedFile(null);
      } else {
        setFileError('');
        setSelectedFile(file);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nationalId.trim() || !phoneNumber.trim()) {
      alert('لطفاً کد ملی و شماره تماس را وارد نمایید.');
      return;
    }

    const randomCode = 'DAP-' + Math.floor(100000 + Math.random() * 900000);
    setTrackingCode(randomCode);
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-2xl w-full mx-auto my-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d5c46] to-[#063d2e] p-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-emerald-300">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold">سامانه آنلاین ثبت نسخه الکترونیک و کاغذی</h2>
            <p className="text-xs text-emerald-200">داروخانه دکتر عبدوسی — DAP</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="p-6 sm:p-8">
        {/* Notice Disclaimer */}
        <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold text-amber-950 mb-1">توجه مهم دارویی و قانونی:</strong>
            ارسال نسخه جهت بررسی اولیه، استعلام بیمه و آماده‌سازی توسط مسئول فنی (دکتر داروساز) است. تحویل نهایی داروها پس از احراز هویت و بررسی‌های قانونی انجام می‌شود.
          </div>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0d5c46] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">نسخه شما با موفقیت ثبت شد</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              کد پیگیری اختصاصی شما: <strong className="text-[#0d5c46] font-mono text-base px-2 py-1 bg-emerald-50 rounded-md border border-emerald-200">{trackingCode}</strong>
            </p>
            <div className="p-4 rounded-xl bg-slate-50 text-xs text-slate-500 max-w-md mx-auto text-right space-y-1">
              <p className="flex items-center gap-1.5 text-slate-700 font-medium">
                <Clock className="w-4 h-4 text-[#0d5c46]" />
                <span>مراحل بعدی:</span>
              </p>
              <p>۱. استعلام نسخه الکترونیک در سامانه بیمه</p>
              <p>۲. تماس کارشناس دارویی با شماره {phoneNumber} جهت تایید نهایی</p>
            </div>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setNationalId('');
                  setPhoneNumber('');
                  setSelectedFile(null);
                }}
                className="bg-[#0d5c46] hover:bg-[#063d2e] text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-colors"
              >
                ثبت نسخه جدید
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* National ID */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  کد ملی بیمار / کد رهگیری نسخه *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={nationalId}
                    onChange={(e) => setNationalId(e.target.value)}
                    placeholder="مثلاً: ۰۰۱۲۳۴۵۶۷۸"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pr-9 pl-3 text-sm focus:outline-none focus:border-[#0d5c46] focus:bg-white"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  شماره تلفن همراه *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pr-9 pl-3 text-sm focus:outline-none focus:border-[#0d5c46] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Patient Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  نام و نام خانوادگی بیمار
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="نام کامل"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:border-[#0d5c46] focus:bg-white"
                />
              </div>

              {/* Insurance Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  نوع بیمه پایه
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={insuranceType}
                    onChange={(e) => setInsuranceType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pr-9 pl-3 text-sm focus:outline-none focus:border-[#0d5c46] focus:bg-white appearance-none"
                  >
                    <option value="tamin">تأمین اجتماعی</option>
                    <option value="salamat">خدمات درمانی (بیمه سلامت)</option>
                    <option value="armed">نیروهای مسلح</option>
                    <option value="other">سایر بیمه‌ها / تکمیلی</option>
                    <option value="free">آزاد (بدون بیمه)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Upload Prescription Image/File */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                تصویر نسخه کاغذی یا برگه آزمایش (اختیاری)
              </label>
              <div className="border-2 border-dashed border-slate-200 hover:border-[#0d5c46] bg-slate-50 hover:bg-emerald-50/30 rounded-2xl p-4 text-center transition-colors cursor-pointer relative">
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <Upload className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-xs font-medium text-slate-700">
                  {selectedFile ? selectedFile.name : 'برای آپلود فایل کلیک کنید یا تصویر را بکشید'}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">فرمت‌های مجاز: JPG, PNG, PDF (حداکثر ۵ مگابایت)</p>
              </div>
              {fileError && <p className="text-xs text-rose-500 mt-1">{fileError}</p>}
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                توضیحات تکمیلی یا درخواست‌های ویژه
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="توضیحات درباره حساسیت دارویی، ترجیح برند یا برند جایگزین..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#0d5c46] focus:bg-white resize-none"
              />
            </div>

            {/* Form Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  انصراف
                </button>
              )}
              <button
                type="submit"
                className="bg-[#0d5c46] hover:bg-[#063d2e] text-white text-xs font-bold px-7 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>ارسال و ثبت نسخه</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
