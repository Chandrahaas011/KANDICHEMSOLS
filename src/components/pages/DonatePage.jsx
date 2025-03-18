import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaHeart } from 'react-icons/fa';

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

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-primary text-center">Support Kandichemsols</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <motion.div
                className="inline-block p-4 bg-primary/10 rounded-full mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              >
                <FaHeart className="text-5xl text-primary" />
              </motion.div>
              
              <h2 className="text-2xl font-bold mb-4">Your Support Makes a Difference</h2>
              
              <p className="text-gray-600 mb-4">
                Kandichemsols is a non-profit initiative dedicated to making chemistry knowledge accessible to everyone. 
                Your donations help us maintain and expand our database, ensuring that quality chemistry resources 
                remain freely available to students, educators, and enthusiasts worldwide.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Donate via PhonePe</h3>
              
              <div className="flex items-center justify-center mb-4">
                <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center">
                  {/* This would be replaced with an actual QR code */}
                  <div className="w-24 h-24 bg-primary/20 rounded-md flex items-center justify-center">
                    <span className="text-xs text-primary font-medium">QR Code</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center bg-white rounded-md border border-gray-200 px-4 py-2">
                  <FaPhoneAlt className="text-primary mr-2" />
                  <span>{phoneNumber}</span>
                </div>
                
                <motion.button
                  className="bg-primary text-white px-4 py-2 rounded-md flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                >
                  {copied ? "Copied!" : "Copy Number"}
                </motion.button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">Other Ways to Support</h3>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Contribute Content</h4>
                <p className="text-sm text-gray-600">
                  Are you a chemistry expert? Help us expand our database by contributing content, 
                  reviewing existing entries, or suggesting improvements.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Spread the Word</h4>
                <p className="text-sm text-gray-600">
                  Share Kandichemsols with your friends, colleagues, and social networks. 
                  Help us reach more chemistry enthusiasts around the world.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Volunteer</h4>
                <p className="text-sm text-gray-600">
                  Join our team of volunteers to help with website maintenance, content creation, 
                  and community engagement.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">
              Thank you for your support! Every contribution helps us continue our mission of making 
              chemistry knowledge accessible to all.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DonatePage;