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
      <ul className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <motion.li key={item.name} whileHover={{ scale: 1.05 }}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `relative px-2 py-1 text-sm font-medium ${
                  isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="navbar-underline"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Navigation Button */}
      <button
        className="md:hidden text-primary"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 ${
                        isActive ? 'text-primary font-bold' : 'text-gray-700'
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