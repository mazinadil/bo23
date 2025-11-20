import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchPosts,
  fetchPostBySlug,
  fetchCategories,
  type WpPost,
  type WpCategory,
} from "@/lib/wordpressApi";
import {
  CATEGORY_PRESENTATION,
  DEFAULT_CATEGORY_PRESENTATION,
  type CategoryPresentation,
} from "@/config/blogCategories";

interface FeaturedImage {
  src: string;
  alt?: string;
}

export interface BlogCategoryInfo {
  id: number;
  slug: string;
  name: string;
  description?: string;
  icon: string;
  color: string;
  metaDescription?: string;
  count?: number;
}

export interface BlogPostSummary {
  id: number;
  slug: string;
  title: string;
  excerptHtml: string;
  excerptText: string;
  dateIso: string;
  dateFormatted: string;
  readTime: string;
  category: BlogCategoryInfo;
  featuredImage: FeaturedImage | null;
  canonicalUrl: string;
}

export interface BlogLeadImage {
  src: string;
  alt?: string;
}

export interface BlogAuthorInfo {
  name: string;
  bio?: string;
  avatarUrl?: string;
  role?: string;
}

export interface BlogPostDetails extends BlogPostSummary {
  contentHtml: string;
  leadImage?: BlogLeadImage | null;
  metaDescription?: string;
  yoast?: WpPost["yoast_head_json"];
  author: BlogAuthorInfo;
}

export interface BlogPostDetailsResult {
  post: BlogPostDetails;
  previousPost: BlogPostSummary | null;
  nextPost: BlogPostSummary | null;
  relatedPosts: BlogPostSummary[];
}

export interface BlogPostsResult {
  items: BlogPostSummary[];
  total: number;
  totalPages: number;
}

