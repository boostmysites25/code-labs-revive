
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  CheckCircle,
  Globe,
  ShoppingCart,
  BarChart,
  Lock
} from "lucide-react";
import SmoothScrollAnimation from "@/components/SmoothScrollAnimation";
import servicesHero from "@/assets/services-hero.jpg";
import webDevService from "@/assets/web-development-service.jpg";
import mobileDevService from "@/assets/mobile-development-service.jpg";
import ampDevService from "@/assets/amp-development-service.jpg";
import apiDevService from "@/assets/api-development-service.jpg";
import uiuxService from "@/assets/uiux-design-service.jpg";
import aiService from "@/assets/ai-integration-service.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

// Custom branded service icons
import webDevIcon from "@/assets/icons/web-development-icon.webp";
import mobileDevIcon from "@/assets/icons/mobile-development-icon.webp";
import ampDevIcon from "@/assets/icons/amp-development-icon.webp";
import apiDevIcon from "@/assets/icons/api-development-icon.webp";
import uiuxDevIcon from "@/assets/icons/uiux-design-icon.webp";
import aiIntegrationIcon from "@/assets/icons/ai-integration-icon.webp";

const Services = () => {
  const services = [
    {
      icon: webDevIcon,
      title: "Website Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: [
        "Responsive Design",
        "SEO Optimization", 
        "Modern Tech Stack",
        "Fast Loading Speed",
        "Cross-browser Compatible"
      ],
      link: "/web-development",
      color: "from-blue-500 to-cyan-400",
      image: webDevService
    },
    {
      icon: mobileDevIcon,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS & Android Native",
        "React Native",
        "Flutter Development",
        "App Store Deployment",
        "Push Notifications"
      ],
      link: "/mobile-development",
      color: "from-purple-500 to-pink-400",
      image: mobileDevService
    },
    {
      icon: ampDevIcon,
      title: "AMP Development",
      description: "Lightning-fast AMP pages optimized for mobile performance and search engine visibility.",
      features: [
        "Mobile-First Design",
        "Lightning Fast Loading",
        "SEO Optimized",
        "Google AMP Validation",
        "Analytics Integration"
      ],
      link: "/amp-development",
      color: "from-yellow-500 to-orange-400",
      image: ampDevService
    },
    {
      icon: apiDevIcon,
      title: "Custom APIs",
      description: "Robust and scalable API solutions to power your applications and integrations.",
      features: [
        "RESTful APIs",
        "GraphQL Integration",
        "Database Design",
        "Authentication & Security",
        "Documentation"
      ],
      link: "/ai-integration",
      color: "from-green-500 to-emerald-400",
      image: apiDevService
    },
    {
      icon: uiuxDevIcon,
      title: "UI/UX Design",
      description: "Beautiful and intuitive design solutions that combine retro aesthetics with modern usability.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems"
      ],
      link: "/ui-design",
      color: "from-red-500 to-pink-400",
      image: uiuxService
    },
    {
      icon: aiIntegrationIcon,
      title: "AI Integration",
      description: "Cutting-edge AI solutions to automate processes and enhance user interactions.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Chatbot Development",
        "AI Analytics"
      ],
      link: "/ai-integration",
      color: "from-indigo-500 to-purple-400",
      image: aiService
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We understand your goals, target audience, and technical requirements."
    },
    {
      step: "02", 
      title: "Design",
      description: "Create wireframes, prototypes, and visual designs that align with your brand."
    },
    {
      step: "03",
      title: "Develop",
      description: "Build your solution using modern technologies and best practices."
    },
    {
      step: "04",
      title: "Deploy",
      description: "Launch your project with thorough testing and ongoing support."
    }
  ];

  const industries = [
    { icon: Globe, name: "Technology", description: "SaaS platforms and tech startups" },
    { icon: ShoppingCart, name: "E-commerce", description: "Online stores and marketplaces" },
    { icon: BarChart, name: "Finance", description: "Fintech and financial services" },
    { icon: Lock, name: "Healthcare", description: "Medical and wellness platforms" }
  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesHero})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <SmoothScrollAnimation animation="fade-in" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
            </SmoothScrollAnimation>
            <SmoothScrollAnimation animation="slide-up" delay={400}>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive digital solutions that blend retro aesthetics with modern technology. 
                From web development to AI integration, we've got you covered.
              </p>
            </SmoothScrollAnimation>
            <SmoothScrollAnimation animation="scale" delay={600}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300 hover-lift btn-pulse"
                asChild
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </SmoothScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <SmoothScrollAnimation 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
                staggerDelay={index * 50}
              >
                <Card className="bg-retro-gray border-brand-orange hover:border-brand-red transition-all duration-300 group card-hover overflow-hidden hover-lift">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-retro-gray/90 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden hover-rotate">
                      <img src={service.icon} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-neon-cyan mr-2 flex-shrink-0 hover-scale" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="orange"
                      className="w-full hover-lift transition-all duration-300"
                      asChild
                    >
                      <Link to={service.link} className="link-underline">
                        Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </SmoothScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-retro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-retro-dark border-brand-orange hover:border-brand-red transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold gradient-text mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-retro-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We work with businesses across various industries, bringing our expertise 
              to solve unique challenges in each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-retro-gray border-brand-orange hover:border-brand-red transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-pink to-neon-cyan rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="gradient-text">Retro Code Labs</span>?
              </h2>
              <div className="space-y-4">
                {[
                  "Expert team with 5+ years of experience",
                  "Modern technologies and best practices",
                  "Retro-modern design aesthetic",
                  "Fast delivery and ongoing support",
                  "Transparent communication throughout",
                  "Competitive pricing and flexible packages"
                ].map((reason, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-neon-cyan mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{reason}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src={teamCollaboration}
                alt="Development team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your <span className="gradient-text">Digital Presence</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project requirements and create a solution that perfectly 
            fits your business needs and aesthetic preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
              asChild
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              asChild
            >
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
