export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  description: string;
  isUnlocked: boolean;
  notes: string[];
}

export interface CourseModule {
  id: string;
  title: string;
  type: 'theory' | 'practice';
  duration: string;
  topics: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  experience: string;
  text: string;
  rating: number;
  avatar: string;
  result: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  status: 'new' | 'contacted' | 'completed';
}
