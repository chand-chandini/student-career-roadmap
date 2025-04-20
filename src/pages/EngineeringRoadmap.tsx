import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import RoadmapMilestones from "@/components/RoadmapMilestones";
import ResourcesList from "@/components/ResourcesList";
import SuccessStories from "@/components/SuccessStories";
import { getCareerById } from "@/data/careers";
import { engineeringTimeline, engineeringMilestones, engineeringResources } from "@/data/engineeringRoadmap";
import { ArrowLeft, BookOpen, GraduationCap, Lightbulb, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const EngineeringRoadmap = () => {
  const career = getCareerById("engineering");

  if (!career) {
    return <div>Career not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section with gradient background */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 border-b text-white">
        <div className="container py-12">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Careers
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="p-3 rounded-lg bg-white/10 shrink-0">
              {career.icon}
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">{career.title} Career Path</h1>
              <p className="text-white/90 max-w-3xl text-lg">
                Embark on an exciting journey to become a successful engineer. This roadmap will guide you through education, skills, and career advancement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Overview Cards with Hover Effects */}
      <section className="py-8 border-b bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="flex items-start gap-3 p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="p-2 rounded-lg bg-blue-500/10 shrink-0 mt-1">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Required Education</h3>
                  <p className="text-sm text-gray-600">
                    Bachelor's degree in Engineering required, with Master's or PhD recommended for specialization.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="flex items-start gap-3 p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="p-2 rounded-lg bg-blue-500/10 shrink-0 mt-1">
                  <Trophy className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Key Skills</h3>
                  <p className="text-sm text-gray-600">
                    Problem-solving, mathematical proficiency, technical knowledge, and teamwork abilities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="flex items-start gap-3 p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="p-2 rounded-lg bg-blue-500/10 shrink-0 mt-1">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Career Outlook</h3>
                  <p className="text-sm text-gray-600">
                    Positive growth outlook with diverse opportunities across industries and specializations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <h2 className="text-2xl font-heading font-semibold text-center mb-8">Success Stories</h2>
          <SuccessStories />
        </div>
      </section>
      
      {/* Main Content with Enhanced Visual Design */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="timeline" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="milestones">Milestones</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="timeline" className="space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-semibold mb-2">Engineering Career Timeline</h2>
                <p className="text-gray-600 mb-6">
                  Follow this chronological roadmap to progress from education to professional success in engineering.
                </p>
                
                <RoadmapTimeline items={engineeringTimeline} color={career.color} />
              </div>
            </TabsContent>
            
            <TabsContent value="milestones" className="space-y-6">
              <RoadmapMilestones
                title="Engineering Career Milestones"
                description="Key achievements and educational milestones to reach throughout your engineering career journey."
                milestones={engineeringMilestones}
                color={career.color}
              />
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-semibold mb-2">Engineering Resources</h2>
                <p className="text-gray-600 mb-6">
                  Valuable resources to support your engineering education and career development.
                </p>
                
                <ResourcesList resources={engineeringResources} color={career.color} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Call to Action Section with Gradient */}
      <section className="py-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-semibold mb-4">Ready to Start Your Engineering Journey?</h2>
            <p className="text-white/90 mb-8">
              Use this roadmap as your guide, but remember that every career path is unique. Adapt these recommendations to your specific interests and goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-white text-blue-600 hover:bg-blue-50 h-10 px-6 py-2 transition-colors">
                Explore Other Careers
              </Link>
              <Link to="/resources" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-1 ring-white/30 hover:bg-white/10 h-10 px-6 py-2 transition-colors">
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EngineeringRoadmap;
