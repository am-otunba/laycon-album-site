import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";

import { Inter, Miriam_Libre, Manrope } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
})  

const manrope = Manrope({
  subsets: ['latin'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kashimawa | Pre-save",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className= {manrope.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
