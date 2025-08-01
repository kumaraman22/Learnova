import React from 'react'
import CourseCard from './CourseCard';
import Button from '../layout/Button'
import {motion as _motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 , delay:0.3, } },
  };

  return (
    <_motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="" // optional
    >
      {children}
    </_motion.div>
  );
};



const courses = [
  {
    title: 'Web Development',
    description: 'Master HTML, CSS, JavaScript, React, and backend technologies to build modern web apps.',
  },
  {
    title: 'App Development',
    description: 'Learn to create mobile applications for Android and iOS using popular frameworks.',
  },
  {
    title: 'UX Design',
    description: 'Understand user experience principles, wireframing, prototyping, and usability testing.',
  },
  {
    title: 'AI / ML',
    description: 'Explore artificial intelligence and machine learning with hands-on projects and real data.',
  },
];

const Courses = ()=>{
    return(
      <div id = "courses">
      <Section>
        <div className="min-h-[70vh] md:mx-32 mx-5 mt-10">
    <h2 className="text-5xl font-semibold text-center mb-10">
      Explore Our <span className="text-brightGreen">Courses</span>
    </h2>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
      {courses.map((course) => (
  <CourseCard
    key={course.title}
    title={course.title}
    description={course.description}
    onClick={() => alert(`More info about ${course.title}`)}
  />
))}

    </div>
  </div>
  </Section>
        </div>
    )
}

export default Courses;