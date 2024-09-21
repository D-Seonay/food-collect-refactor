import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedLetters from './AnimatedLetters'; // Assurez-vous d'importer votre composant AnimatedLetters

const solutions = [
  {
    id: 1,
    title: 'Réservation de table',
    image: 'assets/img/solutions/reservation.png',
    alt: 'Réservation de table',
  },
  {
    id: 2,
    title: 'Site internet & menu en ligne',
    image: 'assets/img/solutions/site-internet.png',
    alt: 'Site internet',
  },
  {
    id: 3,
    title: 'Avis Google',
    image: 'assets/img/solutions/avis-google.png',
    alt: 'Avis Google',
  },
];

const SolutionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Déconnecter l'observer après l'animation
        }
      },
      { threshold: 0.3 } // Déclenche l'animation lorsque 10% de la section est visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full mt-20 container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-8">
        Nos <AnimatedLetters text="solutions" />
      </h1>
      <p className="text-lg mb-8">
        Découvrez nos solutions digitales pour attirer plus de clients et augmenter votre chiffre d'affaires.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <motion.div
            key={solution.id}
            className="bg-quaternary shadow-sm rounded-lg overflow-hidden flex flex-col items-center justify-between p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full flex flex-col items-center justify-between">
              <p className="text-gray-700 my-2 font-bold text-lg">{solution.title}</p>
            </div>
            <img
              src={solution.image}
              alt={solution.alt}
              className="w-3/4 h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsSection;