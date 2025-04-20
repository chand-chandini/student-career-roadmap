
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "Book" | "Course" | "Website" | "Tool" | "Community";
  url: string;
}

interface ResourcesListProps {
  resources: Resource[];
  color: string;
}

const ResourcesList = ({ resources, color }: ResourcesListProps) => {
  // Group resources by type
  const groupedResources = resources.reduce((acc, resource) => {
    if (!acc[resource.type]) {
      acc[resource.type] = [];
    }
    acc[resource.type].push(resource);
    return acc;
  }, {} as Record<string, Resource[]>);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Book":
        return "📚";
      case "Course":
        return "🎓";
      case "Website":
        return "🌐";
      case "Tool":
        return "🛠️";
      case "Community":
        return "👥";
      default:
        return "📌";
    }
  };

  return (
    <div className="space-y-8">
      {Object.entries(groupedResources).map(([type, items]) => (
        <div key={type} className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">{getTypeIcon(type)}</span>
            <h3 className="font-heading font-semibold text-lg">{type}s</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg border p-4 shadow-sm">
                <h4 className="font-medium mb-1">{resource.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center text-sm font-medium gap-1.5 hover:underline",
                    color.replace("bg-", "text-")
                  )}
                >
                  Visit Resource <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourcesList;
