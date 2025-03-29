import { motion } from 'framer-motion';

// Define animation variants outside the component
const cardVariants = {
  active: {
    // Dynamic box-shadow animation (pulse)
    boxShadow: [ // Keyframes for the pulse effect
      "0 0 15px 3px rgba(100, 108, 255, 0.5)", // Mid-glow (start/end)
      "0 0 25px 6px rgba(100, 108, 255, 0.7)", // Peak glow
      "0 0 15px 3px rgba(100, 108, 255, 0.5)", // Mid-glow (start/end)
    ],
    transition: {
      boxShadow: {
        duration: 1.5,      // Duration of one pulse cycle
        repeat: Infinity,  // Loop indefinitely
        ease: "easeInOut", // Smooth easing for the pulse
        // repeatType: "mirror" // If you want it to go glow->dim->glow (mirror is default for keyframes > 2)
      }
    }
  },
  inactive: {
    boxShadow: "0 0 0px 0px rgba(100, 108, 255, 0)", // No glow
    transition: {
       boxShadow: { duration: 0.3, ease: "easeOut" } // Fade out glow quickly
    }
  }
};

// Added isReflection prop
function CategoryCard({ title, description, imageSrc, isActive, isReflection }) {
  return (
    <motion.div
      className="w-72 h-72 overflow-hidden rounded-lg shadow-md dark:shadow-black/40" // Slightly increased base shadow
      style={{ transform: 'translateZ(0)' }}
      variants={cardVariants}
      animate={isActive && !isReflection ? "active" : "inactive"} // Only animate border if active AND not a reflection
      // layout // Consider adding if layout shifts occur during animation
    >
      <div className="h-full relative">
        <motion.img
          src={imageSrc}
          alt={isReflection ? '' : title} // Alt text not needed for decorative reflection
          className="w-full h-full object-cover"
          // Disable image hover effect for reflections
          whileHover={isReflection ? {} : { scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        {/* Hide text overlay for reflections for cleaner look */}
        {!isReflection && (
           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white">
             <h3 className="text-lg font-semibold mb-1">{title}</h3>
             <p className={`text-sm transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-75'}`}>{description}</p>
           </div>
         )}
      </div>
    </motion.div>
  );
}

export default CategoryCard;