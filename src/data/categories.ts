import { BookOpen, Brain, Calculator, Clapperboard, Cpu, Microscope, Music, Zap, type LucideIcon, Map, History, PawPrint, Car } from "lucide-react";

export interface Category {
  id: number;
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 9,
    name: "General Knowledge",
    icon: Brain,
    description: "Test your knowledge on a wide range of general topics and trivia.",
    color: "bg-[#4A90E2]"
  },
  {
    id: 10,
    name: "Entertainment: Books",
    icon: BookOpen,
    description: "Explore classic literature, authors, and literary masterpieces.",
    color: "bg-[#8B5CF6]"
  },
  {
    id: 11,
    name: "Entertainment: Film",
    icon: Clapperboard,
    description: "Dive into movies, directors, actors, and cinematic achievements.",
    color: "bg-[#F59E0B]"
  },
  {
    id: 12,
    name: "Entertainment: Music",
    icon: Music,
    description: "Discover genres, artists, instruments, and musical history.",
    color: "bg-[#EF4444]"
  },
  {
    id: 17,
    name: "Science and Nature",
    icon: Microscope,
    description: "Learn about scientific discoveries, biology, and the natural world.",
    color: "bg-[#10B981]"
  },
  {
    id: 18,
    name: "Science: Computers",
    icon: Cpu,
    description: "Explore computer science, technology, and programming concepts.",
    color: "bg-[#6366F1]"
  },
  {
    id: 19,
    name: "Science: Mathematics",
    icon: Calculator,
    description: "Challenge yourself with numbers, equations, and math problems.",
    color: "bg-[#F97316]"
  },
  {
    id: 20,
    name: "Mythology",
    icon: Zap,
    description: "Uncover myths, legends, and stories from ancient cultures.",
    color: "bg-[#EC4899]"
  },
  {
    id: 22,
    name: "Geography",
    icon: Map,
    description: "Test your knowledge of countries, capitals, and world geography.",
    color: "bg-[#06B6D4]"
  },
  {
    id: 23,
    name: "History",
    icon: History,
    description: "Explore past events, civilizations, and historical figures.",
    color: "bg-[#84CC16]"
  },
  {
    id: 27,
    name: "Animals",
    icon: PawPrint,
    description: "Learn about wildlife, species, and animal behaviors.",
    color: "bg-[#22C55E]"
  },
  {
    id: 28,
    name: "Vehicles",
    icon: Car,
    description: "Discover cars, transportation, and automotive history.",
    color: "bg-[#3B82F6]"
  }
];