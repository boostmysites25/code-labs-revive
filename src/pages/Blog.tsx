import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import SmoothScrollAnimation from "@/components/SmoothScrollAnimation";

// Import images
import aiIntegrationImg from "@/assets/ai-integration-service.jpg";
import mobileDevImg from "@/assets/mobile-development-service.jpg";
import webDevImg from "@/assets/web-development-service.jpg";
import apiDevImg from "@/assets/api-development-service.jpg";
import uiuxImg from "@/assets/uiux-design-service.jpg";
import aboutInnovationImg from "@/assets/about-innovation.jpg";

// Blog data inspired by Veltris insights
const blogPosts = [
  {
    id: 1,
    title: "Digital Transformation in Healthcare: A Complete Guide",
    excerpt: "Exploring how digital technologies are revolutionizing patient care, operational efficiency, and medical research in the healthcare industry.",
    author: "Dr. Sarah Chen",
    date: "2024-03-15",
    category: "Healthcare & Lifesciences",
    type: "Blog",
    image: aiIntegrationImg,
    slug: "digital-transformation-healthcare-guide"
  },
  {
    id: 2,
    title: "AI Integration Best Practices for Financial Services",
    excerpt: "Learn how artificial intelligence is transforming risk assessment, fraud detection, and customer service in the financial sector.",
    author: "Michael Rodriguez",
    date: "2024-03-12",
    category: "Financial Services",
    type: "Whitepaper",
    image: mobileDevImg,
    slug: "ai-integration-financial-services"
  },
  {
    id: 3,
    title: "E-Commerce Platform Modernization: Case Study",
    excerpt: "How we helped a retail giant increase their online sales by 300% through comprehensive digital platform transformation.",
    author: "Emma Thompson",
    date: "2024-03-10",
    category: "Technology & Media",
    type: "Case Study",
    image: "/src/assets/web-development-service.jpg",
    slug: "ecommerce-modernization-case-study"
  },
  {
    id: 4,
    title: "Cloud Migration Strategies for Enterprise Applications",
    excerpt: "A comprehensive guide to migrating legacy systems to cloud infrastructure while maintaining security and performance.",
    author: "David Kim",
    date: "2024-03-08",
    category: "Cloud Engineering",
    type: "Guide",
    image: apiDevImg,
    slug: "cloud-migration-strategies"
  },
  {
    id: 5,
    title: "Mobile-First Design: The Future of User Experience",
    excerpt: "Understanding why mobile-first approach is critical for modern applications and how to implement it effectively.",
    author: "Lisa Wang",
    date: "2024-03-05",
    category: "UI/UX Design",
    type: "Blog",
    image: uiuxImg,
    slug: "mobile-first-design-future"
  },
  {
    id: 6,
    title: "Cybersecurity Framework Implementation Guide",
    excerpt: "Essential steps to protect your organization from cyber threats with comprehensive security framework implementation.",
    author: "Alex Johnson",
    date: "2024-03-01",
    category: "Security",
    type: "Whitepaper",
    image: aboutInnovationImg,
    slug: "cybersecurity-framework-guide"
  }
];

const categories = [
  "All Categories",
  "Healthcare & Lifesciences",
  "Financial Services", 
  "Technology & Media",
  "Cloud Engineering",
  "UI/UX Design",
  "Security"
];

const resourceTypes = [
  "All Types",
  "Blog",
  "Whitepaper", 
  "Case Study",
  "Guide"
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSelectedType] = useState("All Types");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    const matchesType = selectedType === "All Types" || post.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Blog": return "bg-blue-500/20 text-blue-400 border-blue-400/30";
      case "Whitepaper": return "bg-purple-500/20 text-purple-400 border-purple-400/30";
      case "Case Study": return "bg-green-500/20 text-green-400 border-green-400/30";
      case "Guide": return "bg-orange-500/20 text-orange-400 border-orange-400/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-400/30";
    }
  };

  return (
    <div className="min-h-screen bg-retro-dark">
      {/* Hero Section */}
      <SmoothScrollAnimation>
        <section className="pt-32 pb-20 bg-gradient-to-br from-retro-dark via-brand-gray to-retro-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Insights & Knowledge</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              For those who have a passion for knowledge and information. Explore our latest insights, 
              case studies, and industry expertise to stay ahead of the digital curve.
            </p>
          </div>
        </section>
      </SmoothScrollAnimation>

      {/* Filters & Search */}
      <SmoothScrollAnimation animation="slide-up" delay={200}>
        <section className="py-8 bg-brand-gray/50 sticky top-24 z-40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles, authors, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-retro-gray border-gray-600 text-white placeholder-gray-400 focus:border-neon-cyan"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-neon-cyan text-black hover:bg-neon-cyan/90"
                        : "border-gray-600 text-gray-300 hover:border-neon-cyan hover:text-neon-cyan"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Type Filter */}
              <div className="flex flex-wrap gap-2">
                {resourceTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className={`transition-all duration-300 ${
                      selectedType === type
                        ? "bg-neon-pink text-black hover:bg-neon-pink/90"
                        : "border-gray-600 text-gray-300 hover:border-neon-pink hover:text-neon-pink"
                    }`}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SmoothScrollAnimation>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <SmoothScrollAnimation 
                  key={post.id} 
                  animation="fade-in" 
                  delay={index * 100}
                >
                  <Card className="bg-retro-gray border-gray-700 overflow-hidden group hover:border-neon-cyan transition-all duration-500 hover:shadow-glow hover:shadow-neon-cyan/20 hover-lift">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`border ${getTypeColor(post.type)}`}>
                          {post.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                          {post.category}
                        </Badge>
                        
                        <Link to={`/insights/${post.slug}`}>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-neon-cyan hover:text-white hover:bg-neon-cyan/10 transition-all duration-300 group-hover:translate-x-1"
                          >
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </SmoothScrollAnimation>
              ))}
            </div>
          ) : (
            <SmoothScrollAnimation>
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-400 mb-4">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
              </div>
            </SmoothScrollAnimation>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;