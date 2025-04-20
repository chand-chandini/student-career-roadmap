
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareerCard from "@/components/CareerCard";
import { careers } from "@/data/careers";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCareers = careers.filter(career => 
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 border-b">
          <div className="container py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Career Roadmap Navigator
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive guides to help students build successful careers in their chosen fields.
              </p>
              
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="search"
                  placeholder="Search for a career path..."
                  className="pl-10 py-6 text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Career Paths Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4">Explore Career Paths</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Select a career path to discover the educational requirements, timeline, key milestones, and resources to help you succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCareers.map((career) => (
                <CareerCard
                  key={career.id}
                  title={career.title}
                  description={career.description}
                  icon={career.icon}
                  color={career.color}
                  path={career.path}
                />
              ))}
            </div>
            
            {filteredCareers.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No matching career paths found</h3>
                <p className="text-gray-600">Try adjusting your search term or explore other options</p>
              </div>
            )}
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-12 md:py-16 bg-white border-y">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4">How Our Roadmaps Help</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive career roadmaps provide the guidance you need at every stage of your educational and professional journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-heading font-medium mb-2">Explore Paths</h3>
                <p className="text-gray-600">
                  Browse through our curated collection of career paths to find the ones that match your interests and aspirations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-heading font-medium mb-2">Follow the Timeline</h3>
                <p className="text-gray-600">
                  Understand the chronological steps required to progress from education to professional success in your chosen field.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-heading font-medium mb-2">Access Resources</h3>
                <p className="text-gray-600">
                  Utilize our recommended resources, including books, courses, communities, and tools tailored for each career path.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold font-heading mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Select a career path to view a detailed roadmap and begin planning your educational and professional development.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
