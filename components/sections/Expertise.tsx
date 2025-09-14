'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { expertises } from '@/lib/data';

const Expertise = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'force': return { 
        bg: 'bg-red-500', 
        text: 'text-red-500', 
        label: 'Force',
        gradient: 'from-red-500/20 to-red-600/20',
        shadow: 'shadow-red-500/25'
      };
      case 'mental': return { 
        bg: 'bg-purple-500', 
        text: 'text-purple-500', 
        label: 'Mental',
        gradient: 'from-purple-500/20 to-purple-600/20',
        shadow: 'shadow-purple-500/25'
      };
      case 'recuperation': return { 
        bg: 'bg-green-500', 
        text: 'text-green-500', 
        label: 'Récupération',
        gradient: 'from-green-500/20 to-green-600/20',
        shadow: 'shadow-green-500/25'
      };
      case 'technique': return { 
        bg: 'bg-orange-500', 
        text: 'text-orange-500', 
        label: 'Technique',
        gradient: 'from-orange-500/20 to-orange-600/20',
        shadow: 'shadow-orange-500/25'
      };
      case 'exclusif': return { 
        bg: 'bg-amber-500', 
        text: 'text-amber-500', 
        label: 'Exclusif',
        gradient: 'from-amber-500/20 to-amber-600/20',
        shadow: 'shadow-amber-500/25'
      };
      default: return { 
        bg: 'bg-slate-500', 
        text: 'text-slate-500', 
        label: 'Général',
        gradient: 'from-slate-500/20 to-slate-600/20',
        shadow: 'shadow-slate-500/25'
      };
    }
  };

  const categories = Array.from(new Set(expertises.map(e => e.category)));
  const filteredExpertises = selectedCategory 
    ? expertises.filter(e => e.category === selectedCategory)
    : expertises;

  return (
    <section className="section-padding bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [-20, 20, -20]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-24"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 sm:mb-8 leading-tight">
              Mes <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Expertises</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-8 h-1 bg-red-500 rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
              <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl"
          >
            Un éventail complet de compétences pour optimiser chaque aspect de ta performance. 
            <span className="text-white font-semibold"> Excellence garantie</span> dans chaque domaine.
          </motion.p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(null)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
            }`}
          >
            Toutes les expertises
          </motion.button>
          {categories.map((category) => {
            const categoryInfo = getCategoryColor(category);
            return (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? `${categoryInfo.bg} text-white shadow-lg ${categoryInfo.shadow}`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                {categoryInfo.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Enhanced Expertise Cards */}
        <motion.div
          key={selectedCategory} // Re-animate when filter changes
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredExpertises.map((expertise, index) => {
            const categoryInfo = getCategoryColor(expertise.category);
            
            return (
              <motion.div
                key={expertise.id}
                variants={cardVariants}
                custom={index}
                onHoverStart={() => setHoveredCard(expertise.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`
                    relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 h-full
                    transition-all duration-500 hover:shadow-2xl hover:border-white/20
                    ${hoveredCard === expertise.id ? `bg-gradient-to-br ${categoryInfo.gradient} shadow-xl ${categoryInfo.shadow}` : ''}
                  `}
                >
                  {/* Glowing background effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 transition-all duration-500
                    bg-gradient-to-br ${categoryInfo.gradient}
                    ${hoveredCard === expertise.id ? 'opacity-100' : ''}
                  `} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Enhanced Icon */}
                    <div className="relative mb-4">
                      <motion.div
                        animate={hoveredCard === expertise.id ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.5 }}
                        className={`
                          relative text-3xl sm:text-4xl lg:text-5xl p-3 sm:p-4 rounded-xl text-center
                          bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20
                          ${hoveredCard === expertise.id ? `shadow-xl ${categoryInfo.shadow}` : ''}
                        `}
                      >
                        {expertise.icon}
                        {/* Pulse effect on hover */}
                        <motion.div
                          animate={hoveredCard === expertise.id ? { scale: [1, 1.2, 1], opacity: [0, 0.5, 0] } : {}}
                          transition={{ duration: 1, repeat: Infinity }}
                          className={`absolute inset-0 rounded-xl ${categoryInfo.bg}/30`}
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-base sm:text-lg lg:text-xl font-display font-bold text-white group-hover:text-white transition-colors duration-300">
                        {expertise.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-1">
                        {expertise.description}
                      </p>
                    </div>

                    {/* Enhanced Category Badge */}
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className={`
                          inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white
                          ${categoryInfo.bg} shadow-lg ${categoryInfo.shadow}
                          transition-all duration-300
                        `}
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 opacity-80"></span>
                        {categoryInfo.label}
                      </motion.span>
                    </div>

                    {/* Animated bottom line */}
                    <motion.div 
                      className={`
                        mt-3 h-0.5 rounded-full ${categoryInfo.bg}
                        transition-all duration-500 origin-left
                        ${hoveredCard === expertise.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-60'}
                      `}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 sm:mt-20 lg:mt-28"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-xl shadow-red-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/40"
            >
              <span className="flex items-center gap-3">
                <span>Découvrir mon approche</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;