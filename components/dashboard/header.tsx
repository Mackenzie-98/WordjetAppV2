"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import { 
  Bell, 
  Moon, 
  Sun, 
  Settings, 
  MessageSquare, 
  HelpCircleIcon, 
  Laptop, 
  LogOut, 
  CreditCard, 
  User,
  Clock,
  CheckCircle
} from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export function DashboardHeader() {
  const { setTheme, theme } = useTheme()
  const [notifications] = useState(3)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  // Mount effect for client-side rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "Edinsson",
    email: "edsunadrian@gmail.com",
    avatar: "/avatar.png", // Using a mock avatar image
    isPremium: true,
  }

  // Mock notifications
  const notificationItems = [
    {
      id: 1,
      title: "New content generated",
      description: "Your blog post has been successfully generated",
      time: "2 minutes ago",
      read: false
    },
    {
      id: 2,
      title: "Project shared",
      description: "John Doe shared a project with you",
      time: "1 hour ago",
      read: false
    },
    {
      id: 3,
      title: "Update available",
      description: "A new version of WordJet is available",
      time: "1 day ago",
      read: true
    }
  ]

  const handleSignOut = () => {
    // In a real app, this would handle sign out logic
    document.cookie = "authToken=; path=/; max-age=0"
    router.push("/")
  }

  return (
    <header className="h-14 border-b bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
        </div>
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium flex items-center justify-center text-primary-foreground">
                  {notifications}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-96 max-w-[90vw]">
            <DropdownMenuLabel className="font-normal p-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-base">Notifications</h4>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-primary font-medium">
                  Mark all as read
                </Button>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[60vh] overflow-y-auto">
              {notificationItems.map((item) => (
                <DropdownMenuItem key={item.id} className="p-0 focus:bg-accent cursor-pointer">
                  <div className={`flex py-3 px-4 w-full gap-3 ${!item.read ? 'bg-primary/5' : ''}`}>
                    <div className={`mt-0.5 flex-shrink-0 ${!item.read ? 'text-primary' : 'text-muted-foreground'}`}>
                      {!item.read ? <Bell className="h-5 w-5" /> : <CheckCircle className="h-5 w-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <p className="text-sm font-medium leading-snug">{item.title}</p>
                        <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
                          <Clock className="h-3 w-3 mr-1" />
                          {item.time}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-sm text-primary font-medium py-3 cursor-pointer">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="gap-2">
              {mounted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide ${theme === 'dark' ? 'lucide-moon' : 'lucide-sun'} h-5 w-5`}
                >
                  {theme === 'dark' ? (
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  ) : (
                    <circle cx="12" cy="12" r="4" />
                  )}
                  {theme !== 'dark' && (
                    <>
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </>
                  )}
                </svg>
              ) : (
                <span className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
              <DropdownMenuRadioItem value="light" className="cursor-pointer">
                <Sun className="h-4 w-4 mr-2" />
                <span>Light</span>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark" className="cursor-pointer">
                <Moon className="h-4 w-4 mr-2" />
                <span>Dark</span>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="system" className="cursor-pointer">
                <Laptop className="h-4 w-4 mr-2" />
                <span>System</span>
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 rounded-full flex items-center gap-2 px-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>EA</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start hidden md:flex">
                <span className="text-sm font-medium">{user.name}</span>
                {user.isPremium && (
                  <Badge
                    variant="secondary"
                    className="text-xs px-1 py-0 h-4 border-primary/10"
                  >
                    Premium
                  </Badge>
                )}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push('/dashboard/profile')}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/dashboard/billing')}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/dashboard/settings')}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push('/dashboard/contact')}>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Contact Us</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/dashboard/faq')}>
              <HelpCircleIcon className="mr-2 h-4 w-4" />
              <span>FAQs</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

