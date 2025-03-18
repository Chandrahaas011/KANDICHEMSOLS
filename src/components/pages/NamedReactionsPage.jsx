import { useEffect } from 'react';
import { motion } from 'framer-motion';

function NamedReactionsPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-primary">Named Reactions</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-4">
              Named reactions are chemical reactions that have been named after their discoverers or developers. 
              They are an important part of the chemist's vocabulary and provide a convenient shorthand for complex transformations.
            </p>
            
            <p className="text-gray-600">
              This page will contain a comprehensive database of named reactions in organic chemistry, 
              complete with mechanisms, examples, and applications.
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
                    This is a placeholder for a named reaction. In the final version, this would contain 
                    detailed information about the reaction, including its mechanism, applications, and examples.
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

export default NamedReactionsPage;