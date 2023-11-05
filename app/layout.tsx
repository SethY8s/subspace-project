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
        <Navbar />
        <div className="flex flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
