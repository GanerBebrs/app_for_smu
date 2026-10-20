import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Aera / 01 — Your Product Name",
  description: "A modern placeholder product site for Your Product Name.",
  openGraph: { title: "Aera / 01 — Your Product Name", description: "A modern placeholder product site." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${space.variable}`}><body><Navbar /><main>{children}</main><Footer /></body></html>;
}
