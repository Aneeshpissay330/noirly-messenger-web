import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
}

export default function Button({ children, variant = "primary", className = "", href, ...props }: ButtonProps) {
  const base =
    "rounded-full font-bold px-8 py-3 text-lg shadow-glass transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-60 disabled:cursor-not-allowed ";
  const variants = {
    primary: "bg-black text-white hover:bg-red-500",
    secondary:
      "border border-gray-200 bg-white text-black hover:border-red-500",
  };
  if (href) {
    return (
      <Link href={href} legacyBehavior passHref>
        <a className={`${base} ${variants[variant]} ${className}`}>{children}</a>
      </Link>
    );
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
