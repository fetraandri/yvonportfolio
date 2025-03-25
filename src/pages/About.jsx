import cvData from '../data/cvData';
import CircularProgress from '../components/ui/CircularProgress';

const About = () => {
  const qualityPercentages = {
    "Motivé et dynamique": 90,
    "Très appliqué et autonome": 85,
    "Sens de leader et de responsabilité": 80,
    "Sérieux et ponctuel": 95,
    "Sens de l’organisation": 88,
  };

  return (
    <section id="about" className="min-h-screen py-16 bg-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Titre à gauche */}
        <div className="lg:w-1/3 flex items-center justify-center">
          <h2 className="text-5xl md:text-7xl font-bold text-primary writing-mode-vertical-rl transform ">
            À propos de moi
          </h2>
        </div>

        {/* Contenu à droite */}
        <div className="lg:w-2/3 space-y-12">
          {/* Profil */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Qui suis-je ?</h3>
            <p className="text-lg text-gray-600 text-justify leading-relaxed">
              Fort d’une solide formation en sociologie et d’une expérience variée dans la gestion de la relation client, je suis un professionnel dédié à l’amélioration des processus et à la création de liens durables entre les entreprises et leurs partenaires. Mon parcours m’a permis de développer une approche analytique et humaine, toujours orientée vers des résultats concrets.
            </p>
          </div>

          {/* Qualités avec diagrammes circulaires */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Mes qualités</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cvData.qualities.map((quality, index) => (
                <CircularProgress
                  key={index}
                  percentage={qualityPercentages[quality]}
                  label={quality}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;