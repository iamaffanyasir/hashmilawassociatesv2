import { useState, useEffect } from 'react';
import '../styles/Hero.css';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/hero1.jpg',
      title: 'Legal Excellence & Professional Integrity',
      subtitle: 'A New Delhi-based Commercial Litigation Law Firm',
      description: 'Dedicated to providing comprehensive legal services for domestic and international clients, including individuals, multinational corporations, and public & private companies across India.',
      cta: 'Consult Now'
    },
    {
      image: '/images/hero2.jpg',
      title: 'Specialized Legal Expertise',
      subtitle: 'Multi-tiered Professional Team',
      description: 'Our versatile team includes specialized advocates for Trial Courts, High Courts, Supreme Court, and dedicated Back Office support, along with corporate lawyers, company secretaries, and trademark attorneys.',
      cta: 'Our Services'
    },
    {
      image: '/images/hero3.jpg',
      title: 'NGO & Trust Services',
      subtitle: 'Comprehensive Support for Non-Profit Organizations',
      description: 'Expert consultancy services for NGO registration, funding, legal compliance, and operational management. We help those who help others.',
      cta: 'Learn More'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-container">
              <div className="slide-content">
                <div className="slide-text">
                  <h1>{slide.title}</h1>
                  <h2>{slide.subtitle}</h2>
                  <p>{slide.description}</p>
                  <button className="cta-button">{slide.cta}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="slider-navigation">
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero; 