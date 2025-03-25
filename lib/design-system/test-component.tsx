"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { ThemeToggle } from "./components/theme-toggle"
import { Download } from "lucide-react"

export function TestComponent() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Test Component</h2>
        <ThemeToggle />
      </div>
      
      <Card className="shadow-sm">
        <CardHeader className="px-4 py-2">
          <CardTitle className="text-sm font-medium">Welcome to the Design System</CardTitle>
          <CardDescription className="text-xs">A minimalist design system with clean UI components</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-2 space-y-3">
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="name" className="text-xs">Name</Label>
            <Input id="name" placeholder="Enter your name" className="h-7 text-xs" />
          </div>
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="email" className="text-xs">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" className="h-7 text-xs" />
          </div>
        </CardContent>
        <CardFooter className="px-4 py-2 flex justify-end gap-2">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">
            <Download className="mr-1.5 h-3 w-3" />
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
} 