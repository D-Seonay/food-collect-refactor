import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBoltLightning } from "react-icons/fa6";
import Button from "./Button";

export default function CustomSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center justify-center px-4 py-8 md:py-16 w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center max-w-6xl space-y-8 md:space-y-0 md:space-x-8 p-6 rounded-2xl bg-white shadow-lg border border-tertiary border-dashed"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Icône éclair */}
        <motion.div
          className="flex items-center justify-center w-16 h-16 bg-tertiary text-white rounded-full shadow-md"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <FaBoltLightning className="w-10 h-10" />
        </motion.div>

        {/* Texte principal */}
        <motion.div 
          className="flex-1 text-center md:text-left space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Sur mesure
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            FoodCollect s'engage à fournir des solutions sur mesure pour chaque établissement. Que vous soyez un hôtel, 
            un groupe de restaurants, une entreprise de restauration collective, ou un commerce de bouche, 
            nous avons des solutions adaptées pour vous. 
            Profitez de fonctionnalités comme le <strong>Click & Collect</strong>, le <strong>room directory</strong>, et les <strong>QR codes</strong> 
            pour un accès facile au menu.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Améliorez votre <strong>e-réputation</strong> avec notre service de réponse aux avis Google et 
            d’optimisation de votre visibilité locale pour attirer plus de clients dans votre restaurant.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
          Contactez-nous pour discuter de vos besoins et développer une solution qui répond parfaitement à vos attentes.
          </p>
        </motion.div>

        {/* Bouton CTA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-lg shadow-md" text="Contactez-nous" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
