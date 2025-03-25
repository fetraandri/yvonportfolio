import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
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
        'service_891xica', 
        'template_awwd12j', 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'EU0p88Od7atq0drF5' 
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
  );
};

export default ContactForm;