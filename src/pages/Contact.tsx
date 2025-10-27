import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Star,
  Users,
  Award,
} from "lucide-react";
import SmoothScrollAnimation from "@/components/SmoothScrollAnimation";
import contactHero from "@/assets/contact-hero.jpg";
import contactOffice from "@/assets/contact-office.jpg";
import ourMission from "@/assets/mission.webp";
import ourVision from "@/assets/vision.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Create email content
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.projectType || "Not specified"}

Message:
${formData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:Contact@retrocodelabs.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    toast({
      title: "Message Prepared!",
      description:
        "Your email client should open with the message ready to send.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Contact@retrocodelabs.in",
      description: "Send us an email anytime",
      link: "mailto:Contact@retrocodelabs.in",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+91 8309836039",
      description: "Chat with us instantly",
      link: "https://wa.me/918309836039",
    },
    {
      icon: MapPin,
      title: "Office",
      value:
        "Plot No.80P, Block B, KVR Valley, Mallampet, Bachupally K.VRangareddy, Quthbullapur, Hyderabad, Telangana 500043",
      description: "India",
      link: "https://maps.google.com/?q=PlotNo.80P,BlockB,KVRValley,Mallampet,Bachupally,K.VRangareddy,Quthbullapur,Hyderabad,Telangana,500043",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9AM - 6PM",
      description: "Weekend support available",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://www.facebook.com/share/1K4X6EY6e4/",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/retrocode-labs/",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://www.instagram.com/retrocode_labs",
    },
  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactHero})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <SmoothScrollAnimation animation="fade-in" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get In <span className="gradient-text">Touch</span>
              </h1>
            </SmoothScrollAnimation>
            <SmoothScrollAnimation animation="slide-up" delay={400}>
              <p className="text-xl text-gray-300 mb-8">
                Ready to start your project? We'd love to hear from you. Send us
                a message and we'll respond as soon as possible.
              </p>
            </SmoothScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SmoothScrollAnimation animation="slide-right" delay={200}>
              <Card className="bg-retro-gray border-brand-orange hover:border-brand-red transition-all duration-300 card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <MessageSquare className="w-6 h-6 text-brand-orange mr-3 hover-rotate" />
                    <h2 className="text-2xl font-bold text-white">
                      Send Us a Message
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="Your full name"
                          className="bg-retro-dark border-retro-dark text-white placeholder:text-gray-400 focus:border-brand-orange "
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="your@email.com"
                          className="bg-retro-dark border-retro-dark text-white placeholder:text-gray-400 focus:border-brand-orange "
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="+91 8309836039"
                          className="bg-retro-dark border-retro-dark text-white placeholder:text-gray-400 focus:border-brand-orange "
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Project Type
                        </label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("projectType", value)
                          }
                        >
                          <SelectTrigger className="bg-retro-dark border-retro-dark text-white focus:border-brand-orange ">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent className="bg-retro-dark border-retro-gray">
                            <SelectItem value="website">
                              Website Development
                            </SelectItem>
                            <SelectItem value="mobile">Mobile App</SelectItem>
                            <SelectItem value="amp">AMP Development</SelectItem>
                            <SelectItem value="api">Custom API</SelectItem>
                            <SelectItem value="design">UI/UX Design</SelectItem>
                            <SelectItem value="ai">AI Integration</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="bg-retro-dark border-retro-dark text-white placeholder:text-gray-400 focus:border-brand-orange resize-none "
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="orange"
                      size="lg"
                      className="w-full hover-lift btn-pulse transition-all duration-300"
                    >
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
                <div className="pt-7">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Follow Us
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        className="border-brand-orange hover:border-brand-red hover:bg-brand-orange/10 transition-all duration-300 hover-lift"
                        asChild
                      >
                        <a
                          href={social.href}
                          className="flex items-center space-x-2 link-underline"
                        >
                          <social.icon className="w-5 h-5 hover-rotate" />
                          <span className="hidden sm:inline">
                            {social.name}
                          </span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
            </SmoothScrollAnimation>

            {/* Contact Information */}
            <div className="space-y-8">
              <SmoothScrollAnimation animation="slide-left" delay={400}>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <SmoothScrollAnimation
                        key={index}
                        animation="fade-in"
                        delay={600 + index * 100}
                      >
                        <Card className="bg-retro-gray border-brand-orange hover:border-brand-red transition-all duration-300 card-hover hover-lift">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0 hover-rotate">
                                <info.icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white mb-1">
                                  {info.title}
                                </h3>
                                {info.link ? (
                                  <a
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-orange font-medium mb-1 link-underline hover:text-brand-red transition-colors duration-300 block"
                                  >
                                    {info.value}
                                  </a>
                                ) : (
                                  <p className="text-brand-orange font-medium mb-1">
                                    {info.value}
                                  </p>
                                )}
                                <p className="text-gray-400 text-sm">
                                  {info.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </SmoothScrollAnimation>
                    ))}
                  </div>
                </div>
              </SmoothScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Support Section */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To democratize technology by making cutting-edge digital solutions 
                accessible to businesses of all sizes, empowering them to compete 
                in the digital age with innovative, scalable, and cost-effective solutions.
              </p>
              <div className="space-y-4">
                {[
                  "Bridging the gap between complex technology and business needs",
                  "Making AI and modern tech accessible to every business",
                  "Empowering entrepreneurs with digital transformation",
                  "Creating sustainable, long-term partnerships with our clients",
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-brand-orange rounded-full mr-4"></div>
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={ourMission}
                alt="Our mission in action - innovative technology solutions"
                className="rounded-lg shadow-2xl border border-brand-orange"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src={ourVision}
                alt="Our vision for the future - digital transformation"
                className="rounded-lg shadow-2xl border border-brand-orange"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To become the leading catalyst for digital transformation, where 
                every business, regardless of size, can harness the power of 
                artificial intelligence and modern technology to achieve unprecedented 
                growth and success.
              </p>
              <div className="space-y-4">
                {[
                  "A world where technology serves humanity, not the other way around",
                  "Every business empowered with AI-driven solutions",
                  "Seamless integration of cutting-edge tech with human creativity",
                  "Building the future of digital innovation, one project at a time",
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-brand-orange rounded-full mr-4"></div>
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-retro-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on complexity. A simple website typically takes 2-4 weeks, while complex applications can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer:
                  "Yes! We offer various support packages including bug fixes, updates, security monitoring, and feature enhancements. We believe in long-term partnerships with our clients.",
              },
              {
                question: "What technologies do you work with?",
                answer:
                  "We specialize in modern web technologies including React, Next.js, Node.js, Python, React Native, and various cloud platforms. We always choose the best technology stack for your specific needs.",
              },
              {
                question: "Can you help with existing projects?",
                answer:
                  "Absolutely! We can audit, improve, or completely rebuild existing applications. We also offer consulting services to help optimize your current digital solutions.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-retro-dark border-brand-orange hover:border-brand-red transition-all duration-300 animate-fade-in"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
