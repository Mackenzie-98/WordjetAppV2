import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { AIChatPanel } from "@/components/dashboard/ai-chat-panel"
import { ProtectRoute } from "@/components/auth/protect-route"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectRoute>
      <div className="flex h-screen bg-background">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main content area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <DashboardHeader />

          <div className="flex flex-1 overflow-hidden">
            {/* Main content */}
            <div className="flex-1 overflow-auto">{children}</div>

            {/* AI Chat Panel */}
            <AIChatPanel />
          </div>
        </div>
      </div>
    </ProtectRoute>
  )
}
