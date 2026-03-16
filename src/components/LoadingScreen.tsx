import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-10 h-10" />
          <span className="text-3xl font-serif font-bold tracking-tighter">CVCreator</span>
        </div>
        
        <div className="w-48 h-[2px] bg-neutral-100 overflow-hidden relative">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-black"
          />
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium"
        >
          Gerando sua experiência profissional...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
