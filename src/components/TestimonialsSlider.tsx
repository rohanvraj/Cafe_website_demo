import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Anita Sharma',
      age: 32,
      treatment: 'Acne Treatment',
      rating: 5,
      text: 'After struggling with acne for years, Dr. Priya\'s treatment plan completely transformed my skin. The results exceeded my expectations!',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      branch: 'Downtown Mumbai'
    },
    {
      id: 2,
      name: 'Rohit Patel',
      age: 28,
      treatment: 'Hair Transplant',
      rating: 5,
      text: 'The hair transplant procedure was seamless and the results are amazing. Dr. Rajesh and his team were incredibly professional.',
      image: 'https://images.pexels.com/photos/4946515/pexels-photo-4946515.jpeg?auto=compress&cs=tinysrgb&w=400',
      branch: 'Downtown Mumbai'
    },
    {
      id: 3,
      name: 'Sneha Gupta',
      age: 35,
      treatment: 'Laser Treatment',
      rating: 5,
      text: 'The laser treatment for pigmentation worked wonders. My skin looks brighter and more even-toned than ever before.',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400',
      branch: 'Andheri West'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      age: 42,
      treatment: 'Anti-Aging',
      rating: 5,
      text: 'The anti-aging treatments have made me look 10 years younger. The staff is knowledgeable and the facility is top-notch.',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
      branch: 'Andheri West'
    },
    {
      id: 5,
      name: 'Priya Nair',
      age: 29,
      treatment: 'Chemical Peel',
      rating: 5,
      text: 'Dr. Kavya\'s expertise in chemical peels is remarkable. My skin texture has improved dramatically after the treatment.',
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400',
      branch: 'Bandra East'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read real experiences from our satisfied patients who have transformed their lives with our treatments.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg mx-4">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                      {/* Patient Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover shadow-lg"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, index) => (
                            <Star key={index} className="w-5 h-5 text-yellow-500 fill-current" />
                          ))}
                        </div>

                        <div className="relative mb-6">
                          <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed italic pl-6">
                            {testimonial.text}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-xl font-bold text-gray-900">
                            {testimonial.name}, {testimonial.age}
                          </h4>
                          <p className="text-blue-600 font-medium">{testimonial.treatment}</p>
                          <p className="text-gray-500 text-sm">{testimonial.branch}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
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

export default TestimonialsSlider;