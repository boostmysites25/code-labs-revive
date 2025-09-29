import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Share2, Twitter, Linkedin, Facebook, Clock, Tag } from "lucide-react";
import SmoothScrollAnimation from "@/components/SmoothScrollAnimation";

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
    image: "/assets/services/AI Analytics Dashboard.webp",
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
    image: "/assets/services/Mobile Banking App.webp",
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
  }
};

// Related articles
const relatedArticles = [
  {
    id: 3,
    title: "E-Commerce Platform Modernization: Case Study",
    category: "Technology & Media",
    type: "Case Study",
    image: "/assets/services/E-Commerce Platform.webp",
    slug: "ecommerce-modernization-case-study"
  },
  {
    id: 4,
    title: "Cloud Migration Strategies for Enterprise Applications",
    category: "Cloud Engineering", 
    type: "Guide",
    image: "/assets/services/Corporate Website.webp",
    slug: "cloud-migration-strategies"
  },
  {
    id: 5,
    title: "Mobile-First Design: The Future of User Experience",
    category: "UI/UX Design",
    type: "Blog",
    image: "/assets/services/E-Commerce Mobile App.webp",
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