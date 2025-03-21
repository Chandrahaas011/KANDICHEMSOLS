import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../home/Hero';
import CategoryCard from '../home/CategoryCard';
import AboutSection from '../home/AboutSection';
import NavBar from '../common/NavBar';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  // These would be replaced with actual images in a real implementation
  const categories = [
    {
      title: 'Named Reactions',
      description: 'Explore famous chemical reactions named after their discoverers.',
      imageSrc: '/src/assets/gifs/named-reactions.gif',
      link: '/NamedReactionsPage',
    },
    {
      title: 'Protection Groups',
      description: 'Learn about chemical groups used to protect specific functionalities.',
      imageSrc: '/src/assets/gifs/protection-reactions.gif',
      link: '/ProtectionGroupsPage',
    },
    {
      title: 'Purification Reactions',
      description: 'Techniques and methods for purifying chemical compounds.',
      imageSrc: '/src/assets/gifs/purification-reactions.gif',
      link: '/PurificationReactionsPage',
    },
    {
      title: 'Common Reagents',
      description: 'Detailed information about frequently used chemical reagents.',
      imageSrc: '/src/assets/gifs/common-reagents.gif',
      link: '/CommonReagentsPage',
    },
    {
      title: 'Common Reactions',
      description: 'Essential reactions that form the foundation of organic chemistry.',
      imageSrc: '/src/assets/gifs/common-reactions.gif',
      link: '/CommonReactionsPage',
    },
  ];

  return (
    <div>
      <Header/>
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
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-20">
    {categories.map((category, index) => (
      <motion.div
        key={category.title}
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Link to={category.link}>
        <CategoryCard {...category} />
        </Link>
      </motion.div>
    ))}
  </div>
  
  
</section>

      <AboutSection />
      <Footer/>
    </div>
  );
}

export default HomePage;