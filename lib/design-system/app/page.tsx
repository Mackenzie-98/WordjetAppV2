import { ThemeProvider } from "@/components/theme-provider"
import { ButtonShowcase } from "@/components/showcases/button-showcase"
import { FormShowcase } from "@/components/showcases/form-showcase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="design-system-theme">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Design System V2</h1>
          <p className="text-muted-foreground">
            A refined design system with a clean, modern light mode and a deep, subdued dark mode inspired by Grok 3.
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
                  <CardDescription className="text-xs">Deep, subdued palette inspired by Grok 3</CardDescription>
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
    </ThemeProvider>
  )
}

