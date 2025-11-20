import { Helmet } from "react-helmet-async";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useBlogCategories, useBlogPosts } from "@/lib/blogService";
import LoadingSpinner from "@/components/LoadingSpinner";
import * as Icons from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BlogCategory = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const {
    data: categoriesData,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useBlogCategories();

  const categoryData = useMemo(
    () => categoriesData?.find((cat) => cat.slug === category),
    [categoriesData, category]
  );

  const {
    data: postsData,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useBlogPosts(
    { page: currentPage, perPage: postsPerPage, categoryId: categoryData?.id },
    { enabled: Boolean(categoryData?.id) }
  );

  const totalPages = useMemo(
    () => postsData?.totalPages ?? 1,
    [postsData?.totalPages]
  );

  const posts = postsData?.items ?? [];
  const otherCategories = useMemo(
    () => (categoriesData ?? []).filter((cat) => cat.slug !== category),
    [categoriesData, category]
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('category-posts-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Redirect to 404 if category doesn't exist
  useEffect(() => {
    if (!category) {
      return;
    }

    if (!isCategoriesLoading && !isCategoriesError && !categoryData) {
      navigate("/404", { replace: true });
    }
  }, [category, categoryData, isCategoriesLoading, isCategoriesError, navigate]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  if (!categoryData && (isCategoriesLoading || isCategoriesError)) {
    return (
      <div className="py-32">
        <LoadingSpinner />
      </div>
    );
  }

  if (!categoryData) {
    return null;
  }

  const IconComponent = (Icons as any)[categoryData.icon] || Icons.Sparkles;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${categoryData.name} Articles | Box Entertainment Blog`,
    "description": categoryData.description,
    "url": `https://boxentertainment.ae/${categoryData.slug}`,
    "isPartOf": {
      "@type": "Blog",
      "name": "Box Entertainment Blog"
    }
  };

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: categoryData.name }
  ];

  const isLoadingPosts = isPostsLoading && !postsData;
  const hasPostsError = isPostsError;
  const totalPosts = postsData?.total ?? 0;

  return (
    <>
      <Helmet>
        <title>{categoryData.name} Articles | Box Entertainment Dubai Blog</title>
        <meta name="description" content={categoryData.metaDescription} />
        <link rel="canonical" href={`https://boxentertainment.ae/${categoryData.slug}`} />
      </Helmet>

      <StructuredData data={collectionSchema} />

      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/images/services/entertainment-hero-bg.webp" 
              alt={categoryData.name}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs items={breadcrumbItems} />
              
              <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg ${categoryData.color} bg-opacity-10`}>
                  <IconComponent className={`w-8 h-8 ${categoryData.color.replace('bg-', 'text-')}`} />
                </div>
                <h1 className="text-4xl lg:text-6xl font-heading font-bold">
                  {categoryData.name}
                </h1>
              </div>
              
              <p className="text-lg lg:text-xl text-muted-foreground mb-4">
                {categoryData.description}
              </p>
              
              <p className="text-sm text-muted-foreground">
                {totalPosts} {totalPosts === 1 ? 'article' : 'articles'}
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section id="category-posts-section" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            {hasPostsError && (
              <div className="py-16 text-center text-muted-foreground">
                Unable to load posts for this category right now. Please try again later.
              </div>
            )}

            {isLoadingPosts && (
              <div className="py-16">
                <LoadingSpinner />
              </div>
            )}

            {!isLoadingPosts && !hasPostsError && posts.length === 0 && (
              <div className="py-16 text-center text-muted-foreground">
                No articles found in this category yet. Check back soon for new updates.
              </div>
            )}

            {!isLoadingPosts && !hasPostsError && posts.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <article key={post.id} className="group">
                      <Card className="h-full overflow-hidden hover-lift transition-all duration-300 border-border/50 backdrop-blur-sm">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={post.featuredImage?.src ?? "/images/services/entertainment-hero-bg.webp"} 
                            alt={post.featuredImage?.alt ?? post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
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
                          <Link 
                            to={`/${post.category.slug}/${post.slug}`}
                            className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                          >
                            Read More →
                          </Link>
                        </CardContent>
                      </Card>
                    </article>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                            className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                          />
                        </PaginationItem>
                        
                        {[...Array(totalPages)].map((_, index) => {
                          const pageNumber = index + 1;
                          if (
                            pageNumber === 1 ||
                            pageNumber === totalPages ||
                            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                          ) {
                            return (
                              <PaginationItem key={pageNumber}>
                                <PaginationLink
                                  onClick={() => handlePageChange(pageNumber)}
                                  isActive={currentPage === pageNumber}
                                  className="cursor-pointer"
                                >
                                  {pageNumber}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                            return <PaginationItem key={pageNumber}><PaginationEllipsis /></PaginationItem>;
                          }
                          return null;
                        })}
                        
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Other Categories Section */}
        {otherCategories.length > 0 && (
          <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-8 text-center">
                Explore Other <span className="gradient-text">Categories</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherCategories.map((cat) => {
                  const CatIcon = (Icons as any)[cat.icon] || Icons.Sparkles;
                  return (
                    <Link key={cat.slug} to={`/${cat.slug}`}>
                      <Card className="hover-lift transition-all duration-300 border-border/50 backdrop-blur-sm h-full">
                        <CardContent className="p-6 text-center">
                          <div className={`inline-flex p-4 rounded-lg ${cat.color} bg-opacity-10 mb-4`}>
                            <CatIcon className={`w-8 h-8 ${cat.color.replace('bg-', 'text-')}`} />
                          </div>
                          <h3 className="font-heading font-semibold text-xl mb-2">{cat.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {cat.description}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {cat.count ?? 0} {(cat.count ?? 0) === 1 ? "post" : "posts"}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

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
    </>
  );
};

export default BlogCategory;
