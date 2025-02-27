import { Component, useRef } from 'react';
import styles from '@/styles/Sbc.module.css';
import LeftScrollButtons from '@/components/LeftScrollButtons';
import RightScrollButtons from '@/components/RightScrollButtons';
import { Typography } from '@mui/material';

interface ScrollContainerProps {
  title: string;
  content: React.ReactElement<Component>;
}

export default function ScrollContainer({
  title,
  content,
}: ScrollContainerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.container}>
      <Typography
        component="h1"
        className="font-roboto text-2xl font-extrabold tracking-wide mb-6"
        color="info"
      >
        {title}
      </Typography>

      <div className="relative w-3/5 max-xl:w-11/12 px-1">
        {/* Scrollable container */}
        <div ref={scrollContainerRef} className={styles.companyCard}>
          {content}
        </div>

        {/* Left Arrow */}
        <LeftScrollButtons onClick={() => scroll('left')} />

        {/* Right Arrow */}
        <RightScrollButtons onClick={() => scroll('right')} />
      </div>
    </div>
  );
}
