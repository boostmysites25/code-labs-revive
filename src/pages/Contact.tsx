
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Instagram
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
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

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@retrocodelabs.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "San Francisco, CA",
      description: "123 Tech Street, Suite 100"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "We respond to all inquiries quickly"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-retro-dark via-retro-blue to-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              Ready to start your project? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-retro-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="bg-retro-gray border-retro-gray">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <MessageSquare className="w-6 h-6 text-neon-cyan mr-3" />
                    <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          className="bg-retro-dark border-retro-dark text-white placeholder:text-gray-400 focus:border-neon-cyan"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          className="bg-retro-dark border-retro-dark text-white placeholder:text-gray-400 focus:border-neon-cyan"
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
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="bg-retro-dark border-retro-dark text-white placeholder:text-gray-400 focus:border-neon-cyan"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Project Type
                        </label>
                        <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                          <SelectTrigger className="bg-retro-dark border-retro-dark text-white focus:border-neon-cyan">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent className="bg-retro-dark border-retro-gray">
                            <SelectItem value="website">Website Development</SelectItem>
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
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="bg-retro-dark border-retro-dark text-white placeholder:text-gray-400 focus:border-neon-cyan resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-semibold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300"
                    >
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-retro-gray border-retro-gray hover:border-neon-cyan transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-black" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                            <p className="text-neon-cyan font-medium mb-1">{info.value}</p>
                            <p className="text-gray-400 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="border-retro-gray hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
                      asChild
                    >
                      <a href={social.href} className="flex items-center space-x-2">
                        <social.icon className="w-5 h-5" />
                        <span className="hidden sm:inline">{social.name}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="bg-retro-gray border-retro-gray">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-retro-blue to-retro-dark rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                      <p className="text-white font-semibold">San Francisco, CA</p>
                      <p className="text-gray-400">123 Tech Street, Suite 100</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                answer: "Project timelines vary depending on complexity. A simple website typically takes 2-4 weeks, while complex applications can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes! We offer various support packages including bug fixes, updates, security monitoring, and feature enhancements. We believe in long-term partnerships with our clients."
              },
              {
                question: "What technologies do you work with?",
                answer: "We specialize in modern web technologies including React, Next.js, Node.js, Python, React Native, and various cloud platforms. We always choose the best technology stack for your specific needs."
              },
              {
                question: "Can you help with existing projects?",
                answer: "Absolutely! We can audit, improve, or completely rebuild existing applications. We also offer consulting services to help optimize your current digital solutions."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-retro-dark border-retro-dark hover:border-neon-cyan transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
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
