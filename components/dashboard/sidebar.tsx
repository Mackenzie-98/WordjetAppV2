"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  HomeIcon,
  LayoutDashboardIcon,
  FileIcon,
  SettingsIcon,
  MenuIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  FolderIcon,
  MoreHorizontalIcon,
  StarIcon,
  TrashIcon,
  PencilIcon,
  UsersIcon,
  ChevronDownIcon,
  HelpCircle,
  FileText,
  Clock,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMediaQuery } from "@/hooks/use-media-query"
import { FeedbackModal } from "@/components/dashboard/feedback-modal"
import Image from "next/image"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <HomeIcon className="h-4 w-4" />,
  },
]

interface Project {
  id: string
  name: string
  drafts?: { id: string; name: string; path: string }[]
}

// Projects data structure from the existing implementation
const projects: Project[] = [
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

// Mock recent documents - using existing structure
const recentDocs = [
  { id: "blog-post", name: "Blog Post", path: "/dashboard/editor/blog-post" },
  { id: "press-release", name: "Press Release", path: "/dashboard/editor/press-release" },
  { id: "social-media", name: "Social Media", path: "/dashboard/editor/social-media" },
  { id: "email-newsletter", name: "Email Newsletter", path: "/dashboard/editor/email-newsletter" },
  { id: "homepage", name: "Homepage", path: "/dashboard/editor/homepage" },
]

interface DashboardSidebarProps {
  initialCollapsed?: boolean;
}

export function DashboardSidebar({ initialCollapsed = false }: DashboardSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = React.useState(initialCollapsed)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const [showFeedbackModal, setShowFeedbackModal] = React.useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Actualizar el estado collapsed cuando cambia initialCollapsed
  React.useEffect(() => {
    setCollapsed(initialCollapsed);
  }, [initialCollapsed]);

  const toggleSidebar = () => setCollapsed(!collapsed)
  const handleNewDraft = () => {
    // Mark that we're creating from dashboard
    localStorage.setItem('wordjet_from_dashboard', 'true')
    router.push("/create")
  }
  const openFeedbackModal = () => setShowFeedbackModal(true)

  // Extract the draft ID and project ID from the pathname
  const segments = pathname.split("/")
  const isProjectView = segments.includes("project")
  const projectId = isProjectView ? segments[segments.indexOf("project") + 1] : ""
  const draftId = segments[segments.length - 1]

  const handleDeleteProject = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    // En una aplicación real, esto llamaría a una API para eliminar el proyecto
    console.log("Eliminando proyecto:", projectId);
  }

  // Desktop sidebar
  const SidebarContent = () => (
    <>
      {/* Header with logo */}
      <div className="h-14 px-3 flex items-center justify-between border-b">
        {!collapsed ? (
          <Link href="/dashboard" className="flex items-center gap-2.5 pl-1">
            <div className="flex items-center justify-center w-6 h-6">
              <Image src="/logo.svg" alt="WordJet" width={24} height={24} />
            </div>
            <span className="font-medium">WordJet</span>
          </Link>
        ) : (
          <div className="w-full flex justify-center">
            <Link href="/dashboard">
              <div className="flex items-center justify-center w-6 h-6">
                <Image src="/logo.svg" alt="WordJet" width={24} height={24} />
              </div>
            </Link>
          </div>
        )}
        {!collapsed && (
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" onClick={toggleSidebar}>
            <ChevronLeftIcon className="h-3.5 w-3.5" />
          </Button>
        )}
      </div>

      {/* Collapse button when sidebar is collapsed */}
      {collapsed && (
        <div className="mt-2 flex justify-center">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" onClick={toggleSidebar}>
            <ChevronRightIcon className="h-3.5 w-3.5" />
          </Button>
        </div>
      )}

      {/* New document button */}
      <div className="p-3">
        {!collapsed ? (
          <Button 
            className="w-full justify-start gap-2 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
            onClick={handleNewDraft}
          >
            <PlusIcon className="h-3.5 w-3.5" />
            <span>New Draft</span>
          </Button>
        ) : (
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  className="w-full h-9 flex justify-center bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                  onClick={handleNewDraft}
                >
                  <PlusIcon className="h-3.5 w-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">New Draft</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      {/* Main navigation */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-6 py-3">
          {/* Main nav items */}
          <nav className="space-y-1">
            {mainNavItems.map((item) => (
              <TooltipProvider key={item.href} delayDuration={collapsed ? 100 : 1000}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex h-9 items-center rounded-md px-3 text-sm transition-colors",
                        pathname === item.href
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                        collapsed && "justify-center px-0",
                      )}
                    >
                      {item.icon}
                      {!collapsed && <span className="ml-2">{item.title}</span>}
                    </Link>
                  </TooltipTrigger>
                  {collapsed && <TooltipContent side="right">{item.title}</TooltipContent>}
                </Tooltip>
              </TooltipProvider>
            ))}
            
            {/* Feedback button ahora como parte de la navegación */}
            <TooltipProvider delayDuration={collapsed ? 100 : 1000}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full flex h-9 items-center rounded-md text-sm transition-colors text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                      collapsed ? "justify-center px-0" : "px-3 justify-start",
                    )}
                    onClick={openFeedbackModal}
                  >
                    <HelpCircle className="h-4 w-4" />
                    {!collapsed && <span className="ml-2">Feedback</span>}
                  </Button>
                </TooltipTrigger>
                {collapsed && <TooltipContent side="right">Feedback</TooltipContent>}
              </Tooltip>
            </TooltipProvider>
          </nav>
          
          {/* Projects section */}
          {!collapsed && (
            <div className="space-y-2 mt-6 pt-6 border-t border-border/40">
              <div className="px-3 flex items-center justify-between">
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Projects</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5"
                  onClick={handleNewDraft}
                >
                  <PlusIcon className="h-3.5 w-3.5" />
                </Button>
              </div>
              <div className="space-y-1">
                {projects.map((project) => (
                  <div key={project.id} className="group flex items-center">
                    <Link
                      href={`/dashboard/project/${project.id}`}
                      className={cn(
                        "flex h-9 flex-1 items-center rounded-md px-3 text-sm transition-colors",
                        pathname === `/dashboard/project/${project.id}` || projectId === project.id
                          ? "bg-accent/50 text-accent-foreground font-medium"
                          : "text-muted-foreground hover:bg-accent/30 hover:text-accent-foreground",
                      )}
                    >
                      <FolderIcon className="h-3.5 w-3.5 shrink-0" />
                      <span className="ml-2 flex-1 truncate">{project.name}</span>
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontalIcon className="h-3.5 w-3.5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem onClick={(e) => handleDeleteProject(project.id, e)}>
                          <TrashIcon className="mr-2 h-3.5 w-3.5" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent documents section */}
          {!collapsed && (
            <div className="space-y-2">
              <div className="px-3 flex items-center justify-between">
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Recent Drafts</h3>
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                {recentDocs.map((doc) => (
                  <div key={doc.id} className="group flex items-center">
                    <Link
                      href={doc.path}
                      className={cn(
                        "flex h-9 flex-1 items-center rounded-md px-3 text-sm transition-colors",
                        pathname === doc.path || draftId === doc.id
                          ? "bg-accent/50 text-accent-foreground font-medium"
                          : "text-muted-foreground hover:bg-accent/30 hover:text-accent-foreground",
                      )}
                    >
                      <FileText className="h-3.5 w-3.5 shrink-0" />
                      <span className="ml-2 flex-1 truncate">{doc.name}</span>
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontalIcon className="h-3.5 w-3.5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem>
                          <PencilIcon className="mr-2 h-3.5 w-3.5" />
                          <span>Rename</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <StarIcon className="mr-2 h-3.5 w-3.5" />
                          <span>Favorite</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UsersIcon className="mr-2 h-3.5 w-3.5" />
                          <span>Share</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive focus:text-destructive">
                          <TrashIcon className="mr-2 h-3.5 w-3.5" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      {showFeedbackModal && <FeedbackModal onClose={() => setShowFeedbackModal(false)} />}
    </>
  )

  // For mobile use Sheet component from shadcn/ui
  if (isMobile) {
    return (
      <>
        <Button 
          variant="ghost" 
          size="icon" 
          className="fixed top-3 left-3 z-50 md:hidden" 
          onClick={() => setIsMobileOpen(true)}
        >
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetContent side="left" className="p-0 w-[280px]">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </>
    )
  }

  // Desktop sidebar
  return (
    <div
      className={cn(
        "hidden md:flex h-screen flex-col border-r bg-background transition-all duration-300 ease-in-out",
        collapsed ? "w-[60px]" : "w-[240px]",
      )}
    >
      <SidebarContent />
    </div>
  )
}

