import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowRight,
  Calendar,
  Clock,
  Heart,
  MessageSquare,
  Share2,
  Info,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"

export function CardShowcase() {
  return (
    <div className="space-y-6">
      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">Basic Card</CardTitle>
          <CardDescription className="text-xs">A simple card with header, content, and footer</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3">
          <p className="text-xs text-muted-foreground">
            Cards are versatile containers that group related content and actions. They can be used for a wide variety
            of content types and layouts.
          </p>
        </CardContent>
        <CardFooter className="px-4 py-3 flex justify-between">
          <Button variant="ghost" size="sm">
            Cancel
          </Button>
          <Button size="sm">Save</Button>
        </CardFooter>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-sm font-medium">VS Code Extension</CardTitle>
                <CardDescription className="text-xs">By Microsoft</CardDescription>
              </div>
              <Badge variant="outline" className="text-xs h-5 px-1.5">
                1.2.3
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="aspect-video bg-muted rounded-sm mb-3 flex items-center justify-center text-xs text-muted-foreground">
              Extension Preview
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              A powerful extension for Visual Studio Code that enhances your development workflow.
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span className="text-yellow-500">★★★★</span>
              <span>★</span>
              <span>(4.2)</span>
              <span className="ml-2">10,234 installs</span>
            </div>
          </CardContent>
          <CardFooter className="px-4 py-3">
            <Button size="sm" className="w-full">
              Install
            </Button>
          </CardFooter>
        </Card>

        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder.svg" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xs font-medium">Jane Doe</CardTitle>
                <CardDescription className="text-[10px]">Posted 2 hours ago</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <p className="text-xs">
              Just discovered a great VS Code extension for React development. It adds snippets, IntelliSense, and
              debugging support!
            </p>
            <div className="aspect-video bg-muted rounded-sm mt-3 flex items-center justify-center text-xs text-muted-foreground">
              Screenshot
            </div>
          </CardContent>
          <CardFooter className="px-4 py-3 flex justify-between border-t border-border/40">
            <Button variant="ghost" size="sm" className="h-7 px-2">
              <Heart className="h-3.5 w-3.5 mr-1" />
              <span className="text-xs">24</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-7 px-2">
              <MessageSquare className="h-3.5 w-3.5 mr-1" />
              <span className="text-xs">3</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-7 px-2">
              <Share2 className="h-3.5 w-3.5 mr-1" />
              <span className="text-xs">Share</span>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border border-border/60 bg-blue-500/10">
          <CardHeader className="px-4 py-3 flex flex-row items-center gap-2">
            <Info className="h-4 w-4 text-blue-500" />
            <div>
              <CardTitle className="text-xs font-medium">Information</CardTitle>
              <CardDescription className="text-[10px]">System notification</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <p className="text-xs">Your workspace has been updated to the latest version. Reload to apply changes.</p>
          </CardContent>
          <CardFooter className="px-4 py-3">
            <Button size="sm" variant="outline" className="h-7 text-xs">
              Reload Window
            </Button>
          </CardFooter>
        </Card>

        <Card className="border border-border/60 bg-yellow-500/10">
          <CardHeader className="px-4 py-3 flex flex-row items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <div>
              <CardTitle className="text-xs font-medium">Warning</CardTitle>
              <CardDescription className="text-[10px]">Action required</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <p className="text-xs">
              Some extensions are disabled for this workspace. Enable them for full functionality.
            </p>
          </CardContent>
          <CardFooter className="px-4 py-3">
            <Button size="sm" variant="outline" className="h-7 text-xs">
              Manage Extensions
            </Button>
          </CardFooter>
        </Card>

        <Card className="border border-border/60 bg-green-500/10">
          <CardHeader className="px-4 py-3 flex flex-row items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <div>
              <CardTitle className="text-xs font-medium">Success</CardTitle>
              <CardDescription className="text-[10px]">Operation completed</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <p className="text-xs">Project successfully built and deployed to the development environment.</p>
          </CardContent>
          <CardFooter className="px-4 py-3">
            <Button size="sm" variant="outline" className="h-7 text-xs">
              View Logs
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">Event Card</CardTitle>
          <CardDescription className="text-xs">A card displaying event information with date and time</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-sm flex flex-col items-center justify-center text-primary">
              <span className="text-[10px] font-medium">JUN</span>
              <span className="text-sm font-bold">15</span>
            </div>
            <div>
              <h3 className="text-xs font-medium">VS Code Conference 2023</h3>
              <div className="mt-1 flex flex-col sm:flex-row sm:gap-4 text-[10px] text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>June 15-17, 2023</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Join us for three days of talks, workshops, and networking focused on Visual Studio Code and web
                development.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 py-3">
          <Button size="sm" className="w-full h-7 text-xs">
            Register Now
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

