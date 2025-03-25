import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ColorSystem() {
  const colorCategories = [
    {
      name: "Primary",
      description: "Used for primary actions, links, and active states",
      colors: [
        { name: "Light Blue", value: "#e0fbfc", textDark: true },
        { name: "Primary Blue", value: "#2563EB", textDark: false },
        { name: "Dark Blue", value: "#0033A0", textDark: false },
        { name: "Accent Blue", value: "#007bff", textDark: false },
      ],
    },
    {
      name: "UI Colors",
      description: "Used for interface elements and backgrounds",
      colors: [
        { name: "Background", value: "#ffffff", textDark: true },
        { name: "Sidebar", value: "#f5f5f5", textDark: true },
        { name: "Activity Bar", value: "#f0f0f0", textDark: true },
        { name: "Header", value: "#fafafa", textDark: true },
        { name: "Status Bar", value: "#2563EB", textDark: false },
        { name: "Accent", value: "#f5f5f5", textDark: true },
      ],
    },
    {
      name: "Text",
      description: "Used for text and icons",
      colors: [
        { name: "Foreground", value: "#1f1f1f", textDark: false },
        { name: "Muted", value: "#737373", textDark: false },
        { name: "Highlight", value: "#000000", textDark: false },
      ],
    },
    {
      name: "Semantic",
      description: "Used to communicate meaning and status",
      colors: [
        { name: "Success", value: "#10b981", textDark: true },
        { name: "Warning", value: "#f59e0b", textDark: true },
        { name: "Error", value: "#ef4444", textDark: false },
        { name: "Info", value: "#007bff", textDark: false },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium tracking-tight">Color System</h1>
        <p className="text-muted-foreground text-sm">
          A minimalist color palette with a focus on blue tones for buttons and clean whites and greys for UI elements.
        </p>
      </div>

      <div className="grid gap-6">
        {colorCategories.map((category) => (
          <Card key={category.name} className="border border-border/60">
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-sm font-medium">{category.name} Colors</CardTitle>
              <CardDescription className="text-xs">{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="px-4 py-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {category.colors.map((color) => (
                  <div key={color.name} className="space-y-1.5">
                    <div
                      className="h-12 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: color.value }}
                    >
                      <span className={`text-xs font-medium ${color.textDark ? "text-gray-900" : "text-white"}`}>
                        {color.name}
                      </span>
                    </div>
                    <div className="px-1">
                      <p className="text-xs font-mono">{color.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="border border-border/60">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-sm font-medium">Minimalist Color Usage</CardTitle>
            <CardDescription className="text-xs">Best practices for applying colors consistently</CardDescription>
          </CardHeader>
          <CardContent className="px-4 py-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Interface Elements</h3>
                <ul className="space-y-2 text-xs">
                  <li className="flex gap-2">
                    <span className="text-[#2563EB]">•</span>
                    <span>
                      Use <span className="font-mono">#ffffff</span> for main background
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2563EB]">•</span>
                    <span>
                      Use <span className="font-mono">#f5f5f5</span> for sidebar and panels
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2563EB]">•</span>
                    <span>
                      Use <span className="font-mono">#f0f0f0</span> for activity bar
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2563EB]">•</span>
                    <span>
                      Use <span className="font-mono">#fafafa</span> for headers and title bars
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2563EB]">•</span>
                    <span>
                      Use <span className="font-mono">#2563EB</span> for status bar and active elements
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-medium">Button Elements</h3>
                <ul className="space-y-2 text-xs">
                  <li className="flex gap-2">
                    <span className="text-[#2563EB]">•</span>
                    <span>
                      Use <span className="font-mono">#2563EB</span> for primary buttons
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2563EB]">•</span>
                    <span>
                      Use <span className="font-mono">#e0fbfc</span> for secondary button backgrounds
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2563EB]">•</span>
                    <span>
                      Use <span className="font-mono">#0033A0</span> for hover and active states
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2563EB]">•</span>
                    <span>
                      Use <span className="font-mono">#007bff</span> for button text and borders
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#2563EB]">•</span>
                    <span>Use semantic colors consistently for notifications and status indicators</span>
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

