import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import AnimatedLetters from '../components/AnimatedLetters'; // Importez le nouveau composant
import { motion } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 md:p-16">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="md:w-1/2 flex items-center justify-center md:justify-start">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Votre restaurant mérite <AnimatedLetters text="d'être connu !" />
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-center md:text-left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Besoin de remplir vos tables tous les jours, de gagner du temps au quotidien et d'augmenter votre visibilité localement ?
              Profitez de nos solutions digitales pour attirer plus de clients. Bénéficiez d'un site internet sur mesure, d'un menu en ligne attractif et de réservations sans commission.
            </motion.p>
            <div className="flex space-x-4 h-full w-full justify-center md:justify-start">
              <Button text="On discute ?" onClick={handleButtonClick} />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <img src="src/assets/img/plats_mobile.png" alt="Plats" className="w-full h-auto md:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;