"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderClosed,
  Home,
  Settings,
  PlusCircle,
  Search,
  Menu,
  ChevronDown,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { useMediaQuery } from "@/hooks/use-media-query"

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const projects = [
    {
      id: "1",
      name: "Marketing Campaign",
      files: [
        { id: "1-1", name: "Blog Post", path: "/blog-post" },
        { id: "1-2", name: "Social Media", path: "/social-media" },
      ],
    },
    {
      id: "2",
      name: "Product Launch",
      files: [
        { id: "2-1", name: "Press Release", path: "/press-release" },
        { id: "2-2", name: "Email Newsletter", path: "/email-newsletter" },
      ],
    },
  ]

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen)
  }

  // For mobile, we'll use a different approach
  if (isMobile) {
    return (
      <>
        <Button variant="ghost" size="icon" className="fixed top-3 left-3 z-50 md:hidden" onClick={toggleMobileSidebar}>
          <Menu className="h-5 w-5" />
        </Button>

        {/* Mobile sidebar overlay */}
        {mobileOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMobileSidebar} />}

        {/* Mobile sidebar */}
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg">WordJet</h2>
              <Button variant="ghost" size="icon" onClick={toggleMobileSidebar}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <SidebarContent />
        </div>
      </>
    )
  }

  return (
    <div
      className={cn(
        "relative hidden md:flex flex-col h-full border-r bg-card transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="p-4 border-b flex items-center justify-between">
        {!collapsed && <h2 className="font-semibold text-lg">WordJet</h2>}
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className={collapsed ? "mx-auto" : ""}>
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>

      {!collapsed && <SidebarContent />}

      {collapsed && (
        <div className="flex flex-col items-center py-4 space-y-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard">
              <Home className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <FileText className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  )
}

function SidebarContent() {
  const projects = [
    {
      id: "1",
      name: "Marketing Campaign",
      files: [
        { id: "1-1", name: "Blog Post", path: "/blog-post" },
        { id: "1-2", name: "Social Media", path: "/social-media" },
      ],
    },
    {
      id: "2",
      name: "Product Launch",
      files: [
        { id: "2-1", name: "Press Release", path: "/press-release" },
        { id: "2-2", name: "Email Newsletter", path: "/email-newsletter" },
      ],
    },
  ]

  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    "1": true,
  })

  const toggleProject = (projectId: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }))
  }

  return (
    <>
      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search files..." className="pl-8 bg-background h-9" />
        </div>
      </div>

      <div className="flex-1 overflow-auto py-2">
        <div className="px-3 py-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Projects</h3>
            <Button variant="ghost" size="icon" className="h-5 w-5">
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-1">
            {projects.map((project) => (
              <div key={project.id}>
                <button
                  onClick={() => toggleProject(project.id)}
                  className="flex items-center w-full text-sm px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground"
                >
                  {expandedProjects[project.id] ? (
                    <ChevronDown className="h-4 w-4 mr-1 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 mr-1 text-muted-foreground" />
                  )}
                  <FolderClosed className="h-4 w-4 mr-2 text-blue-500" />
                  <span className="truncate">{project.name}</span>
                </button>

                {expandedProjects[project.id] && (
                  <div className="ml-6 my-1 space-y-1">
                    {project.files.map((file) => (
                      <Link
                        key={file.id}
                        href={`/dashboard${file.path}`}
                        className="flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground"
                      >
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="truncate">{file.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 border-t">
        <nav className="space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center text-sm px-2 py-1.5 rounded-md bg-accent text-accent-foreground"
          >
            <Home className="h-4 w-4 mr-2" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground"
          >
            <Settings className="h-4 w-4 mr-2" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>
    </>
  )
}

