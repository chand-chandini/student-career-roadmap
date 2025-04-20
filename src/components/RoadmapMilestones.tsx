
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

interface Milestone {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
}

interface RoadmapMilestonesProps {
  title: string;
  description: string;
  milestones: Milestone[];
  color: string;
}

const RoadmapMilestones = ({ title, description, milestones, color }: RoadmapMilestonesProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {milestones.map((milestone) => (
          <div key={milestone.id} className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <div className={cn("h-2", color)} />
            <div className="p-5">
              <h3 className="font-heading font-medium text-lg mb-2">{milestone.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{milestone.description}</p>
              
              <Separator className="my-4" />
              
              <h4 className="font-medium text-sm mb-2">Key Points:</h4>
              <ul className="space-y-2">
                {milestone.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className={cn("rounded-full w-1.5 h-1.5 mt-1.5", color)} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapMilestones;
