import React from 'react';
import Hero from '../components/Hero';
import SkinConditions from '../components/SkinConditions';
import BeforeAfterCarousel from '../components/BeforeAfterCarousel';
import TreatmentsSection from '../components/TreatmentsSection';
import BranchesSection from '../components/BranchesSection';
import DoctorsSection from '../components/DoctorsSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <SkinConditions />
      <BeforeAfterCarousel />
      <TreatmentsSection />
      <BranchesSection />
      <DoctorsSection />
      <TestimonialsSlider />
      <CTASection />
    </div>
  );
};

export default Home;