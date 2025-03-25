"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

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
    <div className="space-y-6">
      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">Text Inputs</CardTitle>
          <CardDescription className="text-xs">Basic text input fields with various states</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3 space-y-3">
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="default-input" className="text-xs">
              Default Input
            </Label>
            <Input id="default-input" placeholder="Enter your name" className="h-8 text-xs" />
          </div>

          <div className="grid w-full items-center gap-1">
            <Label htmlFor="disabled-input" className="text-xs">
              Disabled Input
            </Label>
            <Input id="disabled-input" placeholder="This input is disabled" disabled className="h-8 text-xs" />
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
              className={`h-8 text-xs ${emailError ? "border-destructive" : ""}`}
            />
            {emailError && <p className="text-xs text-destructive">{emailError}</p>}
          </div>

          <div className="grid w-full items-center gap-1">
            <Label htmlFor="code-input" className="text-xs">
              Code Input
            </Label>
            <Input id="code-input" placeholder="const example = () => {}" className="h-8 text-xs font-mono" />
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">Selection Controls</CardTitle>
          <CardDescription className="text-xs">Controls for selecting options and toggling states</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3 space-y-4">
          <div className="space-y-2">
            <Label className="text-xs">Checkboxes</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs font-normal">
                  Accept terms and conditions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" defaultChecked />
                <Label htmlFor="newsletter" className="text-xs font-normal">
                  Subscribe to newsletter
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled-checkbox" disabled />
                <Label htmlFor="disabled-checkbox" className="text-xs font-normal text-muted-foreground">
                  Disabled option
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs">Radio Group</Label>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1" className="text-xs font-normal">
                  Default
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2" className="text-xs font-normal">
                  Comfortable
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3" className="text-xs font-normal">
                  Compact
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="size" className="text-xs">
              Select Dropdown
            </Label>
            <Select>
              <SelectTrigger id="size" className="h-8 text-xs">
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

          <div className="space-y-2">
            <Label htmlFor="airplane-mode" className="text-xs">
              Toggle Switch
            </Label>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode" className="text-xs font-normal">
                Airplane Mode
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">VS Code Settings Form</CardTitle>
          <CardDescription className="text-xs">A form styled like VS Code's settings interface</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3 space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <Label htmlFor="editor-font-size" className="text-xs">
                Editor: Font Size
              </Label>
              <Input id="editor-font-size" type="number" defaultValue="14" className="h-7 w-20 text-xs" />
            </div>
            <p className="text-xs text-muted-foreground">Controls the font size in pixels.</p>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <Label htmlFor="editor-tab-size" className="text-xs">
                Editor: Tab Size
              </Label>
              <Input id="editor-tab-size" type="number" defaultValue="2" className="h-7 w-20 text-xs" />
            </div>
            <p className="text-xs text-muted-foreground">The number of spaces a tab is equal to.</p>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <Label htmlFor="editor-word-wrap" className="text-xs">
                Editor: Word Wrap
              </Label>
              <Select defaultValue="off">
                <SelectTrigger id="editor-word-wrap" className="h-7 w-32 text-xs">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="off">Off</SelectItem>
                  <SelectItem value="on">On</SelectItem>
                  <SelectItem value="wordWrapColumn">Word Wrap Column</SelectItem>
                  <SelectItem value="bounded">Bounded</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-xs text-muted-foreground">Controls how lines should wrap.</p>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <Label htmlFor="minimap-enabled" className="text-xs">
                Editor: Minimap
              </Label>
              <Switch id="minimap-enabled" />
            </div>
            <p className="text-xs text-muted-foreground">Controls whether the minimap is shown.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">Complete Form Example</CardTitle>
          <CardDescription className="text-xs">A sample form combining multiple input types</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="grid w-full items-center gap-1">
              <Label htmlFor="first-name" className="text-xs">
                First Name
              </Label>
              <Input id="first-name" placeholder="John" className="h-8 text-xs" />
            </div>
            <div className="grid w-full items-center gap-1">
              <Label htmlFor="last-name" className="text-xs">
                Last Name
              </Label>
              <Input id="last-name" placeholder="Doe" className="h-8 text-xs" />
            </div>
          </div>

          <div className="grid w-full items-center gap-1">
            <Label htmlFor="email" className="text-xs">
              Email
            </Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" className="h-8 text-xs" />
          </div>

          <div className="grid w-full items-center gap-1">
            <Label htmlFor="message" className="text-xs">
              Message
            </Label>
            <Textarea id="message" placeholder="Type your message here." className="text-xs min-h-[80px]" />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing" className="text-xs font-normal">
              I agree to receive marketing communications
            </Label>
          </div>
        </CardContent>
        <CardFooter className="px-4 py-3 flex justify-end space-x-2">
          <Button variant="ghost" size="sm">
            Cancel
          </Button>
          <Button size="sm">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

