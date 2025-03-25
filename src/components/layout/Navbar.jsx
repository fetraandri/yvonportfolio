import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Expériences', href: '#experiences' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 64; // Hauteur du Navbar
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white shadow-lg z-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl font-bold text-white"
              onClick={(e) => handleScroll(e, '#home')}
            >
              Mon Portfolio
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <ul className="flex items-center gap-4">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`relative rounded-lg group ${
                    activeItem === item.name ? 'active' : ''
                  }`}
                  onClick={() => handleItemClick(item.name)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="relative block px-8 py-2 text-white uppercase font-bold text-sm hover:text-gray-200 transition-colors z-10"
                  >
                    {item.name}
                  </a>
                  {/* Barres animées avant/après */}
                  <span
                    className={`absolute left-1/2 transform -translate-x-1/2 top-0 h-0.5 bg-white w-0 group-hover:w-1/4 transition-all duration-500 ease-[cubic-bezier(0.4,-1,0.2,-1)] ${
                      activeItem === item.name ? '!w-full !h-1' : ''
                    } rounded-t-md z-0`}
                  ></span>
                  <span
                    className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 bg-white w-0 group-hover:w-1/4 transition-all duration-500 ease-[cubic-bezier(0.4,-1,0.2,-1)] ${
                      activeItem === item.name ? '!w-full !h-1' : ''
                    } rounded-b-md z-0`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bouton Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1 bg-primary">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`relative rounded-lg group ${
                    activeItem === item.name ? 'active' : ''
                  }`}
                  onClick={() => handleItemClick(item.name)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="relative block px-8 py-2 text-white uppercase font-bold text-sm hover:text-gray-200 transition-colors z-10"
                  >
                    {item.name}
                  </a>
                  {/* Barres animées avant/après */}
                  <span
                    className={`absolute left-1/2 transform -translate-x-1/2 top-0 h-0.5 bg-white w-0 group-hover:w-1/4 transition-all duration-500 ease-[cubic-bezier(0.4,-1,0.2,-1)] ${
                      activeItem === item.name ? '!w-full !h-1' : ''
                    } rounded-t-md z-0`}
                  ></span>
                  <span
                    className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 bg-white w-0 group-hover:w-1/4 transition-all duration-500 ease-[cubic-bezier(0.4,-1,0.2,-1)] ${
                      activeItem === item.name ? '!w-full !h-1' : ''
                    } rounded-b-md z-0`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;