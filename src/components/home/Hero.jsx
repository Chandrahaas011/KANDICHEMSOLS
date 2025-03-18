import { motion } from 'framer-motion';
import MoleculeViewer from '../common/MoleculeViewer';

function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary">Chemistry</span> for all
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A comprehensive, free database for chemistry enthusiasts and professionals.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#categories" className="btn btn-primary">
                Explore Categories
              </a>
              <Link to="/donate" className="btn btn-secondary">
                Support Us
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <MoleculeViewer height="400px" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;