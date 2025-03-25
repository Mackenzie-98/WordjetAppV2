"use client"

import { useEffect, useState } from "react"
import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { usePathname } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  
  // Detectar si estamos en el editor para contraer el sidebar
  useEffect(() => {
    if (pathname.includes('/dashboard/editor/')) {
      setSidebarCollapsed(true)
    } else {
      setSidebarCollapsed(false)
    }
  }, [pathname])

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - always visible */}
      <DashboardSidebar initialCollapsed={sidebarCollapsed} />

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />

        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  )
}
