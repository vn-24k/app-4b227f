"use client";

import React from "react";
import { motion } from "framer-motion";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * 21st.dev / Aceternity Aurora Background Component.
 * Flowing organic gradient lights with soft Gaussian blur.
 */
export function AuroraBackground({
  children,
  className = "",
}: AuroraBackgroundProps) {
  return (
    <div className={`relative flex flex-col items-center justify-center overflow-hidden bg-[#030303] ${className}`}>
      {/* Aurora glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-40">
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["-10%", "15%", "-10%"],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 blur-[140px]"
        />
        <motion.div
          animate={{
            x: ["25%", "-20%", "25%"],
            y: ["10%", "-15%", "10%"],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-800 blur-[130px]"
        />
      </div>

      {children}
    </div>
  );
}
