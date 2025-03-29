import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../home/Hero';
import CategoryCard from '../home/CategoryCard'; // Ensure path is correct
import AboutSection from '../home/AboutSection'; // Ensure path is correct
import Header from '../common/Header';         // Ensure path is correct
import Footer from '../common/Footer';         // Ensure path is correct
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
      { title: 'Named Reactions', description: 'Explore famous chemical reactions...', imageSrc: '/src/assets/gifs/named-reactions.gif', link: '/NamedReactionsPage' },
      { title: 'Protection Groups', description: 'Learn about chemical groups...', imageSrc: '/src/assets/gifs/protection-reactions.gif', link: '/ProtectionGroupsPage' },
      { title: 'Purification Reactions', description: 'Techniques and methods...', imageSrc: '/src/assets/gifs/purification-reactions.gif', link: '/PurificationReactionsPage' },
      { title: 'Common Reagents', description: 'Detailed information about reagents.', imageSrc: '/src/assets/gifs/common-reagents.gif', link: '/CommonReagentsPage' },
      { title: 'Common Reactions', description: 'Essential organic reactions.', imageSrc: '/src/assets/gifs/common-reactions.gif', link: '/CommonReactionsPage' },
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
      <Header />
      <Hero />

      <section id="categories" className="py-16 relative overflow-hidden">
        <div className="container-custom mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Explore Chemistry Categories
          </motion.h2>
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
          <button
            onClick={goToPrevious}
            className="absolute left-4 sm:left-10 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition-colors"
            aria-label="Previous Category"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 sm:right-10 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition-colors"
            aria-label="Next Category"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </section>

      <AboutSection />
      <Footer />
    </div>
  );
}

export default HomePage;