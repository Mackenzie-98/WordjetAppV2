import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Annotation {
  title: string
  description: string
}

interface AnnotationCardProps {
  title: string
  annotations: Annotation[]
}

export function AnnotationCard({ title, annotations }: AnnotationCardProps) {
  return (
    <Card className="border border-border/60">
      <CardHeader className="px-4 py-3">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <CardDescription className="text-xs">Key design decisions and their rationale</CardDescription>
      </CardHeader>
      <CardContent className="px-4 py-3">
        <div className="space-y-3">
          {annotations.map((annotation, index) => (
            <div key={index} className="space-y-1">
              <h3 className="text-xs font-medium">{annotation.title}</h3>
              <p className="text-xs text-muted-foreground">{annotation.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

