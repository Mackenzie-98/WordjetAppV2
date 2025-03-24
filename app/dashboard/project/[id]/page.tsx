"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  PlusCircle, 
  FileText, 
  ArrowLeft, 
  Settings, 
  Trash, 
  Pencil, 
  Star, 
  Link as LinkIcon, 
  Copy,
  MoreHorizontal 
} from "lucide-react"
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { PathBreadcrumb } from "@/components/dashboard/path-breadcrumb"
import { FileExplorer } from "@/components/dashboard/file-explorer"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string

  // Mock data for the project - in a real app, this would come from an API or database
  const projects = {
    "1": {
      id: "1",
      name: "Marketing Campaign",
      description: "Content for Q3 marketing initiatives",
      lastUpdated: "2 days ago",
      isFavorite: false,
      drafts: [
        { id: "blog-post", name: "Blog Post", path: "/dashboard/editor/blog-post" },
        { id: "social-media", name: "Social Media", path: "/dashboard/editor/social-media" },
        { id: "product-description", name: "Product Description", path: "/dashboard/editor/product-description" },
      ],
    },
    "2": {
      id: "2",
      name: "Product Launch",
      description: "Content for new product announcement",
      lastUpdated: "5 days ago",
      isFavorite: true,
      drafts: [
        { id: "press-release", name: "Press Release", path: "/dashboard/editor/press-release" },
        { id: "email-newsletter", name: "Email Newsletter", path: "/dashboard/editor/email-newsletter" },
        { id: "landing-page", name: "Landing Page Copy", path: "/dashboard/editor/landing-page" },
      ],
    },
    "3": {
      id: "3",
      name: "Website Redesign",
      description: "Content for the new website",
      lastUpdated: "1 week ago",
      isFavorite: false,
      drafts: [
        { id: "homepage", name: "Homepage", path: "/dashboard/editor/homepage" },
        { id: "about-page", name: "About Page", path: "/dashboard/editor/about-page" },
      ],
    }
  }

  const project = (projects as any)[projectId]

  if (!project) {
    return <div className="p-6">Project not found</div>
  }

  const handleBack = () => {
    router.push("/dashboard")
  }

  const handleRenameProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    // En una aplicación real, esto abriría un modal para renombrar el proyecto
    console.log("Renombrando proyecto:", projectId);
  }

  const handleDeleteProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    // En una aplicación real, esto llamaría a una API para eliminar el proyecto
    console.log("Eliminando proyecto:", projectId);
    router.push("/dashboard");
  }

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    // En una aplicación real, esto llamaría a una API para cambiar el estado de favorito
    console.log("Cambiando estado de favorito para proyecto:", projectId);
  }

  const handleViewPublished = (e: React.MouseEvent) => {
    e.stopPropagation();
    // En una aplicación real, esto abriría la URL publicada
    console.log("Viendo documento publicado del proyecto:", projectId);
  }

  const handleCopyProjectId = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(projectId);
    toast.success("Project ID copied to clipboard");
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-4">
        <PathBreadcrumb 
          segments={[
            { name: "Projects", href: "/dashboard" },
            { name: project.name, href: `/dashboard/project/${projectId}` }
          ]} 
        />
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handleBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-semibold">{project.name}</h1>
          {project.isFavorite ? (
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-yellow-500"
              onClick={handleToggleFavorite}
            >
              <Star className="h-5 w-5 fill-yellow-500" />
            </Button>
          ) : (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleToggleFavorite}
            >
              <Star className="h-5 w-5" />
            </Button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleViewPublished}>
            <LinkIcon className="h-4 w-4 mr-2" />
            View Published
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleRenameProject}>
                <Pencil className="h-4 w-4 mr-2" />
                Rename Project
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleCopyProjectId}>
                <Copy className="h-4 w-4 mr-2" />
                Copy Project ID
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleViewPublished}>
                <LinkIcon className="h-4 w-4 mr-2" />
                View Content Published
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="text-destructive focus:text-destructive"
                onClick={handleDeleteProject}
              >
                <Trash className="h-4 w-4 mr-2" />
                Delete Project
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <p className="text-muted-foreground mb-6">{project.description}</p>

      <Tabs defaultValue="drafts">
        <TabsList className="mb-4">
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="drafts" className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-medium">Project Drafts</h2>
            <Link href={`/create/type?projectId=${projectId}`}>
              <Button size="sm" className="gap-1.5">
                <PlusCircle className="h-4 w-4" />
                New Content
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.drafts.map((draft: any) => (
              <Link key={draft.id} href={draft.path}>
                <Card className="hover:bg-accent/50 transition-colors cursor-pointer h-full">
                  <CardContent className="p-4 flex items-start">
                    <div className="bg-primary/10 p-2 rounded mr-3">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{draft.name}</h3>
                      <p className="text-sm text-muted-foreground">Last edited 2 days ago</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="files" className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-medium">Project Files</h2>
            <Button size="sm" className="gap-1.5">
              <PlusCircle className="h-4 w-4" />
              Add File
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
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
                          },
                          {
                            id: "profile-pic",
                            name: "profile-pic.png",
                            path: "#",
                            type: "file"
                          }
                        ]
                      },
                      {
                        id: "documents",
                        name: "Documents",
                        type: "folder",
                        children: [
                          {
                            id: "research",
                            name: "Research.pdf",
                            path: "#",
                            type: "file"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "notes",
                    name: "Project Notes.md",
                    path: "#",
                    type: "file"
                  }
                ]}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div>
                <h3 className="font-medium mb-2">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 border-b pb-3">
                    <div className="bg-primary/10 p-2 rounded">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Blog Post edited</p>
                      <p className="text-xs text-muted-foreground">By You • 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-b pb-3">
                    <div className="bg-primary/10 p-2 rounded">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Social Media draft created</p>
                      <p className="text-xs text-muted-foreground">By You • 3 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-b pb-3">
                    <div className="bg-primary/10 p-2 rounded">
                      <Settings className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Project settings updated</p>
                      <p className="text-xs text-muted-foreground">By You • 1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardContent className="p-4 space-y-6">
              <div>
                <h3 className="font-medium mb-3">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Project Name</label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="text" 
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        defaultValue={project.name}
                      />
                      <Button size="sm" variant="outline">Update</Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Project Description</label>
                    <div className="flex items-start gap-2">
                      <textarea 
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        defaultValue={project.description}
                      />
                      <Button size="sm" variant="outline">Update</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Project Rules</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="require-approval" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                    <label htmlFor="require-approval" className="text-sm">Require approval before publishing</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="auto-save" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                    <label htmlFor="auto-save" className="text-sm">Enable auto-save for all drafts</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="track-changes" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="track-changes" className="text-sm">Track all content changes</label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Content Sources</h3>
                <div className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Content Source
                  </Button>
                  <p className="text-xs text-muted-foreground">Connect external content sources like Google Docs, Notion, or WordPress</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3 text-destructive">Danger Zone</h3>
                <Button variant="destructive" size="sm" onClick={handleDeleteProject}>
                  <Trash className="h-4 w-4 mr-2" />
                  Delete Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 