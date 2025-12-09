import { useState, useRef, useMemo, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const observerOptions = useMemo(
    () => ({
      threshold: 0.01,
      rootMargin: '0px',
      ...options,
    }),
    [options]
  );

  useEffect(() => {
    // Disable on mobile - always show content immediately
    if (isMobile) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, observerOptions);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [observerOptions, isMobile]);

  return { ref, isVisible };
};
