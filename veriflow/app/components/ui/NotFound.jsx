"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound({ children }) {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {/* Ye children wo static list hai jo server se render ho kar aa rahi hai */}
      <motion.div variants={itemVariants}>{children}</motion.div>

      {/* Buttons: Purely Interactive Client Logic */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          onClick={() => router.back()}
          className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all font-bold cursor-pointer text-white"
        >
          ⬅ Go Back
        </button>

        <button
          onClick={() => router.push("/dashboard")}
          className="px-8 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:scale-105 active:scale-95 transition-all font-bold shadow-lg shadow-blue-500/20 cursor-pointer text-white"
        >
          Go to Dashboard
        </button>
      </motion.div>
    </motion.div>
  );
}
