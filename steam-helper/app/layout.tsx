import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <nav className="flex flex-row p-8 justify-between bg-slate-900">
          <div className="w-8 h-8 bg-blue-600" />
          <div className="flex flex-row text-blue-600 gap-x-8 align-middle items-center">
            <div className="flex flex-row gap-x-6 align-middle items-center text-base">
              <a href="/">Tools</a>
              <a href="/about">Community</a>
              <a href="/about">Explore</a>
              <a href="/about">FAQ</a>
              <a href="/about">Credits</a>
            </div>
            <a className="bg-blue-600 rounded-lg py-1 px-3 text-sm text-slate-300">
              Login Via Steam
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
