import React, { useState } from "react";

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleStarMouseEnter = (index) => {
    setHoverRating(index + 1);
  };

  const handleStarMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((star, index) => (
        <svg
          key={index}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => handleStarMouseEnter(index)}
          onMouseLeave={handleStarMouseLeave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < (hoverRating || rating) ? "gold" : "gray"}
          className="w-8 h-8 cursor-pointer"
        >
          <path d="M12 .587l3.668 7.568L24 9.75l-6 5.947L19.335 24 12 19.896 4.665 24 6 15.697 0 9.75l8.332-1.595z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
