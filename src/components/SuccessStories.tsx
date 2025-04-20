
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

interface Story {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

const stories: Story[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    quote: "Focus on building projects and real-world applications. The practical experience was crucial for my career growth."
  },
  {
    id: "2",
    name: "James Rodriguez",
    role: "Mechanical Engineer",
    company: "Tesla",
    quote: "Internships and networking opened doors I never thought possible. Don't be afraid to reach out to professionals."
  },
  {
    id: "3",
    name: "Priya Patel",
    role: "Civil Engineer",
    company: "AECOM",
    quote: "Participating in engineering competitions gave me valuable team experience and problem-solving skills."
  }
];

const SuccessStories = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {stories.map((story) => (
            <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-white p-1">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <blockquote className="text-gray-600 italic">"{story.quote}"</blockquote>
                    <div className="mt-4">
                      <p className="font-medium text-primary">{story.name}</p>
                      <p className="text-sm text-gray-500">{story.role} at {story.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SuccessStories;
