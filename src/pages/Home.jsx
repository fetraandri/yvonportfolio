import { useRef } from 'react';
import cvData from '../data/cvData';
import VariableProximity from '../components/ui/VariableProximity';

const Home = () => {
  const containerRef = useRef(null); // Référence au conteneur pour l'animation

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 py-8"
    >
      <div
        ref={containerRef}
        className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-6 lg:gap-12"
      >
        {/* Section gauche : Image de profil très grande */}
        <div className="w-full lg:w-2/3 h-[50vh] lg:h-[80vh] flex justify-center lg:justify-start">
          <img
            src={cvData.profileImage}
            alt="Profil de Yvon Raharinjatovo"
            className="w-full h-full object-cover" // Image sans bordures rondes
          />
        </div>

        {/* Section droite : Titre et description */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
          {/* Titre principal avec animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 lg:mb-6">
            <VariableProximity
              label={cvData.fullName}
              fromFontVariationSettings='"wght" 400'
              toFontVariationSettings='"wght" 900'
              containerRef={containerRef}
              radius={100}
              falloff="gaussian"
            />
          </h1>

          {/* Description courte avec effet zoomOut et texte justifié */}
          <p className="text-base sm:text-lg text-gray-600 mb-8 animate-zoomOut text-justify">
            {cvData.profile}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;