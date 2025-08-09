import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface SmoothScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'bounce-in' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export const SmoothScrollAnimation: React.FC<SmoothScrollAnimationProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  duration = 600,
  className,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold, triggerOnce });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = `duration-${Math.round(duration / 100) * 100}`;
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-in':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
        case 'slide-up':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-12`;
        case 'slide-down':
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-12`;
        case 'slide-left':
          return `${baseClasses} ${durationClass} opacity-0 translate-x-12`;
        case 'slide-right':
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-12`;
        case 'bounce-in':
          return `${baseClasses} ${durationClass} opacity-0 scale-75 translate-y-8`;
        case 'scale':
          return `${baseClasses} ${durationClass} opacity-0 scale-90`;
        default:
          return `${baseClasses} ${durationClass} opacity-0`;
      }
    } else {
      return `${baseClasses} ${durationClass} opacity-100 translate-x-0 translate-y-0 scale-100`;
    }
  };

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={elementRef}
      className={cn(getAnimationClasses(), className)}
      style={style}
    >
      {children}
    </div>
  );
};

export default SmoothScrollAnimation;