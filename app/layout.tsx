import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-t from-gray-900 to-gray-200">
          <Navbar />
          <div className="flex flex-col">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
