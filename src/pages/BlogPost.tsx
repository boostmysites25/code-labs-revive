import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Share2, Twitter, Linkedin, Facebook, Clock, Tag } from "lucide-react";
import SmoothScrollAnimation from "@/components/SmoothScrollAnimation";

// Import images
import aiIntegrationImg from "@/assets/ai-integration-service.jpg";
import mobileDevImg from "@/assets/mobile-development-service.jpg";
import webDevImg from "@/assets/web-development-service.jpg";
import apiDevImg from "@/assets/api-development-service.jpg";
import uiuxImg from "@/assets/uiux-design-service.jpg";
import aboutInnovationImg from "@/assets/about-innovation.jpg";

// Extended blog data with full content
const blogPostsData: { [key: string]: any } = {
  "digital-transformation-healthcare-guide": {
    id: 1,
    title: "Digital Transformation in Healthcare: A Complete Guide",
    excerpt: "Exploring how digital technologies are revolutionizing patient care, operational efficiency, and medical research in the healthcare industry.",
    author: "Dr. Sarah Chen",
    date: "2024-03-15",
    category: "Healthcare & Lifesciences",
    type: "Blog",
    image: aiIntegrationImg,
    readTime: "8 min read",
    content: `
      <p>The healthcare industry is undergoing a profound digital transformation that is reshaping how care is delivered, managed, and experienced. From telemedicine platforms to AI-powered diagnostics, digital technologies are creating unprecedented opportunities to improve patient outcomes while reducing costs.</p>

      <h2>Key Areas of Digital Transformation</h2>
      
      <h3>1. Electronic Health Records (EHR) Modernization</h3>
      <p>Modern EHR systems are moving beyond simple digitization of paper records. Today's platforms integrate with multiple healthcare systems, provide real-time analytics, and support clinical decision-making through advanced algorithms.</p>
      
      <h3>2. Telemedicine and Remote Care</h3>
      <p>The COVID-19 pandemic accelerated the adoption of telemedicine, but its benefits extend far beyond pandemic response. Remote monitoring, virtual consultations, and digital therapeutics are becoming standard components of comprehensive care delivery.</p>
      
      <h3>3. AI and Machine Learning Applications</h3>
      <p>Artificial intelligence is revolutionizing medical imaging, drug discovery, and predictive analytics. Machine learning models can now detect diseases earlier and more accurately than traditional methods in many cases.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Successful digital transformation in healthcare requires a strategic approach that considers both technological capabilities and human factors. Organizations must prioritize user experience, data security, and regulatory compliance while driving innovation.</p>
      
      <h3>Best Practices for Implementation</h3>
      <ul>
        <li>Start with pilot programs in controlled environments</li>
        <li>Invest in staff training and change management</li>
        <li>Ensure robust cybersecurity measures</li>
        <li>Maintain focus on patient safety and data privacy</li>
        <li>Establish clear ROI metrics and monitoring systems</li>
      </ul>
      
      <h2>Future Outlook</h2>
      <p>The future of healthcare technology promises even more exciting developments, including personalized medicine based on genetic data, blockchain-secured health records, and Internet of Medical Things (IoMT) ecosystems that provide continuous health monitoring.</p>
      
      <p>Organizations that embrace digital transformation today will be better positioned to deliver superior patient care while achieving operational excellence in an increasingly competitive healthcare landscape.</p>
    `,
    tags: ["Digital Transformation", "Healthcare", "EHR", "Telemedicine", "AI in Healthcare"]
  },
  "ai-integration-financial-services": {
    id: 2,
    title: "AI Integration Best Practices for Financial Services",
    excerpt: "Learn how artificial intelligence is transforming risk assessment, fraud detection, and customer service in the financial sector.",
    author: "Michael Rodriguez",
    date: "2024-03-12",
    category: "Financial Services",
    type: "Whitepaper",
    image: mobileDevImg,
    readTime: "12 min read",
    content: `
      <p>The financial services industry is at the forefront of AI adoption, leveraging machine learning and artificial intelligence to enhance security, improve customer experience, and streamline operations. This comprehensive guide explores the most effective strategies for AI integration in financial institutions.</p>

      <h2>Core AI Applications in Financial Services</h2>
      
      <h3>Fraud Detection and Prevention</h3>
      <p>AI-powered fraud detection systems can analyze thousands of transaction patterns in real-time, identifying suspicious activities with unprecedented accuracy. These systems continuously learn from new data, adapting to evolving fraud techniques.</p>
      
      <h3>Risk Assessment and Credit Scoring</h3>
      <p>Machine learning models can evaluate creditworthiness using alternative data sources beyond traditional credit scores, enabling more inclusive lending while maintaining risk management standards.</p>
      
      <h3>Algorithmic Trading</h3>
      <p>AI algorithms can process market data, news, and economic indicators to execute trades at optimal times, often outperforming human traders in speed and consistency.</p>
      
      <h2>Implementation Framework</h2>
      
      <h3>Data Strategy</h3>
      <p>Successful AI implementation begins with a robust data strategy. Financial institutions must ensure data quality, establish governance frameworks, and implement appropriate security measures.</p>
      
      <h3>Regulatory Compliance</h3>
      <p>AI systems in finance must comply with strict regulatory requirements including explainability, fairness, and auditability. Financial institutions must work closely with regulators to ensure compliance.</p>
      
      <h3>Technology Infrastructure</h3>
      <p>Modern AI applications require scalable cloud infrastructure, real-time data processing capabilities, and robust security frameworks to handle sensitive financial data.</p>
      
      <h2>Measuring Success</h2>
      <p>Key performance indicators for AI in financial services include fraud reduction rates, customer satisfaction scores, operational efficiency improvements, and regulatory compliance metrics.</p>
      
      <p>The future of financial services lies in the thoughtful integration of AI technologies that enhance human capabilities while maintaining the trust and security that customers expect from their financial institutions.</p>
    `,
    tags: ["AI", "Financial Services", "Fraud Detection", "Risk Assessment", "RegTech"]
  },
  "ecommerce-modernization-case-study": {
    id: 3,
    title: "E-Commerce Platform Modernization: Case Study",
    excerpt: "How we helped a retail giant increase their online sales by 300% through comprehensive digital platform transformation.",
    author: "Emma Thompson",
    date: "2024-03-10",
    category: "Technology & Media",
    type: "Case Study",
    image: webDevImg,
    readTime: "10 min read",
    content: `
      <p>This case study examines how our team successfully modernized a legacy e-commerce platform for a major retail client, resulting in a 300% increase in online sales and significantly improved customer experience.</p>

      <h2>The Challenge</h2>
      <p>Our client, a well-established retailer with over 50 years in business, was struggling with an outdated e-commerce platform that couldn't keep up with modern consumer expectations. The existing system suffered from slow loading times, poor mobile responsiveness, and limited scalability.</p>
      
      <h3>Key Problems Identified</h3>
      <ul>
        <li>Page load times averaging 8-12 seconds</li>
        <li>Mobile conversion rate 60% lower than desktop</li>
        <li>Frequent system crashes during peak traffic</li>
        <li>Limited personalization capabilities</li>
        <li>Poor search functionality</li>
      </ul>
      
      <h2>Our Solution</h2>
      <p>We implemented a comprehensive modernization strategy focusing on performance, user experience, and scalability. The solution included migrating to a modern tech stack, implementing advanced caching strategies, and redesigning the user interface with mobile-first principles.</p>
      
      <h3>Technology Stack</h3>
      <p>We selected cutting-edge technologies including React for the frontend, Node.js for the backend, and implemented a microservices architecture with Docker containers deployed on AWS cloud infrastructure.</p>
      
      <h2>Results Achieved</h2>
      <ul>
        <li>Page load times reduced from 8-12 seconds to under 2 seconds</li>
        <li>Mobile conversion rate increased by 85%</li>
        <li>Overall online sales increased by 300%</li>
        <li>System uptime improved to 99.9%</li>
        <li>Customer satisfaction scores increased by 40%</li>
      </ul>
      
      <p>The successful modernization not only improved immediate business metrics but also positioned the client for future growth with a scalable, maintainable platform that can adapt to evolving market demands.</p>
    `,
    tags: ["E-Commerce", "Modernization", "Performance", "Mobile-First", "Case Study"]
  },
  "cloud-migration-strategies": {
    id: 4,
    title: "Cloud Migration Strategies for Enterprise Applications",
    excerpt: "A comprehensive guide to migrating legacy systems to cloud infrastructure while maintaining security and performance.",
    author: "David Kim",
    date: "2024-03-08",
    category: "Cloud Engineering",
    type: "Guide",
    image: apiDevImg,
    readTime: "15 min read",
    content: `
      <p>Cloud migration has become a critical initiative for enterprises looking to modernize their IT infrastructure, reduce costs, and improve scalability. This comprehensive guide outlines proven strategies for successfully migrating legacy applications to the cloud.</p>

      <h2>Migration Strategies Overview</h2>
      
      <h3>The 6 R's of Cloud Migration</h3>
      <ul>
        <li><strong>Rehost (Lift and Shift):</strong> Moving applications as-is to the cloud</li>
        <li><strong>Replatform:</strong> Making minor optimizations during migration</li>
        <li><strong>Refactor:</strong> Re-architecting applications for cloud-native capabilities</li>
        <li><strong>Retire:</strong> Decommissioning applications that are no longer needed</li>
        <li><strong>Retain:</strong> Keeping certain applications on-premises</li>
        <li><strong>Repurchase:</strong> Moving to a different product, typically SaaS</li>
      </ul>
      
      <h2>Pre-Migration Assessment</h2>
      <p>Before beginning any migration, organizations must conduct a thorough assessment of their current infrastructure, applications, and business requirements. This includes evaluating application dependencies, performance requirements, and security considerations.</p>
      
      <h3>Key Assessment Areas</h3>
      <ul>
        <li>Application inventory and dependency mapping</li>
        <li>Performance baseline establishment</li>
        <li>Security and compliance requirements</li>
        <li>Cost analysis and ROI projections</li>
        <li>Risk assessment and mitigation strategies</li>
      </ul>
      
      <h2>Implementation Best Practices</h2>
      <p>Successful cloud migration requires careful planning, phased execution, and continuous monitoring. Organizations should start with less critical applications to build experience and confidence before migrating mission-critical systems.</p>
      
      <h3>Security Considerations</h3>
      <p>Security must be built into every stage of the migration process. This includes implementing proper identity and access management, encryption at rest and in transit, and continuous security monitoring.</p>
      
      <p>With proper planning and execution, cloud migration can deliver significant benefits including reduced operational costs, improved scalability, and enhanced disaster recovery capabilities.</p>
    `,
    tags: ["Cloud Migration", "Enterprise", "AWS", "Security", "Infrastructure"]
  },
  "mobile-first-design-future": {
    id: 5,
    title: "Mobile-First Design: The Future of User Experience",
    excerpt: "Understanding why mobile-first approach is critical for modern applications and how to implement it effectively.",
    author: "Lisa Wang",
    date: "2024-03-05",
    category: "UI/UX Design",
    type: "Blog",
    image: uiuxImg,
    readTime: "7 min read",
    content: `
      <p>Mobile-first design has evolved from a trend to a necessity in today's digital landscape. With mobile traffic accounting for over 50% of global web traffic, designing for mobile devices first is no longer optional—it's essential for business success.</p>

      <h2>Why Mobile-First Matters</h2>
      <p>The mobile-first approach prioritizes the constraints and opportunities of mobile devices, leading to cleaner, more focused designs that work seamlessly across all screen sizes. This methodology forces designers to prioritize content and functionality, resulting in better user experiences.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li>Improved performance on mobile devices</li>
        <li>Better search engine optimization</li>
        <li>Increased conversion rates</li>
        <li>Enhanced user engagement</li>
        <li>Future-proofing for new device types</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      
      <h3>Progressive Enhancement</h3>
      <p>Start with a core experience that works on the most constrained devices, then enhance the experience for larger screens and more capable devices. This ensures accessibility and performance across all platforms.</p>
      
      <h3>Touch-First Interactions</h3>
      <p>Design interactions primarily for touch input, considering finger size, gesture patterns, and one-handed usage scenarios. This creates more intuitive interfaces that work well on both mobile and desktop.</p>
      
      <h3>Performance Optimization</h3>
      <p>Mobile-first design inherently promotes performance optimization through careful resource management, lazy loading, and efficient code practices that benefit all users.</p>
      
      <h2>Design Principles</h2>
      <ul>
        <li>Prioritize content hierarchy and essential features</li>
        <li>Use thumb-friendly navigation and interaction areas</li>
        <li>Optimize images and media for mobile bandwidth</li>
        <li>Implement responsive typography that scales appropriately</li>
        <li>Design for various network conditions and device capabilities</li>
      </ul>
      
      <p>By embracing mobile-first design principles, organizations can create user experiences that not only meet current user expectations but also adapt to the evolving digital landscape.</p>
    `,
    tags: ["Mobile-First", "UX Design", "Responsive Design", "User Experience", "Web Design"]
  },
  "cybersecurity-framework-guide": {
    id: 6,
    title: "Cybersecurity Framework Implementation Guide",
    excerpt: "Essential steps to protect your organization from cyber threats with comprehensive security framework implementation.",
    author: "Alex Johnson",
    date: "2024-03-01",
    category: "Security",
    type: "Whitepaper",
    image: aboutInnovationImg,
    readTime: "18 min read",
    content: `
      <p>In an era of increasing cyber threats, implementing a comprehensive cybersecurity framework is crucial for protecting organizational assets, maintaining customer trust, and ensuring business continuity. This guide provides a structured approach to cybersecurity framework implementation.</p>

      <h2>Understanding Cybersecurity Frameworks</h2>
      <p>Cybersecurity frameworks provide structured guidelines for identifying, protecting, detecting, responding to, and recovering from cyber threats. Popular frameworks include NIST, ISO 27001, and CIS Controls, each offering unique perspectives on security management.</p>
      
      <h3>NIST Cybersecurity Framework</h3>
      <p>The NIST framework organizes cybersecurity activities into five concurrent and continuous functions: Identify, Protect, Detect, Respond, and Recover. This framework is widely adopted due to its flexibility and comprehensive coverage.</p>
      
      <h2>Implementation Phases</h2>
      
      <h3>Phase 1: Current State Assessment</h3>
      <p>Begin by conducting a thorough assessment of existing security measures, identifying vulnerabilities, and understanding the organization's risk profile. This baseline assessment is critical for measuring improvement.</p>
      
      <h3>Phase 2: Target State Definition</h3>
      <p>Define the desired security posture based on business requirements, regulatory obligations, and risk tolerance. This includes establishing security policies, procedures, and technical controls.</p>
      
      <h3>Phase 3: Gap Analysis and Prioritization</h3>
      <p>Compare the current state with the target state to identify gaps and prioritize remediation efforts based on risk impact and resource availability.</p>
      
      <h2>Key Implementation Areas</h2>
      <ul>
        <li>Identity and access management systems</li>
        <li>Network security and segmentation</li>
        <li>Endpoint protection and monitoring</li>
        <li>Data encryption and protection</li>
        <li>Incident response procedures</li>
        <li>Security awareness training programs</li>
      </ul>
      
      <h2>Measuring Success</h2>
      <p>Establish key performance indicators (KPIs) and metrics to measure the effectiveness of your cybersecurity program. Regular assessments and continuous improvement are essential for maintaining robust security posture.</p>
      
      <p>A well-implemented cybersecurity framework not only protects against current threats but also provides the foundation for adapting to emerging security challenges in an evolving threat landscape.</p>
    `,
    tags: ["Cybersecurity", "NIST Framework", "Security Implementation", "Risk Management", "Compliance"]
  }
};

