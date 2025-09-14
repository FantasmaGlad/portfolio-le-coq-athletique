'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { athletes } from '@/lib/data';

const PerformanceWall = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Le <span className="text-elite-gold">Mur des Performances</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez les témoignages d'athlètes d'élite qui ont transformé leurs performances 
            grâce à nos méthodes scientifiques éprouvées.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
        >
          {athletes.map((athlete, index) => (
            <motion.div
              key={athlete.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-hover group"
            >
              <div className="flex items-start gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-elite-gold/30 group-hover:ring-elite-gold/60 transition-all duration-300">
                  <Image
                    src={athlete.image}
                    alt={athlete.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-white mb-1">
                    {athlete.name}
                  </h3>
                  <p className="text-elite-gold font-semibold mb-4">
                    {athlete.discipline}
                  </p>
                  
                  <blockquote className="text-gray-300 italic text-lg leading-relaxed mb-4">
                    "{athlete.testimonial}"
                  </blockquote>
                  
                  {athlete.achievements && (
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {athlete.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="bg-elite-gold/20 text-elite-gold px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '50+', label: 'Athlètes d\'élite' },
            { number: '15+', label: 'Disciplines sportives' },
            { number: '95%', label: 'Taux de satisfaction' },
            { number: '12', label: 'Années d\'expérience' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-elite-gold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white font-semibold">Partenaire officiel:</div>
            {['Fédération Française', 'INSEP', 'Centre National', 'Recherche Sportive'].map((partner, idx) => (
              <div key={idx} className="text-gray-400 font-medium">
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceWall;
