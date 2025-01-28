import React from 'react';
import AnimatedLetters from '../components/AnimatedLetters';
import { motion } from 'framer-motion';

export default function OffersPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-4 md:p-16">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Section Texte */}
        <div className="md:w-1/2 flex flex-col justify-center md:pl-8">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Nos <AnimatedLetters text="offres" />
          </motion.h1>
          <motion.div
            className="h-1 w-20 bg-red-500 mb-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.p
            className="text-lg md:text-xl text-center md:text-left"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className='font-bold'>FoodCollect </span>
            vous aide à gérer votre restaurant plus efficacement
            grâce à nos solutions digitales. 
          </motion.p>
          <motion.p
          className="text-lg md:text-xl text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Profitez d'un site internet
            personnalisé, d’un module de réservation sans commission, et
            d’outils pour améliorer votre e-réputation. Nos offres sont conçues
            pour répondre à vos besoins spécifiques et maximiser la visibilité
            de votre restaurant.
        </motion.p>
        </div>
        {/* Section Image */}
        <motion.div
          className="md:w-1/2 flex items-center justify-center md:justify-end"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="assets/img/offres-mock.png"
            alt="Offre 1"
            className="w-full h-auto md:w-3/4"
          />
        </motion.div>
      </div>
      
    </div>
  );
}
