import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Zap, 
  Target, 
  Code, 
  Database, 
  Shield,
  CheckCircle,
  Star,
  TrendingUp,
  ArrowRight,
  Bot
} from "lucide-react";
import aiPortfolio1 from "@/assets/ai-portfolio-1.jpg";

const AIIntegration = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Machine Learning Models",
      description: "Custom ML models for predictive analytics, classification, and pattern recognition tailored to your business needs."
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI Chatbots & Assistants", 
      description: "Intelligent conversational AI powered by natural language processing for customer support and automation."
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data Analytics & Insights",
      description: "Advanced data processing and visualization tools to extract actionable insights from your business data."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Recommendation Systems",
      description: "Personalized recommendation engines to improve user engagement and drive business growth."
    }
  ];

  const process = [
    {
      step: "01",
      title: "AI Strategy & Assessment",
      description: "Analyzing your business needs and identifying AI opportunities for maximum impact.",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: "02", 
      title: "Data Preparation",
      description: "Cleaning, structuring, and preparing your data for optimal AI model performance.",
      icon: <Database className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Model Development",
      description: "Building and training custom AI models using cutting-edge algorithms and frameworks.",
      icon: <Brain className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Integration & Deployment",
      description: "Seamlessly integrating AI solutions into your existing systems with ongoing support.",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const features = [
    "Custom Machine Learning Models",
    "Natural Language Processing", 
    "Computer Vision Solutions",
    "Predictive Analytics",
    "AI-Powered Chatbots",
    "Recommendation Engines",
    "Data Visualization",
    "Model Monitoring & Maintenance"
  ];

  const technologies = [
    "TensorFlow",
    "PyTorch", 
    "OpenAI GPT",
    "Scikit-learn",
    "Pandas",
    "Docker"
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "AI-powered chatbot reduced response time by 80% and improved customer satisfaction scores.",
      image: aiPortfolio1,
      results: ["80% faster response time", "95% customer satisfaction", "60% cost reduction"]
    },
    {
      title: "Predictive Analytics Platform",
      description: "Machine learning system for demand forecasting and inventory optimization in retail.",
      image: aiPortfolio1,
      results: ["25% inventory reduction", "40% demand accuracy", "15% revenue increase"]
    }
  ];

  return (
    <div className="min-h-screen bg-retro-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Integration & Solutions
            </h1>
            <p className="text-xl text-retro-light mb-8 max-w-2xl mx-auto">
              Transform your business with intelligent AI solutions that automate processes, enhance decision-making, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-white">
                <Link to="/contact" className="flex items-center">
                  Start AI Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View AI Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI & Machine Learning Services
            </h2>
            <p className="text-retro-light max-w-2xl mx-auto">
              From intelligent automation to predictive analytics, we build AI solutions that solve real business problems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-retro-darker border-retro-border hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-retro-light">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-retro-darker">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our AI Development Process
            </h2>
            <p className="text-retro-light max-w-2xl mx-auto">
              A systematic approach to delivering AI solutions that drive measurable business results and long-term value.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-retro-dark border-retro-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-4">{step.step}</div>
                  <div className="mb-4 flex justify-center text-primary">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-retro-light">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-retro-light mb-8">
                We combine deep technical expertise with business acumen to deliver AI solutions that create tangible value and competitive advantages.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-retro-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <Card key={index} className="bg-retro-darker border-retro-border text-center p-4">
                  <div className="text-white font-semibold">{tech}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-retro-darker">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI Success Stories
            </h2>
            <p className="text-retro-light max-w-2xl mx-auto">
              Real-world AI implementations that have transformed businesses and delivered exceptional ROI.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-retro-dark border-retro-border overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-retro-light mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-retro-light">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-retro-light text-lg mb-8 max-w-2xl mx-auto">
            Let's explore how AI can transform your business processes and unlock new opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white">
              <Link to="/contact">Schedule AI Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIIntegration;