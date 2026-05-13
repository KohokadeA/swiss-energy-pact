'use client';

import React, { ReactNode, useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const style: React.CSSProperties = {};
  if (delay > 0) {
    style.transitionDelay = `${delay}s`;
  }
  if (duration !== 0.7) {
    style.transitionDuration = `${duration}s`;
  }

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
