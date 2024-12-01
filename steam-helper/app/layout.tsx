import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Steam Helper",
  description: "A helper for Steam users.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={``}>
        <AuthProvider>
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
              {session ? (
                <img
                  src={session.user?.image ?? ""}
                  className="h-8 w-8 rounded-full"
                ></img>
              ) : (
                <a className="bg-blue-600 rounded-lg py-1 px-3 text-sm text-slate-300">
                  Login Via Steam
                </a>
              )}
            </div>
          </nav>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
