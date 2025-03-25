import ScrollFloat from '../components/ui/ScrollFloat';
import cvData from '../data/cvData';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import DownloadCVSection from '../components/ui/DownloadCVSection';
import InteractiveCVButton from '../components/ui/InteractiveCVButton';
import ContactForm from '../components/ui/ContactForm';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-16 bg-gray-100 flex items-center justify-center relative overflow-hidden"
    >
      {/* Image de fond avec faible opacité */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/contact-bg.jpg')`, // Ajuste selon ton image
          opacity: 0.2,
          zIndex: 0,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Colonne gauche : Infos de contact */}
          <div className="space-y-6 text-left">
            <ScrollFloat
              containerClassName="text-primary"
              textClassName="font-bold"
            >
              Contactez-moi
            </ScrollFloat>
            <p className="text-lg text-gray-600 flex items-center">
              <FaPhone className="mr-2 text-primary" /> +261 34 43 284 04
            </p>
            <p className="text-lg text-gray-600 flex items-center">
              <FaPhone className="mr-2 text-primary" /> +261 32 35 477 81
            </p>
            <p className="text-lg text-gray-600 flex items-center">
              <FaEnvelope className="mr-2 text-primary" /> yvonrahari@gmail.com
            </p>
            <p className="text-lg text-gray-600 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-primary" /> Lot IIE 36CVJ Ambolidahy - Ankadindramamy
            </p>
          </div>

          {/* Colonne droite : Formulaire */}
          <ContactForm />
        </div>

        {/* Section CV en bas, centrée */}
        <div className="mt-12 text-center space-y-6">
          <p className="text-lg text-gray-600">
            Vous souhaitez consulter mon CV ? Téléchargez-le ou visualisez-le en interactif !
          </p>
          <div className="flex justify-center gap-6">
            <DownloadCVSection />
            <InteractiveCVButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;