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
  title: {
    default: "프론트엔드 개발자 조민수 포트폴리오 사이트",
    template: "프론트엔드 개발자 조민수 포트폴리오 사이트",
  },
  description: "다양한 경험으로 소통하는 개발자 조민수입니다.",
  openGraph: {
    title: "프론트엔드 개발자 조민수 포트폴리오 사이트",
    description: "다양한 경험으로 소통하는 개발자 조민수입니다.",
    siteName: "조민수 포트폴리오 사이트",
    locale: "ko_KR",
    type: "website",
    url: "https://zomins-portfolio.vercel.app/",
    images: {
      url: "/img-meta.jpg",
    },
  },
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
