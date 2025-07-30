import React from 'react';
import { Star, Award, Calendar, MapPin, Phone, GraduationCap } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      specialization: 'Dermatologist & Cosmetic Surgeon',
      experience: '15+ years',
      rating: 4.9,
      reviews: 256,
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: ['MBBS', 'MD Dermatology', 'Fellowship in Cosmetic Surgery'],
      specialties: ['Laser Treatments', 'Anti-Aging', 'Acne Treatment', 'Skin Cancer'],
      branch: 'Downtown Mumbai',
      languages: ['English', 'Hindi', 'Marathi'],
      bio: 'Dr. Priya Sharma is a renowned dermatologist with over 15 years of experience in treating various skin conditions. She specializes in advanced laser treatments and cosmetic procedures.'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Kumar',
      specialization: 'Hair Transplant Specialist',
      experience: '12+ years',
      rating: 4.8,
      reviews: 189,
      image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: ['MBBS', 'MS General Surgery', 'Fellowship in Hair Transplant'],
      specialties: ['FUE Hair Transplant', 'FUT Technique', 'Beard Transplant', 'Eyebrow Restoration'],
      branch: 'Downtown Mumbai',
      languages: ['English', 'Hindi', 'Punjabi'],
      bio: 'Dr. Rajesh Kumar is an expert in hair restoration with extensive experience in both FUE and FUT techniques. He has successfully performed over 2000 hair transplant procedures.'
    },
    {
      id: 3,
      name: 'Dr. Meera Patel',
      specialization: 'Laser & Aesthetic Medicine',
      experience: '10+ years',
      rating: 4.9,
      reviews: 178,
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: ['MBBS', 'MD Dermatology', 'Diploma in Aesthetic Medicine'],
      specialties: ['Laser Hair Removal', 'Skin Rejuvenation', 'Tattoo Removal', 'Scar Treatment'],
      branch: 'Andheri West',
      languages: ['English', 'Hindi', 'Gujarati'],
      bio: 'Dr. Meera Patel specializes in advanced laser treatments and aesthetic medicine. She is known for her precision in laser procedures and personalized treatment approaches.'
    },
    {
      id: 4,
      name: 'Dr. Arjun Singh',
      specialization: 'Anti-Aging Specialist',
      experience: '8+ years',
      rating: 4.7,
      reviews: 143,
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: ['MBBS', 'MD Dermatology', 'Certificate in Anti-Aging Medicine'],
      specialties: ['Botox', 'Dermal Fillers', 'Thread Lift', 'Chemical Peels'],
      branch: 'Andheri West',
      languages: ['English', 'Hindi'],
      bio: 'Dr. Arjun Singh is dedicated to helping patients achieve a youthful appearance through minimally invasive anti-aging treatments. He stays updated with the latest techniques in aesthetic medicine.'
    },
    {
      id: 5,
      name: 'Dr. Kavya Reddy',
      specialization: 'Pediatric Dermatologist',
      experience: '9+ years',
      rating: 4.8,
      reviews: 167,
      image: 'https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: ['MBBS', 'MD Dermatology', 'Fellowship in Pediatric Dermatology'],
      specialties: ['Childhood Eczema', 'Birthmarks', 'Pediatric Acne', 'Skin Allergies'],
      branch: 'Bandra East',
      languages: ['English', 'Hindi', 'Telugu'],
      bio: 'Dr. Kavya Reddy specializes in treating skin conditions in children and adolescents. She has a gentle approach and extensive experience in pediatric dermatology.'
    },
    {
      id: 6,
      name: 'Dr. Sameer Shah',
      specialization: 'Cosmetic Dermatologist',
      experience: '11+ years',
      rating: 4.8,
      reviews: 201,
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: ['MBBS', 'MD Dermatology', 'Fellowship in Cosmetic Dermatology'],
      specialties: ['Skin Whitening', 'Pigmentation', 'Melasma', 'Dark Circles'],
      branch: 'Bandra East',
      languages: ['English', 'Hindi', 'Gujarati'],
      bio: 'Dr. Sameer Shah has extensive experience in cosmetic dermatology with a focus on skin brightening and pigmentation treatments. He has helped thousands of patients achieve their desired skin tone.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert Doctors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of highly qualified and experienced doctors are committed to providing 
            you with the best possible care using the latest medical techniques and technologies.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="md:flex">
                  {/* Doctor Image */}
                  <div className="md:flex-shrink-0 relative">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={doctor.image}
                      alt={doctor.name}
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-900">{doctor.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6 flex-1">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                        <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4 text-orange-600" />
                          <span>{doctor.experience}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span>{doctor.branch}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{doctor.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-1">
                          {doctor.specialties.slice(0, 3).map((specialty, index) => (
                            <span
                              key={index}
                              className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                            >
                              {specialty}
                            </span>
                          ))}
                          {doctor.specialties.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{doctor.specialties.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Qualifications:</h4>
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">
                            {doctor.qualifications.join(', ')}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {doctor.bio}
                      </p>

                      <div className="flex space-x-3 pt-4">
                        <button className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Book Appointment</span>
                        </button>
                        <button className="flex-1 border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Consult with Our Experts?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book an appointment with any of our qualified doctors for personalized treatment plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </button>
            <a
              href="tel:+919876543210"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;