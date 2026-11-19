/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import "../globals.css";
import React, { Suspense } from "react";
import Header from "@/_layouts/Header";
import Loading from "./loading";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Dev News",
};

export const generateStaticParams = () => {
  return [{ lang: "en" }, { lang: "bn" }];
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Sora:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen text-zinc-100">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute -left-32 top-10 h-80 w-80 rounded-full"
              style={{
                background: `radial-gradient(
                            circle,
                            var(--glow-strong),
                            transparent 70%
                        )`,
              }}
            ></div>
            <div
              className="absolute right-0 top-52 h-72 w-72 rounded-full"
              style={{
                background: ` radial-gradient(
                            circle,
                            var(--glow),
                            transparent 70%
                        )`,
              }}
            ></div>
            <div className="noise absolute inset-0"></div>
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <Header />
            {children}
            <Suspense fallback={<Loading />}>{modal}</Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
