'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { expertises } from '@/lib/data';

const Expertise = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'force': return { bg: 'bg-red-500', text: 'text-red-500', label: 'Force' };
      case 'endurance': return { bg: 'bg-blue-500', text: 'text-blue-500', label: 'Endurance' };
      case 'mental': return { bg: 'bg-purple-500', text: 'text-purple-500', label: 'Mental' };
      case 'recuperation': return { bg: 'bg-green-500', text: 'text-green-500', label: 'Récupération' };
      case 'technique': return { bg: 'bg-orange-500', text: 'text-orange-500', label: 'Technique' };
      case 'exclusif': return { bg: 'bg-yellow-500', text: 'text-yellow-500', label: 'Exclusif' };
      default: return { bg: 'bg-gray-500', text: 'text-gray-500', label: 'Général' };
    }
  };

  return (
    <section className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white rotate-12"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-white rotate-45"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Mes <span className="text-red-500">Expertises</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 rounded-full mx-auto mb-6"></div>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4 bg-white/10 backdrop-blur-sm py-4 rounded-2xl border border-white/20">
            Un éventail complet de compétences pour optimiser chaque aspect de ta performance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-20"
        >
          {expertises.map((expertise) => {
            const categoryInfo = getCategoryColor(expertise.category);
            
            return (
              <motion.div
                key={expertise.id}
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(expertise.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className={`
                  bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8 
                  transition-all duration-300 hover:shadow-2xl hover:shadow-white/10
                  ${hoveredCard === expertise.id ? 'transform -translate-y-2 bg-white/15' : ''}
                `}>
                  {/* Colored overlay on hover */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300
                    ${categoryInfo.bg}/10
                    ${hoveredCard === expertise.id ? 'opacity-100' : ''}
                  `}></div>

                  <div className="relative z-10 space-y-3 lg:space-y-4">
                    {/* Icon with animated background */}
                    <div className="relative mb-4">
                      <div className={`
                        absolute inset-0 rounded-2xl blur-xl transition-all duration-300
                        ${categoryInfo.bg}/20
                        ${hoveredCard === expertise.id ? 'opacity-100 scale-110' : 'opacity-0'}
                      `}></div>
                      <div className="relative text-4xl lg:text-5xl p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
                        {expertise.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg lg:text-xl font-display font-bold text-white group-hover:text-white transition-colors duration-300">
                      {expertise.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {expertise.description}
                    </p>

                    {/* Category Badge */}
                    <div className="pt-2">
                      <span className={`
                        inline-block px-3 py-1 rounded-full text-xs font-medium text-white
                        ${categoryInfo.bg}
                        shadow-lg
                      `}>
                        {categoryInfo.label}
                      </span>
                    </div>

                    {/* Hover indicator line */}
                    <div className={`
                      w-full h-1 rounded-full transition-all duration-300
                      ${categoryInfo.bg}
                      ${hoveredCard === expertise.id ? 'opacity-100 scale-x-100' : 'opacity-30 scale-x-50'}
                    `}></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Expertise;