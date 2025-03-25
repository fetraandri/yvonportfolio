import { useState, useRef } from 'react';
import cvData from '../data/cvData';
import ExperienceCard from '../components/ui/ExperienceCard';
import ScrollFloat from '../components/ui/ScrollFloat';

const logos = {
  "Konecta Madagascar": "/logos/konekta.jpg",
  "Copscall (Ambohijanahary-Ambohibao)": "/logos/copscall.jpg",
};

const Experiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cvData.experience.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cvData.experience.length) % cvData.experience.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    if (diffX > 50) nextSlide();
    else if (diffX < -50) prevSlide();
  };

  return (
    <section
      id="experiences"
      className="min-h-screen py-16 bg-gray-50 flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/konekta.jpg')`,
          opacity: 0.2,
          zIndex: 0,
        }}
      ></div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <ScrollFloat
          containerClassName="text-primary"
          textClassName="font-bold"
        >
          Mes expériences
        </ScrollFloat>
        <div className="relative">
          <div
            className="overflow-hidden touch-pan-x"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cvData.experience.map((exp, index) => (
                <div key={index} className="min-w-full flex justify-center">
                  <ExperienceCard
                    company={exp.company}
                    role={exp.role}
                    period={exp.period}
                    logo={logos[exp.company] || 'https://via.placeholder.com/128'}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-4 rounded-full hover:bg-blue-700 transition text-2xl md:p-3"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-4 rounded-full hover:bg-blue-700 transition text-2xl md:p-3"
          >
            →
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-3">
          {cvData.experience.map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full ${i === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;