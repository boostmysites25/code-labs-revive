import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Rocket, 
  Search, 
  Code, 
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
  Download,
  Bell,
  ExternalLink,
  Smartphone as MobileIcon
} from "lucide-react";

const MobileDevelopment = () => {
  const services = [
    {
      icon: MobileIcon,
      title: "Native iOS Development",
      description: "Custom iOS applications built with Swift and SwiftUI for optimal performance."
    },
    {
      icon: Smartphone,
      title: "Native Android Development",
      description: "Android apps developed with Kotlin and Jetpack Compose for modern UI."
    },
    {
      icon: Globe,
      title: "Cross-Platform Development",
      description: "React Native and Flutter apps that work seamlessly across platforms."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Mobile Apps",
      description: "Full-featured shopping apps with payment processing and inventory management."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understand your requirements and plan the app architecture and features.",
      icon: Search
    },
    {
      step: "02", 
      title: "Design",
      description: "Create wireframes and UI/UX designs optimized for mobile experience.",
      icon: Palette
    },
    {
      step: "03",
      title: "Development",
      description: "Build your app using modern mobile development technologies and best practices.",
      icon: Code
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing across devices and app store deployment.",
      icon: Rocket
    }
  ];

  const features = [
    "Native performance and smooth animations",
    "Cross-platform compatibility",
    "Push notifications and real-time updates",
    "Offline functionality and data sync",
    "App store optimization and deployment",
    "Security and data protection",
    "Analytics and user behavior tracking",
    "Regular updates and maintenance"
  ];

  const technologies = [
    { name: "React Native", description: "Cross-platform framework for building native mobile apps" },
    { name: "Flutter", description: "Google's UI toolkit for building natively compiled applications" },
    { name: "Swift", description: "Modern programming language for iOS development" },
    { name: "Kotlin", description: "Modern language for Android development" },
    { name: "Firebase", description: "Backend services for mobile app development" },
    { name: "Redux", description: "State management for complex mobile applications" }
  ];

  const appPortfolio = [
    {
      id: 1,
      img: '/assets/portfolio/app-development/akash_mega_mart-app.webp',
      title: "Akash Mega Mart Mobile App",
      link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
    },
    {
      id: 2,
      img: '/assets/portfolio/app-development/feelit_app.webp',
      title: "FeelIt Mobile App",
      link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
    },
    {
      id: 3,
      img: '/assets/portfolio/app-development/klikomics.webp',
      title: "Klikomics Mobile App",
      link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
    },
    {
      id: 4,
      img: '/assets/portfolio/app-development/autosnap-app.webp',
      title: "AutoSnap Mobile App",
      link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
    },
    {
      id: 5,
      img: '/assets/portfolio/app-development/rentop.webp',
      title: "Rentop Bike and Car",
      link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
    },
  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-retro-dark via-retro-blue to-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Building <span className="gradient-text">Mobile Apps</span> That Users Love
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              We create native and cross-platform mobile applications that deliver 
              exceptional user experiences. From concept to app store, we handle 
              every aspect of mobile app development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
                asChild
              >
                <Link to="/contact">Start Your App Project</Link>
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
              Comprehensive mobile app development services for iOS and Android platforms.
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
              A proven methodology that ensures your mobile app is delivered on time, 
              on budget, and exceeds user expectations.
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
                Why Choose Us for Your <span className="gradient-text">Mobile App</span>?
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
                      <Download className="w-12 h-12 text-neon-cyan mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">50K+</div>
                      <div className="text-gray-400">App Downloads</div>
                    </div>
                    <div>
                      <Bell className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">95%</div>
                      <div className="text-gray-400">User Rating</div>
                    </div>
                    <div>
                      <Smartphone className="w-12 h-12 text-neon-cyan mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-gray-400">Platform Coverage</div>
                    </div>
                    <div>
                      <Users className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">25+</div>
                      <div className="text-gray-400">Apps Delivered</div>
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
              We use modern, proven technologies to build mobile apps that are fast, 
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
              Explore our recent mobile app development projects that showcase our expertise and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {appPortfolio.map((project, index) => (
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
            Ready to Launch Your <span className="gradient-text">Mobile App</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create a mobile app that not only looks amazing but also drives real results 
            for your business. Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Start Your App Project <ArrowRight className="ml-2 w-5 h-5" />
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

export default MobileDevelopment;