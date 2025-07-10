
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Search, 
  Smartphone, 
  BarChart,
  CheckCircle,
  ArrowRight,
  Globe,
  Code,
  Database,
  Gauge,
  TrendingUp,
  Users,
  Clock,
  Award
} from "lucide-react";

const AMPDevelopment = () => {
  const services = [
    {
      icon: Code,
      title: "AMP Conversions",
      description: "Convert your existing website to AMP for lightning-fast mobile performance."
    },
    {
      icon: Globe,
      title: "Custom AMP Pages",
      description: "Build new AMP pages from scratch optimized for speed and SEO."
    },
    {
      icon: Database,
      title: "AMP with WordPress",
      description: "Integrate AMP with your WordPress site for the best of both worlds."
    },
    {
      icon: BarChart,
      title: "AMP Analytics",
      description: "Advanced analytics and tracking for your AMP pages and user behavior."
    }
  ];

  const ampFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "AMP pages load 4x faster than regular mobile pages",
      stat: "4x"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Higher search rankings with Google's mobile-first indexing",
      stat: "85%"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Designed specifically for mobile user experience",
      stat: "100%"
    },
    {
      icon: TrendingUp,
      title: "Better Conversion",
      description: "Faster loading leads to higher conversion rates",
      stat: "20%"
    }
  ];

  const comparison = [
    { feature: "Page Load Speed", traditional: "3-7 seconds", amp: "0.5-1 second" },
    { feature: "Mobile Experience", traditional: "Variable", amp: "Optimized" },
    { feature: "SEO Performance", traditional: "Good", amp: "Excellent" },
    { feature: "Bounce Rate", traditional: "40-60%", amp: "10-20%" },
    { feature: "Conversion Rate", traditional: "Standard", amp: "20% Higher" },
    { feature: "Search Visibility", traditional: "Standard", amp: "Enhanced" }
  ];

  const caseStudies = [
    {
      title: "News Website AMP",
      client: "Digital Media Company",
      description: "Reduced page load time by 75% and increased mobile traffic by 300%.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      results: ["75% faster loading", "300% more traffic", "50% lower bounce rate"]
    },
    {
      title: "E-commerce AMP",
      client: "Online Retailer",
      description: "Improved mobile conversion rates by 40% with AMP product pages.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      results: ["40% higher conversions", "60% faster checkout", "Better user experience"]
    },
    {
      title: "Blog AMP Integration",
      client: "Content Publisher",
      description: "Increased organic search traffic by 200% with AMP implementation.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      results: ["200% more organic traffic", "Higher search rankings", "Improved engagement"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Analysis",
      description: "Audit your current site and identify AMP optimization opportunities."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive AMP implementation strategy for your goals."
    },
    {
      step: "03",
      title: "Development",
      description: "Build and optimize AMP pages following Google's best practices."
    },
    {
      step: "04",
      title: "Validation",
      description: "Test and validate AMP pages for performance and compliance."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-retro-dark via-retro-blue to-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Blazing Fast <span className="gradient-text">AMP Websites</span> for a Mobile-First World
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              Accelerated Mobile Pages (AMP) technology delivers lightning-fast loading times, 
              improved SEO rankings, and better user experiences on mobile devices. 
              Get ahead of the competition with our AMP expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
                asChild
              >
                <Link to="/contact">Talk to Our AMP Experts</Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
              >
                View AMP Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why AMP Matters */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="gradient-text">AMP Matters</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              In today's mobile-first world, speed is everything. AMP technology ensures 
              your content loads instantly, keeping users engaged and improving your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ampFeatures.map((feature, index) => (
              <Card key={index} className="bg-retro-gray border-retro-gray hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{feature.stat}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AMP Services */}
      <section className="section-padding bg-retro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">AMP Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AMP solutions tailored to your business needs and technical requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-retro-dark border-retro-dark hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
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

      {/* AMP vs Traditional Comparison */}
      <section className="section-padding bg-retro-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AMP vs <span className="gradient-text">Traditional</span> Websites
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the clear advantages of AMP technology compared to traditional mobile websites.
            </p>
          </div>

          <Card className="bg-retro-gray border-retro-gray max-w-4xl mx-auto animate-fade-in">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-retro-dark">
                      <th className="text-left py-4 px-6 text-white font-semibold">Feature</th>
                      <th className="text-center py-4 px-6 text-gray-400 font-semibold">Traditional</th>
                      <th className="text-center py-4 px-6 text-neon-cyan font-semibold">AMP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <tr key={index} className="border-b border-retro-dark/50">
                        <td className="py-4 px-6 text-white font-medium">{item.feature}</td>
                        <td className="py-4 px-6 text-center text-gray-400">{item.traditional}</td>
                        <td className="py-4 px-6 text-center text-neon-cyan font-medium">{item.amp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our AMP <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A systematic approach to implementing AMP that ensures optimal performance and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-retro-gray border-retro-gray hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold gradient-text mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-retro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AMP Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real results from businesses that implemented AMP with our expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-retro-dark border-retro-dark hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <p className="text-neon-cyan text-sm mb-3">{study.client}</p>
                  <p className="text-gray-400 mb-4">{study.description}</p>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-neon-cyan mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-retro-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The <span className="gradient-text">Business Impact</span> of AMP
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Gauge, title: "Improved User Experience", description: "Faster loading times keep users engaged and reduce bounce rates significantly." },
                  { icon: Search, title: "Better SEO Rankings", description: "Google prioritizes AMP pages in mobile search results and featured snippets." },
                  { icon: TrendingUp, title: "Higher Conversion Rates", description: "Speed improvements directly correlate with increased conversion rates and sales." },
                  { icon: Users, title: "Increased Mobile Traffic", description: "AMP pages attract more mobile visitors and improve overall site performance." }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in">
              <Card className="bg-retro-gray border-retro-gray">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <Clock className="w-12 h-12 text-neon-cyan mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">0.5s</div>
                      <div className="text-gray-400">Load Time</div>
                    </div>
                    <div>
                      <Award className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">85%</div>
                      <div className="text-gray-400">SEO Boost</div>
                    </div>
                    <div>
                      <TrendingUp className="w-12 h-12 text-neon-cyan mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">40%</div>
                      <div className="text-gray-400">Higher Conversions</div>
                    </div>
                    <div>
                      <Users className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white">300%</div>
                      <div className="text-gray-400">More Traffic</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Accelerate</span> Your Mobile Performance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't let slow loading times cost you customers. Get in touch with our AMP experts 
            and start delivering lightning-fast mobile experiences today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Talk to Our AMP Experts <ArrowRight className="ml-2 w-5 h-5" />
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
