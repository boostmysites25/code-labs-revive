
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
      <section className="relative pt-32 pb-32 section-padding bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Modern tech workspace with coding and development setup"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/98 to-brand-dark/95"></div>
          
          {/* Electric Grid Overlay */}
          <div className="absolute inset-0 opacity-40">
            <div 
              className="w-full h-full animate-pulse"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                animation: 'electric-grid 3s ease-in-out infinite alternate'
              }}
            />
          </div>
        </div>

        {/* Moving Stars and Electric Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Moving Stars */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `move-star-${i % 4} ${8 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <div className="relative">
                <div 
                  className={`w-2 h-2 ${
                    i % 4 === 0 ? 'bg-neon-cyan shadow-[0_0_15px_#00ffff]' : 
                    i % 4 === 1 ? 'bg-brand-orange shadow-[0_0_15px_#ff6b35]' : 
                    i % 4 === 2 ? 'bg-neon-pink shadow-[0_0_15px_#ff007f]' :
                    'bg-white shadow-[0_0_15px_#ffffff]'
                  } rounded-full animate-pulse`}
                />
                {/* Star rays */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
                  <div className="absolute -top-1 left-1/2 w-0.5 h-4 bg-current transform -translate-x-1/2 opacity-80" />
                  <div className="absolute top-1/2 -left-1 w-4 h-0.5 bg-current transform -translate-y-1/2 opacity-80" />
                </div>
              </div>
            </div>
          ))}

          {/* Electric Particles */}
          {[...Array(40)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `${
                  i % 3 === 0 ? '#00ffff' : 
                  i % 3 === 1 ? '#ff6b35' : 
                  '#ff007f'
                }`,
                boxShadow: `0 0 10px currentColor`,
                animation: `electric-particle ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}

          {/* Electric Lightning Streaks */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={`lightning-${i}`}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-60"
                style={{
                  top: `${20 + i * 30}%`,
                  left: `-20%`,
                  width: '140%',
                  transform: `rotate(${-15 + i * 10}deg)`,
                  animation: `lightning-flash ${3 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 1.5}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              <span className="block mb-4">Bringing</span>
              <span className="block gradient-text electric-text mb-4">
                Retro Vibes
              </span>
              <span className="block">to</span>
              <span className="block gradient-text electric-text">
                Modern Tech
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in">
              We create cutting-edge digital solutions that blend nostalgic aesthetics 
              with modern functionality. From web development to AI integrations, 
              we're your partners in digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-orange to-brand-red text-white font-bold hover:from-brand-red hover:to-brand-orange transition-all duration-300 shadow-2xl hover:shadow-brand-orange/50 hover:scale-110 border border-brand-orange/50 px-8 py-4 text-lg electric-button"
                asChild
              >
                <Link to="/contact">⚡ Start Your Project</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-xl hover:shadow-neon-cyan/50 hover:scale-110 font-bold px-8 py-4 text-lg electric-button-outline"
                asChild
              >
                <Link to="/services">🚀 View Services</Link>
              </Button>
            </div>
          </div>
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
