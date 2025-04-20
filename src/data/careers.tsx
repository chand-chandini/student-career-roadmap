
import { GraduationCap, Building, UserRound, Wrench, PaintRoller, Music, Gavel, Stethoscope, BookOpen } from "lucide-react";

export interface Career {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  bgColor: string;
  path: string;
}

export const careers: Career[] = [
  {
    id: "engineering",
    title: "Engineering",
    description: "Become a professional engineer with a focus on innovation and problem-solving across various engineering disciplines.",
    icon: <GraduationCap className="h-6 w-6 text-career-engineering" />,
    color: "bg-career-engineering",
    bgColor: "bg-blue-50",
    path: "/roadmap/engineering"
  },
  {
    id: "medicine",
    title: "Medicine",
    description: "Pursue a career in healthcare as a physician, specialist, surgeon, or other medical professional.",
    icon: <Stethoscope className="h-6 w-6 text-career-medicine" />,
    color: "bg-career-medicine",
    bgColor: "bg-green-50",
    path: "/roadmap/medicine"
  },
  {
    id: "law",
    title: "Law",
    description: "Navigate the path to becoming a legal professional, from education requirements to specialization options.",
    icon: <Gavel className="h-6 w-6 text-career-law" />,
    color: "bg-career-law",
    bgColor: "bg-purple-50",
    path: "/roadmap/law"
  },
  {
    id: "government",
    title: "Government Service",
    description: "Explore careers in public service, from civil service to public administration and policy-making roles.",
    icon: <Building className="h-6 w-6 text-career-government" />,
    color: "bg-career-government",
    bgColor: "bg-amber-50",
    path: "/roadmap/government"
  },
  {
    id: "navy",
    title: "Naval Service",
    description: "Follow the pathway to a career in naval operations, from education to specialized naval roles.",
    icon: <UserRound className="h-6 w-6 text-career-navy" />,
    color: "bg-career-navy",
    bgColor: "bg-blue-50",
    path: "/roadmap/navy"
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "Learn the journey to becoming an architect, from design education to professional licensing.",
    icon: <Building className="h-6 w-6 text-career-architecture" />,
    color: "bg-career-architecture",
    bgColor: "bg-red-50",
    path: "/roadmap/architecture"
  },
  {
    id: "electrical",
    title: "Electrical Engineering",
    description: "Specialize in electrical systems, from education requirements to professional certification.",
    icon: <Wrench className="h-6 w-6 text-career-electrical" />,
    color: "bg-career-electrical",
    bgColor: "bg-indigo-50",
    path: "/roadmap/electrical"
  },
  {
    id: "arts",
    title: "Fine Arts",
    description: "Develop your artistic talents through education, specialized training, and professional opportunities.",
    icon: <PaintRoller className="h-6 w-6 text-career-arts" />,
    color: "bg-career-arts",
    bgColor: "bg-pink-50",
    path: "/roadmap/arts"
  },
  {
    id: "music",
    title: "Music",
    description: "Build a career in music, from formal education to performance and industry opportunities.",
    icon: <Music className="h-6 w-6 text-career-music" />,
    color: "bg-career-music",
    bgColor: "bg-purple-50",
    path: "/roadmap/music"
  }
];

export function getCareerById(id: string): Career | undefined {
  return careers.find(career => career.id === id);
}
