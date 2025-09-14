import { Athlete, Expertise, Methodology } from './types';

// Nouvelle interface pour la méthode en 4 piliers
export interface MethodPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: 'blue' | 'white' | 'red' | 'navy';
}

export const methodPillars: MethodPillar[] = [
  {
    id: '1',
    title: '1. Audit 360° & Potentiel',
    subtitle: 'Décellage de Talents',
    description: 'Nous commençons par une évaluation complète de tes forces, de tes faiblesses et de tes objectifs. C\'est la cartographie précise de ton potentiel athlétique et mental.',
    icon: '🎯',
    color: 'blue'
  },
  {
    id: '2',
    title: '2. Fondations & Résilience',
    subtitle: 'Conditionnement Physique et Mental',
    description: 'Nous bâtissons les fondations sur lesquelles repose toute performance durable. Un conditionnement physique et une robustesse mentale intégrés pour encaisser les charges d\'entraînement les plus intenses.',
    icon: '🏗️',
    color: 'white'
  },
  {
    id: '3',
    title: '3. Spécialisation & Affûtage',
    subtitle: 'Spécialisation',
    description: 'Une fois les fondations solides, nous ciblons les compétences spécifiques à ta discipline. Chaque détail est affûté pour transformer tes capacités en une supériorité sur le terrain.',
    icon: '⚔️',
    color: 'red'
  },
  {
    id: '4',
    title: '4. Périodisation & Pic de Performance',
    subtitle: 'Périodisation de l\'entraînement',
    description: 'La victoire se planifie. Nous structurons ton entraînement en cycles intelligents pour garantir que tu atteignes ton pic de forme absolu au moment crucial : le jour de la compétition.',
    icon: '🏆',
    color: 'navy'
  }
];

export const athletes: Athlete[] = [
  {
    id: '1',
    name: 'Marie Dubois',
    discipline: 'Haltérophilie',
    testimonial: 'La méthode de Clément m\'a permis d\'augmenter mes performances de 15% en 6 mois.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop',
    achievements: ['Championne de France 2023', 'Record national -63kg']
  },
  {
    id: '2',
    name: 'Thomas Martin',
    discipline: 'Sprint',
    testimonial: 'L\'approche structurée de Clément a révolutionné ma préparation. Mes chronos parlent d\'eux-mêmes.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    achievements: ['10.85s sur 100m', 'Finaliste championnats d\'Europe']
  }
];

export const expertises: Expertise[] = [
  {
    id: '1',
    title: 'Préparation Physique',
    description: 'Développement explosif de ta force, puissance et endurance pour dominer ta discipline',
    icon: '💪',
    category: 'force'
  },
  {
    id: '2',
    title: 'Préparation Mentale',
    description: 'Techniques de visualisation, gestion du stress et concentration laser pour performer sous pression',
    icon: '🧠',
    category: 'mental'
  },
  {
    id: '3',
    title: 'Périodisation',
    description: 'Planification scientifique pour exploser tes performances au moment décisif',
    icon: '📊',
    category: 'technique'
  },
  {
    id: '4',
    title: 'Récupération',
    description: 'Protocoles de régénération accélérée et optimisation du sommeil pour une récupération d\'élite',
    icon: '♻️',
    category: 'recuperation'
  },
  {
    id: '5',
    title: 'Nutrition Performance',
    description: 'Stratégies nutritionnelles sur-mesure pour décupler tes performances et ta récupération',
    icon: '🥗',
    category: 'recuperation'
  },
  {
    id: '6',
    title: 'Analyse Biomécanique',
    description: 'Analyse biomécanique avancée pour perfectionner chaque geste et gagner en efficacité',
    icon: '⚙️',
    category: 'technique'
  },
  {
    id: '7',
    title: 'Cercle Restreint',
    description: 'Accompagnement VIP ultra-personnalisé réservé aux athlètes d\'exception',
    icon: '👥',
    category: 'exclusif'
  },
  {
    id: '8',
    title: 'Suivi Exclusif',
    description: 'Monitoring 24/7 et ajustements tactiques en temps réel pour rester au sommet',
    icon: '📱',
    category: 'exclusif'
  }
];

export const methodologies: Methodology[] = [
  {
    id: '1',
    title: 'Approche Holistique',
    description: 'Une vision globale intégrant physique, mental et technique',
    principles: [
      'Évaluation complète 360°',
      'Personnalisation maximale',
      'Suivi en temps réel',
      'Adaptation continue'
    ],
    origin: 'hybrid'
  },
  {
    id: '2',
    title: 'Méthode Scientifique',
    description: 'Basée sur les dernières recherches en sciences du sport',
    principles: [
      'Données objectives et mesurables',
      'Protocoles validés scientifiquement',
      'Analyse statistique des progrès',
      'Optimisation par l\'IA'
    ],
    origin: 'hybrid'
  },
  {
    id: '3',
    title: 'Excellence Française',
    description: 'L\'héritage du sport français au service de ta performance',
    principles: [
      'Tradition d\'excellence sportive',
      'Innovation et modernité',
      'Rigueur et discipline',
      'Esprit de dépassement'
    ],
    origin: 'hybrid'
  }
];