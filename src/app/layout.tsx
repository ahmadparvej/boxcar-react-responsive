import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/header";
import Footer from './../components/custom/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BoxCars",
  description: "box cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