export interface BlogPostsQueryParams {
  page?: number;
  perPage?: number;
  categoryId?: number;
}

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const stripHtml = (html: string) =>
  html
    .replace(/<\/?(script|style)[^>]*>.*?<\/\1>/gims, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const calculateReadTime = (html: string) => {
  const text = stripHtml(html);
  const words = text.length > 0 ? text.split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

const normalizeLazyImages = (html: string) =>
  html.replace(/<img\b[^>]*>/gi, (tag) => {
    const getAttr = (name: string) => {
      const attrRegex = new RegExp(`${name}\\s*=\\s*["']([^"']+)["']`, "i");
      return attrRegex.exec(tag)?.[1];
    };

    const setAttr = (name: string, value: string) => {
      if (new RegExp(`${name}\\s*=`, "i").test(tag)) {
        return tag.replace(new RegExp(`${name}\\s*=\\s*["'][^"']*["']`, "i"), `${name}="${value}"`);
      }
      return tag.replace(/<img/i, `<img ${name}="${value}"`);
    };

    const extractFromSrcset = (value?: string | null) => {
      if (!value) return undefined;
      const firstCandidate = value.split(",")[0]?.trim();
      return firstCandidate?.split(" ")[0];
    };

    const dataSrc = getAttr("data-src") ?? getAttr("data-lazy-src") ?? getAttr("data-original") ?? getAttr("data-url");
    const dataSrcset = extractFromSrcset(getAttr("data-srcset") ?? getAttr("data-lazy-srcset"));
    const srcsetCandidate = extractFromSrcset(getAttr("srcset"));
    const rawSrc = getAttr("src");

    let resolvedSrc = dataSrc || dataSrcset || srcsetCandidate || rawSrc;

    if (resolvedSrc && resolvedSrc.startsWith("data:image")) {
      resolvedSrc = dataSrcset || srcsetCandidate || undefined;
    }

    let updatedTag = tag;
    if (resolvedSrc && resolvedSrc !== rawSrc) {
      updatedTag = setAttr("src", resolvedSrc);
    }

    const dataSrcsetAttr = getAttr("data-srcset") ?? getAttr("data-lazy-srcset");
    if (dataSrcsetAttr && !/\bsrcset\s*=/.test(updatedTag)) {
      updatedTag = setAttr("srcset", dataSrcsetAttr);
    }

    return updatedTag;
  });

const resolveCategoryPresentation = (
  category: WpCategory | undefined
): CategoryPresentation => {
  if (!category) {
    return DEFAULT_CATEGORY_PRESENTATION;
  }

  return {
    ...DEFAULT_CATEGORY_PRESENTATION,
    ...CATEGORY_PRESENTATION[category.slug],
  };
};

const mapCategory = (category: WpCategory | undefined): BlogCategoryInfo => {
  if (!category) {
    return {
      id: 0,
      slug: "blog",
      name: CATEGORY_PRESENTATION.blog?.name ?? "Blog",
      description:
        CATEGORY_PRESENTATION.blog?.description ??
        DEFAULT_CATEGORY_PRESENTATION.description,
      icon: CATEGORY_PRESENTATION.blog?.icon ?? DEFAULT_CATEGORY_PRESENTATION.icon,
      color:
        CATEGORY_PRESENTATION.blog?.color ?? DEFAULT_CATEGORY_PRESENTATION.color,
      metaDescription:
        CATEGORY_PRESENTATION.blog?.metaDescription ??
        DEFAULT_CATEGORY_PRESENTATION.metaDescription,
      count: undefined,
    };
  }

  const presentation = resolveCategoryPresentation(category);

  return {
    id: category.id,
    slug: category.slug,
    name: presentation.name ?? category.name,
    description: presentation.description ?? category.description,
    icon: presentation.icon ?? DEFAULT_CATEGORY_PRESENTATION.icon,
    color: presentation.color ?? DEFAULT_CATEGORY_PRESENTATION.color,
    metaDescription:
      presentation.metaDescription ??
      category.yoast_head_json?.description ??
      DEFAULT_CATEGORY_PRESENTATION.metaDescription,
    count: category.count,
  };
};

const extractPrimaryCategory = (post: WpPost): WpCategory | undefined => {
  const embeddedTerms = post._embedded?.["wp:term"] ?? [];

  for (const termGroup of embeddedTerms) {
    const category = termGroup.find((term) => term.taxonomy === "category");
    if (category) {
      return category;
    }
  }

  return undefined;
};

const extractFeaturedImage = (post: WpPost): FeaturedImage | null => {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (media && media.source_url) {
    return {
      src: media.media_details?.sizes?.medium_large?.source_url ?? media.source_url,
      alt: media.alt_text || media.slug || stripHtml(post.title.rendered),
    };
  }

  const firstImageMatch = post.content.rendered.match(/<img[^>]*>/i);
  if (firstImageMatch) {
    const imgTag = firstImageMatch[0];
    const getAttr = (name: string) => {
      const attrRegex = new RegExp(`${name}=["']([^"']+)["']`, "i");
      return attrRegex.exec(imgTag)?.[1];
    };

    const extractFromSrcset = (value?: string | null) => {
      if (!value) return undefined;
      const firstCandidate = value.split(",")[0]?.trim();
      return firstCandidate?.split(" ")[0];
    };

    const dataSrc = getAttr("data-src") ?? getAttr("data-lazy-src");
    const dataSrcset = extractFromSrcset(getAttr("data-srcset") ?? getAttr("data-lazy-srcset"));
    const srcset = extractFromSrcset(getAttr("srcset"));
    const rawSrc = getAttr("src");

    let resolvedSrc = dataSrc || dataSrcset || srcset || rawSrc || undefined;

    // Ignore placeholder gifs from lazy-loading when possible
    if (resolvedSrc && resolvedSrc.startsWith("data:image")) {
      resolvedSrc = dataSrc || dataSrcset || srcset || undefined;
    }

    if (resolvedSrc) {
      return {
        src: resolvedSrc,
        alt: getAttr("alt") || stripHtml(post.title.rendered),
      };
    }
  }

  return null;
};

const extractLeadImage = (html: string): BlogLeadImage | null => {
  const firstImageMatch = html.match(/<img[^>]*>/i);
  if (!firstImageMatch) {
    return null;
  }

  const imgTag = firstImageMatch[0];
  const getAttr = (name: string) => {
    const attrRegex = new RegExp(`${name}=["']([^"']+)["']`, "i");
    return attrRegex.exec(imgTag)?.[1];
  };

  const extractFromSrcset = (value?: string | null) => {
    if (!value) return undefined;
    const firstCandidate = value.split(",")[0]?.trim();
    return firstCandidate?.split(" ")[0];
  };

  const dataSrc = getAttr("data-src") ?? getAttr("data-lazy-src") ?? getAttr("data-original") ?? getAttr("data-url");
  const dataSrcset = extractFromSrcset(getAttr("data-srcset") ?? getAttr("data-lazy-srcset"));
  const srcsetCandidate = extractFromSrcset(getAttr("srcset"));
  const rawSrc = getAttr("src");

  let resolvedSrc = dataSrc || dataSrcset || srcsetCandidate || rawSrc || undefined;
  if (resolvedSrc && resolvedSrc.startsWith("data:image")) {
    resolvedSrc = dataSrcset || srcsetCandidate || undefined;
  }

  if (!resolvedSrc) {
    return null;
  }

  return {
    src: resolvedSrc,
    alt: getAttr("alt"),
  };
};

const removeFirstImage = (html: string): string => {
  let removed = false;
  return html.replace(/<img[^>]*>(?:\s*<\/figure>)?/i, (tag) => {
    if (removed) {
      return tag;
    }
    removed = true;
    return "";
  });
};

const mapPostSummary = (post: WpPost): BlogPostSummary => {
  const category = extractPrimaryCategory(post);
  const categoryInfo = mapCategory(category);
  const excerptHtml =
    normalizeLazyImages(post.excerpt.rendered ||
    post.yoast_head_json?.description ||
    post.yoast_head_json?.og_description ||
    post.content.rendered.slice(0, 280));
  const excerptText = stripHtml(excerptHtml);

  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title.rendered) || post.title.rendered,
    excerptHtml,
    excerptText,
    dateIso: post.date,
    dateFormatted: formatDate(post.date),
    readTime: calculateReadTime(post.content.rendered),
    category: categoryInfo,
    featuredImage: extractFeaturedImage(post),
    canonicalUrl: post.link,
  };
};

