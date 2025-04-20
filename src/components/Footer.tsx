
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Career Roadmap</h3>
            <p className="text-sm text-gray-600 mb-4">
              Helping students navigate their career paths with comprehensive roadmaps and resources.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Career Paths</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/roadmap/engineering" className="text-sm text-gray-600 hover:text-primary transition-colors">Engineering</Link>
              </li>
              <li>
                <Link to="/roadmap/medicine" className="text-sm text-gray-600 hover:text-primary transition-colors">Medicine</Link>
              </li>
              <li>
                <Link to="/roadmap/law" className="text-sm text-gray-600 hover:text-primary transition-colors">Law</Link>
              </li>
              <li>
                <Link to="/roadmap/government" className="text-sm text-gray-600 hover:text-primary transition-colors">Government</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-sm text-gray-600 hover:text-primary transition-colors">Learning Resources</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-primary transition-colors">Career Blog</Link>
              </li>
              <li>
                <Link to="/tools" className="text-sm text-gray-600 hover:text-primary transition-colors">Career Tools</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@careerroadmap.com" className="text-sm text-gray-600 hover:text-primary transition-colors">info@careerroadmap.com</a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">Contact Form</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-primary transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2025 Career Roadmap Navigator. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-primary">Terms</a>
            <a href="#" className="text-gray-600 hover:text-primary">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
