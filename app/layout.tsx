import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "./context/ThemeProvider";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import "./globals.css";
import PageTransition from "./components/PageTransition";
import StairTransition from "./components/stairTransition";

const JetBrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "مركز أولو النهى للخدمات والدراسات الجامعية",
  icons: "https://i.imgur.com/T5Snrse.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={JetBrainsMono.variable}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <StairTransition />
          <PageTransition>{children}</PageTransition>

          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
