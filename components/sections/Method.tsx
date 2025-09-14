'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { methodPillars } from '@/lib/data';
import { MethodPillar } from '@/lib/data';

const Method = () => {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const pillarVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const getColorClasses = (color: MethodPillar['color']) => {
    switch (color) {
      case 'blue':
        return {
          accent: 'border-coq-blue shadow-coq-blue/20',
          text: 'text-coq-blue',
          bg: 'bg-blue-50/80'
        };
      case 'white':
        return {
          accent: 'border-slate-300 shadow-slate-300/20',
          text: 'text-slate-900',
          bg: 'bg-white/80'
        };
      case 'red':
        return {
          accent: 'border-coq-red shadow-coq-red/20',
          text: 'text-red-600',
          bg: 'bg-red-50/80'
        };
      case 'navy':
        return {
          accent: 'border-coq-navy shadow-coq-navy/20',
          text: 'text-slate-900',
          bg: 'bg-slate-50/80'
        };
      default:
        return {
          accent: 'border-coq-border shadow-gray-300/20',
          text: 'text-slate-900',
          bg: 'bg-white/80'
        };
    }
  };

  return (
    <section id="method" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute top-20 right-20 w-32 h-32 border border-blue-200/30 rounded-full opacity-40"
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
          className="absolute bottom-32 left-20 w-24 h-24 border border-red-200/30 rotate-45 opacity-40"
        />
      </div>

      <div className="container-custom relative z-10">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
              Ma <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Méthode</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-1 bg-red-500 rounded-full"
              />
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="w-8 h-1 bg-orange-500 rounded-full"
              />
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20"
          >
            Un processus structuré en <span className="font-bold text-slate-800">4 piliers fondamentaux</span> pour ton parcours vers l'excellence.
            <span className="block mt-2 text-red-600 font-semibold">Résultats garantis</span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-24"
        >
          {methodPillars.map((pillar, index) => {
            const colors = getColorClasses(pillar.color);
            
            return (
              <motion.div
                key={pillar.id}
                variants={pillarVariants}
                onHoverStart={() => setHoveredPillar(pillar.id)}
                onHoverEnd={() => setHoveredPillar(null)}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`group relative ${colors.bg} backdrop-blur-sm border-l-4 ${colors.accent} p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden`}
              >
                {/* Glowing background effect */}
                <motion.div
                  animate={hoveredPillar === pillar.id ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-50 blur-xl`}
                />

                {/* Floating animation for the entire card */}
                <motion.div
                  variants={floatingVariants}
                  animate={hoveredPillar === pillar.id ? "animate" : ""}
                  className="relative z-10"
                >
                  {/* Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div 
                      animate={hoveredPillar === pillar.id ? { scale: 1.1, rotate: [0, -5, 5, 0] } : { scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl lg:text-5xl"
                    >
                      {pillar.icon}
                    </motion.div>
                    <motion.div 
                      animate={hoveredPillar === pillar.id ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 lg:w-14 lg:h-14 border-2 ${colors.accent} rounded-xl flex items-center justify-center font-bold text-lg lg:text-xl ${colors.text} bg-white/90 backdrop-blur-sm shadow-lg`}
                    >
                      {pillar.id}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 lg:space-y-5">
                    <motion.h3 
                      animate={hoveredPillar === pillar.id ? { scale: 1.02 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl lg:text-2xl font-display font-bold text-slate-900 group-hover:text-slate-800"
                    >
                      {pillar.title}
                    </motion.h3>
                    
                    <motion.p 
                      animate={hoveredPillar === pillar.id ? { y: -2 } : { y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs lg:text-sm font-semibold text-slate-600 uppercase tracking-wider bg-white/80 px-4 py-2 rounded-full inline-block shadow-md"
                    >
                      {pillar.subtitle}
                    </motion.p>
                    
                    <motion.p 
                      animate={hoveredPillar === pillar.id ? { y: -2 } : { y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-sm lg:text-base text-slate-600 leading-relaxed group-hover:text-slate-700"
                    >
                      {pillar.description}
                    </motion.p>
                  </div>

                  {/* Progress indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={hoveredPillar === pillar.id ? { width: "100%" } : { width: "0%" }}
                    transition={{ duration: 0.5 }}
                    className={`absolute bottom-0 left-0 h-1 ${colors.text.replace('text-', 'bg-')} rounded-full`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mb-8 lg:mb-12 text-center"
            >
              Un Plan <span className="text-red-600">Clair</span>, Des Résultats <span className="text-orange-500">Concrets</span>
            </motion.h3>
            
            {/* Process Steps - Compact Layout */}
            <div className="max-w-5xl mx-auto">
              {/* Mobile Layout */}
              <div className="lg:hidden grid grid-cols-2 gap-4 sm:gap-6">
                {['Évaluation', 'Construction', 'Spécialisation', 'Performance'].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onHoverStart={() => setActiveStep(index)}
                    onHoverEnd={() => setActiveStep(-1)}
                    className="text-center group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 ${
                        activeStep === index 
                          ? 'bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/40' 
                          : 'bg-gradient-to-br from-red-600 to-red-700 shadow-md'
                      } text-white rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300`}
                    >
                      {index + 1}
                    </motion.div>
                    <div className={`text-xs sm:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                      activeStep === index 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {step}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center justify-between max-w-4xl mx-auto">
                {['Évaluation', 'Construction', 'Spécialisation', 'Performance'].map((step, index) => (
                  <motion.div
                    key={step}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Step Container */}
                    <motion.div
                      onHoverStart={() => setActiveStep(index)}
                      onHoverEnd={() => setActiveStep(-1)}
                      className="text-center cursor-pointer group"
                    >
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -2, 2, 0]
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={activeStep === index ? {
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            "0 4px 6px rgba(0,0,0,0.1)", 
                            "0 10px 25px rgba(239,68,68,0.3)", 
                            "0 4px 6px rgba(0,0,0,0.1)"
                          ]
                        } : {}}
                        transition={{ duration: 0.3 }}
                        className={`relative w-16 h-16 ${
                          activeStep === index 
                            ? 'bg-gradient-to-br from-red-500 to-orange-500' 
                            : 'bg-gradient-to-br from-red-600 to-red-700'
                        } text-white rounded-xl flex items-center justify-center font-bold text-xl mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden`}
                      >
                        {/* Pulse effect */}
                        <motion.div
                          animate={activeStep === index ? {
                            scale: [1, 1.5],
                            opacity: [0.5, 0]
                          } : {}}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0 bg-white/30 rounded-xl"
                        />
                        <span className="relative z-10">{index + 1}</span>
                      </motion.div>
                      
                      <motion.div
                        animate={activeStep === index ? { 
                          scale: 1.02, 
                          y: -1 
                        } : { 
                          scale: 1, 
                          y: 0 
                        }}
                        className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                          activeStep === index 
                            ? 'bg-red-100 text-red-700 shadow-sm' 
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {step}
                      </motion.div>
                    </motion.div>

                    {/* Connection Arrow */}
                    {index < 3 && (
                      <div className="flex items-center mx-4">
                        <motion.div
                          initial={{ scaleX: 0, opacity: 0 }}
                          whileInView={{ scaleX: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                          className="w-8 h-0.5 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full origin-left relative overflow-hidden"
                        >
                          {/* Flow animation */}
                          <motion.div
                            animate={{
                              x: [-10, 40],
                              opacity: [0, 1, 0]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 1 + index * 0.3
                            }}
                            className="absolute top-0 left-0 w-2 h-full bg-red-400 rounded-full"
                          />
                        </motion.div>
                        <motion.span
                          animate={{ x: [0, 2, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 1 + index * 0.3 }}
                          className="text-slate-500 text-sm ml-1"
                        >
                          →
                        </motion.span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-10 lg:mt-12"
            >
              {/* Compact Text Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-gradient-to-r from-slate-50/80 to-blue-50/40 rounded-xl p-5 lg:p-6 mb-6 max-w-3xl mx-auto border border-slate-200/30 shadow-md"
              >
                <p className="text-slate-700 text-base lg:text-lg leading-relaxed">
                  Voilà enfin un coach qui a un <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">plan clair et structuré</span>. 
                  Chaque étape est pensée pour te faire progresser de manière <span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded">optimale</span>.
                </p>
                
                {/* Compact Success indicators */}
                <div className="flex justify-center gap-3 mt-4">
                  {[
                    { icon: "🎯", text: "Objectifs clairs" },
                    { icon: "📈", text: "Progression mesurée" },
                    { icon: "🏆", text: "Résultats garantis" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full shadow-sm border border-slate-200/30 text-xs lg:text-sm"
                    >
                      <span className="text-sm">{item.icon}</span>
                      <span className="font-medium text-slate-600">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Compact CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-red-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/40 overflow-hidden group"
                >
                  {/* Button content */}
                  <span className="relative flex items-center gap-2">
                    <span>Commencer maintenant</span>
                    <motion.span
                      animate={{ 
                        x: [0, 3, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                  </span>
                  
                  {/* Subtle shine effect */}
                  <motion.div
                    animate={{
                      x: [-80, 120],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 2
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
                  />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Method;