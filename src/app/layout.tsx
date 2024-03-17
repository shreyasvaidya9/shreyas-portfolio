import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BlurredBackground } from "@/components/Decorative";
import { Footer, Header } from "@/components/Layout";
import Providers from "@/context";
import { Toaster } from "sonner";
import { ThemeSwitch } from "@/components/UI";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shreyas | Personal Portfolio",
  description:
    "Shreyas Vaidya is a fullstack developer with 5 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <BlurredBackground />
        <Providers>
          <Header />
          {children}
          <Footer />

          <Toaster />
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
}
