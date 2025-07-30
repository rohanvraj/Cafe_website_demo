import React from "react";
import "./FadingCarousel.css";

const images = [
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80", // cocoa
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80", // latte
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" // cafe
];

export default function FadingCarousel() {
  const [current, setCurrent] = React.useState(1);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="fading-carousel-container">
      <div className="fading-carousel-fade left" />
      <button className="fading-carousel-arrow left" onClick={prev}>&lt;</button>
      <div className="fading-carousel-track">
        {images.map((img, i) => (
          <img
            key={img}
            src={img}
            alt="carousel"
            className={`fading-carousel-img${i === current ? " active" : ""}`}
            style={{
              zIndex: i === current ? 2 : 1,
              opacity: i === current ? 1 : 0.5,
              transform: i === current ? "scale(1.05)" : "scale(0.95)",
            }}
          />
        ))}
      </div>
      <button className="fading-carousel-arrow right" onClick={next}>&gt;</button>
      <div className="fading-carousel-fade right" />
    </div>
  );
}
