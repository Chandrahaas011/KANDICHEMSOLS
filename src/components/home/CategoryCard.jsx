import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CategoryCard({ title, description, imageSrc, link }) {
  return (
    <motion.div
      className="card card-hover h-full"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link to={link} className="block h-full">
        <div className="overflow-hidden">
          <motion.img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default CategoryCard;