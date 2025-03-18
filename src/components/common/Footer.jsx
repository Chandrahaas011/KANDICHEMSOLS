import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary/90 to-primary py-8 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">
                K
              </div>
              <div>
                <h2 className="text-xl font-bold">Kandichemsols</h2>
                <p className="text-xs">Chemistry for all</p>
              </div>
            </Link>
            <p className="mt-4 text-sm">
              A comprehensive, free database for chemistry enthusiasts and professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/named-reactions" className="text-sm hover:underline">
                  Named Reactions
                </Link>
              </li>
              <li>
                <Link to="/protection-groups" className="text-sm hover:underline">
                  Protection Groups
                </Link>
              </li>
              <li>
                <Link to="/common-reagents" className="text-sm hover:underline">
                  Common Reagents
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Donate */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-white hover:text-white/80"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="text-white hover:text-white/80"
              >
                <FaFacebook size={24} />
              </motion.a>
            </div>
            
            <Link to="/donate">
              <motion.button
                className="bg-white text-primary font-bold py-2 px-6 rounded-full flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHeart className="text-red-500" />
                Donate Me
              </motion.button>
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Kandichemsols. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;