import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { useBlogCategories, useBlogPosts } from "@/lib/blogService";
import * as Icons from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Box Entertainment Blog",
    "description": "Expert event planning tips, entertainment trends, and insights from Dubai's premier event company",
    "url": "https://boxentertainment.ae/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Box Entertainment",
      "logo": {
        "@type": "ImageObject",
        "url": "https://boxentertainment.ae/box-logo.png"
      }
    }
  };
  const {
    data: postsData,
    isLoading: isPostsLoading,
    isError: isPostsError
  } = useBlogPosts({
    page: currentPage,
    perPage: postsPerPage
  });
  const {
    data: categoriesData,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError
  } = useBlogCategories();
  const totalPages = useMemo(() => postsData?.totalPages ?? 1, [postsData?.totalPages]);
  const currentPosts = postsData?.items ?? [];
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('blog-posts-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  const isLoading = isPostsLoading && !postsData;
  const hasError = isPostsError || isCategoriesError;
  const categoriesWithCounts = categoriesData ?? [];
  const renderContent = () => {
    if (hasError) {
      return <div className="py-16 text-center text-muted-foreground">
          Unable to load blog posts at the moment. Please try again later.
        </div>;
    }
    if (isLoading) {
      return <div className="py-16">
          <LoadingSpinner />
        </div>;
    }
    if (currentPosts.length === 0) {
      return <div className="py-16 text-center text-muted-foreground">
          No blog posts available yet. Check back soon for new updates from Box Entertainment.
        </div>;
    }
    return <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map(post => <article key={post.id} className="group">
              <Card className="h-full overflow-hidden hover-lift transition-all duration-300 border-border/50 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.featuredImage?.src ?? "/images/services/entertainment-hero-bg.webp"} alt={post.featuredImage?.alt ?? post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold ${post.category.color} text-white rounded-full`}>
                      {post.category.name}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.dateFormatted}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerptText}
                  </p>
                  <Link to={`/${post.category.slug}/${post.slug}`} className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            </article>)}
        </div>

        {totalPages > 1 && <div className="flex justify-center mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)} className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'} />
                </PaginationItem>

                {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              if (pageNumber === 1 || pageNumber === totalPages || pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1) {
                return <PaginationItem key={pageNumber}>
                        <PaginationLink onClick={() => handlePageChange(pageNumber)} isActive={currentPage === pageNumber} className="cursor-pointer">
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>;
              } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                return <PaginationItem key={pageNumber}><PaginationEllipsis /></PaginationItem>;
              }
              return null;
            })}

                <PaginationItem>
                  <PaginationNext onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>}
      </>;
  };
  return <>
      <Helmet>
        <title>Blog | Box Entertainment Dubai - Event Tips & Insights</title>
        <meta name="description" content="Expert event planning tips, entertainment trends, and insights from Dubai's premier event company. Learn how to create unforgettable experiences." />
        <link rel="canonical" href="https://boxentertainment.ae/blog" />
      </Helmet>

      <StructuredData data={blogSchema} />

      <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/services/entertainment-hero-bg.webp" alt="Box Entertainment Blog" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">Expert insights, event planning tips, and the latest entertainment trends from Dubai's leading event professionals</p>
          </div>
        </div>
      </section>

        {/* Blog Posts Grid */}
        <section id="blog-posts-section" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            {renderContent()}
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-8 text-center">
              Browse by <span className="gradient-text">Category</span>
            </h2>
            {isCategoriesLoading && <div className="flex justify-center py-12">
                <LoadingSpinner />
              </div>}

            {!isCategoriesLoading && categoriesWithCounts.length === 0 && !hasError && <p className="text-center text-muted-foreground">
                Categories will appear here once blog posts are published.
              </p>}

            {!isCategoriesLoading && categoriesWithCounts.length > 0 && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoriesWithCounts.map(category => {
              const IconComponent = (Icons as any)[category.icon] || Icons.Sparkles;
              const iconColor = category.color?.startsWith("bg-") ? category.color.replace("bg-", "text-") : "text-primary";
              return <Link key={category.slug} to={`/${category.slug}`}>
                      <Card className="hover-lift transition-all duration-300 border-border/50 backdrop-blur-sm h-full">
                        <CardContent className="p-6 text-center">
                          <div className={`inline-flex p-4 rounded-lg ${category.color} bg-opacity-10 mb-4`}>
                            <IconComponent className={`w-8 h-8 ${iconColor}`} />
                          </div>
                          <h3 className="font-heading font-semibold text-xl mb-2">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {category.count ?? 0} {(category.count ?? 0) === 1 ? "post" : "posts"}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>;
            })}
              </div>}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Plan Your <span className="gradient-text">Event?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our expert team bring your vision to life with unforgettable entertainment experiences
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
    </>;
};
export default Blog;