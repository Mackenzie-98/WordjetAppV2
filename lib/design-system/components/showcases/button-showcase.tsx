import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Plus, ArrowRight, ChevronDown } from "lucide-react"

export function ButtonShowcase() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="px-4 py-2">
          <CardTitle className="text-sm font-medium">Button Variants</CardTitle>
          <CardDescription className="text-xs">Different button styles for various levels of emphasis</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-2 flex flex-wrap gap-2">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="px-4 py-2">
          <CardTitle className="text-sm font-medium">Button Sizes</CardTitle>
          <CardDescription className="text-xs">Different button sizes for various contexts</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-2 flex flex-wrap items-center gap-2">
          <Button size="sm">Small Button</Button>
          <Button>Default Button</Button>
          <Button size="lg">Large Button</Button>
          <Button size="icon" className="h-7 w-7">
            <Plus className="h-3.5 w-3.5" />
            <span className="sr-only">Add item</span>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="px-4 py-2">
          <CardTitle className="text-sm font-medium">Button States</CardTitle>
          <CardDescription className="text-xs">Visual feedback for different interaction states</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-2 flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button className="opacity-90" data-state="hover">
            Hover
          </Button>
          <Button className="ring-1 ring-ring ring-offset-1 ring-offset-background" data-state="focus">
            Focus
          </Button>
          <Button className="opacity-90" data-state="active">
            Active
          </Button>
          <Button disabled>Disabled</Button>
          <Button disabled variant="secondary">
            Disabled
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="px-4 py-2">
          <CardTitle className="text-sm font-medium">Button with Icons</CardTitle>
          <CardDescription className="text-xs">
            Buttons with leading or trailing icons for additional context
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-2 flex flex-wrap gap-2">
          <Button>
            <Download className="mr-2 h-3.5 w-3.5" />
            Download
          </Button>
          <Button variant="secondary">
            Continue
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Button>
          <Button variant="outline" size="sm">
            <Plus className="mr-1.5 h-3 w-3" />
            Add Item
          </Button>
          <Button variant="outline" size="sm">
            Options
            <ChevronDown className="ml-1.5 h-3 w-3" />
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="px-4 py-2">
          <CardTitle className="text-sm font-medium">VS Code-Inspired Buttons</CardTitle>
          <CardDescription className="text-xs">Buttons that mimic Visual Studio Code's UI patterns</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-2 space-y-3">
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" className="h-6 px-2 text-xs rounded-sm">
              Install
            </Button>
            <Button variant="ghost" className="h-6 px-2 text-xs rounded-sm">
              Cancel
            </Button>
            <Button variant="outline" className="h-6 px-2 text-xs rounded-sm">
              <Download className="mr-1 h-3 w-3" />
              Download
            </Button>
          </div>

          <div className="p-3 bg-muted rounded-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium">Extension: React Developer Tools</span>
              <Button variant="secondary" className="h-5 px-2 text-xs rounded-sm">
                Install
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Adds React debugging tools to the Developer Tools.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

