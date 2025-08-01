// src/components/CourseCard.jsx
import React from 'react';
import Button from '../layout/Button';


const CourseCard = ({ title, description, onClick }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full border-2 border-gray-100 hover:shadow-2xl transition duration-300 hover:border-green-600">
    <div>
      <h3 className="text-2xl font-semibold mb-3 text-brightGreen">{title}</h3>
      <p className="text-lightText mb-6">{description}</p>
    </div>
    <Button title="Learn More" onClick={onClick} />
  </div>
);

export default CourseCard;
