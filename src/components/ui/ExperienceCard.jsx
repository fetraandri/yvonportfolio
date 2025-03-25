import { motion } from 'framer-motion';

const ExperienceCard = ({ company, role, period, logo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -15, boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white rounded-lg p-8 flex flex-col items-center text-center w-full max-w-lg shadow-lg" // Taille augmentée
    >
      <img src={logo} alt={`${company} logo`} className="w-32 h-32 object-contain mb-6" /> {/* Logo plus grand */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{role}</h3> {/* Texte plus grand */}
      <p className="text-xl text-gray-600 mb-2">{company}</p>
      <p className="text-lg text-gray-500">{period}</p>
    </motion.div>
  );
};

export default ExperienceCard;