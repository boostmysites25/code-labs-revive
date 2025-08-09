
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
  Code
} from "lucide-react";
import aboutOffice from "@/assets/about-office.jpg";
import aboutInnovation from "@/assets/about-innovation.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import aboutVision from "@/assets/about-vision.jpg";
import aboutValues from "@/assets/about-values.jpg";
import teamAlex from "@/assets/team-alex.jpg";
import teamSarah from "@/assets/team-sarah.jpg";
import teamMike from "@/assets/team-mike.jpg";
import teamEmily from "@/assets/team-emily.jpg";

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

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Full-stack developer with 8+ years of experience in modern web technologies.",
      image: teamAlex,
      skills: ["React", "Node.js", "AI/ML"]
    },
    {
      name: "Sarah Martinez", 
      role: "Lead Designer",
      bio: "Creative visionary specializing in retro-modern UI/UX design and brand identity.",
      image: teamSarah,
      skills: ["UI/UX", "Branding", "Motion Design"]
    },
    {
      name: "Mike Thompson",
      role: "Senior Developer", 
      bio: "Mobile and web development expert with a passion for performance optimization.",
      image: teamMike,
      skills: ["React Native", "AMP", "Performance"]
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      bio: "Agile methodology expert ensuring smooth project delivery and client satisfaction.",
      image: teamEmily,
      skills: ["Agile", "Strategy", "Client Relations"]
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
              <Button 
                className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
                asChild
              >
                <Link to="/contact">Work With Us</Link>
              </Button>
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

      {/* Team Section */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The creative minds behind Retro Code Labs. We're passionate professionals 
              dedicated to bringing your digital vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-retro-gray border-retro-gray hover:border-neon-cyan transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-neon-cyan mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-2 py-1 text-xs bg-neon-cyan/20 text-neon-cyan rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
                      <CardContent className="p-6">
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
