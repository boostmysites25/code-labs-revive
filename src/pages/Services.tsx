
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, 
  Smartphone, 
  Zap, 
  Database, 
  Palette, 
  Brain,
  ArrowRight,
  CheckCircle,
  Globe,
  ShoppingCart,
  BarChart,
  Lock
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
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
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS & Android Native",
        "React Native",
        "Flutter Development",
        "App Store Deployment",
        "Push Notifications"
      ],
      link: "/contact",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Zap,
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
      color: "from-yellow-500 to-orange-400"
    },
    {
      icon: Database,
      title: "Custom APIs",
      description: "Robust and scalable API solutions to power your applications and integrations.",
      features: [
        "RESTful APIs",
        "GraphQL Integration",
        "Database Design",
        "Authentication & Security",
        "Documentation"
      ],
      link: "/contact",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      description: "Beautiful and intuitive design solutions that combine retro aesthetics with modern usability.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems"
      ],
      link: "/contact",
      color: "from-red-500 to-pink-400"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Cutting-edge AI solutions to automate processes and enhance user interactions.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Chatbot Development",
        "AI Analytics"
      ],
      link: "/contact",
      color: "from-indigo-500 to-purple-400"
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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-retro-dark via-retro-blue to-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              Comprehensive digital solutions that blend retro aesthetics with modern technology. 
              From web development to AI integration, we've got you covered.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300 animate-fade-in"
              asChild
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-retro-gray border-retro-gray hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-neon-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline"
                    className="w-full border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
                    asChild
                  >
                    <Link to={service.link}>
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
              <Card key={index} className="bg-retro-dark border-retro-dark hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
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
              <Card key={index} className="bg-retro-gray border-retro-gray hover:border-neon-pink transition-all duration-300 group animate-fade-in">
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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="Development team"
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
