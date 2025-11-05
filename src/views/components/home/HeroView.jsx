// Hero View Component (following MVC pattern)
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import MoleculeViewer from '../../components/common/MoleculeViewer';
import TextPressure from '../components/common/TextPressure';
import HeroController from '../../controllers/heroController';

function HeroView() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  
  // Get data from controller
  const heroData = HeroController.getHeroData();
  const textPressureConfig = HeroController.getTextPressureConfig(isDark);
  const animations = HeroController.getAnimationConfig();
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
  <section ref={ref} className="relative pt-24 pb-16 min-h-[calc(100vh-80px)] flex items-center overflow-visible bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="flex flex-col justify-center"
            style={{ opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                className={`inline-block px-5 py-2.5 mb-8 text-sm font-semibold ${
                  isDark ? heroData.badge.colors.dark : heroData.badge.colors.light
                } rounded-full backdrop-blur-sm border`}
                {...animations.badge}
              >
                {heroData.badge.text}
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              {...animations.title}
            >
              {/* interactive CHEMISTRY above the descriptive line */}
              <div style={{ position: 'relative', height: '160px', margin: '0.25rem auto 0', maxWidth: '900px' }} className="w-full text-center mx-auto">
                <TextPressure {...textPressureConfig} flex={false} minFontSize={44} className="mx-auto" containerClassName="overflow-visible" containerStyle={{ overflow: 'visible' }} />
              </div>

              {/* Use TextPressure for the 'for All' line too (smaller size) */}
              <div style={{ position: 'relative', height: '72px', marginTop: '-0.5rem', maxWidth: '480px' }} className="mx-auto text-center overflow-visible">
                <TextPressure
                  text={heroData.title.line1.toUpperCase()}
                  flex={false}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={false}
                  textColor={"#ffffff"}
                  minFontSize={20}
                  className="mx-auto"
                  containerClassName="overflow-visible"
                  containerStyle={{ overflow: 'visible' }}
                />
              </div>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-xl leading-relaxed"
              {...animations.description}
            >
              {heroData.description}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              {...animations.cta}
            >
              <motion.a 
                href={heroData.cta.primary.link}
                className={`group relative px-8 py-4 bg-gradient-to-r ${
                  isDark ? heroData.cta.primary.colors.dark : heroData.cta.primary.colors.light
                } text-white font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{heroData.cta.primary.text}</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-sky-800 to-sky-900 dark:from-sky-600 dark:to-sky-700"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <Link to={heroData.cta.secondary.link}>
                <motion.button
                  className={`px-8 py-4 ${
                    isDark ? heroData.cta.secondary.colors.dark : heroData.cta.secondary.colors.light
                  } font-semibold rounded-xl border-2 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {heroData.cta.secondary.text}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Column - 3D Molecule Viewer */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end w-full"
            {...animations.molecule}
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
              <MoleculeViewer height={heroData.molecule.height} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroView;
