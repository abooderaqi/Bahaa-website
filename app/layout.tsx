import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "./context/ThemeProvider"

import Navbar from "./components/navbar"
import Footer from "./components/Footer"

import "./globals.css"

const poppins = Poppins({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AE Portfolio",
  icons: "https://i.imgur.com/T5Snrse.jpg",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
