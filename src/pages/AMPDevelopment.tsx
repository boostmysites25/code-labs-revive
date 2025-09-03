
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Rocket, 
  Search, 
  Smartphone, 
  Code, 
  Shield,
  CheckCircle,
  ArrowRight,
  Globe,
  ShoppingCart,
  Database,
  Palette,
  BarChart,
  Users,
  Clock,
  Award,
  TrendingUp,
  Smartphone as MobileIcon
} from "lucide-react";

const AMPDevelopment = () => {
  const services = [
    {
      icon: Zap,
      title: "AMP Page Development",
      description: "Lightning-fast AMP pages that load instantly on mobile devices."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "AMP pages optimized for search engines and better rankings."
    },
    {
      icon: MobileIcon,
      title: "Mobile-First Design",
      description: "Responsive AMP designs that work perfectly on all devices."
    },
    {
      icon: Shield,
      title: "AMP Validation",
      description: "Google AMP validation and compliance for optimal performance."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Analysis",
      description: "Analyze your current website and identify AMP optimization opportunities.",
      icon: Search
    },
    {
      step: "02", 
      title: "Design",
      description: "Create AMP-compliant designs that maintain your brand identity.",
      icon: Palette
    },
    {
      step: "03",
      title: "Development",
      description: "Build AMP pages using Google's AMP framework and best practices.",
      icon: Code
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Validate AMP compliance and deploy for improved performance.",
      icon: Rocket
    }
  ];

  const features = [
    "Lightning-fast page loading (under 1 second)",
    "Mobile-first responsive design",
    "Google AMP validation and compliance",
    "SEO optimization for better rankings",
    "Cross-platform compatibility",
    "Analytics and performance tracking",
    "Content management system integration",
    "Regular updates and maintenance"
  ];

  const technologies = [
    { name: "AMP HTML", description: "Google's AMP framework for fast-loading pages" },
    { name: "AMP CSS", description: "Optimized CSS for AMP compliance and performance" },
    { name: "AMP JavaScript", description: "Lightweight JavaScript for AMP functionality" },
    { name: "AMP Components", description: "Pre-built AMP components for common features" },
    { name: "Google Analytics", description: "Performance tracking and user behavior analysis" },
    { name: "Search Console", description: "SEO monitoring and AMP validation" }
  ];



  const ampComparison = [
    { feature: "Page Load Speed", standard: "3-8 seconds", amp: "0.5-1 second" },
    { feature: "Mobile Performance", standard: "Variable", amp: "Consistent" },
    { feature: "SEO Benefits", standard: "Standard", amp: "Enhanced" },
    { feature: "User Experience", standard: "Good", amp: "Excellent" },
    { feature: "Search Rankings", standard: "Standard", amp: "Improved" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-retro-dark via-retro-blue to-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Lightning-Fast <span className="gradient-text">AMP Pages</span> That Convert
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              We create Google AMP pages that load in under 1 second, improve your 
              search rankings, and provide an exceptional mobile user experience. 
              Speed meets performance with our AMP development expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
                asChild
              >
                <Link to="/contact">Start Your AMP Project</Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
              >
                View Portfolio
              </Button>
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
              Comprehensive AMP development services to boost your website performance and SEO.
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
              Our <span className="gradient-text">AMP Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures your AMP pages are fast, compliant, 
              and deliver exceptional user experience.
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
                Why Choose Us for <span className="gradient-text">AMP Development</span>?
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
                      <Clock className="w-12 h-12 text-neon-cyan mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">0.8s</div>
                      <div className="text-gray-400">Average Load Time</div>
                    </div>
                    <div>
                      <Award className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-gray-400">AMP Validated</div>
                    </div>
                    <div>
                      <TrendingUp className="w-12 h-12 text-neon-cyan mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">250%</div>
                      <div className="text-gray-400">Mobile Traffic</div>
                    </div>
                    <div>
                      <Users className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">30+</div>
                      <div className="text-gray-400">AMP Projects</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AMP vs Standard Comparison */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AMP vs <span className="gradient-text">Standard Pages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the performance difference that AMP pages can make for your website.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-retro-gray border-retro-gray">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-center py-4 px-6 text-neon-cyan font-semibold">Feature</th>
                        <th className="text-center py-4 px-6 text-gray-400 font-semibold">Standard Pages</th>
                        <th className="text-center py-4 px-6 text-neon-cyan font-semibold">AMP Pages</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ampComparison.map((item, index) => (
                        <tr key={index} className="border-b border-gray-600">
                          <td className="py-4 px-6 text-white font-medium">{item.feature}</td>
                          <td className="py-4 px-6 text-center text-gray-400">{item.standard}</td>
                          <td className="py-4 px-6 text-center text-neon-cyan font-medium">{item.amp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-retro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">AMP Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We use Google's AMP framework and modern technologies to build 
              lightning-fast, compliant AMP pages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-retro-dark border-retro-dark hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-neon-cyan mb-3">{tech.name}</h3>
                  <p className="text-gray-400">{tech.description}</p>
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
            Ready to <span className="gradient-text">Speed Up</span> Your Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create AMP pages that not only load lightning-fast but also 
            improve your search rankings and user experience. Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Start Your AMP Project <ArrowRight className="ml-2 w-5 h-5" />
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

export default AMPDevelopment;
