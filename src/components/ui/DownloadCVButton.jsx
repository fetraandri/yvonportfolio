const DownloadCVButton = () => {
    const cvUrl = 'https://drive.google.com/file/d/1kR07ARlkhCGIATmy_XRx9s1QN9T7VSFw/view?usp=sharing'; 
  
    const handleDownload = () => {
      // Convertir un lien Google Drive "view" en "download"
      const downloadUrl = cvUrl.replace('/view?usp=sharing', '/uc?export=download');
      window.open(downloadUrl, '_blank');
    };
  
    return (
      <button
        onClick={handleDownload}
        className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Télécharger mon CV
      </button>
    );
  };
  
  export default DownloadCVButton;