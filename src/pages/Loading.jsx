import { useState, useEffect } from 'react';
import BlurText from '../components/ui/BlurText';

const Loading = ({ onLoadingComplete }) => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    if (animationDone) {
      const timer = setTimeout(() => {
        onLoadingComplete(); // Passe au portfolio après 1 seconde
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [animationDone, onLoadingComplete]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Hello! en haut */}
      <BlurText
        text="Hello!"
        animateBy="letters"
        delay={150}
        direction="top"
        className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
        onAnimationComplete={() => setAnimationDone(true)} // Déclenche quand l'animation finit
      />

      {/* Je Suis Yvon Raharinjatovo en bleu */}
      <BlurText
        text="Je suis Yvon RAHARINJATOVO ."
        animateBy="words"
        delay={200}
        direction="bottom"
        className="text-2xl md:text-4xl text-blue-600 font-semibold"
      />
    </div>
  );
};

export default Loading;