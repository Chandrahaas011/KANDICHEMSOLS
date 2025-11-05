import { motion } from 'framer-motion';

function AboutSection() {
  const features = [
    {
      icon: "🔬",
      title: "Comprehensive Database",
      description: "Extensive collection of chemical reactions, reagents, and techniques"
    },
    {
      icon: "🎓",
      title: "Educational Focus",
      description: "Perfect for students, teachers, and researchers at all levels"
    },
    {
      icon: "🌐",
      title: "Free Access",
      description: "Always free and accessible to everyone, everywhere"
    }
  ];

  return (
    <section className="py-20 bg-transparent dark:bg-transparent relative overflow-hidden">
      {/* Background decoration - Made more subtle */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-blue-600 dark:from-gray-100 dark:via-blue-400 dark:to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Kandichemsols
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-blue-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.div 
            className="max-w-3xl mx-auto space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl">
              Kandichemsols is a <span className="font-semibold text-primary dark:text-blue-400">non-profit initiative</span> dedicated to making chemistry knowledge accessible to everyone. Our comprehensive database covers a wide range of chemistry topics, from named reactions to common reagents.
            </p>
            <p className="text-base md:text-lg">
              Whether you're a student, teacher, researcher, or chemistry enthusiast, our platform offers valuable resources to enhance your understanding of chemical concepts and processes.
            </p>
            <p className="text-base md:text-lg">
              Our mission is to create a collaborative environment where chemistry knowledge can be freely shared and accessed by people of all backgrounds and expertise levels.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 dark:from-blue-500/5 dark:to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div
                  className="text-5xl mb-4 relative z-10"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white relative z-10">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 dark:from-blue-500/30 to-transparent rounded-bl-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;