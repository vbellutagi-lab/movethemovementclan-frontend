import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Move — The Movement Clan",
  description:
    "Move is a small-group and one-on-one personal training studio in Indiranagar. One profile. Every coach. Zero gaps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
