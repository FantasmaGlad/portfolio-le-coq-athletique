'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { athletes } from '@/lib/data';
import { Athlete, ContactMessage } from '@/lib/types';
import Button from '@/components/ui/Button';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'athletes' | 'messages' | 'content'>('athletes');
  const [athletesList, setAthletesList] = useState<Athlete[]>(athletes);
  const [messages] = useState<ContactMessage[]>([
    {
      id: '1',
      name: 'Jean Dupont',
      email: 'jean.dupont@email.com',
      sport: 'Athlétisme',
      message: 'Bonjour, je suis intéressé par tes méthodes pour améliorer mes performances en sprint.',
      createdAt: new Date('2024-01-15'),
      status: 'new'
    },
    {
      id: '2',
      name: 'Marie Laurent',
      email: 'marie.laurent@email.com',
      sport: 'Natation',
      message: 'Je cherche un coach pour préparer les championnats nationaux.',
      createdAt: new Date('2024-01-14'),
      status: 'read'
    }
  ]);

  const [newAthlete, setNewAthlete] = useState<Partial<Athlete>>({
    name: '',
    discipline: '',
    testimonial: '',
    image: '',
    achievements: []
  });

  const [isAddingAthlete, setIsAddingAthlete] = useState(false);

  const tabs = [
    { id: 'athletes', name: 'Mur des Performances', icon: '🏆' },
    { id: 'messages', name: 'Messages', icon: '💬' },
    { id: 'content', name: 'Contenu', icon: '📝' }
  ];

  const handleAddAthlete = () => {
    if (newAthlete.name && newAthlete.discipline && newAthlete.testimonial) {
      const athlete: Athlete = {
        id: Date.now().toString(),
        name: newAthlete.name,
        discipline: newAthlete.discipline,
        testimonial: newAthlete.testimonial,
        image: newAthlete.image || 'https://via.placeholder.com/400x400',
        achievements: newAthlete.achievements || []
      };
      
      setAthletesList([...athletesList, athlete]);
      setNewAthlete({ name: '', discipline: '', testimonial: '', image: '', achievements: [] });
      setIsAddingAthlete(false);
    }
  };

  const handleDeleteAthlete = (id: string) => {
    setAthletesList(athletesList.filter(athlete => athlete.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-display font-bold text-elite-navy">
                Administration <span className="text-elite-gold">Performance Elite</span>
              </h1>
              <p className="text-gray-600 mt-1">Gère ton portfolio et tes contenus</p>
            </div>
            <Button onClick={() => window.location.href = '/'}>
              Voir le Site
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 mb-2 ${
                    activeTab === tab.id
                      ? 'bg-elite-gold text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'athletes' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-elite-navy">Gestion du Mur des Performances</h2>
                    <Button onClick={() => setIsAddingAthlete(true)}>
                      Ajouter un Athlète
                    </Button>
                  </div>

                  {/* Add Athlete Form */}
                  {isAddingAthlete && (
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold mb-4">Nouvel Athlète</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="Nom complet"
                          value={newAthlete.name}
                          onChange={(e) => setNewAthlete({...newAthlete, name: e.target.value})}
                          className="px-3 py-2 border rounded-lg focus:border-elite-gold focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Discipline sportive"
                          value={newAthlete.discipline}
                          onChange={(e) => setNewAthlete({...newAthlete, discipline: e.target.value})}
                          className="px-3 py-2 border rounded-lg focus:border-elite-gold focus:outline-none"
                        />
                      </div>
                      <input
                        type="url"
                        placeholder="URL de l'image"
                        value={newAthlete.image}
                        onChange={(e) => setNewAthlete({...newAthlete, image: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:border-elite-gold focus:outline-none mb-4"
                      />
                      <textarea
                        placeholder="Témoignage"
                        rows={3}
                        value={newAthlete.testimonial}
                        onChange={(e) => setNewAthlete({...newAthlete, testimonial: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:border-elite-gold focus:outline-none mb-4"
                      />
                      <div className="flex gap-2">
                        <Button onClick={handleAddAthlete}>Ajouter</Button>
                        <Button variant="secondary" onClick={() => setIsAddingAthlete(false)}>
                          Annuler
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Athletes List */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {athletesList.map((athlete) => (
                      <div key={athlete.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <img
                            src={athlete.image}
                            alt={athlete.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-elite-navy">{athlete.name}</h3>
                            <p className="text-elite-gold text-sm">{athlete.discipline}</p>
                            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                              "{athlete.testimonial}"
                            </p>
                          </div>
                          <button
                            onClick={() => handleDeleteAthlete(athlete.id)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'messages' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h2 className="text-2xl font-bold text-elite-navy mb-6">Messages de Contact</h2>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`border rounded-lg p-4 ${
                        message.status === 'new' ? 'border-elite-gold bg-elite-gold/5' : 'border-gray-200'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-elite-navy">{message.name}</h3>
                          <p className="text-sm text-gray-600">{message.email} • {message.sport}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              message.status === 'new'
                                ? 'bg-elite-gold text-white'
                                : message.status === 'read'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            {message.status === 'new' ? 'Nouveau' : 
                             message.status === 'read' ? 'Lu' : 'Répondu'}
                          </span>
                          <span className="text-xs text-gray-500">
                            {message.createdAt.toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700">{message.message}</p>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm">Répondre</Button>
                        <Button variant="secondary" size="sm">Marquer comme lu</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'content' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h2 className="text-2xl font-bold text-elite-navy mb-6">Éditeur de Contenu</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-elite-navy mb-2">
                      Titre Principal
                    </label>
                    <input
                      type="text"
                      defaultValue="La Performance n'est pas un Art, c'est une Science"
                      className="w-full px-3 py-2 border rounded-lg focus:border-elite-gold focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-elite-navy mb-2">
                      Sous-titre
                    </label>
                    <input
                      type="text"
                      defaultValue="Expert en Méthodes d'Optimisation Bulgaro-Chinoises pour Athlètes d'Élite"
                      className="w-full px-3 py-2 border rounded-lg focus:border-elite-gold focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-elite-navy mb-2">
                      Description Méthodologie
                    </label>
                    <textarea
                      rows={4}
                      defaultValue="Une approche scientifique unique fusionnant les méthodes d'entraînement les plus efficaces au monde, validées par des décennies de recherche et de résultats concrets."
                      className="w-full px-3 py-2 border rounded-lg focus:border-elite-gold focus:outline-none"
                    />
                  </div>
                  
                  <Button>Sauvegarder les Modifications</Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
