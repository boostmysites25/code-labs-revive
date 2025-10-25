import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Users, 
  Briefcase, 
  GraduationCap,
  Code,
  Smartphone,
  Brain,
  Zap,
  Globe,
  Shield,
  Rocket,
  Star,
  CheckCircle
} from "lucide-react";
import SmoothScrollAnimation from "@/components/SmoothScrollAnimation";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const openGmailApplication = (position: string) => {
    const subject = encodeURIComponent(`Job Application - ${position}`);
    const body = encodeURIComponent(`
Dear Hiring Manager,

I am writing to express my interest in the ${position} position at Retro Code Labs. 

Please find my application details below:

Name: [Your Name]
Email: [Your Email]
Phone: [Your Phone Number]
LinkedIn: [Your LinkedIn Profile]
Portfolio: [Your Portfolio/Website]

Experience: [Brief description of your relevant experience]
Skills: [Key skills relevant to the position]
Availability: [When you can start]

I am excited about the opportunity to contribute to Retro Code Labs' innovative projects and would welcome the chance to discuss how my skills and experience align with your team's needs.

Thank you for considering my application.

Best regards,
[Your Name]
    `);
    
    // Open Gmail directly in browser
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@retrocodelabs.in&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const jobOpenings = [
    {
      id: "senior-frontend-developer",
      title: "Senior Frontend Developer",
      type: "Full-time",
      location: "Remote / Delhi",
      experience: "3-5 years",
      salary: "₹8-15 LPA",
      description: "We're looking for a passionate Senior Frontend Developer to join our team and help build cutting-edge web applications with modern technologies.",
      requirements: [
        "Expertise in React, Next.js, and TypeScript",
        "Strong understanding of modern CSS frameworks (Tailwind CSS)",
        "Experience with state management (Redux, Zustand)",
        "Knowledge of testing frameworks (Jest, Cypress)",
        "Experience with responsive design and mobile-first development"
      ],
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Jest"],
      icon: Code,
      color: "bg-blue-500/20 text-blue-400 border-blue-400/30"
    },
    {
      id: "mobile-app-developer",
      title: "Mobile App Developer",
      type: "Full-time",
      location: "Remote / Delhi",
      experience: "2-4 years",
      salary: "₹6-12 LPA",
      description: "Join our mobile development team to create innovative cross-platform mobile applications that deliver exceptional user experiences.",
      requirements: [
        "Experience with React Native or Flutter",
        "Knowledge of native iOS/Android development",
        "Understanding of mobile app architecture patterns",
        "Experience with app store deployment",
        "Strong problem-solving and debugging skills"
      ],
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase", "Redux"],
      icon: Smartphone,
      color: "bg-green-500/20 text-green-400 border-green-400/30"
    },
    {
      id: "ai-ml-engineer",
      title: "AI/ML Engineer",
      type: "Full-time",
      location: "Remote / Delhi",
      experience: "2-5 years",
      salary: "₹10-18 LPA",
      description: "Be part of our AI innovation team, working on cutting-edge machine learning projects and AI integrations for our clients.",
      requirements: [
        "Strong background in Python and machine learning frameworks",
        "Experience with TensorFlow, PyTorch, or scikit-learn",
        "Knowledge of deep learning and neural networks",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Understanding of MLOps and model deployment"
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker", "Kubernetes"],
      icon: Brain,
      color: "bg-purple-500/20 text-purple-400 border-purple-400/30"
    },
    {
      id: "full-stack-developer",
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Remote / Delhi",
      experience: "2-4 years",
      salary: "₹7-14 LPA",
      description: "Work on end-to-end development of web applications, from frontend interfaces to backend APIs and database design.",
      requirements: [
        "Proficiency in both frontend and backend technologies",
        "Experience with Node.js, Express, or similar backend frameworks",
        "Database design and optimization skills",
        "Knowledge of RESTful APIs and GraphQL",
        "Experience with cloud deployment and DevOps practices"
      ],
      skills: ["React", "Node.js", "MongoDB", "PostgreSQL", "AWS", "Docker"],
      icon: Globe,
      color: "bg-orange-500/20 text-orange-400 border-orange-400/30"
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote / Delhi",
      experience: "3-6 years",
      salary: "₹9-16 LPA",
      description: "Help us build and maintain robust, scalable infrastructure and deployment pipelines for our development teams.",
      requirements: [
        "Strong experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of containerization (Docker, Kubernetes)",
        "Experience with CI/CD pipelines and automation",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Monitoring and logging systems expertise"
      ],
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
      icon: Zap,
      color: "bg-cyan-500/20 text-cyan-400 border-cyan-400/30"
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Remote / Delhi",
      experience: "2-5 years",
      salary: "₹6-12 LPA",
      description: "Create beautiful, intuitive user experiences and interfaces that delight our clients and their users.",
      requirements: [
        "Proficiency in design tools (Figma, Adobe Creative Suite)",
        "Strong understanding of user-centered design principles",
        "Experience with prototyping and user testing",
        "Knowledge of design systems and component libraries",
        "Portfolio demonstrating strong design skills"
      ],
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Design Systems"],
      icon: Shield,
      color: "bg-pink-500/20 text-pink-400 border-pink-400/30"
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Growth Opportunities",
      description: "Work on cutting-edge projects and advance your career with continuous learning opportunities."
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Join a diverse, talented team that values creativity, innovation, and mutual support."
    },
    {
      icon: Clock,
      title: "Flexible Work",
      description: "Enjoy flexible working hours and remote work options that fit your lifestyle."
    },
    {
      icon: Star,
      title: "Competitive Benefits",
      description: "Comprehensive health insurance, performance bonuses, and professional development budget."
    }
  ];

  return (
    <div className="min-h-screen bg-retro-dark">
      {/* Hero Section with Apply Now CTA */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 section-padding bg-gradient-to-br from-retro-dark via-brand-gray to-retro-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-red/5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <SmoothScrollAnimation>
              <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold mb-6 text-white leading-tight">
                Join Our <span className="gradient-text">Innovation Team</span>
              </h1>
            </SmoothScrollAnimation>
            
            <SmoothScrollAnimation animation="fade-in" delay={200}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Be part of a team that's building the future with AI-powered solutions 
                and cutting-edge technology. Your next career adventure starts here.
              </p>
            </SmoothScrollAnimation>

            {/* Prominent Apply Now CTA */}
            <SmoothScrollAnimation animation="slide-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-orange to-brand-red text-black hover:from-brand-red hover:to-brand-orange transition-all duration-300 shadow-2xl hover:shadow-brand-orange/50 hover:scale-105 border border-brand-orange/50 px-8 py-4 text-lg font-semibold"
                  onClick={() => openGmailApplication("General Application")}
                >
                  🚀 Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-xl hover:shadow-neon-cyan/50 hover:scale-105 px-8 py-4 text-lg font-semibold"
                  onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Open Positions
                </Button>
              </div>
            </SmoothScrollAnimation>

            {/* Quick Stats */}
            <SmoothScrollAnimation animation="fade-in" delay={600}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-orange mb-2">15+</div>
                  <div className="text-gray-400">Open Positions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-cyan mb-2">50+</div>
                  <div className="text-gray-400">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-pink mb-2">100%</div>
                  <div className="text-gray-400">Remote Friendly</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">4.8★</div>
                  <div className="text-gray-400">Team Rating</div>
                </div>
              </div>
            </SmoothScrollAnimation>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SmoothScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Work With <span className="gradient-text">Us?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We offer more than just a job - we provide an environment where you can grow, 
                innovate, and make a real impact.
              </p>
            </div>
          </SmoothScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <SmoothScrollAnimation key={index} animation="fade-in" delay={index * 100}>
                <Card className="bg-retro-gray border-retro-gray hover:border-neon-cyan transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              </SmoothScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SmoothScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Current <span className="gradient-text">Openings</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our current job opportunities and find the perfect role for your skills and aspirations.
              </p>
            </div>
          </SmoothScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <SmoothScrollAnimation key={job.id} animation="fade-in" delay={index * 100}>
                <Card className="bg-retro-gray border-retro-gray hover:border-neon-cyan transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full flex items-center justify-center">
                          <job.icon className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge className={job.color}>
                        {job.experience}
                      </Badge>
                    </div>

                    <p className="text-gray-300 mb-4">{job.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-semibold text-brand-orange">
                        {job.salary}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs border-gray-600 text-gray-400">
                            {skill}
                          </Badge>
                        ))}
                        {job.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                            +{job.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-white">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-brand-orange to-brand-red text-black hover:from-brand-red hover:to-brand-orange transition-all duration-300"
                      onClick={() => openGmailApplication(job.title)}
                    >
                      Apply for this Position
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </SmoothScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-orange/10 to-brand-red/10">
        <div className="max-w-4xl mx-auto text-center">
          <SmoothScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See Your <span className="gradient-text">Perfect Role?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals to join our team. 
              Send us your application and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-orange to-brand-red text-black font-semibold hover:from-brand-red hover:to-brand-orange transition-all duration-300"
                onClick={() => openGmailApplication("General Application")}
              >
                Send Your Application
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
               <Button
                 size="lg"
                 variant="outline"
                 className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                 onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=contact@retrocodelabs.in&su=General%20Inquiry', '_blank')}
               >
                 Contact HR Team
               </Button>
            </div>
          </SmoothScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Careers;
