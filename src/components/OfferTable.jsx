import React from "react";
import { motion } from "framer-motion";

const tableVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function OfferTable() {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // S'active seulement une fois
    >
      <motion.h2 className="text-3xl font-bold mb-6 text-center" variants={rowVariants}>
        Nos Offres de Services
      </motion.h2>

      <motion.div className="overflow-x-auto" variants={tableVariants}>
        <motion.table 
          className="table-auto border-collapse border border-gray-300 w-full max-w-4xl bg-white shadow-lg rounded-lg"
          initial="hidden"
          animate="visible"
          variants={tableVariants}
        >
          {/* En-tête du tableau */}
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-6 py-3 text-left">Services</th>
              <th className="border border-gray-300 px-6 py-3">Entrée</th>
              <th className="border border-gray-300 px-6 py-3">Plat</th>
              <th className="border border-gray-300 px-6 py-3">Menu complet</th>
            </tr>
          </thead>

          {/* Corps du tableau */}
          <motion.tbody>
            {[
              { service: "Site internet", entree: true, plat: false, menu: true },
              { service: "Menu en ligne", entree: true, plat: false, menu: true },
              { service: "QR Code", entree: true, plat: false, menu: true },
              { service: "Traduction menu (anglais, espagnol)", entree: true, plat: false, menu: true },
              { service: "Module de réservation de table (sans commission)", entree: false, plat: true, menu: true },
            ].map((row, index) => (
              <motion.tr key={index} className="hover:bg-gray-100" variants={rowVariants}>
                <td className="border border-gray-300 px-6 py-3">{row.service}</td>
                <td className="border border-gray-300 px-6 py-3 text-center">
                  {row.entree ? "✅" : "❌"}
                </td>
                <td className="border border-gray-300 px-6 py-3 text-center">
                  {row.plat ? "✅" : "❌"}
                </td>
                <td className="border border-gray-300 px-6 py-3 text-center">
                  {row.menu ? "✅" : "❌"}
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </motion.table>
      </motion.div>
    </motion.div>
  );
}
