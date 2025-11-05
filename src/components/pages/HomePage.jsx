import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../home/Hero';
import CategoryCard from '../home/CategoryCard';
import AboutSection from '../home/AboutSection';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// Import GIFs so Vite bundles them for production (avoids /src/ absolute paths)

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use files from the `public/gifs` folder so they are served from the site root in production.
  // Ensure you copy GIFs to `public/gifs` (see scripts/copy-gifs.ps1)
  const categories = [
      { title: 'Named Reactions', description: 'Explore famous chemical reactions...', imageSrc: '/gifs/named-reactions.gif', link: '/NamedReactionsPage' },
      { title: 'Protection Groups', description: 'Learn about chemical groups...', imageSrc: '/gifs/protection-reactions.gif', link: '/ProtectionGroupsPage' },
      { title: 'Purification Reactions', description: 'Techniques and methods...', imageSrc: '/gifs/purification-reactions.gif', link: '/PurificationReactionsPage' },
      { title: 'Common Reagents', description: 'Detailed information about reagents.', imageSrc: '/gifs/common-reagents.gif', link: '/CommonReagentsPage' },
      { title: 'Common Reactions', description: 'Essential organic reactions.', imageSrc: '/gifs/common-reactions.gif', link: '/CommonReactionsPage' },
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const numCategories = categories.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? numCategories - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === numCategories - 1 ? 0 : prevIndex + 1
    );
  };

  const cardWidth = 288; // w-72
  const reflectionHeightRatio = 0.5; // Reflection will be 50% of card height
  const reflectionGap = 4; // Small gap between card and reflection (adjust as needed)

  const gap = 40;
  const scaleFactor = 0.8;
  const rotationAngle = 45;
  const zOffsetFactor = 150;

  // Increased height to accommodate reflection
  const carouselHeight = 400 + (cardWidth * reflectionHeightRatio) + reflectionGap;

  return (
    <div>
      <Hero />

      <section id="categories" className="py-20 relative overflow-hidden bg-transparent dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary to-blue-600 dark:from-gray-100 dark:via-blue-400 dark:to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Explore Chemistry Categories
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-blue-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        {/* --- Carousel Container --- */}
        <div
          className="relative flex items-center justify-center"
          // Use calculated height
          style={{ height: `${carouselHeight}px`, perspective: '1200px' }}
        >
           {/* Inner container for positioning cards */}
           <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
             <AnimatePresence initial={false}>
              {categories.map((category, index) => {
                let offset = index - currentIndex;
                if (offset < -numCategories / 2) offset += numCategories;
                else if (offset > numCategories / 2) offset -= numCategories;

                const isCurrent = offset === 0;
                const absOffset = Math.abs(offset);
                const x = offset * (cardWidth / 2 + gap);
                const scale = Math.pow(scaleFactor, absOffset);
                const rotateY = offset * rotationAngle * -1;
                const zIndex = numCategories - absOffset;
                const opacity = absOffset > 2 ? 0 : 0.9; // Keep slight opacity for reflections
                const translateZ = -absOffset * zOffsetFactor;

                return (
                  <motion.div
                    key={category.title + index}
                    className="absolute top-1/2 left-1/2 cursor-pointer" // Origin still center-center
                     // Apply transform origin to the container div, not just the card
                     style={{
                       width: `${cardWidth}px`,
                       // Height includes card + gap + reflection height approximation for layout
                       height: `${cardWidth + reflectionGap + (cardWidth * reflectionHeightRatio)}px`,
                       originX: 0.5, // Transform origin
                       originY: 0.5, // Transform origin (middle of the card+reflection unit)
                       zIndex: zIndex,
                       // Adjust initial Y position slightly upwards because origin is now lower
                       y: "-55%", // Adjust slightly - may need tweaking
                     }}
                    initial={{
                       opacity: 0, x: "-50%",
                       translateX: x * 2, scale: 0.5,
                       rotateY: rotateY + (offset > 0 ? 30 : -30),
                       translateZ: translateZ - 100,
                    }}
                    animate={{
                      opacity: opacity, x: "-50%",
                      translateX: x, scale: scale, rotateY: rotateY, translateZ: translateZ,
                    }}
                    exit={{
                      opacity: 0, translateX: x * (offset > 0 ? 1.5 : -1.5), scale: 0.3,
                      rotateY: rotateY + (offset > 0 ? 45 : -45), translateZ: translateZ - 150,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30, opacity: { duration: 0.3 } }}
                  >
                    {/* --- Card and Link --- */}
                    <Link
                      to={category.link}
                      className={`absolute top-0 left-0 w-full ${isCurrent ? '' : 'pointer-events-none'}`}
                      style={{ height: `${cardWidth}px` }} // Explicit height for the card part
                      aria-hidden={!isCurrent}
                      tabIndex={isCurrent ? 0 : -1}
                    >
                      <CategoryCard {...category} isActive={isCurrent} isReflection={false} />
                    </Link>

                    {/* --- Reflection --- */}
                    <div
                       className="absolute left-0 right-0 pointer-events-none"
                       style={{
                         top: `${cardWidth + reflectionGap}px`, // Position below card + gap
                         height: `${cardWidth * reflectionHeightRatio}px`, // Set reflection height
                         opacity: isCurrent ? 0.3 : 0.15, // Dimmer reflection, slightly brighter for active
                         // Gradient mask for fading effect
                         maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
                         WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
                         transition: 'opacity 0.3s ease',
                       }}
                     >
                       {/* Flipped Card for Reflection */}
                       <div style={{ transform: 'scaleY(-1)', height: `${cardWidth}px`, width: '100%' }}>
                           {/* Render card again, mark as reflection to disable internal hovers etc. */}
                           <CategoryCard {...category} isActive={false} isReflection={true} />
                       </div>
                     </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-4 sm:left-10 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-primary dark:text-blue-400 p-4 rounded-full hover:bg-primary dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:scale-110 transition-all duration-300 shadow-xl border-2 border-transparent dark:border-gray-700"
            aria-label="Previous Category"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={goToNext}
            className="absolute right-4 sm:right-10 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-primary dark:text-blue-400 p-4 rounded-full hover:bg-primary dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:scale-110 transition-all duration-300 shadow-xl border-2 border-transparent dark:border-gray-700"
            aria-label="Next Category"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight size={24} />
          </motion.button>
          
          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
            {categories.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'bg-primary w-12 h-3' 
                    : 'bg-white/50 hover:bg-white/80 w-3 h-3'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to category ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
    </div>
  );
}

export default HomePage;