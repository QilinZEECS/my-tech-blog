import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Qilin's Blog",
    template: "%s | Qilin's Blog",
  },
  description:
    "Qilin's personal blog about technology, software development, and creative coding",
  keywords: [
    "Qilin",
    "blog",
    "technology",
    "software development",
    "programming",
  ],
  authors: [{ name: "Qilin" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Qilin's Blog",
    title: "Qilin's Blog",
    description:
      "Qilin's personal blog about technology, software development, and creative coding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qilin's Blog",
    description:
      "Qilin's personal blog about technology, software development, and creative coding",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <AnimatedBackground />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
