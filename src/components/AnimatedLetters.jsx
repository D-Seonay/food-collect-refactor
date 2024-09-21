import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLetters = ({ text }) => {
  return (
    <span className="bg-secondary text-black">
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -10 }} // Position initiale
          animate={{ opacity: 1, y: 0 }} // Position finale
          transition={{ duration: 0.3, delay: index * 0.1 }} // Délai pour chaque lettre
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedLetters;