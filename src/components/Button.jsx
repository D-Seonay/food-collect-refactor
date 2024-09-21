import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ text, onClick }) => {
return (
    <motion.button
        onClick={onClick}
        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-hover transition"
        whileTap={{ scale: 0.55 }} // Animation au clic
        transition={{ type: 'spring', stiffness: 300 }
        }
    >
    {text}
    </motion.button>
    );
};

export default Button;