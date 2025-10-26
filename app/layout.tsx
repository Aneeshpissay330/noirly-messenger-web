import Button from "../components/button";
import iconLight from "@/public/iconLight.svg";
import iconDark from "@/public/iconDark.svg"; 
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-8 py-6 bg-white text-black">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="size-7">
          <Image src={iconLight} alt="Noirly Messenger Logo" className="w-7 h-7 drop-shadow-glass group-hover:scale-105 transition-transform" />
        </div>
        <h2 className="text-xl font-bold tracking-tight group-hover:text-red-500 transition-colors">Noirly Messenger</h2>
      </Link>
      {/* <nav className="hidden md:flex gap-10">
        <a className="text-base font-medium hover:text-red-500 transition-colors" href="#">Features</a>
        <a className="text-base font-medium hover:text-red-500 transition-colors" href="#">Why Noirly?</a>
        <a className="text-base font-medium hover:text-red-500 transition-colors" href="#">Download</a>
      </nav> */}
      <Button variant="primary">Sign Up</Button>
    </header>
  );
}

import Link from "next/link";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noirly Messenger",
  description: "Effortless, private communication for your mobile.",
  icons: [
      { 
            media: "(prefers-color-scheme: light)", 
            url: iconLight.src,
            type: "image/svg+xml", 
      },
      { 
          media: "(prefers-color-scheme: dark)", 
          url: iconDark.src, 
          type: "image/svg+xml",
      },
  ]
};

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-white text-black">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between px-4 md:px-10 min-h-[64px] py-4 md:py-0">
        <p className="text-sm text-gray-600 w-full md:w-auto text-left leading-relaxed md:py-0">
          © {year} Noirly Messenger. All rights reserved.
        </p>
        <div className="flex gap-6 w-full md:w-auto justify-center md:justify-end md:py-0">
          <Link
            className="text-sm text-gray-700 hover:text-red-500"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm text-gray-700 hover:text-red-500"
            href="/terms-of-service"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-display bg-white text-black min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
