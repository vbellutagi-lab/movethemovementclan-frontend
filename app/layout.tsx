import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { WhatsAppButton } from "./_components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Move — The Movement Clan",
  description:
    "Move is a small-group and one-on-one personal training studio in Indiranagar. One profile. Every coach. Zero gaps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
