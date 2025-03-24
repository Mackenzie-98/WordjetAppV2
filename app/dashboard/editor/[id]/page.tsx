"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { EditorTabs } from "@/components/dashboard/editor-tabs"
import { EditorToolbar } from "@/components/dashboard/editor-toolbar"
import { ContentEditor } from "@/components/dashboard/content-editor"
import { AIChatPanel } from "@/components/dashboard/ai-chat-panel"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Save, Sidebar, FileText } from "lucide-react"
import { PathBreadcrumb } from "@/components/dashboard/path-breadcrumb"
import { FileExplorer } from "@/components/dashboard/file-explorer"
import { cn } from "@/lib/utils"

export default function EditorPage() {
  const params = useParams()
  const router = useRouter()
  const draftId = params.id as string
  const [projectName, setProjectName] = useState<string>("")
  const [projectId, setProjectId] = useState<string>("")
  const [showFileSidebar, setShowFileSidebar] = useState(true)

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

  return (
    <div className="flex h-full flex-col">
      {/* Breadcrumb navigation */}
      <div className="border-b px-6 py-2">
        <PathBreadcrumb 
          segments={[
            { name: "Projects", href: "/dashboard" },
            projectName ? { name: projectName, href: `/dashboard/project/${projectId}` } : null,
            { name: draftTitle, href: `/dashboard/editor/${draftId}` }
          ].filter(Boolean) as { name: string, href: string }[]} 
        />
      </div>
      
      <div className="flex flex-1 h-full overflow-hidden">
        {/* File explorer sidebar */}
        {showFileSidebar && (
          <div className="w-64 border-r h-full overflow-y-auto bg-card">
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
            />
          </div>
        )}
        
        {/* Main editor area */}
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
                <Sidebar className="h-4 w-4" />
              </Button>
              <h1 className="text-xl font-semibold">{draftTitle}</h1>
            </div>
            <Button size="sm" className="gap-1.5">
              <Save className="h-4 w-4" />
              Save
            </Button>
          </div>

          <div className="flex-1 overflow-hidden">
            <EditorTabs />
            <EditorToolbar />
            <ContentEditor />
          </div>
        </div>

        {/* AI Chat Panel */}
        <AIChatPanel />
      </div>
    </div>
  )
} 