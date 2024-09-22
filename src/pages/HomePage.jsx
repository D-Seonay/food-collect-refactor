import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import AnimatedLetters from '../components/AnimatedLetters'; // Importez le nouveau composant
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import Solution from '../components/Solutions';
import Story from '../components/Story';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
  };


  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-4 md:p-16">
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
            <motion.div
              className="h-1 w-20 bg-red-500"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
              <motion.p
                className="text-lg md:text-xl text-center md:text-left"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Besoin de remplir vos tables tous les jours, de gagner du temps au quotidien et d'augmenter votre visibilité localement ?
              </motion.p>


              <motion.p
                className="text-lg md:text-xl text-center md:text-left"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                              Profitez de nos solutions digitales pour attirer plus de clients. Bénéficiez d'un site internet sur mesure, d'un menu en ligne attractif et de réservations sans commission.

              </motion.p>
            <motion.div
              className="flex space-x-4 h-full w-full justify-center md:justify-start py-4"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button text="On discute ?" onClick={handleButtonClick} />
            </motion.div>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <img src="assets/img/plats_mobile.png" alt="Plats" className="w-full h-auto md:w-3/4" />
          
        </div>
      </div>

      <Solution />

      <div className="w-full mt-20 h-full container mx-auto contents-center">
        <h1 className="text-4xl font-bold text-center mb-8">Leurs <AnimatedLetters text="témoignages" /></h1>
        <Carousel />
      </div>

    <div className="w-full mt-20 h-full container mx-auto contents-center bg-quaternary">
      <Story />
    </div>
  </div>

  );
};

export default HomePage;