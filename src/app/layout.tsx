import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Etrenzik — Smart Water Intelligence",
  description: "Etrenzik combines clamp-on smart water metering hardware with advanced billing software to turn water flow into financial clarity.",
  keywords: "smart water meter, water monitoring, water billing, HOA billing, leak detection, water management",
  openGraph: {
    title: "Etrenzik — Smart Water Intelligence",
    description: "Let us get you up and running. Monitor in real time. Turn water flow into financial control.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
