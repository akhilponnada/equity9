import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Layout from "./components/layout"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Equity9 - Crowd Investment Platform",
  description: "Invest in exciting projects and become an equity partner with Equity9",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

