'use client';

import { motion } from 'framer-motion';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/clement-barillot-bpjeps', icon: '💼' },
    { name: 'Instagram', href: 'https://instagram.com/coach_barillot', icon: '📸' }
  ];

  const quickLinks = [
    { name: 'Ma Méthode', href: '#method' },
    { name: 'Expertises', href: '#expertise' },
    { name: 'Mon Camp de Base', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-coq-accent/30 border-t border-coq-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Logo size="lg" />
                <div className="font-display font-bold text-xl lg:text-2xl text-slate-200">
                  Le Coq <span className="text-red-400">Athlétique</span>
                </div>
              </div>
              <p className="text-coq-text-muted text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 max-w-md">
                Clément Barillot, Préparateur Physique et Mental. 
Ton potentiel est un point de départ, la performance une destination.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 lg:space-y-3 text-coq-text-muted text-sm lg:text-base">
                <div className="flex items-center gap-3">
                  <span className="text-coq-red">📧</span>
                  <span>clement.barillot3901@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-coq-red">📱</span>
                  <span>+33 7 87 31 44 76</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-coq-red">📍</span>
                  <span>Oyonnax, France</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-display font-bold text-lg lg:text-xl mb-4 lg:mb-6 text-coq-text-light">
                Navigation
              </h3>
              <nav className="space-y-2 lg:space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-coq-text-muted hover:text-coq-red transition-colors duration-200 text-sm lg:text-base"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="font-display font-bold text-lg lg:text-xl mb-4 lg:mb-6 text-coq-text-light">
                Suivez-moi
              </h3>
              <div className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center gap-3 text-coq-text-muted hover:text-coq-red transition-colors duration-200 text-sm lg:text-base"
                  >
                    <span className="text-lg lg:text-xl">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
              
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coq-border py-6 lg:py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          >
            <div className="text-coq-text-muted text-xs lg:text-sm">
              © {currentYear} Le Coq Athlétique - Clément Barillot. Tous droits réservés.
            </div>
            
            <div className="flex items-center gap-4 lg:gap-6 text-coq-text-muted text-xs lg:text-sm">
              <button className="hover:text-coq-red transition-colors duration-200">
                Mentions Légales
              </button>
              <button className="hover:text-coq-red transition-colors duration-200">
                Politique de Confidentialité
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 lg:bottom-8 right-4 lg:right-8 w-12 h-12 lg:w-14 lg:h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-40 text-sm lg:text-base shadow-lg hover:shadow-xl"
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer;