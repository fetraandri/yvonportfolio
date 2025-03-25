import { useState } from 'react';
import cvData from '../data/cvData';
import ExperienceCard from '../components/ui/ExperienceCard';

// Chemins des logos (ajuste selon tes fichiers réels)
const logos = {
  "Konecta Madagascar": "/src/assets/logos/konekta.jpg",
  "Copscall (Ambohijanahary-Ambohibao)": "/src/assets/logos/copscall.jpg",
};

const Experiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cvData.experience.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cvData.experience.length) % cvData.experience.length);
  };

  return (
    <section
      id="experiences"
      className="min-h-screen py-16 bg-gray-50 flex items-center justify-center relative overflow-hidden"
    >
      {/* Pseudo-élément pour l'image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/konekta.jpg')`, // Ajuste le chemin
          opacity: 0.5, // Faible opacité
          zIndex: 0,
        }}
      ></div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10"> {/* z-10 pour rester au-dessus */}
        <h2 className="text-4xl md:text-6xl font-bold text-primary mb-16">Mes expériences</h2>
        <div className="relative">
          <div className="overflow-hidden">
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition text-2xl"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition text-2xl"
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