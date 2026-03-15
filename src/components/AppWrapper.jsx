"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Splash from "./Splash";
import SmoothScroll from "./SmoothScroll";
import CustomCursor from "./CustomCursor";

export default function AppWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll during splash
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Splash finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <CustomCursor />
      
      <SmoothScroll>
        <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-1000 delay-500"}>
          {children}
        </div>
      </SmoothScroll>
    </>
  );
}
