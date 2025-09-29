import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Palette, 
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
  Code,
  BarChart,
  Users,
  Eye,
  Target,
  TrendingUp,
  Smartphone as MobileIcon
} from "lucide-react";

const UIDesign = () => {
  const services = [
    {
      icon: Palette,
      title: "UI Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience."
    },
    {
      icon: Eye,
      title: "UX Research",
      description: "User research and usability testing to optimize user journeys."
    },
    {
      icon: Target,
      title: "Wireframing",
      description: "Detailed wireframes and prototypes for user testing and validation."
    },
    {
      icon: Code,
      title: "Design Systems",
      description: "Comprehensive design systems for consistent brand experience."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Research",
      description: "Understand your users, business goals, and market requirements.",
      icon: Search
    },
    {
      step: "02", 
      title: "Strategy",
      description: "Develop design strategy and user experience roadmap.",
      icon: Target
    },
    {
      step: "03",
      title: "Design",
      description: "Create wireframes, prototypes, and visual designs.",
      icon: Palette
    },
    {
      step: "04",
      title: "Testing",
      description: "User testing and iteration for optimal user experience.",
      icon: Eye
    }
  ];

  const features = [
    "User-centered design approach",
    "Responsive and mobile-first design",
    "Accessibility and usability compliance",
    "Interactive prototypes and animations",
    "Design system and component libraries",
    "User research and testing",
    "Brand consistency and guidelines",
    "Performance-optimized designs"
  ];

  const technologies = [
    { name: "Figma", description: "Collaborative design tool for UI/UX design" },
    { name: "Adobe Creative Suite", description: "Professional design software for visual design" },
    { name: "Sketch", description: "Vector-based design tool for UI design" },
    { name: "InVision", description: "Prototyping and collaboration platform" },
    { name: "Principle", description: "Animation and interaction design tool" },
    { name: "Framer", description: "Advanced prototyping and design tool" }
  ];



  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-retro-dark via-retro-blue to-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Beautiful <span className="gradient-text">UI/UX Design</span> That Converts
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              We create stunning, user-centered designs that not only look amazing 
              but also provide exceptional user experiences. From wireframes to 
              final designs, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
                asChild
              >
                <Link to="/contact">Start Your Design Project</Link>
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
              Comprehensive UI/UX design services to create exceptional user experiences.
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
              Our <span className="gradient-text">Design Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures your designs are user-centered, 
              beautiful, and deliver exceptional user experience.
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
                Why Choose Us for <span className="gradient-text">UI/UX Design</span>?
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
                      <Palette className="w-12 h-12 text-neon-cyan mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">100+</div>
                      <div className="text-gray-400">Designs Created</div>
                    </div>
                    <div>
                      <Eye className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">95%</div>
                      <div className="text-gray-400">User Satisfaction</div>
                    </div>
                    <div>
                      <Target className="w-12 h-12 text-neon-cyan mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">150%</div>
                      <div className="text-gray-400">Conversion Boost</div>
                    </div>
                    <div>
                      <Users className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">30+</div>
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
              Our <span className="gradient-text">Design Tools</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We use industry-leading design tools and technologies to create 
              exceptional user experiences and beautiful interfaces.
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



      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Design?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create beautiful, user-centered designs that not only look amazing but also 
            drive real results for your business. Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Start Your Design Project <ArrowRight className="ml-2 w-5 h-5" />
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

export default UIDesign;
