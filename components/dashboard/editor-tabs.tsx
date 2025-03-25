"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/lib/design-system"
import { FileText, Image, Layout, Plus, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  name: string
  icon: "document" | "image" | "layout"
  isActive: boolean
}

export function EditorTabs() {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: "document-1",
      name: "Main Document",
      icon: "document",
      isActive: true,
    },
    {
      id: "image-1",
      name: "Featured Image",
      icon: "image",
      isActive: false,
    },
    {
      id: "layout-1",
      name: "Layout Options",
      icon: "layout",
      isActive: false,
    },
  ])

  const handleTabClick = (tabId: string) => {
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        isActive: tab.id === tabId,
      }))
    )
  }

  const handleCloseTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation()
    setTabs(tabs.filter((tab) => tab.id !== tabId))
  }

  const getIcon = (type: Tab["icon"]) => {
    switch (type) {
      case "document":
        return <FileText className="h-4 w-4" />
      case "image":
        return <Image className="h-4 w-4" />
      case "layout":
        return <Layout className="h-4 w-4" />
    }
  }

  return (
    <div className="border-b">
      <div className="flex items-center">
        <div className="flex-1 overflow-x-auto no-scrollbar">
          <div className="flex">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm border-r cursor-pointer group select-none",
                  tab.isActive
                    ? "bg-background text-foreground border-b-2 border-b-primary"
                    : "text-muted-foreground hover:bg-accent/50"
                )}
              >
                {getIcon(tab.icon)}
                <span className="truncate max-w-[120px]">{tab.name}</span>
                <button
                  onClick={(e) => handleCloseTab(e, tab.id)}
                  className="ml-1 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity hover:bg-accent rounded-full p-0.5"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
            <button className="px-3 py-2 border-r text-muted-foreground hover:text-foreground hover:bg-accent/50">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

