"use client"

import { useState } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { Checkbox } from "./components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Textarea } from "./components/ui/textarea"
import { Switch } from "./components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Download, Plus, ArrowRight, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./components/theme-toggle"

export function Documentation() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Design System V2</h1>
          <ThemeToggle />
        </div>
        <p className="text-muted-foreground">
          A refined design system with a clean, modern light mode and a deep, subdued dark mode.
        </p>
      </div>

      <Tabs defaultValue="buttons" className="w-full">
        <TabsList className="w-full md:w-auto justify-start overflow-auto py-1">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="forms">Form Elements</TabsTrigger>
          <TabsTrigger value="theme">Theme</TabsTrigger>
        </TabsList>

        <TabsContent value="buttons" className="mt-4">
          <ButtonShowcase />
        </TabsContent>

        <TabsContent value="forms" className="mt-4">
          <FormShowcase />
        </TabsContent>

        <TabsContent value="theme" className="mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="px-4 py-2">
                <CardTitle className="text-sm font-medium">Light Mode</CardTitle>
                <CardDescription className="text-xs">Clean, modern, and compact design</CardDescription>
              </CardHeader>
              <CardContent className="px-4 py-2">
                <div className="space-y-2">
                  <div className="p-3 bg-background border rounded-sm">
                    <p className="text-xs font-medium">Background</p>
                  </div>
                  <div className="p-3 bg-card border rounded-sm">
                    <p className="text-xs font-medium">Card</p>
                  </div>
                  <div className="p-3 bg-primary text-primary-foreground rounded-sm">
                    <p className="text-xs font-medium">Primary</p>
                  </div>
                  <div className="p-3 bg-secondary text-secondary-foreground rounded-sm">
                    <p className="text-xs font-medium">Secondary</p>
                  </div>
                  <div className="p-3 bg-muted text-muted-foreground rounded-sm">
                    <p className="text-xs font-medium">Muted</p>
                  </div>
                  <div className="p-3 bg-accent text-accent-foreground rounded-sm">
                    <p className="text-xs font-medium">Accent</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark">
              <CardHeader className="px-4 py-2">
                <CardTitle className="text-sm font-medium">Dark Mode</CardTitle>
                <CardDescription className="text-xs">Deep, subdued palette</CardDescription>
              </CardHeader>
              <CardContent className="px-4 py-2">
                <div className="space-y-2">
                  <div className="p-3 bg-background border rounded-sm">
                    <p className="text-xs font-medium">Background</p>
                  </div>
                  <div className="p-3 bg-card border rounded-sm">
                    <p className="text-xs font-medium">Card</p>
                  </div>
                  <div className="p-3 bg-primary text-primary-foreground rounded-sm">
                    <p className="text-xs font-medium">Primary</p>
                  </div>
                  <div className="p-3 bg-secondary text-secondary-foreground rounded-sm">
                    <p className="text-xs font-medium">Secondary</p>
                  </div>
                  <div className="p-3 bg-muted text-muted-foreground rounded-sm">
                    <p className="text-xs font-medium">Muted</p>
                  </div>
                  <div className="p-3 bg-accent text-accent-foreground rounded-sm">
                    <p className="text-xs font-medium">Accent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

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
    </div>
  )
}

export function FormShowcase() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    setEmailError("")
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="px-4 py-2">
          <CardTitle className="text-sm font-medium">Text Inputs</CardTitle>
          <CardDescription className="text-xs">Basic text input fields with various states</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-2 space-y-2">
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="default-input" className="text-xs">
              Default Input
            </Label>
            <Input id="default-input" placeholder="Enter your name" className="h-7 text-xs" />
          </div>

          <div className="grid w-full items-center gap-1">
            <Label htmlFor="disabled-input" className="text-xs">
              Disabled Input
            </Label>
            <Input id="disabled-input" placeholder="This input is disabled" disabled className="h-7 text-xs" />
          </div>

          <div className="grid w-full items-center gap-1">
            <Label htmlFor="email-input" className="text-xs">
              Email with Validation
            </Label>
            <Input
              id="email-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              className={`h-7 text-xs ${emailError ? "border-destructive" : ""}`}
            />
            {emailError && <p className="text-xs text-destructive">{emailError}</p>}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="px-4 py-2">
          <CardTitle className="text-sm font-medium">Selection Controls</CardTitle>
          <CardDescription className="text-xs">Controls for selecting options and toggling states</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-2 space-y-3">
          <div className="space-y-1.5">
            <Label className="text-xs">Checkboxes</Label>
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="h-3.5 w-3.5" />
                <Label htmlFor="terms" className="text-xs font-normal">
                  Accept terms and conditions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" defaultChecked className="h-3.5 w-3.5" />
                <Label htmlFor="newsletter" className="text-xs font-normal">
                  Subscribe to newsletter
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs">Radio Group</Label>
            <RadioGroup defaultValue="comfortable" className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" className="h-3.5 w-3.5" />
                <Label htmlFor="r1" className="text-xs font-normal">
                  Default
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" className="h-3.5 w-3.5" />
                <Label htmlFor="r2" className="text-xs font-normal">
                  Comfortable
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" className="h-3.5 w-3.5" />
                <Label htmlFor="r3" className="text-xs font-normal">
                  Compact
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="size" className="text-xs">
              Select Dropdown
            </Label>
            <Select>
              <SelectTrigger id="size" className="h-7 text-xs">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">Extra Small</SelectItem>
                <SelectItem value="s">Small</SelectItem>
                <SelectItem value="m">Medium</SelectItem>
                <SelectItem value="l">Large</SelectItem>
                <SelectItem value="xl">Extra Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="airplane-mode" className="text-xs">
              Toggle Switch
            </Label>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" className="h-4 w-7" />
              <Label htmlFor="airplane-mode" className="text-xs font-normal">
                Airplane Mode
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="px-4 py-2">
          <CardTitle className="text-sm font-medium">Complete Form Example</CardTitle>
          <CardDescription className="text-xs">A sample form combining multiple input types</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-2 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="grid w-full items-center gap-1">
              <Label htmlFor="first-name" className="text-xs">
                First Name
              </Label>
              <Input id="first-name" placeholder="John" className="h-7 text-xs" />
            </div>
            <div className="grid w-full items-center gap-1">
              <Label htmlFor="last-name" className="text-xs">
                Last Name
              </Label>
              <Input id="last-name" placeholder="Doe" className="h-7 text-xs" />
            </div>
          </div>

          <div className="grid w-full items-center gap-1">
            <Label htmlFor="email" className="text-xs">
              Email
            </Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" className="h-7 text-xs" />
          </div>

          <div className="grid w-full items-center gap-1">
            <Label htmlFor="message" className="text-xs">
              Message
            </Label>
            <Textarea id="message" placeholder="Type your message here." className="text-xs min-h-[60px]" />
          </div>

          <div className="flex items-center space-x-2 pt-1">
            <Checkbox id="marketing" className="h-3.5 w-3.5" />
            <Label htmlFor="marketing" className="text-xs font-normal">
              I agree to receive marketing communications
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 