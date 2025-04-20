
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  duration: string;
}

interface RoadmapTimelineProps {
  items: TimelineItem[];
  color: string;
}

const RoadmapTimeline = ({ items, color }: RoadmapTimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.id} className="relative pl-12">
            {/* Timeline Dot */}
            <div className={cn(
              "absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-white font-medium",
              color
            )}>
              {index + 1}
            </div>

            <div className="bg-white rounded-lg border p-4 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="font-heading font-medium text-lg">{item.title}</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                  {item.duration}
                </span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapTimeline;
