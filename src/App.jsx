import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <main className="pt-16">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2025 Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;