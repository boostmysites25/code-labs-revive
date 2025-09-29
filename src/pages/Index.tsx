
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Code, 
  Smartphone, 
  Zap, 
  Brain, 
  Star, 
  ArrowRight,
  CheckCircle,
  Users,
  Trophy,
  Rocket,
  User
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import webPortfolio1 from "@/assets/web-portfolio-1.jpg";
import webPortfolio2 from "@/assets/web-portfolio-2.jpg";
import mobilePortfolio1 from "@/assets/mobile-portfolio-1.jpg";
import mobilePortfolio2 from "@/assets/mobile-portfolio-2.jpg";
import aiPortfolio1 from "@/assets/ai-portfolio-1.jpg";

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices for optimal performance."
    },
    {
      icon: Smartphone,
      title: "App Development", 
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      icon: Zap,
      title: "AMP Solutions",
      description: "Lightning-fast AMP pages optimized for mobile performance and search engine visibility."
    },
    {
      icon: Brain,
      title: "AI Integrations",
      description: "Cutting-edge AI solutions to automate processes and enhance user interactions."
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with advanced features",
      tech: "React, Node.js, Stripe",
      image: webPortfolio1
    },
    {
      title: "Corporate Website",
      description: "Professional business website with modern design",
      tech: "Next.js, Tailwind CSS",
      image: webPortfolio2
    },
    {
      title: "Mobile Banking App",
      description: "Secure financial application with biometric auth",
      tech: "React Native, Firebase",
      image: mobilePortfolio1
    },
    {
      title: "E-Commerce Mobile App",
      description: "Shopping app with seamless user experience",
      tech: "Flutter, Firebase",
      image: mobilePortfolio2
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time data visualization with ML insights",
      tech: "Next.js, Python, TensorFlow",
      image: aiPortfolio1
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      company: "TechVantage Solutions Pvt Ltd",
      role: "CEO & Founder",
      content: "Working with Retro Code Labs was a game-changer for our startup. They understood our vision perfectly and delivered a website that perfectly captures our brand's retro-modern aesthetic. The team's attention to detail and technical expertise exceeded our expectations.",
      rating: 5
    },
    {
      name: "Arjun Patel",
      company: "Digital Dynamics India",
      role: "Chief Technology Officer",
      content: "As a tech company, we needed a partner who could keep up with our fast-paced environment. Retro Code Labs not only delivered cutting-edge solutions but also brought a unique retro-inspired design that sets us apart from competitors. Highly recommended!",
      rating: 5
    },
    {
      name: "Anjali Reddy",
      company: "GrowthFirst Technologies",
      role: "Marketing Director",
      content: "The AMP website Retro Code Labs built for us has been incredible for our mobile marketing campaigns. Our page load speed improved dramatically, and we've seen a 300% increase in mobile conversions. Their retro-modern approach is truly innovative.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-retro-dark overflow-hidden">
        {/* Floating Tooltips */}
        <div className="absolute top-20 left-10 md:left-20 animate-fade-in opacity-90">
          <div className="bg-gradient-to-r from-brand-orange to-brand-red text-white p-4 rounded-lg shadow-lg max-w-xs relative">
            <p className="text-sm font-medium">"We need an AI-powered mobile app that can handle real-time data processing"</p>
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-gradient-to-r from-brand-orange to-brand-red transform rotate-45"></div>
          </div>
        </div>

        <div className="absolute top-32 right-10 md:right-20 animate-fade-in opacity-90" style={{ animationDelay: '0.5s' }}>
          <div className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black p-4 rounded-lg shadow-lg max-w-xs relative">
            <p className="text-sm font-medium">"Can you build a modern e-commerce platform with seamless UX in 2 weeks?"</p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-gradient-to-r from-neon-cyan to-neon-pink transform rotate-45"></div>
          </div>
        </div>

        <div className="absolute bottom-40 left-16 md:left-32 animate-fade-in opacity-90" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg shadow-lg max-w-xs relative">
            <p className="text-sm font-medium">"Our startup needs a scalable web app with AI integrations and modern design"</p>
            <div className="absolute -bottom-2 left-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 transform rotate-45"></div>
          </div>
        </div>

        <div className="absolute bottom-32 right-16 md:right-32 animate-fade-in opacity-90" style={{ animationDelay: '1.5s' }}>
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-lg shadow-lg max-w-xs relative">
            <p className="text-sm font-medium">"How quickly can you develop a custom CRM with analytics dashboard?"</p>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 transform rotate-45"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-6 animate-fade-in">
              <span className="text-lg font-medium text-neon-cyan tracking-wider uppercase">Digital Innovation Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in leading-tight">
              We Develop{" "}
              <span className="block gradient-text">
                Retro-Modern Apps
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in max-w-3xl mx-auto leading-relaxed">
              We create cutting-edge digital solutions that blend nostalgic aesthetics 
              with modern functionality and AI-powered features.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold hover:from-brand-red hover:to-brand-orange transition-all duration-300 px-8 py-4 text-lg shadow-2xl hover:shadow-brand-orange/25 hover:scale-105"
                asChild
              >
                <Link to="/contact">Book a Call</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg hover:scale-105"
                asChild
              >
                <Link to="/services">All Projects</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-brand-orange rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world.
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

      {/* Portfolio Section */}
      <section className="section-padding bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore some of our recent work and see how we bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project, index) => (
              <Card key={index} className="bg-retro-gray border-retro-gray overflow-hidden group hover:border-neon-cyan transition-all duration-300 animate-fade-in">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-3">{project.description}</p>
                  <div className="text-sm text-neon-cyan">{project.tech}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
              asChild
            >
              <Link to="/services">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-retro-gray border-retro-gray hover:border-neon-cyan transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-neon-cyan text-neon-cyan" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-300 rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-neon-cyan">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-orange/10 to-brand-red/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Build Something Cool</span> Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and turn your ideas into reality. 
            Get in touch with our team today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold hover:from-brand-red hover:to-brand-orange transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Get Started Today <Rocket className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
