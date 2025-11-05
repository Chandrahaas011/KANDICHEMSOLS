import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Named Reactions', path: '/named-reactions' },
    { name: 'Protection Groups', path: '/protection-groups' },
    { name: 'Purification Reactions', path: '/purification-reactions' },
    { name: 'Common Reagents', path: '/common-reagents' },
    { name: 'Common Reactions', path: '/common-reactions' },
    { name: 'Donate', path: '/donate' },
  ];

  return (
    <nav>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
        {navItems.map((item, index) => (
          <motion.li 
            key={item.name} 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive 
                    ? 'text-primary dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:bg-primary/5 dark:hover:bg-blue-500/10'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-full"
                      layoutId="navbar-underline"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: '50%', opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </>
              )}
            </NavLink>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Navigation Button */}
      <motion.button
        className="md:hidden text-primary dark:text-blue-400 p-2 hover:bg-primary/10 dark:hover:bg-blue-500/10 rounded-lg transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={isOpen ? "open" : "closed"}
        >
          <motion.path
            d={isOpen ? "M18 6L6 18" : "M3 12h18"}
            variants={{
              closed: { d: "M3 12h18" },
              open: { d: "M18 6L6 18" }
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.path
            d={isOpen ? "M6 6l12 12" : "M3 6h18"}
            variants={{
              closed: { d: "M3 6h18", opacity: 1 },
              open: { d: "M6 6l12 12", opacity: 1 }
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.path
            d="M3 18h18"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.svg>
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-2xl md:hidden overflow-hidden border-t border-gray-100 dark:border-gray-800"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul className="flex flex-col py-4 px-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'text-primary dark:text-blue-400 font-bold bg-primary/10 dark:bg-blue-500/20' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-blue-400 hover:translate-x-1'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;