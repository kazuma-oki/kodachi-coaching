import type { Metadata } from "next";
import "./globals.css";
import {basePath} from "../lib/paths";

export const metadata: Metadata = {
  title: { default: "KODACHI｜自分で考え、自分で決める力を、対話で育てる。", template: "%s｜KODACHI" },
  description: "アスリート・チーム・経営者のためのコーチング。問いと対話を通して、自分で動ける状態をつくります。ブランドサイト制作サンプル。",
  robots: { index: false, follow: false },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&family=Noto+Sans+JP:wght@400;500&family=Shippori+Mincho:wght@500&display=swap" rel="stylesheet"/></head>
      <body style={{"--wood-image":`url("${basePath}/assets/wood.webp")`} as React.CSSProperties}>{children}</body>
    </html>
  );
}
