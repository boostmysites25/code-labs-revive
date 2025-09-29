import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Brain, 
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
  Cpu,
  Network,
  TrendingUp,
  Smartphone as MobileIcon
} from "lucide-react";

const AIIntegration = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Custom ML models trained on your data for predictive analytics and insights."
    },
    {
      icon: Cpu,
      title: "Natural Language Processing",
      description: "AI-powered text analysis, chatbots, and language understanding systems."
    },
    {
      icon: Network,
      title: "Computer Vision",
      description: "Image and video analysis for automation and quality control."
    },
    {
      icon: BarChart,
      title: "AI Analytics",
      description: "Intelligent data analysis and business intelligence solutions."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Analyze your business needs and identify AI integration opportunities.",
      icon: Search
    },
    {
      step: "02", 
      title: "Strategy",
      description: "Develop a comprehensive AI implementation strategy and roadmap.",
      icon: Brain
    },
    {
      step: "03",
      title: "Development",
      description: "Build and integrate AI solutions using cutting-edge technologies.",
      icon: Cpu
    },
    {
      step: "04",
      title: "Deployment",
      description: "Deploy AI solutions and provide ongoing optimization and support.",
      icon: Rocket
    }
  ];

  const features = [
    "Custom machine learning models for your business",
    "Natural language processing and chatbot development",
    "Computer vision and image analysis solutions",
    "Predictive analytics and forecasting",
    "Real-time data processing and insights",
    "Scalable AI infrastructure and deployment",
    "Continuous learning and model optimization",
    "24/7 monitoring and support"
  ];

  const technologies = [
    { name: "TensorFlow", description: "Open-source machine learning framework for AI development" },
    { name: "PyTorch", description: "Deep learning framework for research and production" },
    { name: "OpenAI GPT", description: "Advanced language models for NLP applications" },
    { name: "Computer Vision", description: "Image and video analysis using AI algorithms" },
    { name: "AWS AI Services", description: "Cloud-based AI services for scalable solutions" },
    { name: "Azure ML", description: "Microsoft's machine learning platform for enterprise AI" }
  ];



  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-retro-dark via-retro-blue to-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Transform Your Business with <span className="gradient-text">AI Integration</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              We integrate cutting-edge AI solutions that automate processes, 
              provide intelligent insights, and give your business a competitive edge. 
              From chatbots to predictive analytics, we make AI work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
                asChild
              >
                <Link to="/contact">Start Your AI Project</Link>
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
              Comprehensive AI integration services to automate and optimize your business processes.
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
              Our <span className="gradient-text">AI Integration Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures your AI solutions are properly integrated, 
              optimized, and deliver measurable business value.
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
                Why Choose Us for <span className="gradient-text">AI Integration</span>?
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
                      <Brain className="w-12 h-12 text-neon-cyan mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-gray-400">AI Models Built</div>
                    </div>
                    <div>
                      <TrendingUp className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">300%</div>
                      <div className="text-gray-400">Performance Boost</div>
                    </div>
                    <div>
                      <Cpu className="w-12 h-12 text-neon-cyan mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-gray-400">AI Monitoring</div>
                    </div>
                    <div>
                      <Users className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">25+</div>
                      <div className="text-gray-400">AI Projects</div>
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
              Our <span className="gradient-text">AI Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We use cutting-edge AI technologies and frameworks to build 
              intelligent solutions that scale with your business.
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
            Ready to <span className="gradient-text">Automate</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's integrate AI solutions that not only streamline your operations but also 
            provide intelligent insights for better decision-making. Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Start Your AI Project <ArrowRight className="ml-2 w-5 h-5" />
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

export default AIIntegration;