import Image from "next/image";
import Link from "next/link";
import AuthStatus from "../../shared/AuthStatus";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
      <div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 space-y-6 text-center lg:text-left"
      >
        <h1 className="text-6xl font-black leading-tight">
          Verify What's <span className="text-blue-500">Real</span> in an AI
          World.
        </h1>
        <p className="text-gray-400 text-lg max-w-xl">
          VeriFlow is the ultimate custody and verification engine. Detect AI,
          track origin, and secure ownership in seconds.
        </p>
        <AuthStatus className="mt-10"
        signedIn={
            <Link
              href={"/verify"}
              prefetch={false}
              className="px-10 py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-black text-xl shadow-lg shadow-blue-500/20 hover:scale-105 transition-all cursor-pointer"
            >
              Start Your Flow
            </Link>
          }
          signedOut={
            <Link
              href={"/login"}
              prefetch={false}
              className="px-10 py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-black text-xl shadow-lg shadow-blue-500/20 hover:scale-105 transition-all cursor-pointer"
            >
              Get Started
            </Link>
          }
        />
      </div>

      <div
        className="flex-1 relative"
      >
        {/* Hero */}
        <div className="rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl">
          <Image
            src="/hero.png"
            alt="VeriFlow Logic"
            width={700}
            height={500}
            priority
            className="scale-115 h-75"
          />
        </div>
      </div>
    </section>
  );
}
