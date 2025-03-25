import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SpacingSystem() {
  const spacingValues = [
    { name: "1", value: "4px", class: "p-1" },
    { name: "2", value: "8px", class: "p-2" },
    { name: "3", value: "12px", class: "p-3" },
    { name: "4", value: "16px", class: "p-4" },
    { name: "5", value: "20px", class: "p-5" },
    { name: "6", value: "24px", class: "p-6" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium tracking-tight">Spacing & Layout</h1>
        <p className="text-muted-foreground text-sm">
          A compact spacing system inspired by Visual Studio Code's dense, information-rich interface.
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">Compact Spacing Scale</CardTitle>
            <CardDescription className="text-xs">Based on a 4px unit for consistent proportions</CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {spacingValues.map((spacing) => (
                <div key={spacing.name} className="flex flex-col items-center">
                  <div className={`${spacing.class} bg-primary/10 border border-primary/20 rounded-sm mb-2`}>
                    <div className="w-full h-full bg-primary/20 rounded-sm min-w-[20px] min-h-[20px]"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium">{spacing.name}</p>
                    <p className="text-[10px] text-muted-foreground">{spacing.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">VS Code Layout Patterns</CardTitle>
            <CardDescription className="text-xs">Common spacing patterns in VS Code's interface</CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xs font-medium">Header & Title Bars</h3>
                <div className="h-9 bg-header border border-border/60 rounded-sm flex items-center px-3">
                  <span className="text-xs">Compact header (36px height, 12px padding)</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-medium">Sidebar Items</h3>
                <div className="space-y-1 border border-border/60 rounded-sm p-2">
                  <div className="flex items-center h-6 px-2 text-xs bg-accent rounded-sm">
                    <span>Selected item (8px padding)</span>
                  </div>
                  <div className="flex items-center h-6 px-2 text-xs">
                    <span>Normal item (8px padding)</span>
                  </div>
                  <div className="flex items-center h-6 px-2 text-xs">
                    <span>Normal item (8px padding)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-medium">Content Padding</h3>
                <div className="border border-border/60 rounded-sm">
                  <div className="p-3 border-b border-border/60 bg-header">
                    <span className="text-xs font-medium">Panel Header (12px padding)</span>
                  </div>
                  <div className="p-3">
                    <span className="text-xs">Panel Content (12px padding)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-medium">Form Controls</h3>
                <div className="border border-border/60 rounded-sm p-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Label</span>
                    <input className="h-7 w-32 px-2 text-xs bg-background border border-border/60 rounded-sm" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Another Setting</span>
                    <input className="h-7 w-32 px-2 text-xs bg-background border border-border/60 rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">Component Spacing</CardTitle>
            <CardDescription className="text-xs">Consistent spacing within and between components</CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Internal Spacing</h3>
                <div className="space-y-3">
                  <div className="p-2 border border-dashed border-border/60 rounded-sm">
                    <div className="p-2 bg-primary/10 rounded-sm flex items-center justify-center h-8">
                      <span className="text-[10px] font-medium">Tight: 8px (p-2)</span>
                    </div>
                  </div>
                  <div className="p-3 border border-dashed border-border/60 rounded-sm">
                    <div className="p-3 bg-primary/10 rounded-sm flex items-center justify-center h-8">
                      <span className="text-[10px] font-medium">Default: 12px (p-3)</span>
                    </div>
                  </div>
                  <div className="p-4 border border-dashed border-border/60 rounded-sm">
                    <div className="p-4 bg-primary/10 rounded-sm flex items-center justify-center h-8">
                      <span className="text-[10px] font-medium">Relaxed: 16px (p-4)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Component Gaps</h3>
                <div className="space-y-3">
                  <div className="space-y-1 border border-dashed border-border/60 p-3 rounded-sm">
                    <div className="h-8 bg-primary/10 rounded-sm"></div>
                    <div className="h-8 bg-primary/10 rounded-sm"></div>
                    <div className="h-8 bg-primary/10 rounded-sm"></div>
                    <p className="text-[10px] text-center mt-2">Tight: 4px (gap-1)</p>
                  </div>
                  <div className="space-y-2 border border-dashed border-border/60 p-3 rounded-sm">
                    <div className="h-8 bg-primary/10 rounded-sm"></div>
                    <div className="h-8 bg-primary/10 rounded-sm"></div>
                    <div className="h-8 bg-primary/10 rounded-sm"></div>
                    <p className="text-[10px] text-center mt-2">Default: 8px (gap-2)</p>
                  </div>
                  <div className="space-y-3 border border-dashed border-border/60 p-3 rounded-sm">
                    <div className="h-8 bg-primary/10 rounded-sm"></div>
                    <div className="h-8 bg-primary/10 rounded-sm"></div>
                    <div className="h-8 bg-primary/10 rounded-sm"></div>
                    <p className="text-[10px] text-center mt-2">Relaxed: 12px (gap-3)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">VS Code Spacing Guidelines</CardTitle>
            <CardDescription className="text-xs">Best practices for applying spacing consistently</CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Do's</h3>
                <ul className="space-y-2 text-xs">
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Use compact spacing (8-12px) for most UI elements</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Maintain consistent spacing within component types</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Use 1px borders to define boundaries between sections</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Prioritize information density in layouts</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Use subtle background color changes instead of large gaps</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Don'ts</h3>
                <ul className="space-y-2 text-xs">
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Don't use excessive padding that wastes screen space</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Avoid inconsistent spacing between similar elements</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Don't use large margins that reduce information density</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Avoid using different spacing values for similar components</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Don't rely on whitespace alone to create visual hierarchy</span>
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

