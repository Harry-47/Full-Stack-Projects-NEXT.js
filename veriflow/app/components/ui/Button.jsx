"use client";
import { twMerge } from "tailwind-merge";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20",
  secondary: "bg-slate-800 text-gray-300 hover:bg-slate-700",
  tertiary:
    "border-2 border-slate-700 text-gray-400 hover:border-blue-500 hover:text-white",
  success: "bg-green-600 text-white hover:bg-green-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export default function Button({
  text = "Default Button",
  feature,
  variant = "primary",
  disabled = false,
  className = "",
  children, //for icons or custom content
  ...props
}) {
  return (
    <button
      onClick={feature}
      disabled={disabled}
      className={twMerge(
        "px-6 py-2 rounded-full font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center gap-2",
        variants[variant] || variants.primary,
        className,
      )}
      {...props}
    >
      {children || text}
    </button>
  );
}
