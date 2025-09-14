'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Image from 'next/image';

const HeroBanner = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-blue-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-20 w-32 h-32 border border-blue-200/30 rounded-full opacity-40"
        ></motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-32 left-20 w-24 h-24 border border-red-200/30 rotate-45 opacity-40"
        ></motion.div>
      </div>

      <div className="container-custom min-h-screen flex items-center relative z-10 pt-20">
        <div className="w-full">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 lg:space-y-10 pt-8 lg:pt-16"
            >
              {/* Brand Text */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-2"
              >
                <div className="text-slate-900 font-display font-bold text-3xl lg:text-4xl">
                  Le Coq <span className="text-red-600">Athlétique</span>
                </div>
                <div className="text-slate-600 text-base lg:text-lg font-medium">
                  Excellence Française
                </div>
              </motion.div>

              {/* Name Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-slate-900">
                  Clément<br />
                  <span className="text-red-600">Barillot</span>
                </h1>
                
                {/* Enhanced Subtitle */}
                <div className="relative inline-block">
                  <p className="text-xl lg:text-2xl font-semibold text-blue-700 bg-blue-50 px-6 py-3 rounded-2xl border border-blue-200 shadow-md">
                    Préparateur Physique et Mental
                  </p>
                </div>
                
                {/* Enhanced Description */}
                <div className="relative max-w-2xl">
                  <p className="text-lg lg:text-xl text-slate-700 leading-relaxed bg-white/80 backdrop-blur-sm px-6 py-6 rounded-2xl shadow-lg border border-slate-200">
                    Ton potentiel est un{' '}
                    <strong className="text-slate-900 font-bold bg-slate-100 px-2 py-1 rounded-lg">
                      point de départ
                    </strong>
                    . La performance est une{' '}
                    <strong className="text-red-700 font-bold bg-red-50 px-2 py-1 rounded-lg">
                      destination
                    </strong>{' '}
                    que nous atteindrons{' '}
                    <strong className="text-blue-700 font-bold bg-blue-50 px-2 py-1 rounded-lg">
                      ensemble
                    </strong>
                    .
                  </p>
                </div>
              </motion.div>
              
              {/* Enhanced CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    onClick={scrollToContact} 
                    className="bg-slate-900 hover:bg-black text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-2">
                      <span>Commencer Mon Parcours</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="secondary" 
                    onClick={() => document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-2">
                      <span>Ma Méthode</span>
                      <span className="text-slate-500">⚡</span>
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="pt-8"
              >
                <div className="flex flex-wrap justify-center gap-2 lg:gap-3 max-w-4xl mx-auto">
                  {[
                    { number: "3+", label: "Années", icon: "🏆" },
                    { number: "100%", label: "Personnalisé", icon: "🎯" },
                    { number: "Oyonnax", label: "France", icon: "📍" },
                    { number: "Cercle", label: "Restreint", icon: "👥" },
                    { number: "Suivi", label: "Exclusif", icon: "📱" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      className="flex items-center gap-3 bg-white/90 px-4 lg:px-5 py-3 lg:py-4 rounded-xl shadow-lg border border-slate-200 flex-shrink-0"
                    >
                      <span className="text-xl lg:text-2xl">{stat.icon}</span>
                      <div>
                        <div className="text-base lg:text-lg font-bold text-slate-900">{stat.number}</div>
                        <div className="text-sm lg:text-base text-slate-600">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end pt-12 lg:pt-20"
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
                
                {/* Logo container */}
                <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem] bg-white rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/70 group-hover:border-white/90 transition-all duration-300">
                  <Image 
                    src="/logo-coq-athletique.png" 
                    alt="Le Coq Athlétique Logo" 
                    width={350}
                    height={350}
                    className="w-80 h-80 lg:w-96 lg:h-96 object-contain drop-shadow-lg"
                    onError={() => {
                      console.log('Logo not found, using fallback');
                    }}
                  />
                </div>
                
                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute -top-4 -right-4 w-6 h-6 bg-red-500 rounded-full opacity-60"
                ></motion.div>
                <motion.div
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute -bottom-4 -left-4 w-4 h-4 bg-blue-500 rounded-full opacity-60"
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center mt-16 lg:mt-20"
          >
            <motion.p
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-slate-500 text-sm font-medium"
            >
                  ✨ Ta transformation commence ici
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="text-slate-500 text-sm font-medium group-hover:text-slate-700 transition-colors">
            Découvrir
          </div>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center group-hover:border-slate-600 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-red-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;