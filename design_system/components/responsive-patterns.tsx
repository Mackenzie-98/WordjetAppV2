"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function ResponsivePatterns() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium tracking-tight">Responsive Design Patterns</h1>
        <p className="text-muted-foreground text-sm">
          Techniques for creating interfaces that adapt seamlessly to different screen sizes and devices.
        </p>
      </div>

      <div className="grid gap-4">
        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">VS Code Responsive Layout</CardTitle>
            <CardDescription className="text-xs">
              How VS Code adapts its interface across different screen sizes
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="space-y-4">
              <div className="p-3 border border-border/60 rounded-sm">
                <h3 className="text-xs font-medium mb-2">Desktop Layout</h3>
                <div className="flex h-48 border border-border/60 rounded-sm overflow-hidden">
                  {/* Activity Bar */}
                  <div className="w-10 bg-activityBar border-r border-border/60 flex-shrink-0"></div>

                  {/* Sidebar */}
                  <div className="w-48 bg-sidebar border-r border-border/60 flex-shrink-0"></div>

                  {/* Editor Area */}
                  <div className="flex-1 bg-background flex flex-col">
                    <div className="h-8 bg-header border-b border-border/60"></div>
                    <div className="flex-1"></div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  On desktop, VS Code shows the activity bar, sidebar, and editor area simultaneously.
                </p>
              </div>

              <div className="p-3 border border-border/60 rounded-sm">
                <h3 className="text-xs font-medium mb-2">Tablet Layout</h3>
                <div className="flex h-48 border border-border/60 rounded-sm overflow-hidden">
                  {/* Activity Bar */}
                  <div className="w-10 bg-activityBar border-r border-border/60 flex-shrink-0"></div>

                  {/* Editor Area */}
                  <div className="flex-1 bg-background flex flex-col">
                    <div className="h-8 bg-header border-b border-border/60"></div>
                    <div className="flex-1"></div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  On tablets, VS Code collapses the sidebar but keeps the activity bar visible for quick access.
                </p>
              </div>

              <div className="p-3 border border-border/60 rounded-sm">
                <h3 className="text-xs font-medium mb-2">Mobile Layout</h3>
                <div className="flex h-48 border border-border/60 rounded-sm overflow-hidden">
                  {/* Editor Area */}
                  <div className="flex-1 bg-background flex flex-col">
                    <div className="h-8 bg-header border-b border-border/60 flex items-center px-2">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Menu size={14} />
                      </Button>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  On mobile, VS Code hides both the activity bar and sidebar behind a menu button, maximizing editor
                  space.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">Responsive Component Adaptations</CardTitle>
            <CardDescription className="text-xs">How components adapt to different screen sizes</CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-xs font-medium">Tabs</h3>
                  <div className="border border-border/60 rounded-sm p-3">
                    <Tabs defaultValue="tab1" className="w-full">
                      <TabsList className="w-full grid grid-cols-3 h-7">
                        <TabsTrigger value="tab1" className="text-xs">
                          Tab 1
                        </TabsTrigger>
                        <TabsTrigger value="tab2" className="text-xs">
                          Tab 2
                        </TabsTrigger>
                        <TabsTrigger value="tab3" className="text-xs">
                          Tab 3
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="tab1" className="p-2 mt-2 text-xs">
                        Tab 1 content
                      </TabsContent>
                      <TabsContent value="tab2" className="p-2 mt-2 text-xs">
                        Tab 2 content
                      </TabsContent>
                      <TabsContent value="tab3" className="p-2 mt-2 text-xs">
                        Tab 3 content
                      </TabsContent>
                    </Tabs>
                    <p className="text-xs text-muted-foreground mt-2">
                      On smaller screens, tabs maintain equal width and may scroll horizontally if needed.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-medium">Forms</h3>
                  <div className="border border-border/60 rounded-sm p-3">
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <label className="text-xs">Setting Name</label>
                        <input className="h-7 px-2 text-xs bg-background border border-border/60 rounded-sm sm:w-32" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <label className="text-xs">Another Setting</label>
                        <input className="h-7 px-2 text-xs bg-background border border-border/60 rounded-sm sm:w-32" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Forms stack vertically on mobile and align horizontally on larger screens.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-medium">Command Palette</h3>
                <div className="border border-border/60 rounded-sm p-3">
                  <div className="border border-border/60 rounded-sm overflow-hidden w-full md:w-2/3 lg:w-1/2 mx-auto">
                    <div className="p-2 bg-sidebar">
                      <input
                        type="text"
                        placeholder="Type to search..."
                        className="w-full h-7 px-2 text-xs bg-background border border-border/60 rounded-sm"
                      />
                    </div>
                    <div className="max-h-32 overflow-y-auto">
                      <div className="p-1 bg-accent">
                        <div className="flex items-center px-2 py-1 text-xs">
                          <span>Selected Item</span>
                        </div>
                      </div>
                      <div className="p-1">
                        <div className="flex items-center px-2 py-1 text-xs">
                          <span>Another Item</span>
                        </div>
                      </div>
                      <div className="p-1">
                        <div className="flex items-center px-2 py-1 text-xs">
                          <span>Third Item</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Command palettes adapt their width based on screen size while maintaining a consistent appearance.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">Responsive Best Practices</CardTitle>
            <CardDescription className="text-xs">
              Guidelines for creating responsive VS Code-inspired interfaces
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Do's</h3>
                <ul className="space-y-1 text-xs">
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Prioritize content over navigation on smaller screens</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Use collapsible panels and menus to save space</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Maintain consistent styling across all screen sizes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Ensure touch targets are at least 44×44px on mobile</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Test keyboard navigation on all screen sizes</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Don'ts</h3>
                <ul className="space-y-1 text-xs">
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Don't hide essential functionality on mobile</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Avoid horizontal scrolling for main content</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Don't use different interaction patterns across devices</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Avoid tiny text that requires zooming on mobile</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Don't rely on hover states for essential functionality</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

