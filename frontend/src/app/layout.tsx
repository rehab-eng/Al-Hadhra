import type { Metadata } from "next";
import {
  Amiri,
  Noto_Sans,
  Noto_Sans_Arabic,
  Noto_Sans_JP,
  Noto_Sans_SC,
  Tajawal,
} from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-display",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

const tajawal = Tajawal({
  variable: "--font-body",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-latin",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSC = Noto_Sans_SC({
  variable: "--font-cjk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoJP = Noto_Sans_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "جامعة الحاضرة | البوابة الرقمية العالمية",
  description:
    "منصة جامعة الحاضرة العالمية بتجربة تفاعلية متقدمة وهوية أكاديمية عصرية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${amiri.variable} ${tajawal.variable} ${notoSans.variable} ${notoArabic.variable} ${notoSC.variable} ${notoJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
