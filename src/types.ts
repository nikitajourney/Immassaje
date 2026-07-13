export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isLocked: boolean;
  description: string;
  videoUrl: string; // Simulated video url or poster
  category: 'теория' | 'практика';
  module: string;
  quiz?: QuizQuestion[];
}

export interface PricingPackage {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  oldPrice: number;
  features: string[];
  badge?: string;
  isPopular?: boolean;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  text: string;
  rating: number;
  beforeAfter?: string; // Optional text or description of hands condition
}
