import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/modules/core/providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "AponBridge Express — Send Parcels & Love to Bangladesh",
  description:
    "The premier expat courier gateway connecting the USA, UK, and Canada to all 64 districts of Bangladesh. Doorstep delivery, legal NBR customs clearance, and transparent per-pound pricing.",
  keywords: [
    "Bangladesh courier",
    "USA to Bangladesh parcel shipping",
    "Expat Bangladesh cargo",
    "Send laptop to Bangladesh",
    "Dhaka airport customs clearance",
    "AponBridge Express",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
