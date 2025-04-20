
export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  duration: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "Book" | "Course" | "Website" | "Tool" | "Community";
  url: string;
}

export const engineeringTimeline: TimelineItem[] = [
  {
    id: "high-school",
    title: "High School Preparation",
    description: "Focus on mathematics, physics, chemistry, and computer science. Participate in STEM clubs, competitions, and seek opportunities for practical projects.",
    duration: "Ages 14-18"
  },
  {
    id: "bachelor",
    title: "Bachelor's Degree",
    description: "Complete a Bachelor's degree in Engineering or related technical field. Choose a specialization based on interests (mechanical, electrical, civil, software, etc.).",
    duration: "4 years"
  },
  {
    id: "internship",
    title: "Internships & Co-op Experience",
    description: "Gain practical experience through internships, co-op programs, or research assistantships. Build professional connections and apply classroom knowledge to real-world problems.",
    duration: "3-6 months each"
  },
  {
    id: "entry-level",
    title: "Entry-Level Engineering Position",
    description: "Secure an entry-level engineering role to develop professional skills and practical knowledge. Work under supervision of senior engineers on projects.",
    duration: "1-3 years"
  },
  {
    id: "professional-engineer",
    title: "Professional Engineer (PE) Licensure",
    description: "Prepare for and pass the Fundamentals of Engineering (FE) exam followed by the Professional Engineering (PE) exam after gaining required experience.",
    duration: "4+ years of experience needed"
  },
  {
    id: "mid-level",
    title: "Mid-Level Engineering Role",
    description: "Progress to positions with more responsibility, leading smaller projects or components of larger initiatives. Develop specialization in a specific domain.",
    duration: "3-6 years"
  },
  {
    id: "masters-degree",
    title: "Master's Degree or MBA (Optional)",
    description: "Consider advancing education with a specialized Master's degree or MBA to develop technical depth or prepare for management roles.",
    duration: "1-2 years"
  },
  {
    id: "senior-engineer",
    title: "Senior Engineer / Team Lead",
    description: "Move into senior technical roles or team leadership positions. Take responsibility for project delivery, mentoring junior engineers, and technical decision-making.",
    duration: "7+ years"
  },
  {
    id: "principal-engineer",
    title: "Principal Engineer / Technical Leadership",
    description: "Advance to principal technical positions, shaping technical strategy and architecture. Become a recognized expert in your specialization.",
    duration: "10+ years"
  },
  {
    id: "management",
    title: "Engineering Management (Optional Path)",
    description: "Transition to engineering management roles such as Engineering Manager, Director of Engineering, or Chief Technology Officer (CTO).",
    duration: "10-15+ years"
  }
];

export const engineeringMilestones: Milestone[] = [
  {
    id: "foundation",
    title: "Foundation Phase",
    description: "Building core knowledge and skills for engineering career",
    keyPoints: [
      "Strong mathematical and scientific foundation",
      "Introduction to engineering principles",
      "Basic programming skills",
      "Laboratory and technical writing skills",
      "Teamwork and communication fundamentals"
    ]
  },
  {
    id: "specialization",
    title: "Specialization Phase",
    description: "Developing expertise in specific engineering disciplines",
    keyPoints: [
      "Advanced coursework in chosen specialization",
      "Technical electives for deeper knowledge",
      "Design and capstone projects",
      "Technical communication skills",
      "Professional ethics understanding"
    ]
  },
  {
    id: "practical-experience",
    title: "Practical Experience",
    description: "Applying knowledge in real-world settings",
    keyPoints: [
      "Internships or co-op positions",
      "Research opportunities",
      "Industry-relevant projects",
      "Professional networking",
      "Resume and portfolio development"
    ]
  },
  {
    id: "certification",
    title: "Professional Certification",
    description: "Obtaining professional credentials",
    keyPoints: [
      "Engineer in Training (EIT) certification",
      "Professional Engineer (PE) licensure",
      "Specialized certifications (field-specific)",
      "Continuing education requirements",
      "Professional society memberships"
    ]
  },
  {
    id: "career-advancement",
    title: "Career Advancement",
    description: "Progressing through engineering roles",
    keyPoints: [
      "Technical expertise development",
      "Project management skills",
      "Leadership responsibilities",
      "Mentoring junior engineers",
      "Technical innovation contributions"
    ]
  },
  {
    id: "leadership",
    title: "Leadership & Management",
    description: "Taking on leadership roles within engineering",
    keyPoints: [
      "Team leadership experience",
      "Strategic planning involvement",
      "Budget and resource management",
      "Cross-functional collaboration",
      "Organization-wide impact"
    ]
  }
];

export const engineeringResources: Resource[] = [
  {
    id: "fundamentals-book",
    title: "Fundamentals of Engineering",
    description: "Comprehensive textbook covering core engineering principles across disciplines",
    type: "Book",
    url: "https://example.com/engineering-fundamentals"
  },
  {
    id: "fe-exam-prep",
    title: "FE Exam Preparation Guide",
    description: "Study materials and practice exams for the Fundamentals of Engineering exam",
    type: "Book",
    url: "https://example.com/fe-exam-prep"
  },
  {
    id: "engineering-ethics",
    title: "Engineering Ethics: Cases and Principles",
    description: "Exploration of ethical considerations in engineering practice",
    type: "Book",
    url: "https://example.com/engineering-ethics"
  },
  {
    id: "coursera-engineering",
    title: "Engineering Fundamentals on Coursera",
    description: "Online courses covering various engineering disciplines from top universities",
    type: "Course",
    url: "https://www.coursera.org/browse/physical-science-and-engineering"
  },
  {
    id: "edx-engineering",
    title: "Engineering Courses on edX",
    description: "University-level engineering courses available online",
    type: "Course",
    url: "https://www.edx.org/learn/engineering"
  },
  {
    id: "nspe",
    title: "National Society of Professional Engineers",
    description: "Professional organization providing resources, publications, and networking",
    type: "Website",
    url: "https://www.nspe.org/"
  },
  {
    id: "ieee",
    title: "IEEE (Institute of Electrical and Electronics Engineers)",
    description: "World's largest technical professional organization for technology advancement",
    type: "Community",
    url: "https://www.ieee.org/"
  },
  {
    id: "asme",
    title: "American Society of Mechanical Engineers",
    description: "Professional association promoting the art, science, and practice of mechanical engineering",
    type: "Community",
    url: "https://www.asme.org/"
  },
  {
    id: "asce",
    title: "American Society of Civil Engineers",
    description: "Nation's oldest engineering society serving civil engineering professionals",
    type: "Community",
    url: "https://www.asce.org/"
  },
  {
    id: "autodesk",
    title: "Autodesk Education Community",
    description: "Free software, learning resources, and programs for students and educators",
    type: "Tool",
    url: "https://www.autodesk.com/education/home"
  },
  {
    id: "github-student",
    title: "GitHub Student Developer Pack",
    description: "Free tools and services for students including version control and project hosting",
    type: "Tool",
    url: "https://education.github.com/pack"
  }
];
