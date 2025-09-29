
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone } from "lucide-react";
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
    <nav>
      {/* Contact Info Bar */}
      <div className="fixed top-0 left-0 w-full bg-brand-orange/10 border-b border-brand-orange/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:Contact@retrocodelabs.in" 
                className="flex items-center space-x-2 text-gray-300 hover:text-brand-orange transition-colors duration-300"
              >
                <Mail size={14} />
                <span>Contact@retrocodelabs.in</span>
              </a>
              <a 
                href="https://wa.me/918309836039" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-brand-orange transition-colors duration-300"
              >
                <Phone size={14} />
                <span>+91 8309836039</span>
              </a>
            </div>
            <div className="hidden sm:block text-gray-400">
              Mon-Fri: 9AM - 6PM
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
        <div 
          className="fixed top-8 left-0 w-full h-16 z-50 backdrop-blur-md bg-black/90 border-b border-brand-gray transition-all duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center hover-scale">
                <img 
                  src="/lovable-uploads/cfd9d4ea-f4ca-4c8e-a440-109e23f1b236.png" 
                  alt="Retro Code Labs" 
                  className="h-10 w-auto transition-all duration-300 hover:brightness-110"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 link-underline ${
                      isActive(item.href)
                        ? "text-brand-orange"
                        : "text-gray-300 hover:text-brand-orange hover-scale"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  className="bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold hover:from-brand-red hover:to-brand-orange transition-all duration-300 hover-lift btn-pulse"
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
                  className="text-gray-300 hover-rotate"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </div>
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
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 link-underline ${
                  isActive(item.href)
                    ? "text-brand-orange bg-brand-gray"
                    : "text-gray-300 hover:text-brand-orange hover:bg-brand-gray hover-scale"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold hover-lift"
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
