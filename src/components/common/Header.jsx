import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navItemStyle =
    "px-4 py-2 rounded-md font-medium text-gray-800 hover:text-gray-900 transition-all duration-300 relative dark:text-gray-300 dark:hover:text-white theme-transition";
  const btnStyle =
    "px-4 py-2 rounded-md font-medium transition-all duration-300 shadow-md theme-transition";

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-2 z-50 mx-4 bg-white/90 dark:bg-gray-900/30 backdrop-blur-md border border-gray-300/50 dark:border-gray-700/30 shadow-xl flex justify-between items-center px-6 py-3 rounded-full theme-transition"
    >
      {/* Logo */}
      <Link to="/">
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{
            y: [0, -5, 0],
            transition: { repeat: Infinity, duration: 2 },
          }}
          className="cursor-pointer flex items-center gap-4"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-blue-600 text-white font-bold text-xl shadow-lg">
              K
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-primary opacity-0 hover:opacity-20"
              initial={false}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <div className="font-bold text-xl text-gray-800 dark:text-white theme-transition">
            Kandichemsols
          </div>
        </motion.div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 items-center">
        <Link className={navItemStyle} to="/">
          Home
        </Link>
        <Link className={navItemStyle} to="/NamedReactionsPage">
          Named Reactions
        </Link>
        <Link className={navItemStyle} to="/ProtectionGroupsPage">
          Protection Groups
        </Link>
        <Link className={navItemStyle} to="/PurificationReactionsPage">
          Purification
        </Link>
        <Link className={navItemStyle} to="/CommonReagentsPage">
          Reagents
        </Link>
        <Link className={navItemStyle} to="/CommonReactionsPage">
          Reactions
        </Link>
        <Link className={navItemStyle} to="/DonatePage">
          Donate
        </Link>
      </div>

      {/* Dark Mode Toggle */}
      <div className="hidden md:flex items-center">
        <DarkModeToggle />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div ref={menuRef} className="md:hidden flex items-center gap-2">
        <DarkModeToggle />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex flex-col justify-between w-6 h-5 cursor-pointer"
          >
            <span
              className={`block h-0.5 w-full bg-gray-700 dark:bg-gray-300 rounded transform transition duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-gray-700 dark:bg-gray-300 rounded transition duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-gray-700 dark:bg-gray-300 rounded transform transition duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-gray-800/95 text-gray-800 dark:text-gray-200 shadow-xl flex flex-col gap-2 p-4 md:hidden z-[70] rounded-b-2xl border-t border-gray-300/50 dark:border-gray-700/30"
          >
            <Link
              className={navItemStyle}
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={navItemStyle}
              to="/NamedReactionsPage"
              onClick={() => setIsMenuOpen(false)}
            >
              Named Reactions
            </Link>
            <Link
              className={navItemStyle}
              to="/ProtectionGroupsPage"
              onClick={() => setIsMenuOpen(false)}
            >
              Protection Groups
            </Link>
            <Link
              className={navItemStyle}
              to="/PurificationReactionsPage"
              onClick={() => setIsMenuOpen(false)}
            >
              Purification
            </Link>
            <Link
              className={navItemStyle}
              to="/CommonReagentsPage"
              onClick={() => setIsMenuOpen(false)}
            >
              Reagents
            </Link>
            <Link
              className={navItemStyle}
              to="/CommonReactionsPage"
              onClick={() => setIsMenuOpen(false)}
            >
              Reactions
            </Link>
            <Link
              className={navItemStyle}
              to="/DonatePage"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}