import { motion } from 'framer-motion';
import { useState } from 'react';

// Define animation variants outside the component
const cardVariants = {
  active: {
    boxShadow: [
      "0 10px 30px rgba(0, 139, 213, 0.3)",
      "0 15px 40px rgba(0, 139, 213, 0.5)",
      "0 10px 30px rgba(0, 139, 213, 0.3)",
    ],
    scale: 1,
    transition: {
      boxShadow: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
      scale: {
        duration: 0.3,
      }
    }
  },
  inactive: {
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    scale: 0.98,
    transition: {
      boxShadow: { duration: 0.3, ease: "easeOut" },
      scale: { duration: 0.3 }
    }
  }
};

// Added isReflection prop
function CategoryCard({ title, description, imageSrc, isActive, isReflection }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-72 h-72 overflow-hidden rounded-2xl shadow-lg relative group"
      style={{ transform: 'translateZ(0)' }}
      variants={cardVariants}
      animate={isActive && !isReflection ? "active" : "inactive"}
      onHoverStart={() => !isReflection && setIsHovered(true)}
      onHoverEnd={() => !isReflection && setIsHovered(false)}
      whileHover={isReflection ? {} : { y: -8 }}
    >
      {/* Subtle gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/5 to-transparent z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive && !isReflection && isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="h-full relative">
        <motion.img
          src={imageSrc}
          alt={isReflection ? '' : title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered && !isReflection ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Text overlay - positioned inside the card over the image */}
        {!isReflection && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-black/90 dark:via-black/40 dark:to-transparent flex flex-col justify-end p-6 z-20">
            <motion.h3 
              className="text-xl font-bold mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              animate={{
                y: isHovered ? -3 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-sm text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed"
              animate={{
                opacity: isActive || isHovered ? 1 : 0.95,
                y: isHovered ? -3 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>
            
            {/* Decorative accent line at top */}
            {isActive && (
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />
            )}
          </div>
        )}
        
        {/* Decorative corner element - only show on active */}
        {!isReflection && isActive && (
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg z-30"
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: 1,
              rotate: isHovered ? 360 : 0,
            }}
            transition={{
              scale: { duration: 0.4, type: "spring" },
              rotate: { duration: 0.6 }
            }}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default CategoryCard;