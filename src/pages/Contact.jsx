import { useState } from 'react';
import ScrollFloat from '../components/ui/ScrollFloat';
import cvData from '../data/cvData';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import DownloadCVSection from '../components/ui/DownloadCVSection';
import InteractiveCVButton from '../components/ui/InteractiveCVButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'TON_SERVICE_ID', // Remplace par ton Service ID
        'TON_TEMPLATE_ID', // Remplace par ton Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'TON_PUBLIC_KEY' // Remplace par ton Public Key
      )
      .then(
        () => {
          setStatus('Message envoyé avec succès !');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus(''), 3000);
        },
        (error) => {
          setStatus('Erreur lors de l’envoi : ' + error.text);
        }
      );
  };

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
          <div className="flex flex-col items-center justify-center space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Envoyer un message
            </h3>
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Envoyer
              </button>
            </form>
            {status && (
              <p
                className={`${
                  status.includes('succès') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {status}
              </p>
            )}
          </div>
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