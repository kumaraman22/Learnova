import React from 'react';
import {Link} from "react-scroll";
import Button from '../layout/Button';
import img from '../assets/IT 1.png';
import {motion as _motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCircles from './AnimatedCircles';

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


const Home = ()=>{
    return(   
        <Section>
        <div className="min-h-[60vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10 md:mt-10">
          <AnimatedCircles/>

      {/* <div className="absolute z-[-1] left-1/2 top-0 -translate-x-1/2 md:top-12 w-[340px] h-[340px] md:w-[500px] md:h-[500px] 
                    rounded-full bg-gradient-to-br from-green-200 via-white to-green-400 
                    blur-2xl opacity-70 shadow-2xl" /> */}

    <div className="md:w-2/4 text-center">
        <h2 className="text-6xl font-semibold leading-tight">Knowledge with</h2>
        <span className="text-5xl font-semibold text-brightGreen">Learnova</span>
        <p className="text-lightText mt-5 text-center">
            Empower your learning journey with Learnova — the platform dedicated to enhancing knowledge and personal growth. 
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
            <a href="#"><Button title="Get Started"></Button></a>
        </Link>
    </div>
    <div className="w-full md:w-2/4">
        <img src={img} alt="img" />
    </div>
</div>

        </Section>
    )
}

export default Home;