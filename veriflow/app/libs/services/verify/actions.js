"use server";
import connectDB from "../../utils/db";
import Asset from "../../models/Asset";
import { v2 as cloudinary } from "cloudinary";
import axios from "axios";
import { getToken } from "../../utils/auth";
import { json } from "zod";

// 1. Signature Generator for cloudinary upload
export async function getCloudinarySignature() {
  const timestamp = Math.round(new Date().getTime() / 1000);

  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: "Veriflow" },
    process.env.NEXT_CLOUD_API_SECRET,
  );

  return { timestamp, signature, apiKey: process.env.NEXT_CLOUD_API_KEY };
}

// 2. Process Image & Save to DB
export async function processAndSaveAssets(batchName, uploadedImage) {
  const { userId } = await getToken(); //destructing userId from the token

  if (!userId) return { success: false, error: "Invalid Session!" };

  await connectDB();
  try {
    const response = await axios.get(
      "https://api.sightengine.com/1.0/check.json",
      {
        params: {
          url: uploadedImage.secure_url,
          models: "genai",
          api_user: process.env.NEXT_SIGHTENGINE_API_USER,
          api_secret: process.env.NEXT_SIGHTENGINE_API_SECRET,
        },
      },
    );

    const aiScore = response.data?.type?.ai_generated || 0;
    const isAI = aiScore > 0.8;

    const newAsset = await Asset.create({
      userId,
      batchName,
      assetName: uploadedImage.name || "Unnamed Asset",
      assetUrl: uploadedImage.secure_url,
      publicId: uploadedImage.public_id,
      assetType: uploadedImage.type,
      isAI,
      confidenceScore: Number((aiScore * 100).toFixed(2)),
    });

    return { success: true, data: JSON.parse(JSON.stringify(newAsset)) };
  } catch (error) {
    console.error("Global Verification Error:", error.message);
    return { success: false, error: "Server error during verification." };
  }
}
