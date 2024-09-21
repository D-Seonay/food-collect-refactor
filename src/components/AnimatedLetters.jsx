import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedLetters = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Déconnecte l'observer après que l'animation ait été lancée
        }
      },
      { threshold: 0.1 } // Déclenche quand 10% du texte est visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <span ref={textRef} className="bg-secondary text-black">
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -10 }} // Position initiale
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Position finale seulement si visible
          transition={{ duration: 0.3, delay: index * 0.1 }} // Délai pour chaque lettre
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedLetters;