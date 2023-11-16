/* eslint-disable tailwindcss/classnames-order */
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import { AuthProvider } from "@/providers/auth-provider"

import { cn } from "@/lib/utils"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chat AI",
  description: "Chat usando vercel sdk ai",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <AuthProvider>
          <SiteHeader />
          <div className="relative flex flex-col">{children}</div>
        </AuthProvider>
      </body>
    </html>
  )
}
