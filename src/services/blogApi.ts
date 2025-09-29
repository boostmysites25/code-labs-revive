const API_BASE_URL = 'https://blogplatform-backend-cloudinary-zeta.vercel.app';

export interface BlogAuthor {
  _id: string;
  name: string;
}

export interface BlogCategory {
  _id: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  authorId: BlogAuthor;
  categoryId: BlogCategory;
  tags: string[];
  excerpt: string;
  imageAlt: string;
  isFeatured: boolean;
  author: BlogAuthor;
  metaDescription: string;
  metaKeywords: string[];
  imageUrl: string;
  status: string;
  publishDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface BlogsResponse {
  success: boolean;
  blogs: BlogPost[];
  totalCount: number;
  currentPage: number;
  totalPages: number | null;
}

export interface BlogResponse {
  success: boolean;
  blog: BlogPost;
}

// Get all published blogs
export const getPublishedBlogs = async (): Promise<BlogsResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/blogs/published`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  
  return response.json();
};

// Get blog by slug
export const getBlogBySlug = async (slug: string): Promise<BlogResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/blogs/slug/${slug}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  
  return response.json();
};
