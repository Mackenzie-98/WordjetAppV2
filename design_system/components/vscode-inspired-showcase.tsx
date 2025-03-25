"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { VSCodeLayout } from "@/components/vscode-layout"
import { ComponentShowcase } from "@/components/component-showcase"
import { ColorSystem } from "@/components/color-system"
import { TypographySystem } from "@/components/typography-system"
import { SpacingSystem } from "@/components/spacing-system"
import { AccessibilityGuidelines } from "@/components/accessibility-guidelines"
import { ResponsivePatterns } from "@/components/responsive-patterns"

export function VSCodeInspiredShowcase() {
  const [activeSection, setActiveSection] = useState("components")

  const renderContent = () => {
    switch (activeSection) {
      case "colors":
        return <ColorSystem />
      case "typography":
        return <TypographySystem />
      case "spacing":
        return <SpacingSystem />
      case "accessibility":
        return <AccessibilityGuidelines />
      case "responsive":
        return <ResponsivePatterns />
      case "components":
      default:
        return <ComponentShowcase />
    }
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vscode-theme-preference">
      <VSCodeLayout activeSection={activeSection} setActiveSection={setActiveSection}>
        {renderContent()}
      </VSCodeLayout>
    </ThemeProvider>
  )
}

