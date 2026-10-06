import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aarohan Academy | Dehradun's Trusted Tuition",
  description: "A premium tuition and coaching academy website demo for Dehradun.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}