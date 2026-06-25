import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peneram Makcik | Peneram Warisan Asli di Puncak Alam",
  description:
    "Katalog Peneram Makcik untuk Small Pack, Round Container, COD Puncak Alam, postage dan order WhatsApp.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}
