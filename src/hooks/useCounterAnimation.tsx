import { useState, useEffect } from "react";

interface UseCounterAnimationProps {
  target: number;
  duration?: number;
  start?: boolean;
  suffix?: string;
}

export const useCounterAnimation = ({
  target,
  duration = 2000,
  start = false,
  suffix = "",
}: UseCounterAnimationProps): string => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out-quart easing function
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easedProgress * target);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [start, target, duration]);

  return `${count}${suffix}`;
};
