import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CategoryCard({ title, description, imageSrc, link }) {
  return (
    <motion.div
       className="card card-hover aspect-square w-full h-auto"

      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link to={link} className="block h-full relative">
        <div className="h-full overflow-hidden">
          <motion.img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default CategoryCard;