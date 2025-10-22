import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lazarev Clone - AI + Product Design Agency",
  description:
    "UX-First Design Agency for B2B + AI Companies. We launch MVPs, redefine existing products & continuously dive into customer development.",
  keywords: [
    "design agency",
    "UX design",
    "product design",
    "AI companies",
    "B2B design",
    "San Francisco",
  ],
  authors: [{ name: "Lazarev Clone" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-bg text-text w-full antialiased">{children}</body>
    </html>
  );
}
