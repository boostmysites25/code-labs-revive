import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

// Helper hook for multiple elements
export const useScrollAnimationGroup = (count: number, options?: UseScrollAnimationOptions) => {
  const [visibleElements, setVisibleElements] = useState<boolean[]>(new Array(count).fill(false));
  const elementRefs = useRef<(HTMLElement | null)[]>(new Array(count).fill(null));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    elementRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            if (options?.triggerOnce !== false) {
              observer.unobserve(element);
            }
          } else if (options?.triggerOnce === false) {
            setVisibleElements(prev => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          }
        },
        {
          threshold: options?.threshold || 0.1,
          rootMargin: options?.rootMargin || '0px 0px -50px 0px',
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [count, options]);

  const setElementRef = (index: number) => (ref: HTMLElement | null) => {
    elementRefs.current[index] = ref;
  };

  return { setElementRef, visibleElements };
};