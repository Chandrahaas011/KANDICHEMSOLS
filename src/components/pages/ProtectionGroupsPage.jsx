import { useEffect } from 'react';
import { motion } from 'framer-motion';

function ProtectionGroupsPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-primary">Protection Groups</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-4">
              Protection groups are chemical functional groups introduced into a molecule to prevent certain parts 
              of the molecule from reacting during chemical transformations.
            </p>
            
            <p className="text-gray-600">
              This page will contain an extensive database of protection groups used in organic synthesis, 
              along with their properties, methods of installation and removal, and compatibility with various reaction conditions.
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
                  <h2 className="text-xl font-bold mb-2">Placeholder Protection Group {item}</h2>
                  <p className="text-gray-600">
                    This is a placeholder for a protection group. In the final version, this would contain 
                    detailed information about the group, including its structure, properties, and applications.
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

export default ProtectionGroupsPage;