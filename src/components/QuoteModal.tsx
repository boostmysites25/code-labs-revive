import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log("Quote request:", formData);
    toast.success("Quote request submitted successfully! We'll get back to you soon.");
    onClose();
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: ""
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-black border border-brand-gray">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Get a Quote</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
                className="bg-brand-gray border-brand-gray text-white placeholder:text-gray-400 focus:border-brand-orange"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your@email.com"
                className="bg-brand-gray border-brand-gray text-white placeholder:text-gray-400 focus:border-brand-orange"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+91 8309836039"
                className="bg-brand-gray border-brand-gray text-white placeholder:text-gray-400 focus:border-brand-orange"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Your company name"
                className="bg-brand-gray border-brand-gray text-white placeholder:text-gray-400 focus:border-brand-orange"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectType" className="text-white">Project Type *</Label>
              <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                <SelectTrigger className="bg-brand-gray border-brand-gray text-white">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent className="bg-brand-gray border-brand-gray">
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="mobile-development">Mobile Development</SelectItem>
                  <SelectItem value="amp-development">AMP Development</SelectItem>
                  <SelectItem value="ai-integration">AI Integration</SelectItem>
                  <SelectItem value="uiux-design">UI/UX Design</SelectItem>
                  <SelectItem value="api-development">API Development</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-white">Budget Range</Label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                <SelectTrigger className="bg-brand-gray border-brand-gray text-white">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="bg-brand-gray border-brand-gray">
                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                  <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                  <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                  <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                  <SelectItem value="50k-plus">$50,000+</SelectItem>
                  <SelectItem value="discuss">Let's discuss</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline" className="text-white">Timeline</Label>
            <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
              <SelectTrigger className="bg-brand-gray border-brand-gray text-white">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent className="bg-brand-gray border-brand-gray">
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="2-3-months">2-3 months</SelectItem>
                <SelectItem value="3-6-months">3-6 months</SelectItem>
                <SelectItem value="6-plus-months">6+ months</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-white">Project Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Tell us about your project, goals, and any specific requirements..."
              className="bg-brand-gray border-brand-gray text-white placeholder:text-gray-400 focus:border-brand-orange min-h-[100px]"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              type="submit"
              className="flex-1 bg-gradient-to-r from-brand-orange to-brand-red text-white font-semibold hover:from-brand-red hover:to-brand-orange transition-all duration-300"
            >
              Submit Quote Request
            </Button>
            <Button 
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-brand-gray text-gray-300 hover:text-white hover:border-brand-orange"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;