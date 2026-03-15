"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash({ finishLoading }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            finishLoading();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [finishLoading]);

  const words = ["STRUCTURE", "PERFORMANCE", "CLARITY", "FARISDEV"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (counter % 25 === 0 && counter !== 0) {
      setWordIndex((prev) => Math.min(prev + 1, words.length - 1));
    }
  }, [counter]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center p-4"
    >
      <div className="relative w-full max-w-md">
        {/* Word Reveal */}
        <div className="overflow-hidden h-12 mb-4 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "backOut" }}
              className="text-white text-3xl font-bold tracking-[0.2em] uppercase"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-px bg-white/10 relative overflow-hidden">
          {/* Active Progress */}
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white"
            style={{ width: `${counter}%` }}
          />
        </div>

        {/* Counter UI */}
        <div className="mt-4 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">
          <span>Initializing System</span>
          <span className="text-white font-bold">{counter}%</span>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/20"></div>
      <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/20"></div>
      <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/20"></div>
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/20"></div>
    </motion.div>
  );
}
