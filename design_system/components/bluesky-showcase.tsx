"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { ComponentShowcase } from "@/components/component-showcase"
import { DesignPrinciples } from "@/components/design-principles"
import { ColorSystem } from "@/components/color-system"
import { TypographySystem } from "@/components/typography-system"
import { SpacingSystem } from "@/components/spacing-system"
import { AccessibilityGuidelines } from "@/components/accessibility-guidelines"
import { ResponsivePatterns } from "@/components/responsive-patterns"
import { Footer } from "@/components/footer"

export function BlueSkyShowcase() {
  const [activeSection, setActiveSection] = useState("components")

  return (
    <ThemeProvider defaultTheme="light" storageKey="bluesky-theme-preference">
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header setActiveSection={setActiveSection} activeSection={activeSection} />

        <main className="flex-1">
          {activeSection === "principles" && <DesignPrinciples />}
          {activeSection === "colors" && <ColorSystem />}
          {activeSection === "typography" && <TypographySystem />}
          {activeSection === "spacing" && <SpacingSystem />}
          {activeSection === "components" && <ComponentShowcase />}
          {activeSection === "accessibility" && <AccessibilityGuidelines />}
          {activeSection === "responsive" && <ResponsivePatterns />}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

