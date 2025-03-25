import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences'; // Remplace Projects
import Contact from './pages/Contact';
import Loading from './pages/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="pt-16">
            <Home />
            <About />
            <Experiences /> {/* Remplace Projects */}
            <Contact />
          </main>
          <footer className="bg-gray-800 text-white py-4 text-center">
            <p>© 2025 YvonRaharijantovo. Tous droits réservés.</p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;