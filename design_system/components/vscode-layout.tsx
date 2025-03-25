"use client"

import type React from "react"

import { useState } from "react"
import {
  ChevronDown,
  Code,
  FileCode,
  Palette,
  Type,
  Ruler,
  Accessibility,
  Smartphone,
  X,
  Menu,
  Settings,
  Search,
  GitBranch,
  Play,
  Bug,
  Package,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface VSCodeLayoutProps {
  children: React.ReactNode
  activeSection: string
  setActiveSection: (section: string) => void
}

export function VSCodeLayout({ children, activeSection, setActiveSection }: VSCodeLayoutProps) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const sections = [
    { id: "components", name: "Components", icon: <Code size={16} /> },
    { id: "colors", name: "Colors", icon: <Palette size={16} /> },
    { id: "typography", name: "Typography", icon: <Type size={16} /> },
    { id: "spacing", name: "Spacing", icon: <Ruler size={16} /> },
    { id: "accessibility", name: "Accessibility", icon: <Accessibility size={16} /> },
    { id: "responsive", name: "Responsive", icon: <Smartphone size={16} /> },
  ]

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Top Bar */}
      <header className="h-9 flex items-center px-3 bg-header border-b border-border/60 text-xs">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 md:hidden"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          >
            <Menu size={14} />
          </Button>
          <span className="font-medium">BlueSky</span>
          <span className="text-muted-foreground">—</span>
          <span className="text-muted-foreground">Design System</span>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex items-center space-x-2">
            <button className="px-2 py-1 text-muted-foreground hover:text-foreground">File</button>
            <button className="px-2 py-1 text-muted-foreground hover:text-foreground">Edit</button>
            <button className="px-2 py-1 text-muted-foreground hover:text-foreground">View</button>
            <button className="px-2 py-1 text-muted-foreground hover:text-foreground">Help</button>
          </div>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-activityBar border-r border-border/60 flex-shrink-0 hidden md:flex flex-col items-center py-2">
          <TooltipProvider>
            <div className="flex flex-col items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-10 w-10 ${activeSection === "explorer" ? "bg-accent text-[#2563EB]" : "text-muted-foreground hover:text-[#2563EB]"}`}
                    onClick={() => toggleSidebar()}
                  >
                    <FileCode size={24} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Explorer</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-[#2563EB]">
                    <Search size={24} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Search</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-[#2563EB]">
                    <GitBranch size={24} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Source Control</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-[#2563EB]">
                    <Play size={24} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Run and Debug</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-[#2563EB]">
                    <Package size={24} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Extensions</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="mt-auto">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-[#2563EB]">
                    <Settings size={24} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>

        {/* Sidebar */}
        <div
          className={`bg-sidebar border-r border-border/60 flex-shrink-0 overflow-y-auto
            ${sidebarExpanded ? "w-60" : "w-0"} 
            ${mobileSidebarOpen ? "fixed inset-y-0 left-0 z-50 w-60" : "hidden md:block"}`}
        >
          {mobileSidebarOpen && (
            <div className="flex justify-between items-center p-3 border-b border-border/60">
              <span className="font-medium text-sm">Explorer</span>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setMobileSidebarOpen(false)}>
                <X size={14} />
              </Button>
            </div>
          )}

          <div className="p-2">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground py-1 px-2">Explorer</div>

            <div className="mt-2">
              <div className="flex items-center py-1 px-2 text-sm text-muted-foreground">
                <ChevronDown size={16} className="mr-1" />
                <span>DESIGN SYSTEM</span>
              </div>

              <div className="ml-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id)
                      setMobileSidebarOpen(false)
                    }}
                    className={`flex items-center py-1 px-2 text-sm w-full text-left rounded-sm ${
                      activeSection === section.id
                        ? "bg-[#e0fbfc] text-[#2563EB]"
                        : "text-foreground hover:bg-[#e0fbfc]/50 hover:text-[#2563EB]"
                    }`}
                  >
                    {section.icon}
                    <span className="ml-2">{section.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="h-9 flex items-center px-3 bg-header border-b border-border/60 text-xs">
            <div className="flex items-center">
              <button className="flex items-center py-1 px-3 bg-[#e0fbfc] text-[#2563EB] rounded-t-sm border-t border-l border-r border-border/60">
                {sections.find((s) => s.id === activeSection)?.icon}
                <span className="ml-2">{sections.find((s) => s.id === activeSection)?.name}.tsx</span>
              </button>
            </div>
          </div>

          <div className="p-4">{children}</div>
        </main>
      </div>

      {/* Status Bar */}
      <footer className="h-6 flex items-center px-3 bg-[#2563EB] border-t border-border/60 text-xs text-white">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <GitBranch size={12} className="mr-1" />
            <span>main</span>
          </div>
          <div>
            <Bug size={12} className="mr-1 inline-block" />
            <span>0</span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span>Ln 42, Col 18</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
        </div>
      </footer>
    </div>
  )
}

