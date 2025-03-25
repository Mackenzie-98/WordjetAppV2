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

          <div className="grid w-full items-center gap-1">
            <Label htmlFor="code-input" className="text-xs">
              Code Input
            </Label>
            <Input id="code-input" placeholder="const example = () => {}" className="h-7 text-xs font-mono" />
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
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled-checkbox" disabled className="h-3.5 w-3.5" />
                <Label htmlFor="disabled-checkbox" className="text-xs font-normal text-muted-foreground">
                  Disabled option
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
        <CardFooter className="px-4 py-2 flex justify-end space-x-2">
          <Button variant="ghost" size="sm">
            Cancel
          </Button>
          <Button size="sm">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

