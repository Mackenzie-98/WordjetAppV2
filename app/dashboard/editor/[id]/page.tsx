"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { EditorTabs } from "@/components/dashboard/editor-tabs"
import { EditorToolbar } from "@/components/dashboard/editor-toolbar"
import { ContentEditor } from "@/components/dashboard/content-editor"
import { AIChatPanel } from "@/components/dashboard/ai-chat-panel"
import { Button } from "@/lib/design-system"
import { ArrowLeft, FilePlus, PanelLeftClose, FileText, Home, Search, PanelLeft } from "lucide-react"
import { PathBreadcrumb } from "@/components/dashboard/path-breadcrumb"
import { FileExplorer } from "@/components/dashboard/file-explorer"
// import { ContentGenerationProgress } from "@/components/dashboard/content-generation-progress"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

export default function EditorPage() {
  const params = useParams()
  const router = useRouter()
  const draftId = params.id as string
  const [projectName, setProjectName] = useState<string>("")
  const [projectId, setProjectId] = useState<string>("")
  const [showFileSidebar, setShowFileSidebar] = useState(true)
  // const [showGenerationProgress, setShowGenerationProgress] = useState(false)

  // In a real app, you would fetch the draft data based on the ID
  // For now, we'll use a mock title based on the URL
  const getDraftTitle = (id: string) => {
    const titles: Record<string, string> = {
      "blog-post": "Blog Post",
      "social-media": "Social Media",
      "press-release": "Press Release",
      "email-newsletter": "Email Newsletter",
    }
    return titles[id] || "Draft"
  }

  const draftTitle = getDraftTitle(draftId)

  // Check if we should show the content generation progress modal
  /* 
  useEffect(() => {
    const shouldShowProgress = localStorage.getItem('wordjet_show_generation_progress') === 'true'
    if (shouldShowProgress) {
      setShowGenerationProgress(true)
      // Clear the flag so it doesn't show again on refresh
      localStorage.removeItem('wordjet_show_generation_progress')
    }
  }, [])
  */

  // Store the current draft in localStorage when the component mounts
  // and determine which project it belongs to
  useEffect(() => {
    // Find the project that contains this draft
    const findProjectForDraft = () => {
      // Mock projects data - in a real app this would come from a database or API
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
      ]

      for (const project of projects) {
        const draft = project.drafts.find(d => d.id === draftId)
        if (draft) {
          return { projectId: project.id, projectName: project.name, draft }
        }
      }
      return null
    }

    const projectInfo = findProjectForDraft()
    
    if (projectInfo) {
      localStorage.setItem('wordjet_current_project', projectInfo.projectId)
      localStorage.setItem('wordjet_current_draft', draftId)
      setProjectId(projectInfo.projectId)
      setProjectName(projectInfo.projectName)
    }
  }, [draftId])

  const handleBack = () => {
    router.push("/dashboard")
  }

  const toggleFileSidebar = () => {
    setShowFileSidebar(!showFileSidebar)
  }

  /* Comment out these functions as they're related to the progress component
  const handleCompleteGeneration = () => {
    setShowGenerationProgress(false)
  }
  
  const handleRegenerateContent = () => {
    // In a real app, this would trigger a new content generation
    // For now, we'll just reset the progress dialog
    setShowGenerationProgress(false)
    setTimeout(() => {
      setShowGenerationProgress(true)
    }, 300)
  }
  
  const handleCancelGeneration = () => {
    setShowGenerationProgress(false)
    // In a real app, you might want to navigate back or show a confirmation
  }
  */

  return (
    <div className="flex h-screen flex-col w-full">
      {/* Content Generation Progress Modal - commented out as requested
      <ContentGenerationProgress
        open={showGenerationProgress}
        onOpenChange={setShowGenerationProgress}
        formData={{
          contentType: getDraftTitle(draftId),
          topic: "How to optimize your content marketing strategy"
        }}
        onComplete={handleCompleteGeneration}
        onRegenerate={handleRegenerateContent}
        onCancel={handleCancelGeneration}
      />
      */}

      {/* Breadcrumb navigation */}
      <div className="border-b px-6 py-2">
        <PathBreadcrumb 
          segments={[
            { name: "Dashboard", href: "/dashboard" },
            projectName ? { name: projectName, href: `/dashboard/project/${projectId}` } : null,
            { name: draftTitle, href: `/dashboard/editor/${draftId}` }
          ].filter(Boolean) as { name: string, href: string }[]} 
        />
      </div>
      
      <div className="flex flex-1 h-full overflow-hidden">
        {/* File explorer sidebar */}
        {showFileSidebar && (
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30} className="h-full">
            <div className="w-full border-r h-full overflow-y-auto bg-card flex flex-col no-scrollbar">
              <div className="p-3 border-b">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Search files..." 
                    className="pl-8 bg-background h-9 text-sm focus-visible:ring-primary/30" 
                  />
                </div>
              </div>
              
              <FileExplorer 
                projectId={projectId}
                files={[
                  {
                    id: "documents",
                    name: "Documents",
                    type: "folder",
                    children: [
                      {
                        id: "blog-post",
                        name: "Blog Post",
                        path: "/dashboard/editor/blog-post",
                        type: "file"
                      },
                      {
                        id: "social-media",
                        name: "Social Media",
                        path: "/dashboard/editor/social-media",
                        type: "file"
                      }
                    ]
                  },
                  {
                    id: "assets",
                    name: "Assets",
                    type: "folder",
                    children: [
                      {
                        id: "images",
                        name: "Images",
                        type: "folder",
                        children: [
                          {
                            id: "hero-image",
                            name: "hero-image.jpg",
                            path: "#",
                            type: "file"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "notes",
                    name: "Notes.md",
                    path: "#",
                    type: "file"
                  }
                ]}
                className="flex-1"
              />
            </div>
          </ResizablePanel>
        )}
        
        {showFileSidebar && (
          <ResizableHandle withHandle className="bg-border hover:bg-primary/20 transition-colors duration-200">
            <div className="h-8 w-3 bg-background border rounded-sm flex items-center justify-center">
              <div className="h-4 w-1 rounded-full bg-muted-foreground/40"></div>
            </div>
          </ResizableHandle>
        )}
        
        {/* Main editor area */}
        <ResizablePanel defaultSize={showFileSidebar ? 55 : 75} className="h-full">
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 border-b">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={handleBack}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFileSidebar}
                  className={cn("mr-1", showFileSidebar && "bg-accent")}
                >
                  <PanelLeft className="h-4 w-4" />
                </Button>
                <h1 className="text-xl font-semibold">{draftTitle}</h1>
              </div>
            </div>

            <div className="flex-1 overflow-auto h-full no-scrollbar">
              <EditorTabs />
              <EditorToolbar />
              <ContentEditor />
            </div>
          </div>
        </ResizablePanel>
        
        <ResizableHandle withHandle className="bg-border hover:bg-primary/20 transition-colors duration-200">
          <div className="h-8 w-3 bg-background border rounded-sm flex items-center justify-center">
            <div className="h-4 w-1 rounded-full bg-muted-foreground/40"></div>
          </div>
        </ResizableHandle>

        {/* AI Chat Panel */}
        <ResizablePanel defaultSize={25} minSize={20} maxSize={40} className="h-full">
          <AIChatPanel />
        </ResizablePanel>
      </div>
    </div>
  )
} 