import Hero from "../../components/feature/home/Hero";
import FeatureCard from "../../components/feature/home/FeatureCard";
import { ShieldCheck, Search, Database } from "lucide-react";

export const metadata = {
  title: "VeriFlow | Verify Your Digital Assets",
  description: "Track origin and detect AI in images with zero hallucinations.",
};

export default function MarketingPage() {
  return (
    <div className="space-y-20">
      {/* 1. Animated Hero Section */}
      <Hero />

      {/* 2. Static Features Section  */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-4">
        <FeatureCard
          icon={<ShieldCheck className="text-blue-500 w-10 h-10" />}
          title="AI Detection"
          desc="Get a detailed AI score to distinguish between real and deepfake content."
        />
        <FeatureCard
          icon={<Search className="text-purple-500 w-10 h-10" />}
          title="Origin Tracking"
          desc="Find out exactly where and when an image was first posted online."
        />
        <FeatureCard
          icon={<Database className="text-green-500 w-10 h-10" />}
          title="Asset Hash"
          desc="Every verified asset gets a unique digital fingerprint in our database."
        />
      </section>
    </div>
  );
}
