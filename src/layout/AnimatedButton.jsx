import { motion as _motion} from 'framer-motion';

const AnimatedButton = ({ title }) => (
  <_motion.button
    className="btn-class" // apply your button styles here
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
  >
    {title}
  </_motion.button>
);

export default AnimatedButton;
