import Image from "next/image";

export const Certificate = ({ assetData }) => {
  const { assetUrl, confidenceScore, isAI, createdAt } = assetData;

  return (
    <div className="p-12 bg-white shadow-2xl relative flex flex-col items-center justify-between">
      {/* Veriflow Branding */}
      <div className="text-center">
        <h1 className="text-5xl font-black text-blue-900 tracking-tighter">
          VeriFlow Certificate
        </h1>
        <p className="text-sm uppercase tracking-widest text-slate-500 mt-2">
          Digital Asset Authenticity Report
        </p>
      </div>

      {/* Main Content */}
      <div className="text-center space-y-4">
        <p className="text-lg">
          This certifies that the following asset has been analyzed:
        </p>
        <Image
          src={assetUrl}
          priority
          height={200}
          width={500}
          alt="Media"
          className="text-2xl font-bold italic underline"
        />

        <div className="mt-6 p-4 bg-slate-100 rounded-lg border border-slate-200">
          <p className="text-sm font-semibold uppercase text-slate-600">
            Verification Result
          </p>
          <h3
            className={`text-3xl font-black ${isAI ? "text-red-600" : "text-green-600"}`}
          >
            {isAI ? "AI GENERATED" : "AUTHENTIC / HUMAN"}
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            AI Score: {confidenceScore}%
          </p>
        </div>
      </div>

      {/* Metadata & Signatures */}
      <div className="flex justify-between w-full border-t border-slate-300 pt-8 mt-4 text-xs">
        <div className="space-y-1">
          <p>
            <strong>Verification ID:</strong> VF-
            {assetData._id.substring(0, 8).toUpperCase()}
          </p>
          <p>
            <strong>Date:</strong> {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="text-right">
          <p className="font-bold">VeriFlow AI Engine v1.5</p>
          <p className="text-slate-400">Sightengine Protocol Secured</p>
        </div>
      </div>
    </div>
  );
};
