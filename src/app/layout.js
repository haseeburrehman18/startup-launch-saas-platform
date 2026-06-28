import "./globals.css";

export const metadata = {
  title: "Xorvia — Build your entire startup from just an idea",
  description: "AI-native platform that turns a single idea into a validated plan, brand, financials, website, and launch roadmap.",
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
