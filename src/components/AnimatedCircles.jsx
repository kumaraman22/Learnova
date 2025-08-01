import { motion as _motion } from "framer-motion";

const circles = [
  // You can add more or tweak these as you like!
  {
    className: "bg-gradient-to-br from-green-400 via-green-200 to-blue-300",
    size: "w-40 h-40 md:w-72 md:h-72", // Tailwind
    style: { left: "5%", top: "10%" },
    delay: 0,
  },
  {
    className: "bg-gradient-to-br from-pink-300 via-purple-200 to-indigo-200",
    size: "w-24 h-24 md:w-52 md:h-52",
    style: { right: "10%", top: "30%" },
    delay: 0.3,
  },
  {
    className: "bg-gradient-to-br from-yellow-300 via-orange-200 to-pink-200",
    size: "w-32 h-32 md:w-60 md:h-60",
    style: { left: "60%", bottom: "5%" },
    delay: 0.6,
  },
];

export default function AnimatedCircles() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[-2]">
      {circles.map((c, i) => (
        <_motion.div
          key={i}
          className={`absolute ${c.size} rounded-full blur-2xl opacity-60 ${c.className}`}
          style={c.style}
          initial={{ scale: 0.9, y: 0 }}
          animate={{ 
            scale: [0.9, 1.1, 0.9], 
            y: [0, 40, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            delay: c.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
