import mongoose from "mongoose";

const AssetSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: false,
      index: true,
    },
    batchName: {
      type: String,
      default: "Untitled Batch",
    },

    assetName: {
      type: String,
      required: true,
    },

    assetUrl: {
      type: String,
      required: true,
    },

    publicId: {
      type: String,
      required: true,
    },
    assetType: {
      type: String,
      required: true,
    },

    isAI: {
      type: Boolean,
      required: true,
    },
    confidenceScore: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["verified", "flagged"],
      default: function () {
        return this.isAI ? "flagged" : "verified";
      },
    },
  },
  { timestamps: true },
);
export default mongoose.models.Asset || mongoose.model("Asset", AssetSchema);
