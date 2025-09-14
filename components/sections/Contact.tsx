'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Contact = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto:clement.barillot3901@gmail.com?subject=Demande de coaching - Le Coq Athlétique';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/33787314476?text=Bonjour Clément, je suis intéressé(e) par tes services de préparation physique et mentale.', '_blank');
  };


  return (
    <section id="contact" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Prêt à passer au <span className="text-coq-red">niveau supérieur</span> ?
          </h2>
          <div className="w-20 h-2 bg-red-500 rounded-full mx-auto mb-6"></div>
          <p className="text-base lg:text-lg text-gray-200 max-w-2xl mx-auto px-4 bg-white/10 backdrop-blur-sm py-4 rounded-2xl">
Ta transformation commence par une simple conversation.
          </p>
        </motion.div>

        {/* Unified Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Email Option */}
            <div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8 cursor-pointer hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleEmailClick}
            >
              <div className="flex items-start gap-4 lg:gap-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-coq-red rounded-2xl text-white flex items-center justify-center text-lg lg:text-2xl flex-shrink-0 shadow-lg">
                  📧
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-display font-bold text-white mb-2">
                    Email Direct
                  </h3>
                  <p className="text-gray-200 mb-3 text-sm lg:text-base">
                    Prends le temps de détailler tes objectifs
                  </p>
                  <p className="text-coq-red font-medium text-sm lg:text-base bg-white/10 px-3 py-1 rounded-full inline-block">
                    clement.barillot3901@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Option */}
            <div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8 cursor-pointer hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleWhatsAppClick}
            >
              <div className="flex items-start gap-4 lg:gap-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-600 rounded-2xl text-white flex items-center justify-center text-lg lg:text-2xl flex-shrink-0 shadow-lg">
                  📱
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-display font-bold text-white mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-gray-200 mb-3 text-sm lg:text-base">
                    Pour une réponse rapide et directe
                  </p>
                  <p className="text-green-400 font-medium text-sm lg:text-base bg-white/10 px-3 py-1 rounded-full inline-block">
                    +33 7 87 31 44 76
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Networks Section */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8 shadow-lg mb-6">
            <h3 className="text-lg lg:text-xl font-display font-bold text-white mb-6 text-center">
              Retrouvez-moi sur les Réseaux
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/clement-barillot-bpjeps"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 lg:gap-6 bg-blue-600 hover:bg-blue-700 text-white p-4 lg:p-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl lg:text-3xl flex-shrink-0">
                  💼
                </div>
                <div className="text-left flex-1">
                  <h4 className="text-lg lg:text-xl font-display font-bold mb-1">LinkedIn</h4>
                  <p className="text-blue-100 text-xs lg:text-sm">clement-barillot-bpjeps</p>
                  <p className="text-blue-200 text-xs">Réseau professionnel et contenu expert</p>
                </div>
                <div className="text-xl lg:text-2xl">→</div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com/coach_barillot"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 lg:gap-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-4 lg:p-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl lg:text-3xl flex-shrink-0">
                  📸
                </div>
                <div className="text-left flex-1">
                  <h4 className="text-lg lg:text-xl font-display font-bold mb-1">Instagram</h4>
                  <p className="text-pink-100 text-xs lg:text-sm">@coach_barillot</p>
                  <p className="text-pink-200 text-xs">Quotidien et conseils pratiques</p>
                </div>
                <div className="text-xl lg:text-2xl">→</div>
              </motion.a>
            </div>
          </div>

          {/* Contact Note */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-gray-300 text-sm">
              💡 Pour un contact direct et rapide, privilégiez les options ci-dessus
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;