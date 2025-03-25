import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Plus, ArrowRight, ChevronDown } from "lucide-react"

export function ButtonShowcase() {
  return (
    <div className="space-y-6">
      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">Button Variants</CardTitle>
          <CardDescription className="text-xs">Different button styles for various levels of emphasis</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3 flex flex-wrap gap-3">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </CardContent>
      </Card>

      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">Button Sizes</CardTitle>
          <CardDescription className="text-xs">Different button sizes for various contexts</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3 flex flex-wrap items-center gap-3">
          <Button size="sm">Small Button</Button>
          <Button>Default Button</Button>
          <Button size="lg">Large Button</Button>
          <Button size="icon" className="h-8 w-8">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add item</span>
          </Button>
        </CardContent>
      </Card>

      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">Button States</CardTitle>
          <CardDescription className="text-xs">Visual feedback for different interaction states</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3 flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button className="bg-[#0033A0]" data-state="hover">
            Hover
          </Button>
          <Button className="ring-2 ring-[#007bff] ring-offset-2 ring-offset-background" data-state="focus">
            Focus
          </Button>
          <Button className="bg-[#0033A0]" data-state="active">
            Active
          </Button>
          <Button disabled>Disabled</Button>
          <Button disabled variant="secondary">
            Disabled
          </Button>
        </CardContent>
      </Card>

      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">Button with Icons</CardTitle>
          <CardDescription className="text-xs">
            Buttons with leading or trailing icons for additional context
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3 flex flex-wrap gap-3">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="secondary">
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-3 w-3" />
            Add Item
          </Button>
          <Button variant="outline" size="sm">
            Options
            <ChevronDown className="ml-2 h-3 w-3" />
          </Button>
        </CardContent>
      </Card>

      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">VS Code-Inspired Buttons</CardTitle>
          <CardDescription className="text-xs">Buttons that mimic Visual Studio Code's UI patterns</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3 space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" className="h-7 px-2 text-xs rounded-sm">
              Install
            </Button>
            <Button variant="ghost" className="h-7 px-2 text-xs rounded-sm">
              Cancel
            </Button>
            <Button variant="outline" className="h-7 px-2 text-xs rounded-sm">
              <Download className="mr-1 h-3 w-3" />
              Download
            </Button>
          </div>

          <div className="p-3 bg-muted rounded-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium">Extension: React Developer Tools</span>
              <Button variant="secondary" className="h-6 px-2 text-xs rounded-sm">
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

