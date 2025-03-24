"use client"

import type React from "react"

import { useState } from "react"
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
} from "@/components/ui/dropdown-menu"
import { Bell, HelpCircle, Moon, Sun, Users, Settings, MessageSquare, HelpCircleIcon, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export function DashboardHeader() {
  const { setTheme, theme } = useTheme()
  const [notifications] = useState(3)
  const router = useRouter()

  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "Edinsson",
    email: "edsunadrian@gmail.com",
    avatar: "/placeholder.svg",
    isPremium: true,
  }

  const handleSignOut = () => {
    // In a real app, this would handle sign out logic
    document.cookie = "authToken=; path=/; max-age=0"
    router.push("/login")
  }

  return (
    <header className="h-14 border-b bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="WordJet" width={30} height={30} className="mr-2" />
          <h1 className="text-lg font-semibold hidden md:block">WordJet</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notifications > 0 && (
            <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium flex items-center justify-center text-primary-foreground">
              {notifications}
            </span>
          )}
        </Button>

        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Button variant="ghost" size="icon">
          <HelpCircle className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 rounded-full flex items-center gap-2 px-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>EA</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start hidden md:flex">
                <span className="text-sm">{user.email}</span>
                {user.isPremium && (
                  <Badge
                    variant="outline"
                    className="text-xs px-1 py-0 h-4 bg-primary/10 text-primary border-primary/20"
                  >
                    Premium
                  </Badge>
                )}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <div className="flex flex-col px-2 pt-2 pb-2">
              <div className="flex items-center gap-2 px-2 py-1.5">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>EA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="text-sm font-medium leading-none">{user.email}</p>
                  {user.isPremium && (
                    <Badge
                      variant="outline"
                      className="w-fit text-xs px-1 py-0 h-4 mt-1 bg-primary/10 text-primary border-primary/20"
                    >
                      Premium
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => router.push("/dashboard/billing")}>
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => router.push("/dashboard/settings")}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => router.push("/dashboard/contact")}>
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Us
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => router.push("/dashboard/faq")}>
              <HelpCircleIcon className="mr-2 h-4 w-4" />
              FAQs
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handleSignOut}>Sign Out</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
              <DropdownMenuRadioItem value="light" className="flex items-center gap-2 cursor-pointer">
                <Sun className="h-4 w-4" />
                Light
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark" className="flex items-center gap-2 cursor-pointer">
                <Moon className="h-4 w-4" />
                Dark
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="system" className="flex items-center gap-2 cursor-pointer">
                <Laptop className="h-4 w-4" />
                System
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
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

