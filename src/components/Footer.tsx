
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Web Development", href: "/web-development" },
    { name: "AMP Development", href: "/amp-development" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Website Development",
    "Mobile App Development", 
    "AMP Development",
    "Custom APIs",
    "UI/UX Design",
    "AI Integration"
  ];

  return (
    <footer className="bg-retro-dark border-t border-retro-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-lg"></div>
              <span className="text-xl font-bold gradient-text">Retro Code Labs</span>
            </div>
            <p className="text-gray-400 text-sm">
              Bringing retro vibes to modern tech. We specialize in creating cutting-edge digital solutions 
              that combine nostalgic aesthetics with modern functionality.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-neon-cyan">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-neon-cyan">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-neon-cyan">
                <Linkedin size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-neon-cyan">
                <Instagram size={18} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-neon-cyan transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail size={16} />
                <span>hello@retrocodelabs.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-white">Newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-retro-gray border-retro-gray text-white placeholder:text-gray-400"
                />
                <Button 
                  size="sm" 
                  className="bg-neon-cyan text-black hover:bg-neon-cyan/80"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-retro-gray mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Retro Code Labs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-neon-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-neon-cyan text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
