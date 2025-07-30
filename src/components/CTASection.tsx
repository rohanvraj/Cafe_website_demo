import React, { useState } from 'react';
import { Phone, Calendar, MessageCircle, Clock } from 'lucide-react';
import BookingModal from './BookingModal';

const CTASection = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Ready to Transform Your Life?
              </h2>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Take the first step towards healthier, more confident you. Our experts are ready to help you achieve your goals.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-blue-200 text-sm lg:text-base">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-blue-200 text-sm lg:text-base">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-200 text-sm lg:text-base">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200 text-sm lg:text-base">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-2xl flex items-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Free Consultation</span>
              </button>
              
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:-translate-y-1 flex items-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now: +91 98765 43210</span>
              </a>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-6 h-6 text-blue-200" />
                <span className="text-blue-200">Same Day Appointments</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MessageCircle className="w-6 h-6 text-blue-200" />
                <span className="text-blue-200">Free Consultation</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-blue-200" />
                <span className="text-blue-200">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </>
  );
};

export default CTASection;