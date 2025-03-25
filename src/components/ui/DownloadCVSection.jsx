const DownloadCVSection = () => {
    const cvUrl = 'https://drive.google.com/uc?export=download&id=1kR07ARlkhCGIATmy_XRx9s1QN9T7VSFw'; // Lien direct
  
    const handleDownload = () => {
      window.open(cvUrl, '_blank'); // Ouvre le lien dans un nouvel onglet
    };
  
    return (
      <button
        onClick={handleDownload}
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center"
      >
        <span>Télécharger mon CV</span>
      </button>
    );
  };
  
  export default DownloadCVSection;