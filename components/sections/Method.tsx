'use client';

import { motion } from 'framer-motion';
import { methodPillars } from '@/lib/data';
import { MethodPillar } from '@/lib/data';

const Method = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const pillarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
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
    <section id="method" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
            Ma <span className="text-red-600">Méthode</span>
          </h2>
          <div className="w-20 h-2 bg-red-600 rounded-full mx-auto mb-6"></div>
          <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-4 bg-white/60 backdrop-blur-sm py-4 rounded-2xl shadow-md">
            Un processus structuré en 4 piliers fondamentaux pour ton parcours vers l'excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-20"
        >
          {methodPillars.map((pillar, index) => {
            const colors = getColorClasses(pillar.color);
            
            return (
              <motion.div
                key={pillar.id}
                variants={pillarVariants}
                className={`${colors.bg} backdrop-blur-sm border-l-4 ${colors.accent} p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {/* Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl lg:text-4xl">{pillar.icon}</div>
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 border-2 ${colors.accent} rounded-xl flex items-center justify-center font-bold text-base lg:text-lg ${colors.text} bg-white/80 backdrop-blur-sm`}>
                    {pillar.id}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 lg:space-y-4">
                  <h3 className="text-lg lg:text-xl font-display font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs lg:text-sm font-medium text-slate-600 uppercase tracking-wider bg-white/60 px-3 py-1 rounded-full inline-block">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm border border-coq-border rounded-3xl p-8 lg:p-12 shadow-xl"
        >
          <h3 className="text-xl lg:text-2xl font-display font-bold text-slate-900 mb-6 lg:mb-8 text-center">
            Un Plan Clair, Des Résultats Concrets
          </h3>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
            {['Évaluation', 'Construction', 'Spécialisation', 'Performance'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="text-center">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center font-bold text-base lg:text-lg mb-3 shadow-lg">
                    {index + 1}
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-slate-600 uppercase tracking-wider bg-coq-accent px-3 py-1 rounded-full">
                    {step}
                  </span>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block ml-6 lg:ml-8 w-8 lg:w-12 h-1 bg-slate-400 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
          
          <p className="text-center text-slate-600 text-sm lg:text-base mt-6 lg:mt-8 max-w-2xl mx-auto px-4">
            Voilà enfin un coach qui a un plan clair et structuré. 
            Chaque étape est pensée pour te faire progresser de manière optimale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Method;