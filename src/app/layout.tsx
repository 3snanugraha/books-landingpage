import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paketbukumurah.vercel.app"),
  title: {
    default: "Paket Buku Perpustakaan Desa | Program Literasi Desa",
    template: "%s | Paket Buku Perpustakaan Desa",
  },
  description:
    "Dapatkan paket buku perpustakaan desa berkualitas untuk Program Literasi Desa. Tersedia 5 paket mulai dari 5-30 Juta dengan koleksi 150-900+ buku.",
  keywords: [
    "perpustakaan desa",
    "dana desa",
    "buku perpustakaan",
    "paket buku",
    "kemendes pdtt",
    "uu desa",
    "literasi desa",
  ],
  authors: [{ name: "Paket Buku Perpustakaan Desa" }],
  creator: "Paket Buku Perpustakaan Desa",
  publisher: "Paket Buku Perpustakaan Desa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://paketbukumurah.vercel.app",
    title: "Paket Buku Perpustakaan Desa | Program Literasi Desa",
    description:
      "Dapatkan paket buku perpustakaan desa berkualitas untuk Program Literasi Desa. Koleksi lengkap dengan bantuan RAB.",
    siteName: "Paket Buku Perpustakaan Desa",
    images: [
      {
        url: "/perpusdesa.jpg",
        width: 500,
        height: 300,
        alt: "Paket Buku Perpustakaan Desa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paket Buku Perpustakaan Desa | Program Literasi Desa",
    description:
      "Paket buku perpustakaan desa berkualitas untuk Program Literasi Desa. Koleksi lengkap dengan bantuan RAB.",
    images: ["/perpusdesa.jpg"],
    creator: "@paketbukudesa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://paketbukumurah.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
