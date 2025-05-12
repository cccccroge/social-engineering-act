
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import PlansSection from '@/components/PlansSection';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-crypto-dark text-white flex flex-col">
      <Navbar />
      <Hero />
      <div className="bg-white text-gray-900">
        <StatsSection />
        <PlansSection />
        <TrustSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
