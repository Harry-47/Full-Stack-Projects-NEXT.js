import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected ✅");
  } catch (error) {
    console.log("DB Error ❌", error);
  }
};

export default connectDB;
