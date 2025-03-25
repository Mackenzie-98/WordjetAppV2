import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { DesignSystemProvider, Toaster } from "@/lib/design-system"
import { AuthProvider } from "@/components/auth/auth-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WordJet - AI Content Platform",
  description: "Create, edit, and manage your content with AI assistance",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <DesignSystemProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
          <Toaster />
        </DesignSystemProvider>
      </body>
    </html>
  )
}