
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Lightbulb, 
  Shield, 
  Zap, 
  TrendingUp,
  Calendar,
  Users,
  Award,
  Code,
  Star,
  Quote,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import aboutOffice from "@/assets/about-office.jpg";
import aboutInnovation from "@/assets/about-innovation.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import aboutVision from "@/assets/about-vision.jpg";
import aboutValues from "@/assets/about-values.jpg";


const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of the curve by embracing cutting-edge technologies and creative solutions."
    },
    {
      icon: Shield,
      title: "Integrity", 
      description: "We build trust through transparent communication and honest business practices."
    },
    {
      icon: Zap,
      title: "Speed",
      description: "We deliver high-quality solutions quickly without compromising on excellence."
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "We design solutions that grow with your business and adapt to future needs."
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechVantage Solutions Pvt Ltd",
      role: "CEO & Founder",
      content: "Retro Code Labs completely transformed our digital presence. Their retro-modern approach perfectly captured our brand's unique identity while delivering exceptional performance. The team's attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
      image: '/assets/testimonials/1.jpg'
    },
    {
      name: "Priya Desai",
      company: "Creative Studios India",
      role: "Creative Director",
      content: "Working with Retro Code Labs was an absolute pleasure. They understood our creative vision perfectly and delivered a mobile app that our users absolutely love. Their innovative design solutions and attention to detail are unmatched.",
      rating: 5,
      image: '/assets/testimonials/2.jpg'
    },
    {
      name: "Amit Singh",
      company: "E-commerce Solutions India",
      role: "Founder & CEO",
      content: "Retro Code Labs was a game-changer for our business. Their AMP development expertise helped us achieve lightning-fast loading speeds and significantly improved our search rankings. Our conversion rates have increased by 40% since the launch.",
      rating: 5,
      image: '/assets/testimonials/3.jpg'
    },
    {
      name: "Deepika Sharma",
      company: "AI Solutions India Pvt Ltd",
      role: "Chief Technology Officer",
      content: "Their AI integration capabilities are outstanding. They seamlessly integrated machine learning features into our platform, enhancing user experience significantly. The team's technical expertise and innovative approach have made us industry leaders.",
      rating: 5,
      image: '/assets/testimonials/4.jpg'
    }
  ];

  const portfolioItems = [
    {
      title: "5G Homes",
      category: "Web Development",
      description: "High-speed internet service provider website with modern design and seamless user experience.",
      image: "/assets/portfolio/web-development/5ghomes.webp",
      tags: ["Web Development", "Responsive", "Performance"],
      link: "https://5ghighspeedinternet.co"
    },
    {
      title: "Cold Creekcap",
      category: "Web Development",
      description: "Professional corporate website with modern design and optimized performance.",
      image: "/assets/portfolio/web-development/cold-creekcap.webp",
      tags: ["Corporate", "SEO", "Responsive"],
      link: "https://www.coldcreekcap.com"
    },
    {
      title: "Think Reality",
      category: "Web Development",
      description: "Real estate platform with innovative design and advanced functionality.",
      image: "/assets/portfolio/web-development/think-reality.webp",
      tags: ["Real Estate", "Modern UI", "Advanced Features"],
      link: "https://thinkrealty.ae"
    },
    {
      title: "Akash Mega Mart Mobile App",
      category: "Mobile Development",
      description: "E-commerce mobile application with intuitive design and seamless shopping experience.",
      image: "/assets/portfolio/app-development/akash_mega_mart-app.webp",
      tags: ["Mobile App", "E-commerce", "React Native"],
      link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart"
    },
    {
      title: "FeelIt Mobile App",
      category: "Mobile Development",
      description: "Innovative mobile application with vibrant UI design and engaging user experience.",
      image: "/assets/portfolio/app-development/feelit_app.webp",
      tags: ["Mobile App", "UI/UX", "Innovation"],
      link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to blend retro aesthetics with modern technology."
    },
    {
      year: "2020", 
      title: "First Major Client",
      description: "Delivered our first enterprise-level web application."
    },
    {
      year: "2021",
      title: "Mobile Expansion",
      description: "Expanded services to include native mobile app development."
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Pioneered AI-powered solutions for enhanced user experiences."
    },
    {
      year: "2023",
      title: "AMP Specialization", 
      description: "Became certified AMP development specialists."
    },
    {
      year: "2024",
      title: "50+ Projects",
      description: "Celebrated completion of 50+ successful projects."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-retro-dark via-retro-blue to-retro-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={aboutOffice} 
            alt="Retro Code Labs office workspace"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              About <span className="gradient-text">Retro Code Labs</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              We're a passionate team of developers, designers, and strategists who believe 
              in creating digital experiences that are both nostalgic and futuristic.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Founded in 2019, Retro Code Labs emerged from a simple idea: what if we could 
                combine the nostalgic charm of retro design with the power of modern technology? 
                Our founders, passionate about both vintage aesthetics and cutting-edge development, 
                set out to create a company that would bridge the gap between past and future.
              </p>
              <p className="text-gray-300 mb-6">
                Today, we've grown into a team of creative professionals who specialize in 
                delivering digital solutions that not only look amazing but perform exceptionally. 
                From startups to enterprises, we help businesses stand out in the digital landscape 
                with our unique retro-modern approach.
              </p>
            </div>
            <div className="animate-fade-in">
              <img 
                src={aboutInnovation}
                alt="Digital innovation and technology"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-retro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-retro-dark border-retro-dark hover:border-neon-cyan transition-all duration-300 animate-fade-in overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={aboutMission} 
                  alt="Mission control center"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-retro-dark to-transparent"></div>
              </div>
              <CardContent className="p-8 text-center relative">
                <Target className="w-16 h-16 mx-auto mb-6 text-neon-cyan" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To create exceptional digital experiences that combine nostalgic design 
                  elements with modern functionality, helping businesses connect with their 
                  audiences in meaningful and memorable ways.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-retro-dark border-retro-dark hover:border-neon-pink transition-all duration-300 animate-fade-in overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={aboutVision} 
                  alt="Futuristic vision concept"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-retro-dark to-transparent"></div>
              </div>
              <CardContent className="p-8 text-center relative">
                <Eye className="w-16 h-16 mx-auto mb-6 text-neon-pink" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be the leading agency in retro-modern digital design, setting new 
                  standards for creativity and technical excellence while inspiring others 
                  to embrace the perfect blend of vintage charm and contemporary innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative section-padding bg-retro-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={aboutValues} 
            alt="Retro gaming office space"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-retro-gray border-retro-gray hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
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
              Don't just take our word for it - hear from the businesses we've helped transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-retro-gray border-retro-gray hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-neon-cyan mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-neon-cyan text-sm">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-retro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing our latest projects and digital innovations across different industries.
            </p>
          </div>

          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
              {portfolioItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-none w-80 snap-start group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="bg-retro-dark border-retro-dark hover:border-neon-cyan transition-all duration-500 overflow-hidden h-full group-hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-retro-dark via-transparent to-transparent opacity-60"></div>
                      <div className="absolute top-4 right-4">
                        <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <span className="text-neon-cyan text-sm font-medium">{item.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-3 py-1 text-xs bg-neon-cyan/10 text-neon-cyan rounded-full border border-neon-cyan/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                                             <div className="flex items-center text-white group-hover:text-neon-cyan transition-colors duration-300">
                         <a 
                           href={item.link} 
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
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-retro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted partner for digital transformation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan to-neon-pink"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-retro-dark border-retro-dark hover:border-neon-cyan transition-all duration-300">
                      <CardContent className="p-6 border border-brand-orange rounded-lg">
                        <div className="text-2xl font-bold gradient-text mb-2">{event.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                        <p className="text-gray-400">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full flex items-center justify-center z-10">
                    <Calendar className="w-4 h-4 text-black" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Start Your Journey</span> With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and see how we can help bring your vision to life 
            with our unique retro-modern approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
              asChild
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              asChild
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
