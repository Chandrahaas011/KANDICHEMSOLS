import { motion } from 'framer-motion';

function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 to-white">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-6">About Kandichemsols</h2>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Kandichemsols is a non-profit initiative dedicated to making chemistry knowledge accessible to everyone. Our comprehensive database covers a wide range of chemistry topics, from named reactions to common reagents.
            </p>
            <p>
              Whether you're a student, teacher, researcher, or chemistry enthusiast, our platform offers valuable resources to enhance your understanding of chemical concepts and processes.
            </p>
            <p>
              Our mission is to create a collaborative environment where chemistry knowledge can be freely shared and accessed by people of all backgrounds and expertise levels.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;