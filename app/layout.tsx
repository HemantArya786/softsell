import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ChatWidget } from "@/components/chat/chat-widget";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SoftSell - Maximize the Value of Your Unused Software Licenses",
  description:
    "Turn your dormant software licenses into cash. Fast, secure, and hassle-free.",
  keywords:
    "software licenses, license reselling, software marketplace, sell licenses, buy licenses",
  authors: [{ name: "SoftSell" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softsell.com",
    title: "SoftSell - Maximize the Value of Your Unused Software Licenses",
    description:
      "Turn your dormant software licenses into cash. Fast, secure, and hassle-free.",
    siteName: "SoftSell",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSell - Maximize the Value of Your Unused Software Licenses",
    description:
      "Turn your dormant software licenses into cash. Fast, secure, and hassle-free.",
    creator: "@softsell",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
