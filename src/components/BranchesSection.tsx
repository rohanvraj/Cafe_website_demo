import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const BranchesSection = () => {
  const branches = [
    {
      id: 1,
      name: 'Downtown Mumbai',
      address: '123 Medical Center, Fort, Mumbai - 400001',
      phone: '+91 98765 43210',
      hours: 'Mon-Sat: 9:00 AM - 8:00 PM',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialties: ['Dermatology', 'Cosmetic Surgery', 'Hair Transplant']
    },
    {
      id: 2,
      name: 'Andheri West',
      address: '456 Health Plaza, Andheri West, Mumbai - 400058',
      phone: '+91 98765 43211',
      hours: 'Mon-Sat: 9:00 AM - 8:00 PM',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialties: ['Laser Treatments', 'Anti-Aging', 'Skin Care']
    },
    {
      id: 3,
      name: 'Bandra East',
      address: '789 Wellness Center, Bandra East, Mumbai - 400051',
      phone: '+91 98765 43212',
      hours: 'Mon-Sat: 9:00 AM - 8:00 PM',
      image: 'https://images.pexels.com/photos/4173324/pexels-photo-4173324.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialties: ['PRP Therapy', 'Chemical Peels', 'Acne Treatment']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Clinic Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit any of our conveniently located branches across Mumbai for world-class healthcare services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{branch.name}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm leading-relaxed">{branch.address}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-gray-700 text-sm hover:text-blue-600 transition-colors"
                  >
                    {branch.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <p className="text-gray-700 text-sm">{branch.hours}</p>
                </div>

                <div className="pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Call Branch
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;