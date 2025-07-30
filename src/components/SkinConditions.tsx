import React from 'react';
import { ArrowRight } from 'lucide-react';

const SkinConditions = () => {
  const conditions = [
    {
      name: 'Acne Treatment',
      icon: '🩹',
      description: 'Advanced acne treatments for all skin types',
      color: 'bg-red-50 hover:bg-red-100 border-red-200'
    },
    {
      name: 'Pigmentation',
      icon: '✨',
      description: 'Reduce dark spots and uneven skin tone',
      color: 'bg-yellow-50 hover:bg-yellow-100 border-yellow-200'
    },
    {
      name: 'Hair Fall',
      icon: '💇‍♀️',
      description: 'Comprehensive hair restoration solutions',
      color: 'bg-green-50 hover:bg-green-100 border-green-200'
    },
    {
      name: 'Anti-Aging',
      icon: '🌟',
      description: 'Combat signs of aging effectively',
      color: 'bg-purple-50 hover:bg-purple-100 border-purple-200'
    },
    {
      name: 'Skin Whitening',
      icon: '🤍',
      description: 'Safe and effective skin brightening',
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
    },
    {
      name: 'Scar Removal',
      icon: '🩹',
      description: 'Advanced scar reduction treatments',
      color: 'bg-teal-50 hover:bg-teal-100 border-teal-200'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Common Skin Conditions We Treat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert dermatologists specialize in treating a wide range of skin conditions with the latest technologies and proven methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, index) => (
            <button
              key={index}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-left group ${condition.color}`}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{condition.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {condition.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {condition.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </button>
          ))}
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

export default SkinConditions;