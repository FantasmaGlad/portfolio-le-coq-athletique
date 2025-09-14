export interface Athlete {
  id: string;
  name: string;
  discipline: string;
  testimonial: string;
  image: string;
  achievements?: string[];
}

export interface Expertise {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'force' | 'endurance' | 'mental' | 'recuperation' | 'technique' | 'exclusif';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  sport: string;
  message: string;
  createdAt: Date;
  status: 'new' | 'read' | 'replied';
}

export interface Methodology {
  id: string;
  title: string;
  description: string;
  principles: string[];
  origin: 'bulgarian' | 'chinese' | 'hybrid';
}
