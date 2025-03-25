import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TypographySystem() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium tracking-tight">Typography System</h1>
        <p className="text-muted-foreground text-sm">
          A clean, minimalist typography system inspired by Visual Studio Code's interface.
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">Font Families</CardTitle>
            <CardDescription className="text-xs">
              Primary and monospace typefaces used in the design system
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="pb-2 border-b border-border/40">
                  <h3 className="text-xs font-medium mb-1">System UI (Primary)</h3>
                  <p className="text-xs text-muted-foreground">Used for UI elements, labels, and general text</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-normal">Regular (400) - Default body text</p>
                  <p className="text-xs font-medium">Medium (500) - Emphasis, UI elements</p>
                  <p className="text-xs font-semibold">Semibold (600) - Headings, strong emphasis</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="pb-2 border-b border-border/40">
                  <h3 className="text-xs font-medium mb-1 font-mono">Monospace (Secondary)</h3>
                  <p className="text-xs text-muted-foreground">Used for code, terminal output, and technical content</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-mono">Monospace Regular - Code blocks</p>
                  <p className="text-xs font-mono font-medium">Monospace Medium - Emphasized code</p>
                  <p className="text-xs font-mono italic">Monospace Italic - Comments, annotations</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">Type Scale</CardTitle>
            <CardDescription className="text-xs">Compact sizing across the interface</CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xs font-medium pb-1 border-b border-border/40">Headings</h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h1 className="text-2xl font-medium">H1 - Large Heading (24px)</h1>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-sm">text-2xl font-medium</code>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h2 className="text-xl font-medium">H2 - Medium Heading (20px)</h2>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-sm">text-xl font-medium</code>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-base font-medium">H3 - Small Heading (16px)</h3>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-sm">text-base font-medium</code>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h4 className="text-sm font-medium">H4 - Mini Heading (14px)</h4>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-sm">text-sm font-medium</code>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h5 className="text-xs font-medium">H5 - Micro Heading (12px)</h5>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-sm">text-xs font-medium</code>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-medium pb-1 border-b border-border/40">Body Text</h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <p className="text-sm">Body Regular (14px) - Main text for content and descriptions.</p>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-sm">text-sm</code>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <p className="text-xs">Body Small (12px) - Secondary information, captions, metadata.</p>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-sm">text-xs</code>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <p className="text-[10px]">
                      Body XSmall (10px) - Fine print, footer content, tertiary information.
                    </p>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-sm">text-[10px]</code>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-medium pb-1 border-b border-border/40">Code Text</h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <p className="text-sm font-mono">Code Regular (14px) - Main code blocks.</p>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-sm">text-sm font-mono</code>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <p className="text-xs font-mono">Code Small (12px) - Inline code, small code snippets.</p>
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded-sm">text-xs font-mono</code>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">VS Code Typography Guidelines</CardTitle>
            <CardDescription className="text-xs">Best practices for applying typography consistently</CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Line Height</h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-xs font-medium">Tight (1.2)</p>
                    <p className="text-xs text-muted-foreground leading-tight">
                      Used for headings and UI elements where space is limited. This tighter spacing creates a more
                      compact appearance similar to VS Code's interface.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium">Normal (1.4)</p>
                    <p className="text-xs text-muted-foreground leading-normal">
                      The default for body text. Provides comfortable readability for most content while maintaining a
                      clean appearance.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium">Code (1.6)</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Used for code blocks to improve readability. The extra spacing helps distinguish between lines of
                      code.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Best Practices</h3>
                <ul className="space-y-2 text-xs">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Use system UI fonts for all interface elements to match VS Code's native feel</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Reserve monospace fonts for code, terminal output, and technical content</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Keep text sizes compact (12-14px for most content) to maximize information density</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Use font weight rather than size to create hierarchy in compact spaces</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Maintain consistent text colors: primary for important text, muted for secondary information
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Ensure sufficient contrast between text and background (minimum 4.5:1 ratio)</span>
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

