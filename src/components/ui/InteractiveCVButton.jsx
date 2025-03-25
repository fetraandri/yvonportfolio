const InteractiveCVButton = () => {
    const cvPreviewUrl = 'https://drive.google.com/file/d/1kR07ARlkhCGIATmy_XRx9s1QN9T7VSFw/preview'; // Remplace par ton lien réel
  
    const handleOpenCV = () => {
      window.open(cvPreviewUrl, '_blank'); // Ouvre dans un nouvel onglet
    };
  
    return (
      <button
        onClick={handleOpenCV}
        className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors flex items-center"
      >
        <span>Voir mon CV interactif</span>
      </button>
    );
  };
  
  export default InteractiveCVButton;