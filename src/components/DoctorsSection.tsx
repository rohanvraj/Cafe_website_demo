import React from 'react';
import { Star, Award, Calendar } from 'lucide-react';

const DoctorsSection = () => {
  const doctorsByBranch = {
    'Downtown Mumbai': [
      {
        id: 1,
        name: 'Dr. Priya Sharma',
        specialization: 'Dermatologist & Cosmetic Surgeon',
        experience: '15+ years',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
        qualifications: ['MBBS', 'MD Dermatology', 'Fellowship in Cosmetic Surgery']
      },
      {
        id: 2,
        name: 'Dr. Rajesh Kumar',
        specialization: 'Hair Transplant Specialist',
        experience: '12+ years',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400',
        qualifications: ['MBBS', 'MS General Surgery', 'Fellowship in Hair Transplant']
      }
    ],
    'Andheri West': [
      {
        id: 3,
        name: 'Dr. Meera Patel',
        specialization: 'Laser & Aesthetic Medicine',
        experience: '10+ years',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400',
        qualifications: ['MBBS', 'MD Dermatology', 'Diploma in Aesthetic Medicine']
      },
      {
        id: 4,
        name: 'Dr. Arjun Singh',
        specialization: 'Anti-Aging Specialist',
        experience: '8+ years',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
        qualifications: ['MBBS', 'MD Dermatology', 'Certificate in Anti-Aging Medicine']
      }
    ],
    'Bandra East': [
      {
        id: 5,
        name: 'Dr. Kavya Reddy',
        specialization: 'Pediatric Dermatologist',
        experience: '9+ years',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=400',
        qualifications: ['MBBS', 'MD Dermatology', 'Fellowship in Pediatric Dermatology']
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of highly qualified and experienced doctors are dedicated to providing you with the best possible care.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(doctorsByBranch).map(([branchName, doctors]) => (
            <div key={branchName}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {branchName}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold text-gray-900">{doctor.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{doctor.name}</h4>
                        <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-orange-600" />
                        <span className="text-gray-700 text-sm">{doctor.experience} Experience</span>
                      </div>

                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-gray-900">Qualifications:</h5>
                        <div className="flex flex-wrap gap-2">
                          {doctor.qualifications.map((qualification, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                            >
                              {qualification}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 space-y-2">
                        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Book Appointment</span>
                        </button>
                        <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;