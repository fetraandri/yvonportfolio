import ScrollFloat from '../components/ui/ScrollFloat';
import DownloadCVButton from '../components/ui/DownloadCVButton';
import cvData from '../data/cvData';

const Contact = () => {
  // Lien pour afficher le CV dans une iframe (Google Drive en mode aperçu)
  const cvPreviewUrl = 'https://drive.google.com/file/d/1kR07ARlkhCGIATmy_XRx9s1QN9T7VSFw/preview'; 

  return (
    <section
      id="contact"
      className="min-h-screen py-16 bg-gray-100 flex items-center justify-center relative overflow-hidden"
    >
      {/* Image de fond avec faible opacité */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/backgroundcontact')`, // Ajuste selon ton image
          opacity: 0.2,
          zIndex: 0,
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
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
          {/* Bouton de téléchargement */}
          <DownloadCVButton />
        </div>

        {/* CV interactif */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mon CV</h3>
          <div className="w-full max-w-4xl mx-auto h-[600px] border-2 border-gray-300 rounded-lg overflow-hidden">
            <iframe
              src={cvPreviewUrl}
              title="CV Interactif"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;