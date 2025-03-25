import type React from "react"
import { ResizablePanelGroup } from "@/components/ui/resizable"

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ResizablePanelGroup 
      direction="horizontal" 
      className="h-screen w-full min-h-screen flex-1 overflow-hidden"
    >
      {/* Main content area with children (editor) */}
      {children}
    </ResizablePanelGroup>
  )
} 