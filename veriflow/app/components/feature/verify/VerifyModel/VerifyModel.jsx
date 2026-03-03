"use client";
import { useState, useRef } from "react";
import {
  Upload,
  X,
  CheckCircle,
  Download,
  Share2,
  FileText,
} from "lucide-react";
import Button from "../../../ui/Button";
import InputField from "../../../ui/InputField";
import Image from "next/image";
import { useReactToPrint } from "react-to-print";
import { Certificate } from "./Certificate";
import { handleSubmit, handleFileChange, removeFile } from "./utils";
import Message from "../../../ui/Message";

export default function VerifyModal() {
  const [file, setFile] = useState(); 
  const [batchName, setBatchName] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 
  const [report, setReport] = useState(null); 
  const [error, setError] = useState(null); 

  const certificateRef = useRef(null);

  const handleDownload = useReactToPrint({
    contentRef: certificateRef,
    documentTitle: `Veriflow_Certificate_${batchName || "Asset"}`,
  });

  return (

    <div className="p-6 text-white font-google-sans space-y-6">

      {/* 1. Batch Input */}
      <div className="max-w-md mx-auto">
        <InputField
          icon={FileText}
          placeholder="Batch Name (e.g. 'Project Veriflow')"
          value={batchName}
          onChange={(e) => setBatchName(e.target.value)}
        />
      </div>

      {/* 🟢 Parent Container for Side-by-Side Layout */}
      <div className="flex flex-col lg:flex-row gap-6 items-start max-w-6xl mx-auto">
        
        {/* 2. Upload Box - Left Side on Large Screens, above preview grid on small screens */}
        <div className="flex-1 w-full border-2 border-dashed border-slate-700 rounded-3xl p-10 text-center hover:border-blue-500 transition-all bg-slate-900/50 min-h-62. flex flex-col justify-center">
          <InputField
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setFile)}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <Upload className="w-12 h-12 text-blue-500 mb-4" />
            <p className="text-lg text-gray-300">
              Drop asset or
              <span className="text-blue-500 font-bold pl-4">Browse</span>
            </p>
          </label>
        </div>

        {/* 3. Preview Grid - Right Side on Large Screens, Below upload box on small screens */}
        <div className="flex-1 w-full flex justify-center items-center min-h-62.5">
          {file?.preview ? (
            <div className="relative group rounded-3xl overflow-hidden bg-slate-800 border-2 border-slate-700 h-64 w-full md:w-96 shadow-2xl">
              <Image
                src={file.preview}
                fill={true}
                className="object-cover"
                alt="preview"
              />
              <Button
                variant="danger"
                size="icon"
                onClick={() => removeFile(file,setFile)}
                className="absolute top-3 right-3 bg-red-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <X className="w-4 h-4 text-white" />
              </Button>
            </div>
          ) : (
            <div className="h-64 w-full md:w-96 border-2 border-slate-800 rounded-3xl flex items-center justify-center text-slate-600 italic">
              No asset selected
            </div>
          )}
        </div>
      </div>

      {/* 4. Action Button */}
      {file?.preview && !report ? (
        <div className="max-w-2xl mx-auto">
          <Button
            variant="primary"
            onClick={() =>
              handleSubmit({ file, batchName, setIsLoading, setError, setReport })
            }
            disabled={isLoading}
            className="w-full py-4 text-lg shadow-blue-500/10"
          >
            {isLoading ? "Analyzing Assets..." : "Check AI / Verify Asset"}
          </Button>
        </div>
      ) : null}

      {error ? <Message error={error} /> : null}

      {/* 🟢 5. Report Section */}
      {report ? (
        <div className="max-w-4xl mx-auto mt-10 p-8 bg-slate-900/50 rounded-3xl border border-blue-500/20 space-y-6 backdrop-blur-xl">
          <h2 className="text-2xl font-black flex items-center gap-3">
            <CheckCircle className="text-green-400 w-6 h-6" /> Verification Result
          </h2>

          <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src={report.assetUrl}
                className="w-20 h-20 rounded-xl object-cover border-2 border-slate-800"
                alt="verified"
              />
              <div>
                <p className="text-white font-bold truncate max-w-50">
                  {report.assetName}
                </p>
                <p className="text-xs text-slate-500 uppercase tracking-tighter">
                  ID: {report._id?.substring(0, 12)}
                </p>
              </div>
            </div>

            <div className={`px-6 py-2 rounded-full text-xs font-black tracking-widest ${report.isAI ? "bg-red-500/10 text-red-500 border border-red-500/20" : "bg-green-500/10 text-green-500 border border-green-500/20"}`}>
              {report.isAI ? "AI GENERATED" : "AUTHENTIC / REAL"}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="success" onClick={handleDownload} className="px-8 py-3">
                <Download className="w-4 h-4" /> Download Certificate
              </Button>
              <Button
                variant="secondary"
                className="px-8 py-3"
                onClick={() =>
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${report.assetUrl}`, "_blank")
                }
              >
                <Share2 className="w-4 h-4" /> Share on LinkedIn
              </Button>
            </div>
          </div>

          <div className="hidden">
            <div ref={certificateRef}>
              <Certificate assetData={report} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}