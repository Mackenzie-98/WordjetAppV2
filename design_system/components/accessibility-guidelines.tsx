import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Keyboard, Brain, Code } from "lucide-react"

export function AccessibilityGuidelines() {
  const principles = [
    {
      title: "Perceivable",
      description: "Information must be presentable to users in ways they can perceive",
      icon: <Eye className="h-4 w-4 text-primary" />,
      guidelines: [
        "Provide text alternatives for non-text content",
        "Provide captions and alternatives for multimedia",
        "Create content that can be presented in different ways",
        "Make it easier for users to see and hear content",
      ],
    },
    {
      title: "Operable",
      description: "UI components must be operable by all users",
      icon: <Keyboard className="h-4 w-4 text-primary" />,
      guidelines: [
        "Make all functionality available from a keyboard",
        "Give users enough time to read and use content",
        "Do not use content that causes seizures or physical reactions",
        "Provide ways to help users navigate and find content",
      ],
    },
    {
      title: "Understandable",
      description: "Information and operation must be understandable",
      icon: <Brain className="h-4 w-4 text-primary" />,
      guidelines: [
        "Make text readable and understandable",
        "Make content appear and operate in predictable ways",
        "Help users avoid and correct mistakes",
        "Use clear and concise language",
      ],
    },
    {
      title: "Robust",
      description: "Content must be robust enough to work with various assistive technologies",
      icon: <Code className="h-4 w-4 text-primary" />,
      guidelines: [
        "Maximize compatibility with current and future tools",
        "Use semantic HTML elements appropriately",
        "Ensure proper ARIA implementation when needed",
        "Test with assistive technologies",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium tracking-tight">Accessibility Guidelines</h1>
        <p className="text-muted-foreground text-sm">
          Ensuring our interfaces are usable by everyone, regardless of ability or context.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {principles.map((principle) => (
          <Card key={principle.title} className="border border-border/60">
            <CardHeader className="px-4 py-3 flex flex-row items-center gap-3">
              {principle.icon}
              <div>
                <CardTitle className="text-sm font-medium">{principle.title}</CardTitle>
                <CardDescription className="text-xs">{principle.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="px-4 py-3">
              <ul className="space-y-1">
                {principle.guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{guideline}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4">
        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">VS Code-Inspired Accessibility</CardTitle>
            <CardDescription className="text-xs">
              Accessibility considerations for a code editor-like interface
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Keyboard Navigation</h3>
                <p className="text-xs text-muted-foreground">
                  VS Code is heavily keyboard-focused, and our design system should be too. All interactive elements
                  must be keyboard accessible with clear focus states.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-muted border border-border/60 rounded-sm">
                      Tab
                    </kbd>
                    <span className="text-xs">Navigate between focusable elements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-muted border border-border/60 rounded-sm">
                      Enter
                    </kbd>
                    <span className="text-xs">Activate buttons, links, and other controls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-muted border border-border/60 rounded-sm">
                      Esc
                    </kbd>
                    <span className="text-xs">Close dialogs and menus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-muted border border-border/60 rounded-sm">
                      ↑↓←→
                    </kbd>
                    <span className="text-xs">Navigate within components like menus and lists</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Focus Management</h3>
                <p className="text-xs text-muted-foreground">
                  Clear focus indicators are essential for keyboard users. Our focus states should be visible and
                  consistent across all components.
                </p>
                <div className="space-y-2">
                  <div className="p-3 border border-border/60 rounded-sm">
                    <div className="flex flex-col gap-2">
                      <button className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-sm">
                        Default Button
                      </button>
                      <button className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-sm ring-2 ring-primary ring-offset-2 ring-offset-background">
                        Focused Button
                      </button>
                      <p className="text-xs text-muted-foreground mt-1">
                        Focus indicators should have a 3:1 contrast ratio against adjacent colors and be at least 2px
                        thick.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">Color & Contrast</CardTitle>
            <CardDescription className="text-xs">Ensuring visibility for all users</CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Requirements</h3>
                <ul className="space-y-1 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Never use color alone to convey meaning; always include alternative visual cues or text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Provide sufficient contrast between foreground and background elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Ensure interactive elements have a 3:1 contrast ratio against adjacent colors</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Examples</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-primary text-white rounded-sm">
                    <span className="text-xs font-medium">Good Contrast</span>
                    <p className="text-[10px] mt-1">4.5:1 ratio</p>
                  </div>
                  <div className="p-2 bg-primary/30 text-primary-foreground rounded-sm">
                    <span className="text-xs font-medium">Poor Contrast</span>
                    <p className="text-[10px] mt-1">2.5:1 ratio</p>
                  </div>
                  <div className="p-2 bg-destructive text-destructive-foreground rounded-sm flex items-center gap-2">
                    <span>●</span>
                    <span className="text-xs">Error (with icon)</span>
                  </div>
                  <div className="p-2 bg-muted text-muted-foreground rounded-sm">
                    <span className="text-xs">Disabled state</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">Screen Reader Support</CardTitle>
            <CardDescription className="text-xs">Making content accessible to assistive technologies</CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Requirements</h3>
                <ul className="space-y-1 text-xs">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Include alternative text for all non-decorative images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Ensure form fields have associated labels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Provide descriptive text for links that makes sense out of context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Implement ARIA landmarks to help screen reader users navigate</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Code Examples</h3>
                <div className="p-3 bg-muted rounded-sm text-[10px] font-mono">
                  <p className="text-muted-foreground mb-1">// Good image alt text</p>
                  <p className="text-foreground">{`<img src="chart.png" alt="Q1 sales increased by 25% compared to last year" />`}</p>
                  <p className="text-muted-foreground mt-2 mb-1">// Proper form labeling</p>
                  <p className="text-foreground">{`<label for="email">Email Address</label>`}</p>
                  <p className="text-foreground">{`<input id="email" type="email" />`}</p>
                  <p className="text-muted-foreground mt-2 mb-1">// Descriptive link text</p>
                  <p className="text-foreground">{`<a href="...">View sales report</a>`}</p>
                  <p className="text-muted-foreground">{`// Instead of: <a href="...">Click here</a>`}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

