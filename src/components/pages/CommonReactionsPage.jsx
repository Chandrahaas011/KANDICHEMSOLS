import { useEffect } from 'react';
import { motion } from 'framer-motion';

function CommonReactionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-primary">Common Reactions</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-4">
              Common reactions form the foundation of organic and inorganic chemistry, allowing chemists 
              to transform simple starting materials into complex molecules.
            </p>
            
            <p className="text-gray-600">
              This page will provide an extensive database of common chemical reactions, organized by reaction type, 
              with detailed mechanisms, examples, and applications.
            </p>
          </div>
          
          {/* Placeholder for content - would be replaced with actual database content */}
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">Placeholder Reaction {item}</h2>
                  <p className="text-gray-600">
                    This is a placeholder for a common reaction. In the final version, this would contain 
                    detailed information about the reaction, including its mechanism, variations, and applications.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CommonReactionsPage;