import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Zap, 
  Users, 
  Code, 
  Palette, 
  Shield,
  CheckCircle,
  Star,
  Clock,
  ArrowRight,
  Play
} from "lucide-react";
import mobilePortfolio1 from "@/assets/mobile-portfolio-1.jpg";
import mobilePortfolio2 from "@/assets/mobile-portfolio-2.jpg";

const MobileDevelopment = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Native App Development",
      description: "High-performance native apps for iOS and Android platforms using Swift, Kotlin, and React Native."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Cross-Platform Development", 
      description: "Cost-effective cross-platform solutions using Flutter and React Native for faster deployment."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces optimized for mobile user experience and accessibility."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "App Security",
      description: "Comprehensive security implementation including encryption, authentication, and data protection."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your app requirements, target audience, and business objectives.",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes for user testing.",
      icon: <Palette className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Development",
      description: "Building your app with clean code, best practices, and regular progress updates.",
      icon: <Code className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Comprehensive testing, app store submission, and successful deployment.",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  const features = [
    "Native iOS & Android Development",
    "Cross-Platform Solutions", 
    "UI/UX Design",
    "App Store Optimization",
    "Push Notifications",
    "Offline Functionality",
    "Third-party Integrations",
    "Analytics Implementation"
  ];

  const technologies = [
    "React Native",
    "Flutter", 
    "Swift",
    "Kotlin",
    "Firebase",
    "AWS Mobile"
  ];

  const caseStudies = [
    {
      title: "E-Commerce Mobile App",
      client: "RetailTech Solutions",
      description: "Full-featured shopping app with payment integration, product catalog, and user reviews.",
      image: mobilePortfolio2,
      results: ["300% increase in mobile sales", "4.8 star rating", "50K+ downloads"]
    },
    {
      title: "Social Networking App",
      client: "ConnectHub",
      description: "Social platform with real-time messaging, content sharing, and community features.",
      image: mobilePortfolio1,
      results: ["100K+ active users", "95% user retention", "Featured by Apple"]
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
              Mobile App Development
            </h1>
            <p className="text-xl text-retro-light mb-8 max-w-2xl mx-auto">
              Create stunning mobile applications that engage users and drive business growth with our expert development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-white">
                <Link to="/contact" className="flex items-center">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Portfolio
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
              Mobile Development Services
            </h2>
            <p className="text-retro-light max-w-2xl mx-auto">
              From native iOS and Android apps to cross-platform solutions, we deliver mobile experiences that users love.
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
              Our Development Process
            </h2>
            <p className="text-retro-light max-w-2xl mx-auto">
              A proven methodology that ensures your mobile app is delivered on time, within budget, and exceeds expectations.
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
                Why Choose Our Mobile Development?
              </h2>
              <p className="text-retro-light mb-8">
                We combine technical expertise with creative design to build mobile apps that not only function perfectly but also provide exceptional user experiences.
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

      {/* Case Studies */}
      <section className="py-20 px-4 bg-retro-darker">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-retro-light max-w-2xl mx-auto">
              See how we've helped businesses transform their mobile presence and achieve remarkable results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-retro-dark border-retro-border overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary mb-2">{study.client}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                  <p className="text-retro-light mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <Star className="h-4 w-4 text-primary mr-2" />
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
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-retro-light text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your mobile app idea and create something amazing together. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white">
              <Link to="/contact">Get Free Consultation</Link>
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

export default MobileDevelopment;