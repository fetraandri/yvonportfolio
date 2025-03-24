import cvData from '../data/cvData';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Titre principal */}
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
          {cvData.fullName}
        </h1>

        {/* Sous-titre (métier) */}
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
          {cvData.jobTitle}
        </h2>

        {/* Description courte */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          {cvData.profile}
        </p>

        {/* Boutons d'action */}
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="inline-block bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition duration-300"
          >
            Me contacter
          </a>
          <a
            href="#projects"
            className="inline-block border-2 border-primary text-primary py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition duration-300"
          >
            Voir mes expériences
          </a>
        </div>

        {/* Informations de contact rapide */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 text-gray-700">
          <p className="flex items-center gap-2">
            <span className="text-primary">📞</span> {cvData.contact.phone1}
          </p>
          <p className="flex items-center gap-2">
            <span className="text-primary">✉️</span> {cvData.contact.email}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;