"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ButtonShowcase } from "@/components/showcases/button-showcase"
import { FormShowcase } from "@/components/showcases/form-showcase"
import { CardShowcase } from "@/components/showcases/card-showcase"
import { NavigationShowcase } from "@/components/showcases/navigation-showcase"
import { AnnotationCard } from "@/components/annotation-card"

export function ComponentShowcase() {
  const [activeTab, setActiveTab] = useState("buttons")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium tracking-tight">Component Library</h1>
        <p className="text-muted-foreground text-sm">
          A comprehensive collection of UI components designed with a minimalist VS Code-inspired aesthetic.
        </p>
      </div>

      <Tabs defaultValue="buttons" className="w-full" onValueChange={setActiveTab}>
        <div className="mb-4">
          <TabsList className="w-full md:w-auto justify-start overflow-auto py-1">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="forms">Form Elements</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
          </TabsList>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <TabsContent value="buttons" className="mt-0">
              <ButtonShowcase />
            </TabsContent>
            <TabsContent value="forms" className="mt-0">
              <FormShowcase />
            </TabsContent>
            <TabsContent value="cards" className="mt-0">
              <CardShowcase />
            </TabsContent>
            <TabsContent value="navigation" className="mt-0">
              <NavigationShowcase />
            </TabsContent>
          </div>

          <div>
            <AnnotationCard
              title={
                activeTab === "buttons"
                  ? "Button Design Decisions"
                  : activeTab === "forms"
                    ? "Form Element Design Decisions"
                    : activeTab === "cards"
                      ? "Card Design Decisions"
                      : "Navigation Design Decisions"
              }
              annotations={
                activeTab === "buttons"
                  ? [
                      {
                        title: "VS Code Inspiration",
                        description:
                          "Buttons are designed with the same compact, minimalist aesthetic as VS Code, with clear visual distinction between primary and secondary actions.",
                      },
                      {
                        title: "Color Choices",
                        description:
                          "Primary buttons use #2563EB (primary blue) to draw attention, while secondary buttons use more subtle styling with borders and transparent backgrounds.",
                      },
                      {
                        title: "Compact Design",
                        description:
                          "Reduced padding (horizontal: 12px, vertical: 6px) creates a more compact appearance while maintaining usability and touch targets.",
                      },
                      {
                        title: "Typography",
                        description:
                          "System UI fonts with medium weight (500) improve readability while maintaining the clean, code-editor aesthetic.",
                      },
                      {
                        title: "States",
                        description:
                          "Interactive states (hover, focus, active) provide subtle but clear feedback with slight color changes and a visible focus ring for accessibility.",
                      },
                    ]
                  : activeTab === "forms"
                    ? [
                        {
                          title: "Minimal Styling",
                          description:
                            "Form fields use subtle borders and minimal styling to create a clean, distraction-free interface similar to VS Code's settings forms.",
                        },
                        {
                          title: "Compact Layout",
                          description:
                            "Reduced spacing between form elements creates a denser layout while maintaining clear visual separation between fields.",
                        },
                        {
                          title: "Error States",
                          description:
                            "Error messages use a subtle red border and text to clearly communicate issues without overwhelming the interface.",
                        },
                        {
                          title: "Focus Indicators",
                          description:
                            "A blue ring appears around inputs when focused, matching VS Code's focus style for consistency across the interface.",
                        },
                        {
                          title: "Monospace for Code",
                          description:
                            "Code inputs and similar fields use monospace fonts to match the code editing experience in VS Code.",
                        },
                      ]
                    : activeTab === "cards"
                      ? [
                          {
                            title: "Panel-like Design",
                            description:
                              "Cards are designed to resemble VS Code panels with minimal borders and subtle background colors to create a sense of depth.",
                          },
                          {
                            title: "Reduced Padding",
                            description:
                              "Internal spacing is reduced to 12px (from the typical 16px) to create a more compact, information-dense layout.",
                          },
                          {
                            title: "Flat Aesthetic",
                            description:
                              "Shadows are minimized or eliminated in favor of subtle borders, creating a flatter, more VS Code-like appearance.",
                          },
                          {
                            title: "Content Organization",
                            description:
                              "Content is organized with clear headings and concise text, similar to VS Code's information panels and notifications.",
                          },
                          {
                            title: "Interactive Elements",
                            description:
                              "Interactive cards include subtle hover effects that match VS Code's hover behaviors for consistency.",
                          },
                        ]
                      : [
                          {
                            title: "Tab-based Navigation",
                            description:
                              "Navigation elements use a tab-based approach similar to VS Code's editor tabs, with clear active states.",
                          },
                          {
                            title: "Sidebar Patterns",
                            description:
                              "Vertical navigation mimics VS Code's sidebar with collapsible sections and highlighted active items.",
                          },
                          {
                            title: "Compact Menus",
                            description:
                              "Dropdown menus and context menus are designed to be compact and keyboard-friendly, just like in VS Code.",
                          },
                          {
                            title: "Icon Usage",
                            description:
                              "Icons are used consistently alongside text labels, matching VS Code's approach to navigation and toolbars.",
                          },
                          {
                            title: "Keyboard Accessibility",
                            description:
                              "All navigation elements support keyboard shortcuts and focus states, maintaining VS Code's keyboard-centric approach.",
                          },
                        ]
              }
            />
          </div>
        </div>
      </Tabs>
    </div>
  )
}

