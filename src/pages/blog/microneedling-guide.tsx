import React from 'react';

const MicroneedlingGuide = () => {
  return (
    <div className="pt-16 max-w-3xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Microneedling: Everything You Need to Know</h1>
      <p className="text-gray-700 mb-4">
        Written by <strong>Dr. Neha Kapoor</strong> on <em>August 1, 2025</em>
      </p>
      <img
        src="https://images.pexels.com/photos/5863397/pexels-photo-5863397.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Microneedling"
        className="rounded-lg mb-6"
      />
      <p className="text-gray-700 leading-relaxed">
        Microneedling is a minimally invasive skin treatment that promotes collagen production and improves skin texture. It involves using tiny needles to create micro-injuries on the skin, stimulating the body’s natural healing process.
      </p>
    </div>
  );
};

export default MicroneedlingGuide;