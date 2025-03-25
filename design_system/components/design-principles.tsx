import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleCheck, Minimize2, Repeat, Accessibility } from "lucide-react"

export function DesignPrinciples() {
  const principles = [
    {
      title: "Clarity First",
      description: "Clean interfaces with focused interactions that reduce cognitive load",
      icon: <CircleCheck className="h-8 w-8 text-primary" />,
      examples: [
        "Use clear, concise language in UI text",
        "Maintain visual hierarchy to guide users",
        "Reduce unnecessary elements that don't serve a purpose",
        "Provide feedback for all user actions",
      ],
    },
    {
      title: "Thoughtful Minimalism",
      description: "Every element serves a purpose; remove what doesn't",
      icon: <Minimize2 className="h-8 w-8 text-primary" />,
      examples: [
        "Eliminate decorative elements that don't enhance usability",
        "Use white space strategically to create focus",
        "Consolidate similar functions to reduce complexity",
        "Prioritize content over ornamentation",
      ],
    },
    {
      title: "Consistent Experience",
      description: "Predictable patterns that build user confidence",
      icon: <Repeat className="h-8 w-8 text-primary" />,
      examples: [
        "Maintain consistent component behavior across the interface",
        "Use familiar interaction patterns that users already understand",
        "Apply the same visual language throughout the product",
        "Ensure terminology is consistent across all touchpoints",
      ],
    },
    {
      title: "Accessible by Default",
      description: "Inclusive design that works for everyone",
      icon: <Accessibility className="h-8 w-8 text-primary" />,
      examples: [
        "Ensure sufficient color contrast for all text",
        "Support keyboard navigation for all interactive elements",
        "Provide text alternatives for non-text content",
        "Design with screen readers and assistive technologies in mind",
      ],
    },
  ]

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Design Principles</h1>
        <p className="text-muted-foreground text-lg">
          The core principles that guide our design decisions and create a cohesive user experience.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {principles.map((principle) => (
          <Card key={principle.title}>
            <CardHeader className="flex flex-row items-center gap-4">
              {principle.icon}
              <div>
                <CardTitle>{principle.title}</CardTitle>
                <CardDescription>{principle.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {principle.examples.map((example, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Applying Our Principles</CardTitle>
          <CardDescription>How our design principles translate into practical application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Design Process</h3>
              <p className="text-sm text-muted-foreground">
                Our design principles guide every stage of the product development process, from initial concept to
                final implementation. They serve as a framework for making decisions and evaluating solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    1
                  </div>
                  <span className="text-sm font-medium">Define the problem clearly</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    2
                  </div>
                  <span className="text-sm font-medium">Explore solutions with principles in mind</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    3
                  </div>
                  <span className="text-sm font-medium">Test against our principles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    4
                  </div>
                  <span className="text-sm font-medium">Refine based on feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    5
                  </div>
                  <span className="text-sm font-medium">Implement with consistency</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Practical Examples</h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h4 className="text-sm font-medium mb-2">Button Design</h4>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-primary">Clarity First:</span> Clear visual distinction between
                    primary and secondary actions.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-primary">Thoughtful Minimalism:</span> Only essential information
                    is included in button labels.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-primary">Consistent Experience:</span> Button styles and behaviors
                    are standardized across the interface.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-primary">Accessible by Default:</span> Buttons have sufficient
                    contrast and work with keyboard navigation.
                  </p>
                </div>
                <div className="p-4 border rounded-md">
                  <h4 className="text-sm font-medium mb-2">Form Design</h4>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-primary">Clarity First:</span> Clear labels and helpful error
                    messages guide users.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-primary">Thoughtful Minimalism:</span> Only necessary fields are
                    included, with optional fields clearly marked.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-primary">Consistent Experience:</span> Form layouts and validation
                    patterns are consistent.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-primary">Accessible by Default:</span> Forms work with screen
                    readers and support keyboard navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

