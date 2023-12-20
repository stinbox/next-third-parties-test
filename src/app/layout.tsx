import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@next/third-parties YouTube Examples",
  description:
    "@next/third-parties で YouTube 埋め込みを行うサンプルコードです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " p-4"}>{children}</body>
    </html>
  );
}
