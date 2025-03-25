import ScrollFloat from '../components/ui/ScrollFloat';
import cvData from '../data/cvData';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-16 bg-gray-100 flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <ScrollFloat
          containerClassName="text-primary"
          textClassName="font-bold"
        >
          Contactez-moi
        </ScrollFloat>
        <div className="mt-8 space-y-4">
          <p className="text-lg text-gray-600">{cvData.contact.phone1}</p>
          <p className="text-lg text-gray-600">{cvData.contact.phone2}</p>
          <p className="text-lg text-gray-600">{cvData.contact.email}</p>
          <p className="text-lg text-gray-600">{cvData.contact.address}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;