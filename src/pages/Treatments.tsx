import React, { useState } from 'react';
import { Zap, Droplets, Sparkles, Heart, Eye, Shield, Clock, Star, ArrowRight } from 'lucide-react';

const Treatments = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const treatments = [
    {
      id: 1,
      name: 'CO2 Fractional Laser',
      category: 'laser',
      icon: Zap,
      price: 'Starting from ₹8,000',
      duration: '45-60 minutes',
      sessions: '3-5 sessions',
      description: 'Advanced laser treatment for skin resurfacing, scar reduction, and skin tightening.',
      benefits: ['Reduces fine lines', 'Improves skin texture', 'Minimizes acne scars', 'Tightens skin'],
      image: 'https://images.pexels.com/photos/4173324/pexels-photo-4173324.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Q-Switch Laser',
      category: 'laser',
      icon: Zap,
      price: 'Starting from ₹5,000',
      duration: '30-45 minutes',
      sessions: '4-6 sessions',
      description: 'Specialized laser for pigmentation removal, tattoo removal, and skin whitening.',
      benefits: ['Removes pigmentation', 'Tattoo removal', 'Skin brightening', 'Even skin tone'],
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9
    },
    {
      id: 3,
      name: 'PRP Hair Treatment',
      category: 'prp',
      icon: Droplets,
      price: 'Starting from ₹12,000',
      duration: '60-90 minutes',
      sessions: '6-8 sessions',
      description: 'Platelet-Rich Plasma therapy for hair regrowth and scalp rejuvenation.',
      benefits: ['Promotes hair growth', 'Reduces hair fall', 'Improves hair density', 'Natural treatment'],
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7
    },
    {
      id: 4,
      name: 'PRP Facial',
      category: 'prp',
      icon: Droplets,
      price: 'Starting from ₹10,000',
      duration: '45-60 minutes',
      sessions: '4-6 sessions',
      description: 'Rejuvenating facial treatment using your own platelet-rich plasma.',
      benefits: ['Skin rejuvenation', 'Reduces fine lines', 'Improves skin texture', 'Natural glow'],
      image: 'https://images.pexels.com/photos/4046708/pexels-photo-4046708.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8
    },
    {
      id: 5,
      name: 'Glycolic Acid Peel',
      category: 'chemical-peels',
      icon: Sparkles,
      price: 'Starting from ₹3,000',
      duration: '30-45 minutes',
      sessions: '4-6 sessions',
      description: 'Deep exfoliating chemical peel for acne treatment and skin renewal.',
      benefits: ['Treats acne', 'Removes dead skin', 'Improves texture', 'Reduces pore size'],
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6
    },
    {
      id: 6,
      name: 'TCA Peel',
      category: 'chemical-peels',
      icon: Sparkles,
      price: 'Starting from ₹4,500',
      duration: '45-60 minutes',
      sessions: '3-4 sessions',
      description: 'Medium-depth chemical peel for pigmentation and anti-aging.',
      benefits: ['Reduces pigmentation', 'Anti-aging effects', 'Improves skin tone', 'Reduces wrinkles'],
      image: 'https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7
    },
    {
      id: 7,
      name: 'Botox Treatment',
      category: 'anti-aging',
      icon: Heart,
      price: 'Starting from ₹15,000',
      duration: '15-30 minutes',
      sessions: '1 session',
      description: 'Non-surgical treatment to reduce wrinkles and fine lines.',
      benefits: ['Reduces wrinkles', 'Prevents new lines', 'Quick procedure', 'Natural results'],
      image: 'https://images.pexels.com/photos/4173082/pexels-photo-4173082.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9
    },
    {
      id: 8,
      name: 'Dermal Fillers',
      category: 'anti-aging',
      icon: Heart,
      price: 'Starting from ₹20,000',
      duration: '30-45 minutes',
      sessions: '1 session',
      description: 'Injectable fillers to restore volume and smooth wrinkles.',
      benefits: ['Restores volume', 'Smooths lines', 'Instant results', 'Long-lasting'],
      image: 'https://images.pexels.com/photos/4173084/pexels-photo-4173084.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8
    },
    {
      id: 9,
      name: 'Acne Treatment Program',
      category: 'acne',
      icon: Eye,
      price: 'Starting from ₹6,000',
      duration: '60 minutes',
      sessions: '6-8 sessions',
      description: 'Comprehensive acne treatment program with multiple modalities.',
      benefits: ['Treats active acne', 'Prevents scarring', 'Reduces oiliness', 'Improves skin health'],
      image: 'https://images.pexels.com/photos/4046709/pexels-photo-4046709.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7
    },
    {
      id: 10,
      name: 'HydraFacial',
      category: 'skin-care',
      icon: Shield,
      price: 'Starting from ₹7,000',
      duration: '45-60 minutes',
      sessions: '1 session',
      description: 'Multi-step facial treatment for deep cleansing and hydration.',
      benefits: ['Deep cleansing', 'Hydrates skin', 'Instant glow', 'No downtime'],
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8
    }
  ];

  const categories = [
    { id: 'all', name: 'All Treatments' },
    { id: 'laser', name: 'Laser Treatments' },
    { id: 'prp', name: 'PRP Therapy' },
    { id: 'chemical-peels', name: 'Chemical Peels' },
    { id: 'anti-aging', name: 'Anti-Aging' },
    { id: 'acne', name: 'Acne Treatment' },
    { id: 'skin-care', name: 'Skin Care' }
  ];

  const filteredTreatments = selectedCategory === 'all' 
    ? treatments 
    : treatments.filter(treatment => treatment.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Advanced Treatments
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of cutting-edge treatments designed to help you 
            look and feel your best. All procedures are performed by certified professionals 
            using the latest technology.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment) => {
              const IconComponent = treatment.icon;
              return (
                <div
                  key={treatment.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-900">{treatment.rating}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-blue-600 p-2 rounded-full">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{treatment.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">{treatment.duration}</span>
                      </div>
                      <div className="text-gray-700">
                        <span className="font-medium">{treatment.sessions}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {treatment.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-blue-600">{treatment.price}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                          Book Consultation
                        </button>
                        <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Treatment is Right for You?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Book a free consultation with our experts to discuss your concerns and 
            get personalized treatment recommendations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Book Free Consultation
            </button>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatments;