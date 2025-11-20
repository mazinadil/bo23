const DEV_PROXY_BASE = "/wp-json";
const DEFAULT_WP_API_BASE = "https://boxentertainment.ae/wp-json";
const isDev = import.meta.env.DEV;

const rawEnvBase = (import.meta.env.VITE_WP_API_BASE ?? "").trim().replace(/\/$/, "");
const resolvedBase = rawEnvBase || DEFAULT_WP_API_BASE;

const shouldUseProxy =
  isDev &&
  (import.meta.env.VITE_WP_USE_PROXY ?? "true") !== "false" &&
  (!rawEnvBase || rawEnvBase.startsWith("http"));

const API_BASE = shouldUseProxy ? DEV_PROXY_BASE : resolvedBase;

if (!API_BASE) {
  throw new Error(
    "WordPress API base URL could not be resolved. Provide VITE_WP_API_BASE or update DEFAULT_WP_API_BASE."
  );
}

const defaultHeaders: HeadersInit = {
  Accept: "application/json",
};

export interface WpRenderedField {
  rendered: string;
}

export interface WpYoastHeadJson {
  title?: string;
  description?: string;
  canonical?: string;
  og_title?: string;
  og_description?: string;
  og_image?: Array<{ url: string }>;
  article_published_time?: string;
  article_modified_time?: string;
}

export interface WpAuthor {
  id: number;
  name: string;
  slug: string;
  description: string;
  url: string;
  avatar_urls?: Record<string, string>;
}

export interface WpMediaSize {
  source_url: string;
  width: number;
  height: number;
  mime_type: string;
}

export interface WpMediaDetails {
  width?: number;
  height?: number;
  sizes?: Record<string, WpMediaSize>;
}

export interface WpMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  source_url: string;
  media_details?: WpMediaDetails;
  alt_text?: string;
}

export interface WpCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  parent: number;
  taxonomy?: string;
  yoast_head_json?: WpYoastHeadJson;
}

export interface WpPost {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WpRenderedField;
  content: WpRenderedField;
  excerpt: WpRenderedField;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Record<string, unknown>;
  categories: number[];
  tags: number[];
  yoast_head?: string;
  yoast_head_json?: WpYoastHeadJson;
  _embedded?: {
    author?: WpAuthor[];
    "wp:featuredmedia"?: WpMedia[];
    "wp:term"?: Array<WpCategory[]>;
  };
}

interface FetchResult<T> {
  data: T;
  response: Response;
}

type QueryValue = string | number | boolean | undefined | null;

const encodeQuery = (params: Record<string, QueryValue> = {}) =>
  Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join("&");

async function requestWp<T>(
  path: string,
  params?: Record<string, QueryValue>,
  init?: RequestInit
): Promise<FetchResult<T>> {
  const cacheBustingParams = {
    _cb: isDev ? Date.now() : Math.floor(Date.now() / 60000),
  };
  const queryString = encodeQuery({ ...params, ...cacheBustingParams });
  const url = `${API_BASE}${path}${queryString ? `?${queryString}` : ""}`;

  const headers = new Headers(defaultHeaders);
  if (init?.headers) {
    new Headers(init.headers).forEach((value, key) => {
      headers.set(key, value);
    });
  }

  if (isDev) {
    headers.set("Cache-Control", "no-cache");
    headers.set("Pragma", "no-cache");
  }

  const response = await fetch(url, {
    ...init,
    cache: isDev ? "no-store" : init?.cache,
    headers,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText} - ${body}`);
  }

  const data = (await response.json()) as T;
  return { data, response };
}

export interface FetchPostsParams {
  page?: number;
  perPage?: number;
  search?: string;
  categories?: number | number[];
  excludeSticky?: boolean;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  totalPages: number;
}

const normalizeCategoriesParam = (value?: number | number[]) => {
  if (!value) return undefined;
  if (Array.isArray(value)) {
    return value.join(",");
  }
  return value;
};

export async function fetchPosts(params: FetchPostsParams = {}): Promise<PaginatedResult<WpPost>> {
  const { data, response } = await requestWp<WpPost[]>("/wp/v2/posts", {
    _embed: true,
    page: params.page ?? 1,
    per_page: params.perPage ?? 10,
    search: params.search,
    categories: normalizeCategoriesParam(params.categories),
    sticky: params.excludeSticky ? 0 : undefined,
    orderby: "date",
    order: "desc",
  });

  return {
    items: data,
    total: Number(response.headers.get("X-WP-Total") ?? data.length),
    totalPages: Number(response.headers.get("X-WP-TotalPages") ?? 1),
  };
}

export async function fetchPostBySlug(slug: string): Promise<WpPost | null> {
  const { data } = await requestWp<WpPost[]>("/wp/v2/posts", {
    slug,
    _embed: true,
    per_page: 1,
  });

  return data.length > 0 ? data[0] : null;
}

export async function fetchCategories(): Promise<WpCategory[]> {
  const results: WpCategory[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const { data, response } = await requestWp<WpCategory[]>("/wp/v2/categories", {
      page,
      per_page: 100,
      hide_empty: false,
    });

    results.push(...data);
    totalPages = Number(response.headers.get("X-WP-TotalPages") ?? totalPages);
    page += 1;
  }

  return results;
}
