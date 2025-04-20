
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface CareerCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  path: string;
}

const CareerCard = ({ title, description, icon, color, path }: CareerCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-all">
      <div className={`h-2 ${color}`} />
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
            {icon}
          </div>
        </div>
        <CardTitle className="font-heading mt-4">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to={path}>
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
            Explore Roadmap
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CareerCard;
