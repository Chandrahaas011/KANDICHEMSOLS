import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaHeart } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-12 text-white overflow-hidden border-t border-gray-800 dark:border-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center gap-3 group mb-4">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  K
                </div>
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">Kandichemsols</h2>
                <p className="text-sm text-gray-400">Chemistry for all</p>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              A comprehensive, free database for chemistry enthusiasts and professionals worldwide.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/named-reactions', label: 'Named Reactions' },
                { to: '/protection-groups', label: 'Protection Groups' },
                { to: '/common-reagents', label: 'Common Reagents' },
              ].map((link, index) => (
                <motion.li 
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.to} 
                    className="text-sm text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Donate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Connect With Us</h3>
            <div className="flex gap-4 mb-8">
              <motion.a
                href="https://www.linkedin.com/in/kandi-vijeender-01a97740/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.15, rotate: 10, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.15, rotate: -10, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook size={20} />
              </motion.a>
            </div>
            
            <Link to="/DonatePage">
              <motion.button
                className="relative px-8 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-full flex items-center gap-3 overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaHeart className="text-red-300 group-hover:text-red-100 transition-colors duration-300" />
                </motion.div>
                <span className="relative z-10">Support Our Mission</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Kandichemsols. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;