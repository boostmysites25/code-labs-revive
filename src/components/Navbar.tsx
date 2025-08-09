
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import QuoteModal from "./QuoteModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/90 border-b border-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/cfd9d4ea-f4ca-4c8e-a440-109e23f1b236.png" 
              alt="Retro Code Labs" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-brand-orange"
                    : "text-gray-300 hover:text-brand-orange"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold hover:from-brand-red hover:to-brand-orange transition-all duration-300"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-brand-gray">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-brand-orange bg-brand-gray"
                    : "text-gray-300 hover:text-brand-orange hover:bg-brand-gray"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold"
                onClick={() => {
                  setIsQuoteModalOpen(true);
                  setIsOpen(false);
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
