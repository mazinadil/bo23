import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/wp-json": {
        target: "https://boxentertainment.ae",
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Generate hashed filenames for cache busting
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    
    // Enable CSS code splitting
    cssCodeSplit: true,
    
    // Minify for production
    minify: 'esbuild',
    
    // Source maps disabled for production performance
    sourcemap: false,
    
    // Asset handling - inline assets < 4kb as base64
    assetsInlineLimit: 4096,
  },
  ssr: {
    noExternal: ["react-helmet-async", "@tanstack/react-query"],
  },
}));
