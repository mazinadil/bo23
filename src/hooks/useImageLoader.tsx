import { useEffect, useState } from "react";

interface UseImageLoaderReturn {
  isLoaded: boolean;
  error: boolean;
}

export const useImageLoader = (src: string | undefined): UseImageLoaderReturn => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      setIsLoaded(true);
      return;
    }

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setError(true);
      setIsLoaded(true); // Still set to loaded to show fallback
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { isLoaded, error };
};
