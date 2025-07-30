import React from 'react';
import { Zap, Droplets, Sparkles, Heart, Eye, Shield } from 'lucide-react';

const TreatmentsSection = () => {
  const treatments = [
    {
      name: 'Laser Treatments',
      icon: Zap,
      description: 'Advanced laser technology for skin rejuvenation, hair removal, and scar reduction.',
      features: ['CO2 Fractional Laser', 'Q-Switch Laser', 'Diode Laser'],
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      name: 'PRP Therapy',
      icon: Droplets,
      description: 'Platelet-Rich Plasma therapy for hair restoration and skin rejuvenation.',
      features: ['Hair Regrowth', 'Skin Rejuvenation', 'Scar Treatment'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Chemical Peels',
      icon: Sparkles,
      description: 'Professional chemical peels to improve skin texture and appearance.',
      features: ['Glycolic Acid', 'Salicylic Acid', 'TCA Peels'],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Anti-Aging',
      icon: Heart,
      description: 'Comprehensive anti-aging treatments to restore youthful appearance.',
      features: ['Botox', 'Dermal Fillers', 'Thread Lift'],
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      name: 'Acne Treatment',
      icon: Eye,
      description: 'Targeted treatments for all types of acne and acne scarring.',
      features: ['Medical Facials', 'Light Therapy', 'Extraction'],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Skin Protection',
      icon: Shield,
      description: 'Preventive treatments and skincare for long-term skin health.',
      features: ['Sun Protection', 'Hydrafacial', 'Custom Skincare'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Advanced Treatments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of cutting-edge treatments using the latest technology and proven techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => {
            const IconComponent = treatment.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 ${treatment.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className={`w-8 h-8 ${treatment.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {treatment.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {treatment.description}
                </p>
                
                <div className="space-y-2">
                  {treatment.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${treatment.color.replace('text-', 'bg-')}`}></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`mt-6 w-full py-3 px-4 rounded-lg font-semibold transition-colors ${treatment.color.replace('text-', 'text-')} ${treatment.bgColor} hover:opacity-80`}>
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            View All Treatments
          </button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;