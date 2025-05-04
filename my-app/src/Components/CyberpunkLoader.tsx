import React from 'react';
import { motion } from 'framer-motion';
import './Styles/CyberpunkLoader.css';

const CyberpunkLoader: React.FC = () => {
  return (
    <motion.div
      className="neo-spinner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="orbit-ring ring-a"></div>
      <div className="orbit-ring ring-b"></div>
      <motion.div
        className="holo-label"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        LOADING...
      </motion.div>
    </motion.div>
  );
};

export default CyberpunkLoader;