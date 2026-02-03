import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "TOHBATT | Skills & Construction",
  description: "Trust of Hope Building and Training Technology",
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