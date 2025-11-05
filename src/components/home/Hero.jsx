// motion is used in JSX tags (motion.div, motion.h1, etc.) — some ESLint configs don't detect JSX usage for this identifier
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MoleculeViewer from '../common/MoleculeViewer';
import TextPressure from '../../views/components/common/TextPressure';
import { useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

function Hero() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  // Removed scroll-based fade because it caused the section to disappear immediately for some viewports.
  const opacity = 1;

  return (
  <section ref={ref} className="relative pt-20 md:pt-24 pb-12 md:pb-16 min-h-[calc(100vh-80px)] flex items-center overflow-visible bg-transparent">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6"
            style={{ opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full flex justify-center lg:justify-start"
            >
              <motion.span 
                className="inline-block px-4 py-2 md:px-5 md:py-2.5 mb-6 md:mb-8 text-xs md:text-sm font-semibold text-sky-800 dark:text-sky-300 bg-sky-100/80 dark:bg-sky-900/30 rounded-full backdrop-blur-sm border border-sky-300 dark:border-sky-800"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                Free Chemistry Database
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-center lg:text-left w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Place interactive CHEMISTRY above the descriptive line - moved up */}
              <div style={{ position: 'relative', height: '120px', maxWidth: '900px' }} className="w-full flex justify-center lg:justify-start md:h-[180px] transform -translate-y-3">
                <div className="w-full flex justify-center lg:justify-start lg:-ml-4">
                  <TextPressure
                    text="CHEMISTRY"
                    flex={false} /* avoid justify-between spacing */
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor={isDark ? "#7dd3fc" : "#0369a1"}
                    strokeColor="#ff0000"
                    minFontSize={40}
                    className=""
                    containerClassName="overflow-visible"
                    containerStyle={{ overflow: 'visible' }}
                  />
                </div>
              </div>

              {/* Use TextPressure for the 'for All' line too (smaller size) - moved up and aligned */}
              <div style={{ position: 'relative', height: '60px', maxWidth: '480px' }} className="mx-auto lg:mx-0 flex justify-center lg:justify-start overflow-visible md:h-[80px] transform -translate-y-4">
                <div className="w-full flex justify-center lg:justify-start lg:pl-6">
                  <TextPressure
                    text="FOR ALL"
                    flex={false}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={false}
                    textColor={isDark ? "#e0e7ff" : "#1e293b"}
                    minFontSize={20}
                    className=""
                    containerClassName="overflow-visible"
                    containerStyle={{ overflow: 'visible' }}
                  />
                </div>
              </div>
            </motion.h1>
            
            <motion.p
              className="text-base md:text-lg lg:text-xl text-slate-700 dark:text-slate-300 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left px-2 md:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A comprehensive, free database for chemistry enthusiasts and professionals. Explore reactions, reagents, and techniques.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start w-full lg:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.a 
                href="#categories" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-r from-primary via-sky-600 to-blue-600 hover:from-blue-600 hover:via-sky-700 hover:to-primary dark:from-sky-500 dark:via-sky-600 dark:to-blue-500 dark:hover:from-sky-600 dark:hover:via-sky-700 dark:hover:to-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Categories
              </motion.a>
              <Link to="/DonatePage" className="w-full sm:w-auto">
                <motion.button
                  className="w-full px-6 py-3 md:px-8 md:py-4 bg-white dark:bg-gray-800/80 text-primary dark:text-sky-400 font-semibold rounded-xl border-2 border-primary dark:border-sky-500 hover:bg-sky-50 dark:hover:bg-gray-700/80 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Support Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Column - 3D Molecule Viewer */}
          <motion.div
            className="hidden lg:flex relative items-center justify-center lg:justify-end w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="absolute -inset-8 bg-gradient-to-r from-blue-400/20 to-blue-600/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-3xl blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative w-full max-w-2xl bg-white/80 dark:bg-gray-800/50 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:scale-[1.02] transition-transform duration-300 backdrop-blur-sm">
              <MoleculeViewer height="500px" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;