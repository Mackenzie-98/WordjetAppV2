"use client"

import React from "react"
import { ThemeProvider } from "./components/theme-provider"
import { Toaster } from "./components/ui/toaster"

interface DesignSystemProviderProps {
  children: React.ReactNode
}

export function DesignSystemProvider({ children }: DesignSystemProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster />
    </ThemeProvider>
  )
} 