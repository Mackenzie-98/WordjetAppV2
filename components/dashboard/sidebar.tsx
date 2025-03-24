"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  FileText,
  FolderClosed,
  Settings,
  PlusCircle,
  Search,
  Menu,
  ChevronDown,
  ChevronRight,
  MessageSquare,
  Clock,
  LayoutGrid,
  ChevronLeft,
  HelpCircle,
  MoreHorizontal,
  Trash
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { useMediaQuery } from "@/hooks/use-media-query"
import { usePathname, useRouter } from "next/navigation"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FeedbackModal } from "@/components/dashboard/feedback-modal"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const pathname = usePathname()
  const router = useRouter()

  // Extract the draft ID and project ID from the pathname
  const segments = pathname.split("/")
  const isProjectView = segments.includes("project")
  const projectId = isProjectView ? segments[segments.indexOf("project") + 1] : ""
  const draftId = segments[segments.length - 1] 

  // Mock data for projects - in a real app, this would come from an API or database
  const projects = [
    {
      id: "1",
      name: "Marketing Campaign",
      drafts: [
        { id: "1-1", name: "Blog Post", path: "/dashboard/editor/blog-post" },
        { id: "1-2", name: "Social Media", path: "/dashboard/editor/social-media" },
      ],
    },
    {
      id: "2",
      name: "Product Launch",
      drafts: [
        { id: "2-1", name: "Press Release", path: "/dashboard/editor/press-release" },
        { id: "2-2", name: "Email Newsletter", path: "/dashboard/editor/email-newsletter" },
      ],
    },
  ]

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNewDraft = () => {
    router.push("/create")
  }

  const openFeedbackModal = () => {
    setShowFeedbackModal(true)
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
          <SidebarContent 
            pathname={pathname} 
            projectId={projectId}
            draftId={draftId} 
            openFeedbackModal={openFeedbackModal}
          />
        </div>

        {showFeedbackModal && <FeedbackModal onClose={() => setShowFeedbackModal(false)} />}
      </>
    )
  }

  return (
    <div
      className={cn(
        "relative flex flex-col h-full border-r bg-card transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="p-4 border-b flex items-center justify-between">
        {!collapsed && <h2 className="font-semibold text-lg">WordJet</h2>}
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className={collapsed ? "mx-auto" : ""}>
          <LayoutGrid className="h-5 w-5" />
        </Button>
      </div>

      {!collapsed && <SidebarContent 
        pathname={pathname} 
        projectId={projectId}
        draftId={draftId} 
        openFeedbackModal={openFeedbackModal}
      />}

      {collapsed && (
        <div className="flex flex-col items-center py-4 space-y-4">
          <Button variant="ghost" size="icon" onClick={handleNewDraft}>
            <PlusCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard">
              <FolderClosed className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" onClick={openFeedbackModal}>
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      )}

      {showFeedbackModal && <FeedbackModal onClose={() => setShowFeedbackModal(false)} />}
    </div>
  )
}

function SidebarContent({ 
  pathname, 
  projectId,
  draftId, 
  openFeedbackModal 
}: { 
  pathname: string;
  projectId: string;
  draftId: string;
  openFeedbackModal: () => void;
}) {
  const router = useRouter()
  const [currentProjectId, setCurrentProjectId] = useState<string>("")
  const [currentDraftId, setCurrentDraftId] = useState<string>("")

  // Check localStorage for current project and draft
  useEffect(() => {
    const storedProjectId = localStorage.getItem('wordjet_current_project')
    const storedDraftId = localStorage.getItem('wordjet_current_draft')
    
    if (storedProjectId) {
      setCurrentProjectId(storedProjectId)
    }
    
    if (storedDraftId) {
      setCurrentDraftId(storedDraftId)
    }
  }, [pathname]) // Re-check when the path changes

  const projects = [
    {
      id: "1",
      name: "Marketing Campaign",
      drafts: [
        { id: "blog-post", name: "Blog Post", path: "/dashboard/editor/blog-post" },
        { id: "social-media", name: "Social Media", path: "/dashboard/editor/social-media" },
      ]
    },
    {
      id: "2",
      name: "Product Launch",
      drafts: [
        { id: "press-release", name: "Press Release", path: "/dashboard/editor/press-release" },
        { id: "email-newsletter", name: "Email Newsletter", path: "/dashboard/editor/email-newsletter" },
      ]
    },
    {
      id: "3",
      name: "Website Redesign",
      drafts: [
        { id: "homepage", name: "Homepage", path: "/dashboard/editor/homepage" },
        { id: "about-page", name: "About Page", path: "/dashboard/editor/about-page" },
      ]
    },
  ]

  const handleNewDraft = () => {
    router.push("/create")
  }

  const handleDeleteProject = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    // En una aplicación real, esto llamaría a una API para eliminar el proyecto
    console.log("Eliminando proyecto:", projectId);
  }

  // Determina si estamos en la vista de un proyecto específico
  const isInProjectView = pathname.startsWith('/dashboard/project/');
  // Encuentra el proyecto actual si estamos en la vista de proyecto
  const currentProject = projects.find(p => p.id === projectId);

  return (
    <ScrollArea className="flex-1">
      <div className="px-3 py-2">
        <Button
          variant="outline"
          className="w-full justify-start mb-4 gap-2 bg-primary/10 hover:bg-primary/20 border-primary/20"
          onClick={handleNewDraft}
        >
          <PlusCircle className="h-4 w-4" />
          New Draft
        </Button>

        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="pl-8 bg-background h-9" />
        </div>

        <nav className="space-y-1 mb-6">
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground",
              (pathname === "/dashboard" || pathname === "/dashboard/projects") && "bg-accent text-accent-foreground",
            )}
          >
            <FolderClosed className="h-4 w-4 mr-2" />
            <span>Projects</span>
          </Link>
          
          <Button
            variant="ghost"
            className={cn(
              "w-full flex items-center justify-start text-sm px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground",
            )}
            onClick={openFeedbackModal}
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            <span>Feedback</span>
          </Button>
        </nav>

        {/* Si estamos en la vista de proyecto, mostramos los drafts de ese proyecto específico */}
        {isInProjectView && currentProject ? (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2">
                {currentProject.name} Drafts
              </h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Settings className="h-4 w-4 mr-2" />
                    Project Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash className="h-4 w-4 mr-2" />
                    Delete Project
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="space-y-1 mt-2">
              {currentProject.drafts.map((draft) => (
                <Link
                  key={draft.id}
                  href={draft.path}
                  className={cn(
                    "flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground",
                    pathname.includes(draft.id) && "bg-accent text-accent-foreground",
                  )}
                >
                  <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="truncate">{draft.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 mb-2">Projects</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6"
                  onClick={() => router.push("/create")}
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-1">
                {projects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between group">
                    <Link
                      href={`/dashboard/project/${project.id}`}
                      className={cn(
                        "flex items-center flex-1 text-sm px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground",
                        (pathname === `/dashboard/project/${project.id}` || currentProjectId === project.id) && "bg-accent text-accent-foreground",
                      )}
                    >
                      <FolderClosed className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="truncate">{project.name}</span>
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                        <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem 
                          className="text-destructive focus:text-destructive"
                          onClick={(e) => handleDeleteProject(project.id, e)}
                        >
                          <Trash className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 mb-2">Recent Drafts</h3>
              <div className="space-y-1">
                <Link
                  href="/dashboard/editor/blog-post"
                  className={cn(
                    "flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground",
                    (pathname === "/dashboard/editor/blog-post" || currentDraftId === "blog-post") && "bg-accent text-accent-foreground",
                  )}
                >
                  <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="truncate">Blog Post</span>
                </Link>
                <Link
                  href="/dashboard/editor/press-release"
                  className={cn(
                    "flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground",
                    (pathname === "/dashboard/editor/press-release" || currentDraftId === "press-release") && "bg-accent text-accent-foreground",
                  )}
                >
                  <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="truncate">Press Release</span>
                </Link>
                <Link
                  href="/dashboard/editor/social-media"
                  className={cn(
                    "flex items-center text-sm px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground",
                    (pathname === "/dashboard/editor/social-media" || currentDraftId === "social-media") && "bg-accent text-accent-foreground",
                  )}
                >
                  <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="truncate">Social Media</span>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </ScrollArea>
  )
}

