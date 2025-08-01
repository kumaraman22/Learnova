import React from 'react';
import ReviewRow from './ReviewRow';

// Sample user data (replace with your own images)
const reviews1 = [
  {
    avatar: '/Amit.jpg',
    name: 'Amit Sharma',
    review: 'Learnova transformed my learning experience. The interactive courses are amazing!',
    stars: 5,
  }, 
  {
    avatar: '/Priya.jpg',
    name: 'Priya Singh',
    review: 'Great mentors and support. I cleared my exams with confidence.',
    stars: 4,
  },
  {
    avatar: '/Rahul.jpg',
    name: 'Rahul Verma',
    review: 'The AI/ML section is top-notch. Highly recommended!',
    stars: 5,
  },
  {
    avatar: '/Sneha.jpg',
    name: 'Sneha Patel',
    review: 'User-friendly interface and excellent content.',
    stars: 4,
  },
];

const reviews2 = [
  {
    avatar: '/Vikash.jpg',
    name: 'Vikas Kumar',
    review: 'Loved the app development tutorials. Very practical!',
    stars: 5,
  },
  {
    avatar: '/Neha.jpg',
    name: 'Neha Joshi',
    review: 'UX design course helped me land my first job.',
    stars: 5,
  },
  {
    avatar: '/Rohan.jpg',
    name: 'Rohan Mehta',
    review: 'Flexible learning and great community.',
    stars: 4,
  },
  {
    avatar: '/Divya.jpg',
    name: 'Divya Rao',
    review: 'Best platform for self-paced learning.',
    stars: 5,
  },
];

const ReviewSection = () => (
  <div id="reviews">
  <section className="w-full py-16 bg-gray-100">
    <h2 className="text-4xl md:text-5xl font-semibold text-center mb-10">
      What Our <span className="text-brightGreen">Learners Say</span>
    </h2>
    <div className="space-y-8">
      <ReviewRow reviews={reviews1} direction="left" duration={30} />
      <ReviewRow reviews={reviews2} direction="right" duration={32} />
    </div>
  </section>
  </div>
);

export default ReviewSection;
