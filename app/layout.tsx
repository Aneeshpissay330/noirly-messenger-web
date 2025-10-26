import Button from "../components/button";
function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-8 py-6 bg-white text-black">
      <div className="flex items-center gap-3">
        <div className="size-7 text-black">
          <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-glass"
          >
            <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold tracking-tight">Noirly Messenger</h2>
      </div>
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

export const metadata = {
  title: "Noirly Messenger",
  description: "Effortless, private communication for your mobile.",
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
