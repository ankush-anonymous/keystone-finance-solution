import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Keystone - Your Financial Solutions Partner",
  description:
    "Keystone Finance provides trusted financial solutions across Canada, including business financing, leasing, mortgages, equipment loans, and refinancing. Fast approvals, expert advice, and flexible options for small businesses, startups, and entrepreneurs nationwide.",
  generator: 'v0.dev',
    icons: {
    icon: "/favicon.ico", // path from public
  },
  keywords: [
    "financial solutions Canada",
    "business financing Canada",
    "mortgage services Canada",
    "equipment financing",
    "commercial loans",
    "refinancing solutions",
    "leasing company Canada",
    "Canadian financial firm",
    "startup financing",
    "small business loans Canada",
    "Keystone Finance",
    "trusted financial advisors"
  ]
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
