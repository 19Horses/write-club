import { useState, useRef, useMemo, useEffect } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const observerOptions = useMemo(
    () => ({
      threshold: 0.01,
      rootMargin: '0px',
      ...options,
    }),
    [options]
  );

  useEffect(() => {
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
  }, [observerOptions]);

  return { ref, isVisible };
};
