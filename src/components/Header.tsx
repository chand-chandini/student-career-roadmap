
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-heading">
            Career Roadmap
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-sm hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium text-sm hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/resources" className="font-medium text-sm hover:text-primary transition-colors">
            Resources
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">Login</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
