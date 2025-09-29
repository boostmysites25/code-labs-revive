import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  User,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Clock,
  Tag,
  Loader2,
} from "lucide-react";
import SmoothScrollAnimation from "@/components/SmoothScrollAnimation";
import {
  getBlogBySlug,
  getPublishedBlogs,
  type BlogPost,
} from "@/services/blogApi";

// Helper function to get type color
const getTypeColor = (type: string) => {
  switch (type) {
    case "Blog":
      return "bg-blue-500/20 text-blue-400 border-blue-400/30";
    case "Whitepaper":
      return "bg-purple-500/20 text-purple-400 border-purple-400/30";
    case "Case Study":
      return "bg-green-500/20 text-green-400 border-green-400/30";
    case "Guide":
      return "bg-orange-500/20 text-orange-400 border-orange-400/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-400/30";
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Fetch the specific blog post
  const {
    data: blogData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getBlogBySlug(slug!),
    enabled: !!slug,
  });

  // Fetch related articles (other blogs)
  const { data: relatedBlogsData } = useQuery({
    queryKey: ["related-blogs"],
    queryFn: getPublishedBlogs,
  });

  const post = blogData?.blog;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-retro-dark flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-neon-cyan mx-auto mb-4" />
          <p className="text-gray-400">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-retro-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The article you're looking for doesn't exist.
          </p>
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

  // Get related articles (exclude current post)
  const relatedArticles =
    relatedBlogsData?.blogs
      ?.filter((blog) => blog._id !== post._id)
      ?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-retro-dark">
      {/* Back Navigation */}
      <SmoothScrollAnimation>
        <div className="pt-8 pb-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/insights">
              <Button
                variant="ghost"
                className="text-neon-cyan hover:text-white hover:bg-neon-cyan/10 mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Insights
              </Button>
            </Link>
          </div>
        </div>
      </SmoothScrollAnimation>

      {/* Article Header */}
      <SmoothScrollAnimation animation="fade-in" delay={200}>
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Hero Image */}
          <div className="aspect-video mb-8 rounded-xl overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.imageAlt || post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan">
              Blog
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              {post.categoryId.name}
            </Badge>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
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
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                const text = encodeURIComponent(post.title);
                window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
              }}
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                const title = encodeURIComponent(post.title);
                const summary = encodeURIComponent(post.excerpt);
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`, '_blank', 'width=600,height=400');
              }}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
              }}
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={async () => {
                try {
                  if (navigator.share) {
                    await navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    // Fallback: Copy to clipboard
                    await navigator.clipboard.writeText(window.location.href);
                    // You could add a toast notification here
                    alert('Link copied to clipboard!');
                  }
                } catch (error) {
                  console.error('Error sharing:', error);
                  // Fallback: Copy to clipboard
                  try {
                    await navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  } catch (clipboardError) {
                    console.error('Clipboard not available:', clipboardError);
                  }
                }
              }}
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <div className="html-reset" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-12 pb-8 border-b border-gray-700">
              <Tag className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400 mr-2">Tags:</span>
              {post.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-gray-600 text-gray-400"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </article>
      </SmoothScrollAnimation>

      {/* Related Articles */}
      {relatedArticles.length !== 0 && (
        <SmoothScrollAnimation animation="slide-up" delay={400}>
          <section className="bg-brand-gray/30 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Related <span className="gradient-text">Articles</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((article, index) => (
                  <SmoothScrollAnimation
                    key={article._id}
                    animation="fade-in"
                    delay={index * 100}
                  >
                    <Card className="bg-retro-gray border-gray-700 overflow-hidden group hover:border-neon-cyan transition-all duration-500 hover-lift">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={article.imageUrl}
                          alt={article.imageAlt || article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan">
                            Blog
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                          {article.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="text-xs border-gray-600 text-gray-400 mb-4"
                        >
                          {article.categoryId.name}
                        </Badge>
                        <Link to={`/insights/${article.slug}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-neon-cyan hover:text-white hover:bg-neon-cyan/10 w-full"
                          >
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
      )}
    </div>
  );
};

export default BlogPost;
