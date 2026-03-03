import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      minlength: 6,
      select: false, // hides password by default when fetching user data, for security reasons
    }
  },
  { timestamps: true } // 🟢 createdAt aur updatedAt
);

// 🟢 Next.js Hot Reloading 
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;