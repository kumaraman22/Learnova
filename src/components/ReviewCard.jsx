import React from 'react';

const ReviewCard = ({ avatar, name, review, stars }) => (
  <div className="flex flex-col items-center bg-white rounded-lg shadow-lg px-6 py-4 mx-4 min-w-[260px] max-w-[320px]">
    <img
      src={avatar}
      alt={name}
      className="w-14 h-14 rounded-md  mb-3 border-2 border-brightGreen object-cover"
    />
    <div className="flex items-center mb-2">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg
          key={idx}
          className={`w-5 h-5 ${idx < stars ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.967z" />
        </svg>
      ))}
    </div>
    <p className="text-lightText text-center text-sm mb-2">"{review}"</p>
    <span className="text-brightGreen font-semibold text-sm">{name}</span>
  </div>
);

export default ReviewCard;
