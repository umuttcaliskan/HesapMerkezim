// components/AboutComponents/TeamMemberCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faTwitter, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="relative group">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-white hover:text-purple-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-white hover:text-purple-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-white hover:text-purple-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {name}
        </h3>
        <p className="text-purple-600 dark:text-purple-400">
          {role}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
