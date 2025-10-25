import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import SmoothScrollAnimation from "@/components/SmoothScrollAnimation";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Join Our Team", href: "https://forms.gle/DaDG5HiA2grfPZeT7" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Website Development", link: "/web-development" },
    { name: "Mobile App Development", link: "/mobile-development" }, 
    { name: "AMP Development", link: "/amp-development" },
    { name: "Custom APIs", link: "/ai-integration" },
    { name: "UI/UX Design", link: "/ui-design" },
    { name: "AI Integration", link: "/ai-integration" }
  ];

  return (
    <footer className="bg-black border-t border-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <SmoothScrollAnimation animation="fade-in" delay={100}>
            <div className="space-y-4">
              <img
                src="/lovable-uploads/cfd9d4ea-f4ca-4c8e-a440-109e23f1b236.png"
                alt="Retro Code Labs"
                className="h-8 w-auto hover-scale transition-all duration-300"
              />
              <p className="text-gray-400 text-sm">
                From Vision to Code, We Develop it All. We specialize in creating
                cutting-edge digital solutions that combine innovative design with
                powerful functionality.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1K4X6EY6e4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-lift"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-brand-orange transition-all duration-300 hover-rotate"
                  >
                    <Facebook size={18} />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/company/retrocode-labs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-lift"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-brand-orange transition-all duration-300 hover-rotate"
                  >
                    <Linkedin size={18} />
                  </Button>
                </a>
                <a
                  href="https://www.instagram.com/retrocode_labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-lift"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-brand-orange transition-all duration-300 hover-rotate"
                  >
                    <Instagram size={18} />
                  </Button>
                </a>
              </div>
            </div>
          </SmoothScrollAnimation>

          {/* Quick Links */}
          <SmoothScrollAnimation animation="slide-up" delay={200}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-brand-orange transition-all duration-300 text-sm link-underline hover-scale"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SmoothScrollAnimation>

          {/* Services */}
          <SmoothScrollAnimation animation="slide-up" delay={300}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.link}
                      className="text-gray-400 hover:text-brand-orange transition-all duration-300 text-sm link-underline hover-scale"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SmoothScrollAnimation>

          {/* Contact & Newsletter */}
          <SmoothScrollAnimation animation="slide-up" delay={400}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:Contact@retrocodelabs.in" 
                  className="flex items-center space-x-2 text-gray-400 text-sm hover:text-brand-orange transition-colors duration-300 hover-scale"
                >
                  <Mail size={16} className="hover-rotate" />
                  <span className="link-underline">Contact@retrocodelabs.in</span>
                </a>
                <a 
                  href="https://wa.me/918309836039" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 text-sm hover:text-brand-orange transition-colors duration-300 hover-scale"
                >
                  <Phone size={16} className="hover-rotate" />
                  <span className="link-underline">+91 8309836039 (WhatsApp)</span>
                </a>
                <a 
                  href="https://maps.google.com/?q=PlotNo.80P,BlockB,KVRValley,Mallampet,Bachupally,K.VRangareddy,Quthbullapur,Hyderabad,Telangana,500043" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-gray-400 text-sm hover:text-brand-orange transition-colors duration-300 hover-scale"
                >
                  <MapPin size={16} className="min-w-4 hover-rotate" />
                  <span className="link-underline">Plot No.80P, Block B, KVR Valley, Mallampet, Bachupally K.VRangareddy, Quthbullapur, Hyderabad, Telangana 500043</span>
                </a>
              </div>
            </div>
          </SmoothScrollAnimation>
        </div>

        <SmoothScrollAnimation animation="fade-in" delay={500}>
          <div className="border-t border-brand-gray mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Retro Code Labs. All rights reserved.
              </p>
            </div>
          </div>
        </SmoothScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;
