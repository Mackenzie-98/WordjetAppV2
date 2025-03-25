"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  HomeIcon,
  FileIcon,
  PlusIcon,
  FolderIcon,
  MoreHorizontalIcon,
  StarIcon,
  TrashIcon,
  PencilIcon,
  UsersIcon,
  HelpCircle,
  FileText,
  Clock,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarTrigger,
  useSidebar
} from "./sidebar"

// Ejemplo de proyectos
const projects = [
  { id: "1", name: "Marketing Campaign" },
  { id: "2", name: "Product Launch" },
  { id: "3", name: "Website Redesign" },
]

// Ejemplo de documentos recientes
const recentDocs = [
  { id: "1", name: "Blog Post", path: "#" },
  { id: "2", name: "Press Release", path: "#" },
  { id: "3", name: "Social Media", path: "#" },
]

export function SidebarExample() {
  const pathname = usePathname()
  
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader className="p-3 flex items-center justify-between border-b">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">W</span>
            </div>
            <span className="font-medium">WordJet</span>
          </div>
          <SidebarTrigger />
        </SidebarHeader>
        
        <SidebarContent className="p-3 pt-4">
          {/* New Draft button */}
          <Button className="w-full justify-start gap-2 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary mb-4">
            <PlusIcon className="h-3.5 w-3.5" />
            <span>New Draft</span>
          </Button>
          
          {/* Main navigation */}
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                isActive={pathname === "/dashboard"}
                tooltip="Dashboard"
              >
                <HomeIcon className="h-4 w-4" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Feedback">
                <HelpCircle className="h-4 w-4" />
                <span>Feedback</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          
          {/* Projects section */}
          <SidebarGroup className="mt-6 pt-6 border-t border-border/40">
            <SidebarGroupLabel>
              Projects
              <Button variant="ghost" size="icon" className="h-5 w-5 ml-auto">
                <PlusIcon className="h-3.5 w-3.5" />
              </Button>
            </SidebarGroupLabel>
            <SidebarGroupContent className="mt-1">
              {projects.map((project) => (
                <div key={project.id} className="group flex items-center">
                  <SidebarMenuItem className="flex-1">
                    <SidebarMenuButton tooltip={project.name}>
                      <FolderIcon className="h-3.5 w-3.5" />
                      <span>{project.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
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
                        <TrashIcon className="mr-2 h-3.5 w-3.5" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Recent documents section */}
          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="flex items-center">
              Recent Drafts
              <Clock className="h-3.5 w-3.5 ml-auto text-muted-foreground" />
            </SidebarGroupLabel>
            <SidebarGroupContent className="mt-1">
              {recentDocs.map((doc) => (
                <div key={doc.id} className="group flex items-center">
                  <SidebarMenuItem className="flex-1">
                    <SidebarMenuButton tooltip={doc.name}>
                      <FileText className="h-3.5 w-3.5" />
                      <span>{doc.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
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
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        
        <SidebarFooter className="p-3 pt-2 text-xs text-muted-foreground">
          <div className="border-t border-border/40 pt-2">
            WordJet v2.0
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
} 