import "./globals.css";

import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Xorvia",
  description: "Build Your Startup From Just an Idea",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}
)
 {
  return (
    <html lang="en">
      <body
        className=" bg-gray-100 antialiased [--font-geist-sans:Arial,Helvetica,sans-serif] [--font-geist-mono:'Courier_New',monospace]">
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
