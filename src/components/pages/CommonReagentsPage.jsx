import { useEffect } from 'react';
import { motion } from 'framer-motion';

import Header from '../common/Header';
import Footer from '../common/Footer';

function CommonReagentsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <Header/>
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-primary">Common Reagents</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-4">
              Chemical reagents are substances or compounds that are added to a system to cause a chemical reaction, 
              or to test if a reaction occurs.
            </p>
            
            <p className="text-gray-600">
              This page will catalog the most commonly used reagents in organic and inorganic chemistry, 
              including their properties, preparation, handling, and applications.
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
                  <h2 className="text-xl font-bold mb-2">Placeholder Reagent {item}</h2>
                  <p className="text-gray-600">
                    This is a placeholder for a common reagent. In the final version, this would contain 
                    detailed information about the reagent, including its structure, properties, and uses.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <Footer/>
      </div>
    </div>
  );
}

export default CommonReagentsPage;