import { motion } from 'framer-motion';
import React from 'react';
import { MdWebAsset } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import AnimatedLetters from './AnimatedLetters';



const offers = [
  {
    id: 1,
    title: 'Entrée',
    description: 'Un site internet clé en main',
    description_continued: 'Attirez plus de clients avec un site web personnalisé et un menu en ligne facile à gérer.',
    price: ' 69 €/mois',
    link: '/site-internet',
  },
  {
    id: 2,
    title: 'Plat',
    description:'Module de réservation sans commission ',
    description_continued: 'Simplifiez vos réservations en ligne et gagnez du temps.',
    price: ' 69 €/mois',
    link: '/reservation-en-ligne',
  },
  {
    id: 3,
    title: 'Le Menu Complet',
    description: "L'outil indispensable pour la gestion d'un restaurant",
    description_continued: 'Le site internet personnalisé avec le module de réservation de table',
    price: ' 99 €/mois',
    link: '/avis-google',
  },
];

export default function BannerOffers() {
  const handleButtonClick = (link) => {
    window.location.href = link; // Redirection vers le lien associé
  };

return (
    <div className="flex flex-col items-center justify-center bg-secondary-low px-4 py-8 md:py-16 w-full">
        <div className="flex flex-col md:flex-row w-full max-w-6xl space-y-8 md:space-y-0 md:space-x-8">
        {offers.map((offer, index) => (
            <motion.div
            key={offer.id}
            className="md:w-1/3 flex flex-col items-center justify-center space-y-6 p-6 rounded-2xl bg-white shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
        >
            <MdWebAsset size={48} className="text-tertiary bg-secondary-low rounded-lg p-3" />
            <h2 className="text-1xl md:text-2xl font-bold text-gray-800 text-center">
                {offer.title}
            </h2>
            <p className="text-tertiary text-base md:text-md text-center font-semibold">
                {offer.description}
            </p>
            <p className="text-tertiary text-base md:text-md text-center">
                {offer.description_continued}
            </p>
            <p className="text-tertiary text-lg md:text-xl font-semibold">
                <span className="text-tertiary text-md md:text-xl font-semibold">
                    à partir de 
                </span>
                <AnimatedLetters text=
                {offer.price}
                />
            </p>
            <motion.button
                className="px-6 rounded-full text-tertiary font-bold py-2 flex items-center justify-center transition duration-300 mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleButtonClick(offer.link)}
            >
                En savoir plus 
                <FaArrowRight className="ml-2" />
            </motion.button>
            </motion.div>
        ))}
        </div>
    </div>
    );
}
