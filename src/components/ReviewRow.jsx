import React, { useRef, useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const ReviewRow = ({ reviews, direction = "left", duration = 30 }) => {
  const [rowWidth, setRowWidth] = useState(0);
  const rowRef = useRef();

  useEffect(() => {
    if (rowRef.current) {
      setRowWidth(rowRef.current.scrollWidth);
    }
  }, [reviews]);

  // Set animation class based on direction
  const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="overflow-x-hidden w-full py-2 relative">
      <div
        className={`flex gap-6 ${animationClass}`}
        style={{
          width: rowWidth ? `${rowWidth * 2}px` : 'auto',
          animationDuration: `${duration}s`,
        }}
      >
        <div ref={rowRef} className="flex gap-6">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
        <div className="flex gap-6">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx + reviews.length} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewRow;
