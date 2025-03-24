import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - always visible */}
      <DashboardSidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />

        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  )
}
