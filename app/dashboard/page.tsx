"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  Button, 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  Badge,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/lib/design-system"
import { 
  PlusCircle, 
  FileText, 
  Clock, 
  ArrowRight, 
  FolderOpen,
  MoreHorizontal,
  Trash,
  Link as LinkIcon,
  Star,
  Pencil
} from "lucide-react"

export default function DashboardPage() {
  // Mock data for projects - in a real app, this would come from an API or database
  const projects = [
    {
      id: "1",
      name: "Marketing Campaign",
      description: "Content for Q3 marketing initiatives",
      lastUpdated: "2 days ago",
      drafts: [
        { id: "1-1", name: "Blog Post", path: "/dashboard/editor/blog-post" },
        { id: "1-2", name: "Social Media", path: "/dashboard/editor/social-media" },
      ],
    },
    {
      id: "2",
      name: "Product Launch",
      description: "Content for new product announcement",
      lastUpdated: "5 days ago",
      drafts: [
        { id: "2-1", name: "Press Release", path: "/dashboard/editor/press-release" },
        { id: "2-2", name: "Email Newsletter", path: "/dashboard/editor/email-newsletter" },
      ],
    },
  ]

  const handleDeleteProject = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, this would call an API to delete the project
    console.log("Deleting project:", projectId);
    // Then you would update the state to remove the project from the list
  }

  const handleRenameProject = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, this would open a modal to rename the project
    console.log("Renaming project:", projectId);
  }

  const handleToggleFavorite = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, this would call an API to toggle the favorite status
    console.log("Toggling favorite for project:", projectId);
  }

  const handleViewURL = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, this would copy the URL to clipboard or show it in a modal
    console.log("Viewing URL for project:", projectId);
  }

  const handleOpenProject = (projectId: string) => {
    // In a real app, this would navigate to the project page
    console.log("Opening project:", projectId);
    window.location.href = `/dashboard/project/${projectId}`;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
      </div>

      <div>
        {/* Projects section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Projects</h2>
            <Link href="/create">
              <Button className="gap-1.5">
                <PlusCircle className="h-4 w-4" />
                New Project
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => handleOpenProject(project.id)}
              >
                <CardHeader className="pb-3 relative">
                  <div className="absolute right-4 top-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={(e) => handleRenameProject(project.id, e)}>
                          <Pencil className="h-4 w-4 mr-2" />
                          Rename
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => handleViewURL(project.id, e)}>
                          <LinkIcon className="h-4 w-4 mr-2" />
                          View Content Published
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => handleToggleFavorite(project.id, e)}>
                          <Star className="h-4 w-4 mr-2" />
                          Add to favorites
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
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
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      {project.drafts.length} {project.drafts.length === 1 ? "draft" : "drafts"}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <p className="text-xs text-muted-foreground">Updated {project.lastUpdated}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

