import { Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import 'katex/dist/katex.min.css';

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "SimpleVLA",
  description: "Road to VLA by Yahya Masri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} antialiased`}>
        <div className="fixed top-4 left-4 text-sm tracking-wide hidden md:block">
          simplevla.com
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
