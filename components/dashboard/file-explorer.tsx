"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, FileText, Folder, FolderOpen, MoreHorizontal, Plus, PlusCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type File = {
  id: string
  name: string
  path: string
  type: "file"
}

type Folder = {
  id: string
  name: string
  expanded?: boolean
  type: "folder"
  children: (File | Folder)[]
}

type FileExplorerProps = {
  projectId: string
  files: (File | Folder)[]
  className?: string
}

export function FileExplorer({ projectId, files, className }: FileExplorerProps) {
  const pathname = usePathname()
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    documents: true,
    assets: false,
  })

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderId]: !prev[folderId]
    }))
  }

  // File actions (would connect to actual API endpoints in a real app)
  const handleAddFile = (folderId?: string) => {
    console.log(`Adding file to folder: ${folderId || 'root'}`)
  }

  const handleAddFolder = (parentId?: string) => {
    console.log(`Adding folder to: ${parentId || 'root'}`)
  }

  const handleRenameItem = (itemId: string, itemType: "file" | "folder") => {
    console.log(`Renaming ${itemType}: ${itemId}`)
  }

  const handleDeleteItem = (itemId: string, itemType: "file" | "folder") => {
    console.log(`Deleting ${itemType}: ${itemId}`)
  }

  const handleDuplicateFile = (fileId: string) => {
    console.log(`Duplicating file: ${fileId}`)
  }

  const renderItem = (item: File | Folder, level = 0) => {
    const isFolder = item.type === "folder"
    const isExpanded = isFolder && expandedFolders[item.id]
    const isActive = !isFolder && pathname.includes(item.id)
    
    return (
      <div key={item.id} className="select-none">
        <div
          className={cn(
            "flex items-center py-1.5 px-2 text-sm rounded-md gap-2",
            isActive && "bg-accent text-accent-foreground",
            !isActive && "hover:bg-accent/50 hover:text-accent-foreground",
            level > 0 && "ml-4"
          )}
        >
          {isFolder ? (
            <>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-4 w-4 p-0" 
                onClick={() => toggleFolder(item.id)}
              >
                {isExpanded ? (
                  <ChevronDown className="h-3.5 w-3.5" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5" />
                )}
              </Button>
              {isExpanded ? (
                <FolderOpen className="h-4 w-4 text-blue-500" />
              ) : (
                <Folder className="h-4 w-4 text-blue-500" />
              )}
              <span className="flex-1 truncate">{item.name}</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6 ml-auto opacity-0 group-hover:opacity-100 hover:opacity-100">
                    <MoreHorizontal className="h-3.5 w-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleAddFile(item.id)}>
                    <FileText className="h-3.5 w-3.5 mr-2" />
                    New File
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleAddFolder(item.id)}>
                    <Folder className="h-3.5 w-3.5 mr-2" />
                    New Folder
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleRenameItem(item.id, "folder")}>
                    Rename
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-destructive" 
                    onClick={() => handleDeleteItem(item.id, "folder")}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link
              href={item.path}
              className={cn(
                "flex items-center gap-2 py-1 flex-1",
                isActive && "font-medium"
              )}
            >
              <FileText className="h-4 w-4 ml-4 text-muted-foreground" />
              <span className="truncate">{item.name}</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6 ml-auto opacity-0 group-hover:opacity-100 hover:opacity-100"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MoreHorizontal className="h-3.5 w-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleRenameItem(item.id, "file")}>
                    Rename
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDuplicateFile(item.id)}>
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-destructive"
                    onClick={() => handleDeleteItem(item.id, "file")}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Link>
          )}
        </div>
        {isFolder && isExpanded && (item as Folder).children.map(child => renderItem(child, level + 1))}
      </div>
    )
  }

  return (
    <div className={cn("py-2", className)}>
      <div className="flex items-center justify-between px-3 mb-2">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Project Files</span>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleAddFile()}>
            <FileText className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleAddFolder()}>
            <Folder className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
      <div className="space-y-0.5">
        {files.map(item => renderItem(item))}
      </div>
    </div>
  )
} 