import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface SmoothScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'bounce-in' | 'scale' | 'rotate-in' | 'flip-in' | 'elastic';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  staggerDelay?: number;
}

export const SmoothScrollAnimation: React.FC<SmoothScrollAnimationProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  duration = 600,
  className,
  threshold = 0.1,
  triggerOnce = true,
  staggerDelay = 0,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold, triggerOnce });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all';
    const durationClass = `duration-${Math.round(duration / 100) * 100}`;
    const easing = animation === 'elastic' ? 'ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]' : 
                   animation === 'bounce-in' ? 'ease-[cubic-bezier(0.25,0.46,0.45,0.94)]' : 
                   'ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-in':
          return `${baseClasses} ${easing} ${durationClass} opacity-0 translate-y-8`;
        case 'slide-up':
          return `${baseClasses} ${easing} ${durationClass} opacity-0 translate-y-16`;
        case 'slide-down':
          return `${baseClasses} ${easing} ${durationClass} opacity-0 -translate-y-16`;
        case 'slide-left':
          return `${baseClasses} ${easing} ${durationClass} opacity-0 translate-x-16`;
        case 'slide-right':
          return `${baseClasses} ${easing} ${durationClass} opacity-0 -translate-x-16`;
        case 'bounce-in':
          return `${baseClasses} ${easing} ${durationClass} opacity-0 scale-75 translate-y-8`;
        case 'scale':
          return `${baseClasses} ${easing} ${durationClass} opacity-0 scale-75`;
        case 'rotate-in':
          return `${baseClasses} ${easing} ${durationClass} opacity-0 scale-75 rotate-12`;
        case 'flip-in':
          return `${baseClasses} ${easing} ${durationClass} opacity-0 perspective-1000 rotateY-90`;
        case 'elastic':
          return `${baseClasses} ${easing} ${durationClass} opacity-0 scale-50 translate-y-12`;
        default:
          return `${baseClasses} ${easing} ${durationClass} opacity-0`;
      }
    } else {
      return `${baseClasses} ${easing} ${durationClass} opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0`;
    }
  };

  const totalDelay = delay + staggerDelay;
  const style = totalDelay > 0 ? { transitionDelay: `${totalDelay}ms` } : {};

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