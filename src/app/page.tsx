import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import QuickServicesSection from '@/components/home/QuickServicesSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import AboutPreviewSection from '@/components/home/AboutPreviewSection';
import AiAssistantSection from '@/components/home/AiAssistantSection';
import TrackingAndClubSection from '@/components/home/TrackingAndClubSection';
import TrustQualitySection from '@/components/home/TrustQualitySection';
import FaqSection from '@/components/home/FaqSection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <QuickServicesSection />
        <CategoryGrid />
        <FeaturedProducts />
        <AiAssistantSection />
        <TrackingAndClubSection />
        <AboutPreviewSection />
        <TrustQualitySection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
