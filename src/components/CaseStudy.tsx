import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, User, Target, CheckCircle, TrendingUp, Quote } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyProps {
  project: {
    id: number;
    title: string;
    category: string;
    img: string;
    link?: string;
    challenge: string;
    solution: string;
    results: {
      metrics: Array<{
        label: string;
        value: string;
        improvement: string;
      }>;
      testimonial: {
        quote: string;
        author: string;
        position: string;
        company: string;
      };
    };
    technologies: string[];
    duration: string;
    team: string;
    services: string[];
  };
}

const CaseStudy = ({ project }: CaseStudyProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-red/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <Link to="/" className="flex items-center text-brand-orange hover:text-brand-red transition-colors duration-300">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </div>
              
              <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange mb-4">
                {project.category} Development
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                A comprehensive case study showcasing our approach to solving complex 
                challenges and delivering exceptional results.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {project.services.map((service, index) => (
                  <Badge key={index} variant="outline" className="border-brand-orange text-brand-orange">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-lg shadow-2xl border border-brand-orange w-full"
                />
                {project.link && (
                  <Button
                    className="absolute top-4 right-4"
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-retro-gray border-brand-orange">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-brand-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Duration</h3>
                <p className="text-gray-400">{project.duration}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-retro-gray border-brand-orange">
              <CardContent className="p-6 text-center">
                <User className="w-8 h-8 text-brand-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Team Size</h3>
                <p className="text-gray-400">{project.team}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-retro-gray border-brand-orange">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 text-brand-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Category</h3>
                <p className="text-gray-400 capitalize">{project.category}</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <Card className="bg-retro-gray border-brand-orange">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">The Challenge</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="bg-retro-gray border-brand-orange">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Our Solution</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.solution}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="section-padding bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies <span className="gradient-text">Used</span>
            </h2>
            <p className="text-xl text-gray-300">
              Modern tools and frameworks that powered this project
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <Badge key={index} className="bg-brand-orange/20 text-brand-orange border-brand-orange px-4 py-2 text-lg">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project <span className="gradient-text">Results</span>
            </h2>
            <p className="text-xl text-gray-300">
              Measurable outcomes that demonstrate our impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {project.results.metrics.map((metric, index) => (
              <Card key={index} className="bg-retro-gray border-brand-orange text-center">
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-brand-orange font-semibold mb-2">{metric.improvement}</div>
                  <div className="text-gray-400">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial */}
          <Card className="bg-retro-gray border-brand-orange">
            <CardContent className="p-8">
              <div className="flex items-start">
                <Quote className="w-8 h-8 text-brand-orange mr-4 flex-shrink-0 mt-2" />
                <div>
                  <blockquote className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                    "{project.results.testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-brand-orange/20 pt-6">
                    <div className="text-white font-semibold">{project.results.testimonial.author}</div>
                    <div className="text-brand-orange">{project.results.testimonial.position}</div>
                    <div className="text-gray-400">{project.results.testimonial.company}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your <span className="gradient-text">Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-orange to-brand-red text-black hover:from-brand-red hover:to-brand-orange transition-all duration-300"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-black"
              asChild
            >
              <Link to="/">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
