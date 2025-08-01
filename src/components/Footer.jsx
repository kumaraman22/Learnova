import React from 'react';
import { Link } from 'react-scroll'; // Assuming you still want scroll links for internal navigation
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


const Footer = () => {
  return (
    <Section>
    <footer className="bg-gray-100 py-12 px-5 md:px-32 mt-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left Section: Learnova Info */}
        <div className="md:w-2/5 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-3xl font-semibold text-brightGreen mb-3">Learnova</h3>
          <p className="text-gray-700 leading-relaxed max-w-md">
            Empowering your learning journey with Learnova — the platform dedicated to enhancing knowledge and personal growth.
          </p>
        </div>

        {/* Right Section: Links */}
        <div className="flex flex-col md:flex-row md:gap-20 gap-8 items-center md:items-start">
          {/* Short Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="features" spy={true} smooth={true} duration={500} className="text-gray-600 hover:text-brightGreen transition-colors cursor-pointer">
                  Features
                </Link>
              </li>
              <li>
                <Link to="how-it-works" spy={true} smooth={true} duration={500} className="text-gray-600 hover:text-brightGreen transition-colors cursor-pointer">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="courses" spy={true} smooth={true} duration={500} className="text-gray-600 hover:text-brightGreen transition-colors cursor-pointer">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="testimonials" spy={true} smooth={true} duration={500} className="text-gray-600 hover:text-brightGreen transition-colors cursor-pointer">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Pages */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Other Pages</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-gray-600 hover:text-brightGreen transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions" className="text-gray-600 hover:text-brightGreen transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-600 hover:text-brightGreen transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm">
        <p>2025 &copy; Learnova. All rights reserved.</p>
        {/* You can add "Built in Framer" or "Get This Template" if applicable, otherwise remove */}
        {/* <p className="mt-2">Built with React & Tailwind CSS</p> */}
      </div>
    </footer>
    </Section>
  );
};

export default Footer;