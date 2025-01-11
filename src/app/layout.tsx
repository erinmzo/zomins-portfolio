import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  verification: {
    google: "OHO2ohQCbbSAw0hMLbEVl2rswnYlXXp18fdbCxevn4E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} antialiased`}>{children}</body>
      <Analytics />
    </html>
  );
}
