import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterImages = [
    {
      id: 1,
      treatment: 'Acne Treatment',
      before: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '3 months'
    },
    {
      id: 2,
      treatment: 'Pigmentation',
      before: 'https://images.pexels.com/photos/4046709/pexels-photo-4046709.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/4046708/pexels-photo-4046708.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2 months'
    },
    {
      id: 3,
      treatment: 'Hair Restoration',
      before: 'https://images.pexels.com/photos/4173082/pexels-photo-4173082.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/4173084/pexels-photo-4173084.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '6 months'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [beforeAfterImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Patients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the amazing transformations our patients have achieved with our advanced treatments and expert care.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-gray-50">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {beforeAfterImages.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    {/* Before */}
                    <div className="text-center">
                      <div className="mb-4">
                        <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                          BEFORE
                        </span>
                      </div>
                      <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={item.before}
                          alt={`Before ${item.treatment}`}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>

                    {/* After */}
                    <div className="text-center">
                      <div className="mb-4">
                        <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                          AFTER
                        </span>
                      </div>
                      <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={item.after}
                          alt={`After ${item.treatment}`}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Treatment Info */}
                  <div className="text-center pb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.treatment}</h3>
                    <p className="text-gray-600">Treatment Duration: <span className="font-semibold">{item.duration}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {beforeAfterImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;