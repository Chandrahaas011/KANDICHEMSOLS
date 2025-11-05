import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import LightRays from '../components/common/LightRays';
import FloatingBenzenes from '../components/common/FloatingBenzenes';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/**
 * MainLayout - Responsive Background System with Dark/Light Mode
 * 
 * Background Layers (from back to front):
 * 1. Base Color Layer:
 *    - Light Mode: #f8fafc (light gray/white)
 *    - Dark Mode: #000000 (black)
 * 
 * 2. Radial Gradient Overlay (center-top):
 *    - Light Mode: rgba(14,165,233,0.08) → transparent (1200px × 600px)
 *    - Dark Mode: rgba(255,255,255,0.06) → transparent (1200px × 600px)
 *    - Responsive: Adjusts to 800px × 400px on tablets, 600px × 300px on mobile
 * 
 * 3. Animated Effects:
 *    - Light Mode: Floating Benzene molecules (visible only in light mode)
 *    - Dark Mode: WebGL Light Rays (visible only in dark mode)
 * 
 * 4. Content Layer: All page content with z-index: 1
 * 
 * All transitions: 500ms cubic-bezier ease for smooth theme switching
 */
function MainLayout() {
  const location = useLocation();
  
  return (
    <div className="relative min-h-screen theme-transition overflow-hidden bg-white dark:bg-black">
      {/* Radial Gradient Overlay - Center Top - Light Mode */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-radial-light dark:opacity-0 transition-opacity duration-500"
      />
      
      {/* Radial Gradient Overlay - Center Top - Dark Mode */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-radial-dark opacity-0 dark:opacity-100 transition-opacity duration-500"
      />

      {/* Floating Benzenes - Light Mode Only (Big blue benzenes moving slowly) */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-100 dark:opacity-0 transition-opacity duration-500">
        <FloatingBenzenes />
      </div>

      {/* Animated Light Rays Background - Dark Mode Only (Deep Blue #1e40af) */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
        <LightRays
          raysOrigin="top-center"
          raysColor="#0ea5e9"
          raysSpeed={1.2}
          lightSpread={1}
          rayLength={2}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.2}
          distortion={0}
          className="dark-mode-rays"
        />
      </div>

      {/* Content layer with transparent backgrounds to allow light rays to show */}
      <div className="relative flex flex-col min-h-screen z-[1]">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: "easeInOut"
              }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;