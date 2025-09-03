
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Code, 
  Rocket, 
  Search, 
  Smartphone, 
  Zap, 
  Shield,
  CheckCircle,
  ArrowRight,
  Globe,
  ShoppingCart,
  Database,
  Palette,
  BarChart,
  Users,
  ExternalLink
} from "lucide-react";

const WebDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Websites",
      description: "Bespoke websites tailored to your brand and business requirements."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Full-featured online stores with payment processing and inventory management."
    },
    {
      icon: Database,
      title: "Content Management",
      description: "Easy-to-use CMS solutions for managing your website content."
    },
    {
      icon: Code,
      title: "React/Next.js Development",
      description: "Modern web applications built with cutting-edge JavaScript frameworks."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Design",
      description: "Create wireframes and visual designs that reflect your brand identity.",
      icon: Palette
    },
    {
      step: "02", 
      title: "Develop",
      description: "Build your website using modern technologies and best practices.",
      icon: Code
    },
    {
      step: "03",
      title: "Test",
      description: "Thorough testing across devices and browsers for optimal performance.",
      icon: Shield
    },
    {
      step: "04",
      title: "Launch",
      description: "Deploy your website and provide ongoing support and maintenance.",
      icon: Rocket
    }
  ];

  const features = [
    "SEO-optimized code and structure",
    "Lightning-fast loading times",
    "Mobile-responsive design",
    "Cross-browser compatibility",
    "Scalable architecture",
    "Security best practices",
    "Analytics integration",
    "Content management system"
  ];

  const technologies = [
    { name: "React", description: "Modern JavaScript library for building user interfaces" },
    { name: "Next.js", description: "React framework for production-ready applications" },
    { name: "TypeScript", description: "Typed JavaScript for better code quality" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid development" },
    { name: "Node.js", description: "JavaScript runtime for server-side development" },
    { name: "MongoDB", description: "NoSQL database for flexible data storage" }
  ];

  const webPortfolio = [
    {
      id: 1,
      img: '/assets/portfolio/web-development/5ghomes.webp',
      title: "5G Homes",
      link: "https://5ghighspeedinternet.co",
    },
    {
      id: 2,
      img: '/assets/portfolio/web-development/cold-creekcap.webp',
      title: "Cold Creekcap",
      link: "https://www.coldcreekcap.com",
    },
    {
      id: 3,
      img: '/assets/portfolio/web-development/think-reality.webp',
      title: "Think Reality",
      link: "https://thinkrealty.ae",
    },
    {
      id: 4,
      img: '/assets/portfolio/web-development/akash-mega-mart.webp',
      title: "Akash Mega Mart",
      link: "https://akashmegamart.com/",
    },
    {
      id: 5,
      img: '/assets/portfolio/web-development/midwam.webp',
      title: "Midwam – Immersive Experience Design Company",
      link: "https://www.midwam.com/en/about",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-retro-dark via-retro-blue to-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Crafting <span className="gradient-text">High-Performance</span> Websites That Convert
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              We build modern, fast, and beautiful websites that not only look amazing 
              but also drive results for your business. From simple landing pages to 
              complex web applications, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
                asChild
              >
                <Link to="/contact">Start Your Website Project</Link>
              </Button>
              {/* <Button 
                size="lg"
                variant="outline"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
              >
                View Portfolio
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive web development services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-retro-gray border-retro-gray hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
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
              Our <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures your website is delivered on time, 
              on budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-retro-dark border-retro-dark hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold gradient-text mb-4">{step.step}</div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-retro-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Us for Your <span className="gradient-text">Website</span>?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-neon-cyan mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
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
              <Card className="bg-retro-gray border-retro-gray">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <Zap className="w-12 h-12 text-neon-cyan mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">3x</div>
                      <div className="text-gray-400">Faster Loading</div>
                    </div>
                    <div>
                      <Search className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">95%</div>
                      <div className="text-gray-400">SEO Score</div>
                    </div>
                    <div>
                      <Smartphone className="w-12 h-12 text-neon-cyan mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-gray-400">Mobile Ready</div>
                    </div>
                    <div>
                      <Users className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-gray-400">Happy Clients</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We use modern, proven technologies to build websites that are fast, 
              secure, and scalable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-retro-gray border-retro-gray hover:border-neon-cyan transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-neon-cyan mb-3">{tech.name}</h3>
                  <p className="text-gray-400">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="section-padding bg-retro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our recent web development projects that showcase our expertise and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {webPortfolio.map((project, index) => (
              <Card key={index} className="bg-retro-dark border-retro-dark hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                  <div className="flex items-center text-white group-hover:text-neon-cyan transition-colors duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <span className="text-sm font-medium">View Project</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your <span className="gradient-text">Dream Website</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create a website that not only looks amazing but also drives real results 
            for your business. Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Start Your Website Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              asChild
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
