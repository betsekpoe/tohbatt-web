import "./globals.css";
import webPreview from "./web-preview.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://tohbatt-web.vercel.app"),
  title: "TOHBATT - Excellence in Construction & Training",
  description: "TOHBATT builds skilled professionals and delivers trusted construction training and services across Ghana.",
  keywords: ["Construction Training", "Technical Education", "Industrial Building", "TOHBATT", "Ghana Engineering", "Trust of Hope Building and Training Technology"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TOHBATT | Engineering & Training Excellence",
    description: "TOHBATT builds skilled professionals and delivers trusted construction training and services across Ghana.",
    url: "/",
    siteName: "TOHBATT",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: webPreview.src,
        width: 1200,
        height: 630,
        alt: "TOHBATT social preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOHBATT | Engineering & Training Excellence",
    description: "TOHBATT builds skilled professionals and delivers trusted construction training and services across Ghana.",
    images: [webPreview.src],
  },
  other: {
    "telegram:channel": "TOHBATT",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
