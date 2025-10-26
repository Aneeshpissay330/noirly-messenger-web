import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "rounded-full font-bold px-8 py-3 text-lg shadow-glass transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-60 disabled:cursor-not-allowed ";
  const variants = {
    primary: "bg-black text-white hover:bg-red-500",
    secondary:
      "border border-gray-200 bg-white text-black hover:border-red-500",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
