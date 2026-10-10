import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'Terminal', id: 'terminal' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/80 backdrop-blur-xl border-b border-neon-green/10 shadow-lg shadow-black/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="font-mono font-bold text-2xl text-neon-green hover:text-green-400 transition-colors">
              &lt;C.A/&gt;
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-neon-green px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono tracking-wide relative group"
                >
                  <span className="text-neon-green/50 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    $
                  </span>
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span
                  className={`block w-6 h-0.5 bg-current transform transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'w-0 opacity-0' : 'w-5'
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transform transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute w-full bg-dark-900/95 backdrop-blur-xl border-b border-neon-green/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0'
        }`}
      >
        <div className="px-4 space-y-1 sm:px-3 flex flex-col">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-neon-green hover:bg-white/5 block px-3 py-3 rounded-md text-base font-medium font-mono text-left transition-colors"
            >
              <span className="text-neon-green/50 mr-2">$</span>
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
