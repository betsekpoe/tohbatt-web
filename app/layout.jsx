import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "TOHBATT - Excellence in Construction & Training",
  description: "Providing world-class technical training and industrial construction services since 2013. Building legacies across Ghana and beyond.",
  keywords: ["Construction Training", "Technical Education", "Industrial Building", "TOHBATT", "Ghana Engineering", "Trust of Hope Building and Training Technology"],
  openGraph: {
    title: "TOHBATT | Engineering & Training Excellence",
    description: "Industrial construction and professional training services.",
    url: "https://tohbatt-web.vercel.app", // Change to your custom domain later
    siteName: "TOHBATT",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