// Related articles
const relatedArticles = [
  {
    id: 3,
    title: "E-Commerce Platform Modernization: Case Study",
    category: "Technology & Media",
    type: "Case Study",
    image: webDevImg,
    slug: "ecommerce-modernization-case-study"
  },
  {
    id: 4,
    title: "Cloud Migration Strategies for Enterprise Applications",
    category: "Cloud Engineering", 
    type: "Guide",
    image: apiDevImg,
    slug: "cloud-migration-strategies"
  },
  {
    id: 5,
    title: "Mobile-First Design: The Future of User Experience",
    category: "UI/UX Design",
    type: "Blog",
    image: uiuxImg,
    slug: "mobile-first-design-future"
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-retro-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/insights">
            <Button className="bg-neon-cyan text-black hover:bg-neon-cyan/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
      {/* Back Navigation */}
      <SmoothScrollAnimation>
        <div className="pt-32 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/insights">
              <Button variant="ghost" className="text-neon-cyan hover:text-white hover:bg-neon-cyan/10 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Insights
              </Button>
            </Link>
          </div>
        </div>
      </SmoothScrollAnimation>

      {/* Article Header */}
      <SmoothScrollAnimation animation="fade-in" delay={200}>
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Hero Image */}
          <div className="aspect-video mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className={`border ${getTypeColor(post.type)}`}>
              {post.type}
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              {post.category}
            </Badge>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-700">
            <span className="text-gray-400">Share:</span>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && (
            <div className="flex flex-wrap items-center gap-2 mb-12 pb-8 border-b border-gray-700">
              <Tag className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400 mr-2">Tags:</span>
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="border-gray-600 text-gray-400">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </article>
      </SmoothScrollAnimation>

      {/* Related Articles */}
      <SmoothScrollAnimation animation="slide-up" delay={400}>
        <section className="bg-brand-gray/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Related <span className="gradient-text">Articles</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <SmoothScrollAnimation key={article.id} animation="fade-in" delay={index * 100}>
                  <Card className="bg-retro-gray border-gray-700 overflow-hidden group hover:border-neon-cyan transition-all duration-500 hover-lift">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={`border ${getTypeColor(article.type)}`}>
                          {article.type}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                        {article.title}
                      </h3>
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-400 mb-4">
                        {article.category}
                      </Badge>
                      <Link to={`/insights/${article.slug}`}>
                        <Button variant="ghost" size="sm" className="text-neon-cyan hover:text-white hover:bg-neon-cyan/10 w-full">
                          Read Article
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </SmoothScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </SmoothScrollAnimation>
    </div>
  );
};

export default BlogPost;