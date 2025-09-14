'use client';

import { motion } from 'framer-motion';
import { methodologies } from '@/lib/data';

const Methodology = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const getOriginColor = (origin: string) => {
    switch (origin) {
      case 'bulgarian': return 'border-red-500 bg-red-50';
      case 'chinese': return 'border-yellow-500 bg-yellow-50';
      case 'hybrid': return 'border-elite-gold bg-elite-gold/10';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getOriginLabel = (origin: string) => {
    switch (origin) {
      case 'bulgarian': return 'Méthode Bulgare';
      case 'chinese': return 'Méthode Chinoise';
      case 'hybrid': return 'Fusion Scientifique';
      default: return 'Méthode';
    }
  };

  return (
    <section id="methodology" className="section-padding bg-elite-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-elite-navy mb-6">
            Ma <span className="text-elite-gold">Méthodologie</span>
          </h2>
          <p className="text-xl text-elite-gray max-w-3xl mx-auto leading-relaxed">
            Une approche scientifique unique fusionnant les méthodes d'entraînement les plus efficaces 
            au monde, validées par des décennies de recherche et de résultats concrets.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {methodologies.map((methodology, index) => (
            <motion.div
              key={methodology.id}
              variants={itemVariants}
              className={`bg-white rounded-2xl p-8 shadow-lg card-hover border-l-4 ${getOriginColor(methodology.origin)}`}
            >
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  methodology.origin === 'bulgarian' ? 'bg-red-100 text-red-800' :
                  methodology.origin === 'chinese' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-elite-gold/20 text-elite-gold'
                }`}>
                  {getOriginLabel(methodology.origin)}
                </span>
                <h3 className="text-2xl font-display font-bold text-elite-navy mb-3">
                  {methodology.title}
                </h3>
                <p className="text-elite-gray leading-relaxed">
                  {methodology.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-elite-navy mb-3">Principes clés :</h4>
                {methodology.principles.map((principle, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-elite-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-elite-gray">{principle}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Science Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-display italic text-elite-navy max-w-4xl mx-auto">
            "L'excellence n'est pas un acte, mais une habitude. 
            La science nous donne les clés, l'expérience nous montre comment les utiliser."
          </blockquote>
          <p className="text-elite-gray mt-4 font-medium">- Philosophie Performance Elite</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
