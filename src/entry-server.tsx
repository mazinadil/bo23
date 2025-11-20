import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ssrPrepass from 'react-ssr-prepass';
import App from './App';
import { getBlogPostDetails } from './lib/blogService';

export async function render(url: string) {
  // Preload all lazy-loaded page components to ensure they render during SSG
  await Promise.all([
    import('./pages/Home'),
    import('./pages/About'),
    import('./pages/Services'),
    import('./pages/Events'),
    import('./pages/Contact'),
    import('./pages/Blog'),
    import('./pages/BlogPost'),
    import('./pages/BlogCategory'),
    import('./pages/Clients'),
    import('./pages/Privacy'),
    import('./pages/Terms'),
    import('./pages/events/Corporate'),
    import('./pages/events/Weddings'),
    import('./pages/events/Parties'),
    import('./pages/events/Proposals'),
    import('./pages/services/OutdoorCinema'),
    import('./pages/services/Karaoke'),
    import('./pages/services/SilentHeadsets'),
    import('./pages/services/DanceFloors'),
    import('./pages/services/LedLetters'),
    import('./pages/services/Entertainment'),
    import('./pages/services/Photobooth'),
    import('./pages/services/SoundLighting'),
    import('./pages/services/entertainment/Magicians'),
    import('./pages/services/entertainment/Comedians'),
    import('./pages/services/entertainment/DJs'),
    import('./pages/services/entertainment/Emcees'),
    import('./pages/services/entertainment/Dancers'),
    import('./pages/services/entertainment/Bands'),
    import('./pages/services/entertainment/Singers'),
    import('./pages/services/entertainment/Saxophonists'),
    import('./pages/services/photobooth/Booth360'),
    import('./pages/services/photobooth/OriginalBooth'),
    import('./pages/services/photobooth/MirrorBooth'),
    import('./pages/services/photobooth/MirrorBoothBackdrop'),
    import('./pages/services/silent-headsets/SilentDisco'),
    import('./pages/services/silent-headsets/CorporateHeadsets'),
    import('./pages/services/silent-headsets/SilentYoga'),
    import('./pages/services/sound-lighting/FestoonLights'),
  ]);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });

  // Prefetch blog post data for SSR if it's a blog post URL
  const blogPostMatch = url.match(/^\/([^/]+)\/([^/]+)$/);
  if (blogPostMatch) {
    const [, category, slug] = blogPostMatch;
    
    // Skip if it's a known static route (not a blog post)
    const staticRoutes = new Set(['about', 'blog', 'clients', 'contact', 'privacy', 'terms', 'events', 'services']);
    if (!staticRoutes.has(category)) {
      try {
        const postData = await getBlogPostDetails(slug);
        if (postData) {
          // Populate React Query cache with the fetched data
          queryClient.setQueryData(['blogPost', slug], postData);
        }
      } catch (error) {
        console.warn(`⚠️  Failed to prefetch blog post ${slug}:`, error);
      }
    }
  }

  const helmetContext = {};

  const appTree = (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );

  const reactInternals = (React as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  const dispatcherRef = {
    target: null as any,
    original: undefined as any,
  };

  const ensureInsertionEffect = () => {
    const currentDispatcher = reactInternals?.ReactCurrentDispatcher?.current;
    if (!currentDispatcher) return;

    if (!dispatcherRef.target) {
      dispatcherRef.target = currentDispatcher;
      dispatcherRef.original = currentDispatcher.useInsertionEffect;
    }

    if (!currentDispatcher.useInsertionEffect) {
      currentDispatcher.useInsertionEffect = currentDispatcher.useEffect ?? (() => {});
    }
  };

  ensureInsertionEffect();

  try {
    await ssrPrepass(appTree, ensureInsertionEffect);
  } finally {
    if (dispatcherRef.target) {
      dispatcherRef.target.useInsertionEffect = dispatcherRef.original;
    }
  }

  const html = ReactDOMServer.renderToString(appTree);
  
  // Extract helmet data after render
  const { helmet } = (helmetContext as any) || {};

  return {
    appHtml: html,
    helmet: {
      title: helmet?.title?.toString?.() ?? '',
      meta: helmet?.meta?.toString?.() ?? '',
      link: helmet?.link?.toString?.() ?? '',
      script: helmet?.script?.toString?.() ?? '',
      noscript: helmet?.noscript?.toString?.() ?? '',
    },
  };

}
