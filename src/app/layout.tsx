import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Preloader } from "@/components/animations/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexveratechnologies.com"),
  title: {
    default: "NexVera Technologies | Custom Software & AI Solutions",
    template: "%s | NexVera Technologies",
  },
  description: "Enterprise custom software, SaaS development, AI solutions, and business automation architectures.",
  keywords: ["Enterprise Software", "AI Solutions", "SaaS Development", "Business Automation", "Custom Software"],
  openGraph: {
    title: "NexVera Technologies | Custom Software & AI Solutions",
    description: "Architecting the digital infrastructure of tomorrow with scalable, secure, and intelligent solutions.",
    url: "https://nexveratechnologies.com",
    siteName: "NexVera Technologies",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexVera Technologies - Enterprise Software",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexVera Technologies",
    description: "Enterprise custom software, SaaS development, and AI solutions.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-brand-black font-sans text-brand-lightGray antialiased", inter.variable)}>
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <main className="relative flex min-h-screen flex-col pt-24">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}