const mapPostDetails = (post: WpPost): BlogPostDetails => {
  const summary = mapPostSummary(post);
  const author = post._embedded?.author?.[0];
  const normalizedContent = normalizeLazyImages(post.content.rendered);
  const leadImage = extractLeadImage(normalizedContent);
  const contentWithoutLead = leadImage ? removeFirstImage(normalizedContent) : normalizedContent;

  return {
    ...summary,
    contentHtml: contentWithoutLead,
    leadImage,
    metaDescription:
      post.yoast_head_json?.description ||
      post.yoast_head_json?.og_description ||
      summary.excerptText,
    yoast: post.yoast_head_json,
    author: {
      name: author?.name ?? "Box Entertainment",
      bio: author?.description,
      avatarUrl: author?.avatar_urls?.["96"],
      role: undefined,
    },
  };
};

export const getBlogPosts = async (
  params: BlogPostsQueryParams
): Promise<BlogPostsResult> => {
  const { items, total, totalPages } = await fetchPosts({
    page: params.page,
    perPage: params.perPage,
    categories: params.categoryId,
    excludeSticky: true,
  });

  return {
    items: items.map(mapPostSummary),
    total,
    totalPages,
  };
};

export const getBlogPostDetails = async (
  slug: string
): Promise<BlogPostDetailsResult | null> => {
  const post = await fetchPostBySlug(slug);
  if (!post) {
    return null;
  }

  const detail = mapPostDetails(post);
  const categoryId = extractPrimaryCategory(post)?.id;

  if (!categoryId) {
    return {
      post: detail,
      previousPost: null,
      nextPost: null,
      relatedPosts: [],
    };
  }

  const { items } = await fetchPosts({
    categories: categoryId,
    perPage: 100,
    excludeSticky: true,
  });

  const siblings = items.map(mapPostSummary);
  const sorted = siblings.sort(
    (a, b) => new Date(b.dateIso).getTime() - new Date(a.dateIso).getTime()
  );
  const currentIndex = sorted.findIndex((item) => item.id === detail.id);

  const previousPost = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const nextPost =
    currentIndex !== -1 && currentIndex < sorted.length - 1
      ? sorted[currentIndex + 1]
      : null;
  const relatedPosts = sorted.filter((item) => item.id !== detail.id).slice(0, 3);

  return {
    post: detail,
    previousPost,
    nextPost,
    relatedPosts,
  };
};

export const getBlogCategories = async (): Promise<BlogCategoryInfo[]> => {
  const categories = await fetchCategories();

  return categories
    .map((category) => mapCategory(category))
    .sort((a, b) => (b.count ?? 0) - (a.count ?? 0));
};

export const useBlogPosts = (
  params: BlogPostsQueryParams,
  options?: { enabled?: boolean }
) => {
  const queryParams = useMemo(
    () => ({
      page: params.page ?? 1,
      perPage: params.perPage ?? 6,
      categoryId: params.categoryId,
    }),
    [params.page, params.perPage, params.categoryId]
  );

  return useQuery<BlogPostsResult>({
    queryKey: ["blogPosts", queryParams],
    queryFn: () => getBlogPosts(queryParams),
    placeholderData: (previousData) => previousData,
    enabled: options?.enabled ?? true,
  });
};

export const useBlogPost = (slug: string | undefined) =>
  useQuery<BlogPostDetailsResult | null>({
    queryKey: ["blogPost", slug],
    queryFn: () => (slug ? getBlogPostDetails(slug) : Promise.resolve(null)),
    enabled: Boolean(slug),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

export const useBlogCategories = () =>
  useQuery<BlogCategoryInfo[]>({
    queryKey: ["blogCategories"],
    queryFn: getBlogCategories,
  });
