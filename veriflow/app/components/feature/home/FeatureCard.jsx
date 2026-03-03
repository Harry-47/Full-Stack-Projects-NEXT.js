export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-8 bg-slate-900/30 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all group">
      <div className="mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}
