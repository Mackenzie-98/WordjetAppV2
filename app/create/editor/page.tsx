"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useFormState } from "@/hooks/use-form-state"
import { Button } from "@/components/ui/button"
import { Loader2, Save, ArrowLeft } from "lucide-react"

export default function EditorPage() {
  const router = useRouter()
  const { formData, resetForm } = useFormState()
  const [isLoading, setIsLoading] = useState(true)
  const [generatedContent, setGeneratedContent] = useState("")

  // Simulate content generation without checking authentication
  useEffect(() => {
    // Simulate content generation without checking authentication
    const timer = setTimeout(() => {
      // Generate content based on the form data
      const content = generateContentFromBrief(formData)
      setGeneratedContent(content)
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [formData, router])

  // Function to generate content based on the brief
  const generateContentFromBrief = (brief: any) => {
    // In a real application, this would call an API to generate content
    // For this example, we'll return a simple template

    const contentType = brief.contentType || "blog-post"
    const topic = brief.topic || "Sample Topic"
    const tone = brief.contentTone || "professional"

    return `# ${topic}

## Introduction

This is a sample ${contentType} about ${topic}. The content is written in a ${tone} tone.

## Main Points

- First key point about ${topic}
- Second important aspect to consider
- Third element that readers should know

## Conclusion

In conclusion, ${topic} is an important subject that deserves attention. This ${contentType} has provided an overview of the key aspects.
`
  }

  const handleSaveContent = () => {
    // In a real application, this would save the content to a database
    resetForm()
    // Redirigir al dashboard
    router.push("/dashboard")
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Content Editor</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.push("/dashboard")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Finalizar
          </Button>
          <Button onClick={handleSaveContent}>
            <Save className="h-4 w-4 mr-2" />
            Guardar y Continuar
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
          <h2 className="text-xl font-medium mb-2">Generando tu contenido...</h2>
          <p className="text-muted-foreground text-center max-w-md">
            Estamos creando tu contenido basado en tus especificaciones. Esto puede tomar un momento.
          </p>
        </div>
      ) : (
        <div className="bg-card border rounded-md p-6">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: generatedContent.replace(/\n/g, "<br>") }} />
          </div>
        </div>
      )}
    </div>
  )
}
