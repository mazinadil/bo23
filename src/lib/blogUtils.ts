import { blogPosts, blogCategories, type BlogPost, type BlogCategory } from "@/data/blogPosts";

// Get blog post by category slug and post slug
export const getBlogPostBySlug = (categorySlug: string, postSlug: string): BlogPost | undefined => {
  return blogPosts.find(
    post => post.categorySlug === categorySlug && post.slug === postSlug
  );
};

// Get all posts in a category
export const getPostsByCategory = (categorySlug: string): BlogPost[] => {
  return blogPosts.filter(post => post.categorySlug === categorySlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Get category by slug
export const getCategoryBySlug = (slug: string): BlogCategory | undefined => {
  return blogCategories.find(cat => cat.slug === slug);
};

// Get all categories with post counts
export const getAllCategoriesWithCounts = () => {
  return blogCategories.map(category => ({
    ...category,
    postCount: blogPosts.filter(post => post.categorySlug === category.slug).length
  }));
};

// Get recent posts (all categories)
export const getRecentPosts = (limit: number = 6): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Get next post in same category
export const getNextPostInCategory = (currentId: number, categorySlug: string): BlogPost | null => {
  const categoryPosts = getPostsByCategory(categorySlug);
  const currentIndex = categoryPosts.findIndex(post => post.id === currentId);
  
  if (currentIndex === -1 || currentIndex === categoryPosts.length - 1) {
    return null;
  }
  
  return categoryPosts[currentIndex + 1];
};

// Get previous post in same category
export const getPreviousPostInCategory = (currentId: number, categorySlug: string): BlogPost | null => {
  const categoryPosts = getPostsByCategory(categorySlug);
  const currentIndex = categoryPosts.findIndex(post => post.id === currentId);
  
  if (currentIndex === -1 || currentIndex === 0) {
    return null;
  }
  
  return categoryPosts[currentIndex - 1];
};

// Get related posts (same category, exclude current, limit 3)
export const getRelatedPosts = (currentId: number, categorySlug: string, limit: number = 3): BlogPost[] => {
  return getPostsByCategory(categorySlug)
    .filter(post => post.id !== currentId)
    .slice(0, limit);
};
