/* eslint-disable @next/next/no-page-custom-font */
import type { Viewport } from "next";
import "./globals.css";
import Header from "@/_layouts/Header";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Fav Icon --> */}
      </head>
      <body className="bg-[#141414] text-[#e5e5e5]">
        <Header />
        {children}
      </body>
    </html>
  );
}
