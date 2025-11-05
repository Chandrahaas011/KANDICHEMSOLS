import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaHeart, FaCheckCircle, FaShareAlt, FaHandsHelping } from 'react-icons/fa';

function DonatePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copied, setCopied] = useState(false);
  const phoneNumber = "1234567890"; // Replace with actual PhonePe number

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const supportWays = [
    {
      icon: <FaCheckCircle className="text-3xl text-primary" />,
      title: "Contribute Content",
      description: "Are you a chemistry expert? Help us expand our database by contributing content, reviewing existing entries, or suggesting improvements."
    },
    {
      icon: <FaShareAlt className="text-3xl text-blue-600" />,
      title: "Spread the Word",
      description: "Share Kandichemsols with your friends, colleagues, and social networks. Help us reach more chemistry enthusiasts around the world."
    },
    {
      icon: <FaHandsHelping className="text-3xl text-green-600" />,
      title: "Volunteer",
      description: "Join our team of volunteers to help with website maintenance, content creation, and community engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-red-400 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-full">
                  <FaHeart className="text-6xl text-red-500" />
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Support Kandichemsols
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Your support helps us keep chemistry knowledge free and accessible for everyone
            </motion.p>
          </div>
          
          {/* Main Donation Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 dark:from-blue-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-600/10 dark:from-blue-400/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Your Support Makes a Difference</h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Kandichemsols is a non-profit initiative dedicated to making chemistry knowledge accessible to everyone. 
                  Your donations help us maintain and expand our database, ensuring that quality chemistry resources 
                  remain freely available to students, educators, and enthusiasts worldwide.
                </p>
              </div>
              
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-primary/5 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-primary/20 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Donate via PhonePe</h3>
                
                <div className="flex flex-col items-center gap-6">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl blur-xl dark:opacity-50" />
                    <div className="relative w-40 h-40 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center border-4 border-primary/10 dark:border-gray-700">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-blue-600/20 dark:from-blue-500/20 dark:to-blue-600/20 rounded-xl flex items-center justify-center">
                        <span className="text-sm text-primary dark:text-blue-400 font-semibold">QR Code</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
                    <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 px-6 py-3 shadow-md flex-1 w-full">
                      <FaPhoneAlt className="text-primary dark:text-blue-400 mr-3 text-xl" />
                      <span className="font-mono text-lg font-semibold text-gray-800 dark:text-gray-200">{phoneNumber}</span>
                    </div>
                    
                    <motion.button
                      className={`px-6 py-3 rounded-xl flex items-center gap-2 font-semibold shadow-lg transition-all duration-300 ${
                        copied 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-xl'
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCopy}
                    >
                      {copied ? (
                        <>
                          <FaCheckCircle /> Copied!
                        </>
                      ) : (
                        "Copy Number"
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              
              {/* Other Ways to Support */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Other Ways to Support</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {supportWays.map((way, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <motion.div
                        className="mb-4 inline-block p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {way.icon}
                      </motion.div>
                      <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">{way.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {way.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Thank You Message */}
          <motion.div 
            className="text-center bg-gradient-to-r from-primary/10 via-blue-50 to-primary/10 dark:from-blue-900/20 dark:via-gray-800 dark:to-blue-900/20 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
            </motion.div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              <span className="font-semibold text-primary dark:text-blue-400">Thank you for your support!</span> Every contribution helps us continue our mission of making 
              chemistry knowledge accessible to all. Together, we're building a better future for chemistry education.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default DonatePage;