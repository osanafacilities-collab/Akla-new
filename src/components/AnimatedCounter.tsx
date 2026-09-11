import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number; // duration in seconds
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  autoRestartOnView?: boolean;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2.2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
  autoRestartOnView = true,
}) => {
  const [count, setCount] = useState<number>(from);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startAnimation();
          if (!autoRestartOnView) {
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [to, from, duration, autoRestartOnView]);

  const startAnimation = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    setIsRunning(true);
    const startTime = performance.now();
    // Allow either milliseconds (> 30) or seconds (<= 30)
    const durationMs = duration > 30 ? duration : duration * 1000;

    // Smooth Quintic Ease-Out curve for refined deceleration
    const easeOutQuint = (x: number): number => {
      return 1 - Math.pow(1 - x, 4);
    };

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOutQuint(progress);
      
      const currentVal = from + (to - from) * easedProgress;
      setCount(currentVal);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        setCount(to);
        setIsRunning(false);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  const calculatedDecimals = decimals > 0 
    ? decimals 
    : (to % 1 !== 0 ? 1 : 0);

  const formattedValue = calculatedDecimals > 0 
    ? count.toFixed(calculatedDecimals) 
    : Math.round(count).toLocaleString();

  return (
    <span 
      ref={elementRef} 
      className={`inline-flex items-baseline font-mono tracking-tight select-none transition-transform duration-200 ${
        isRunning ? 'scale-[1.02]' : 'scale-100'
      } ${className}`}
    >
      {prefix && <span>{prefix}</span>}
      <span className="tabular-nums font-heading">{formattedValue}</span>
      {suffix && <span className="text-[#C89B3C] ml-0.5">{suffix}</span>}
    </span>
  );
};
