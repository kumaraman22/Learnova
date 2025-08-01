import React from 'react';
import img from '../assets/learning.avif';
import Button from '../layout/Button'
import {Link} from "react-scroll";
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

const About = () =>{
    return (
      <div id="about">
      <Section>
        <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
            <div className="w-full order-2 md:order-1 md:w-2/4 mt-8 md:mt-0 flex justify-center">
        <img src={img} alt="About Learnova" className="rounded-lg shadow-lg max-h-[350px] object-cover" />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-2/4 order-1 md:order-2 text-center md:text-left " >
        <h2 className="text-5xl font-semibold leading-tight">
          About <span className="text-brightGreen">Learnova</span>
        </h2>
        <p className="text-lightText mt-5 text-start">
          Learnova is your trusted companion in the journey of knowledge. Our platform is designed to empower learners with interactive resources, expert guidance, and a supportive community. Whether you're preparing for exams or exploring new subjects, Learnova provides the tools and support you need to succeed.
        </p>
        <ul className="list-disc text-lightText mt-4 ml-5 text-start">
          <li>Interactive courses and quizzes</li>
          <li>Expert mentors and support</li>
          <li>Accessible anytime, anywhere</li>
        </ul>
        <Link to ="contact" spy ={true} smooth = {true} duration={500}>
            <Button title ="Know more"></Button>
        </Link>
      </div>
      {/* Image Section */}
      
    </div>
    </Section>
    </div>
    )
}

export default About;