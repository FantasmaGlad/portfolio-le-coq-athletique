'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Ma Méthode', href: '#method' },
    { name: 'Expertises', href: '#expertise' },
    { name: 'Mon Camp de Base', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isScrolled ? 0 : -100,
        opacity: isScrolled ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-lg' 
          : 'bg-transparent pointer-events-none'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <motion.div
            className="cursor-pointer flex items-center gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-xl flex items-center justify-center shadow-lg border border-slate-200 overflow-hidden">
              <img 
                src="/logo-coq-athletique.png" 
                alt="Le Coq Athlétique" 
                className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="text-red-600 font-bold text-sm lg:text-lg">🐓</div>';
                }}
              />
            </div>
            <div className="font-display font-bold text-lg lg:text-xl text-slate-800">
              Le Coq <span className="text-red-600">Athlétique</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-medium transition-colors duration-200 text-slate-700 hover:text-red-600 text-sm lg:text-base"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary text-sm lg:text-base"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-5 h-0.5 transition-all duration-200 bg-slate-700 ${
                    isMobileMenuOpen && i === 2 ? 'opacity-0' : 
                    isMobileMenuOpen && i === 1 ? 'rotate-45 translate-y-1.5' :
                    isMobileMenuOpen && i === 3 ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              ))}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-200 ${
          isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="bg-coq-accent/95 backdrop-blur-sm border border-coq-border">
            <nav className="p-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-slate-700 hover:text-red-600 font-medium transition-colors duration-200 text-sm"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 border-t border-coq-border">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full btn-primary text-sm"
                >
                  Contact
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;