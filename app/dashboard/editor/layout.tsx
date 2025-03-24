import type React from "react"

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 overflow-hidden h-full">
      {/* Main content area with children (editor) */}
      {children}
    </div>
  )
} 