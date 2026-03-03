"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full gap-4">
      <div className="relative flex items-center justify-center">
        {/* Outer Pulsing & Rotating Ring (The Scan Effect) */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-t-4 border-b-4 border-blue-500 rounded-full border-opacity-50"
        />
        <Image src={logo} placeholder="blur" alt="Loading..." fill={true} />

        {/* Inner Shield Icon (Animated) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute text-5xl"
        ></motion.div>
      </div>

      {/* Dynamic Text Animation */}
      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1.0, repeat: Infinity }}
        className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600 font-bold text-lg tracking-widest"
      >
        Loading
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
