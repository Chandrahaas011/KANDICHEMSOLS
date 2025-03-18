import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../home/Hero';
import CategoryCard from '../home/CategoryCard';
import AboutSection from '../home/AboutSection';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // These would be replaced with actual images in a real implementation
  const categories = [
    {
      title: 'Named Reactions',
      description: 'Explore famous chemical reactions named after their discoverers.',
      imageSrc: '/src/assets/images/placeholders/named-reactions.jpg',
      link: '/named-reactions',
    },
    {
      title: 'Protection Groups',
      description: 'Learn about chemical groups used to protect specific functionalities.',
      imageSrc: '/src/assets/images/placeholders/protection-groups.jpg',
      link: '/protection-groups',
    },
    {
      title: 'Purification Reactions',
      description: 'Techniques and methods for purifying chemical compounds.',
      imageSrc: '/src/assets/images/placeholders/purification-reactions.jpg',
      link: '/purification-reactions',
    },
    {
      title: 'Common Reagents',
      description: 'Detailed information about frequently used chemical reagents.',
      imageSrc: '/src/assets/images/placeholders/common-reagents.jpg',
      link: '/common-reagents',
    },
    {
      title: 'Common Reactions',
      description: 'Essential reactions that form the foundation of organic chemistry.',
      imageSrc: '/src/assets/images/placeholders/common-reactions.jpg',
      link: '/common-reactions',
    },
  ];

  return (
    <div>
      <Hero />
      
      <section id="categories" className="py-16">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Explore Chemistry Categories
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <AboutSection />
    </div>
  );
}

export default HomePage;