const Projects = () => {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            Mes Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Projet 1</h3>
              <p className="text-gray-600">
                Description courte du projet avec React et Tailwind.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Projet 2</h3>
              <p className="text-gray-600">Un autre projet impressionnant.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;