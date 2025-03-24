"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  title: string
  path: string
}

export function EditorTabs() {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: "1", title: "Blog Post", path: "/blog-post" },
    { id: "2", title: "Social Media", path: "/social-media" },
  ])
  const [activeTab, setActiveTab] = useState("1")

  const handleCloseTab = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const newTabs = tabs.filter((tab) => tab.id !== id)
    setTabs(newTabs)

    // If we're closing the active tab, activate another tab
    if (id === activeTab && newTabs.length > 0) {
      setActiveTab(newTabs[0].id)
    }
  }

  return (
    <div className="flex items-center border-b overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={cn(
            "flex items-center gap-2 px-4 py-2 text-sm border-r relative",
            activeTab === tab.id
              ? "bg-background text-foreground border-b-2 border-b-primary"
              : "text-muted-foreground hover:bg-accent/50",
          )}
          onClick={() => setActiveTab(tab.id)}
        >
          <FileText className="h-4 w-4" />
          <span>{tab.title}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 ml-1 opacity-60 hover:opacity-100"
            onClick={(e) => handleCloseTab(tab.id, e)}
          >
            <X className="h-3 w-3" />
          </Button>
        </button>
      ))}
    </div>
  )
}

