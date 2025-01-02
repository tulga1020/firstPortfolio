import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

export const metadata: Metadata = {
  title: "Battulga.G | Software Engineer",
  description: "Portfolio of Battulga.G",
};
const raleway = localFont({
  src: "/fonts/Raleway.woff2", // Ensure this path is correct relative to the public directory
  variable: "--font-raleway",
  weight: "100 900",
});
const jetbrains = localFont({
  src: "/fonts/JetBrain.woff2",
  variable: "--font-jetbrain",
  weight: "100 900",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${jetbrains.variable} antialiased  text-white/80`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
