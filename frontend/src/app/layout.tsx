import type { Metadata } from "next";
import { Amiri, Tajawal } from "next/font/google";
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
      <body className={`${amiri.variable} ${tajawal.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
