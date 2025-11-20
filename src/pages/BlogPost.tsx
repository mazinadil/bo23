import { Helmet } from "react-helmet-async";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useBlogPost } from "@/lib/blogService";

const BlogPost = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const navigate = useNavigate();

  const {
    data: postData,
    isLoading,
    isError,
  } = useBlogPost(slug);

  const post = postData?.post;
  const previousPost = postData?.previousPost ?? null;
  const nextPost = postData?.nextPost ?? null;
  const relatedPosts = postData?.relatedPosts ?? [];

  // Redirect to 404 if post doesn't exist
  useEffect(() => {
    if (!category || !slug) return;
    if (!isLoading && (isError || (!postData && !post))) {
      navigate("/404", { replace: true });
    }
  }, [category, slug, post, postData, isLoading, isError, navigate]);

  // Always render Helmet with fallback values for SSR
  const pageTitle = post?.title || "Loading...";
  const pageDescription = post?.metaDescription || "Box Entertainment Dubai Blog";
  const pageImage = post?.featuredImage?.src || "https://box-sparkle-site.vercel.app/images/og-image.jpg";
  const pageCanonical = post?.canonicalUrl || `https://box-sparkle-site.vercel.app${category ? `/${category}/${slug}` : `/blog/${slug}`}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Box Entertainment Dubai Blog</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageCanonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${pageTitle} | Box Entertainment Dubai Blog`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageCanonical} />
        {post?.dateIso && <meta property="article:published_time" content={new Date(post.dateIso).toISOString()} />}
        {post?.author.name && <meta property="article:author" content={post.author.name} />}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${pageTitle} | Box Entertainment Dubai Blog`} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {post && (
        <>
          <StructuredData data={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.featuredImage?.src,
            "datePublished": new Date(post.dateIso).toISOString(),
            "dateModified": new Date(post.dateIso).toISOString(),
            "author": {
              "@type": "Person",
              "name": post.author.name,
              "jobTitle": post.author.role
            },
            "publisher": {
              "@type": "Organization",
              "name": "Box Entertainment",
              "logo": {
                "@type": "ImageObject",
                "url": "https://boxentertainment.ae/box-logo.png"
              }
            },
            "description": post.metaDescription,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": post.canonicalUrl
            }
          }} />
          <StructuredData data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://boxentertainment.ae"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://boxentertainment.ae/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.category.name,
                "item": `https://boxentertainment.ae/${post.category.slug}`
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": post.title
              }
            ]
          }} />
        </>
      )}

      {isLoading && !post ? (
        <div className="py-32">
          <LoadingSpinner />
        </div>
      ) : !post ? null : (
        <main id="main-content" className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-12 lg:py-20 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={post.featuredImage?.src ?? "/images/services/entertainment-hero-bg.webp"} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
            </div>
            
            <div className="container relative z-10 mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <Breadcrumbs items={[
                  { label: "Blog", href: "/blog" },
                  { label: post.category.name, href: `/${post.category.slug}` },
                  { label: post.title }
                ]} />
                
                <Link 
                  to={`/${post.category.slug}`}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {post.category.name}
                </Link>

                <div className="mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold ${post.category.color} text-white rounded-full`}>
                    {post.category.name}
                  </span>
                </div>

                <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <div>
                      <span className="font-semibold text-foreground">{post.author.name}</span>
                      {post.author.role && (
                        <span className="text-xs block">{post.author.role}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.dateFormatted}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Area */}
          <section className="pb-12 lg:pb-16">
            <div className="container mx-auto px-4 lg:px-8">
              <article className="max-w-4xl mx-auto wp-article">
                {post.leadImage && (
                  <figure className="wp-lead-image">
                    <img
                      src={post.leadImage.src}
                      alt={post.leadImage.alt ?? post.title}
                      className="w-full rounded-lg object-cover"
                      loading="lazy"
                    />
                  </figure>
                )}

                <div
                  className="wp-content"
                  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
              </article>
            </div>
          </section>

          {/* Author Bio */}
          <section className="py-12 border-y border-border">
            <div className="container mx-auto px-4 lg:px-8">
              <Card className="max-w-4xl mx-auto border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold mb-1">
                        {post.author.name}
                      </h3>
                      {post.author.role && (
                        <p className="text-sm text-primary mb-3">{post.author.role}</p>
                      )}
                      {post.author.bio && (
                        <p className="text-muted-foreground leading-relaxed">
                          {post.author.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Post Navigation */}
          {(previousPost || nextPost) && (
            <section className="py-12">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                  {previousPost ? (
                    <Link to={`/${previousPost.category.slug}/${previousPost.slug}`}>
                      <Card className="h-full hover-lift transition-all duration-300 border-border/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <ChevronLeft className="w-4 h-4" />
                            <span>Previous Post</span>
                          </div>
                          <h3 className="font-heading font-semibold text-lg hover:text-primary transition-colors">
                            {previousPost.title}
                          </h3>
                        </CardContent>
                      </Card>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextPost && (
                    <Link to={`/${nextPost.category.slug}/${nextPost.slug}`}>
                      <Card className="h-full hover-lift transition-all duration-300 border-border/50 backdrop-blur-sm">
                        <CardContent className="p-6 text-right">
                          <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-3">
                            <span>Next Post</span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <h3 className="font-heading font-semibold text-lg hover:text-primary transition-colors">
                            {nextPost.title}
                          </h3>
                        </CardContent>
                      </Card>
                    </Link>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
              <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-12 text-center">
                  You Might Also <span className="gradient-text">Like</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <article key={relatedPost.id} className="group">
                      <Card className="h-full overflow-hidden hover-lift transition-all duration-300 border-border/50 backdrop-blur-sm">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={relatedPost.featuredImage?.src ?? "/images/services/entertainment-hero-bg.webp"} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 text-xs font-semibold ${relatedPost.category.color} text-white rounded-full`}>
                              {relatedPost.category.name}
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{relatedPost.dateFormatted}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {relatedPost.excerptText}
                          </p>
                          <Link 
                            to={`/${relatedPost.category.slug}/${relatedPost.slug}`}
                            className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                          >
                            Read More →
                          </Link>
                        </CardContent>
                      </Card>
                    </article>
                  ))}
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
      )}
    </>
  );
};

export default BlogPost;
