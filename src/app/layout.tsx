import type { Metadata } from "next";
import localFont from "next/font/local";
import InitScrollbarWidth from "@/components/layout/InitScrollbarWitdth";
import "./globals.css";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://welcome-hrus.uxis.co.kr"),
  title: "HRUS",
  description:
    "중소기업을 위한 인사경영혁신 솔루션, 함께 성장하고 나아가는 조직을 만듭니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} antialiased`}>
        {children}
        <InitScrollbarWidth />
      </body>
    </html>
  );
}
