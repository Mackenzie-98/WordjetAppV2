"use client"

import { useEffect, useState } from "react"
import { FormLayout } from "@/components/create/form-layout"
import { useFormState } from "@/hooks/use-form-state"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { Check } from "lucide-react"

export default function BriefPage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormState()
  const [additionalNotes, setAdditionalNotes] = useState(formData.additionalNotes || "")

  // Update local state when form data changes
  useEffect(() => {
    setAdditionalNotes(formData.additionalNotes || "")
  }, [formData])

  const handleNext = () => {
    // Save additional notes
    updateFormData({ additionalNotes })

    // Redirigir al usuario a la página de login con la URL de redirección al dashboard
    router.push("/login?redirect=/dashboard")
    return false // Evitar la navegación automática del formulario
  }

  // Helper function to get display value for form fields
  const getDisplayValue = (key: string, value: any) => {
    if (!value) return "Not specified"

    if (Array.isArray(value)) {
      return value.join(", ")
    }

    // Format specific fields
    switch (key) {
      case "contentType":
        return formatContentType(value)
      case "audienceKnowledgeLevel":
        return value.charAt(0).toUpperCase() + value.slice(1)
      default:
        return value
    }
  }

  // Format content type from kebab-case to title case
  const formatContentType = (value: string) => {
    return value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Define the brief sections to display
  const briefSections = [
    {
      title: "Content Details",
      fields: [
        { key: "contentType", label: "Content Type" },
        { key: "topic", label: "Topic" },
        { key: "primaryKeyword", label: "Primary Keyword" },
        { key: "purpose", label: "Purpose" },
      ],
    },
    {
      title: "Audience Information",
      fields: [
        { key: "targetAudience", label: "Target Audience" },
        { key: "audienceKnowledgeLevel", label: "Knowledge Level" },
        { key: "audienceInterests", label: "Interests" },
      ],
    },
    {
      title: "Style Preferences",
      fields: [
        { key: "contentTone", label: "Tone" },
        { key: "writingStyle", label: "Writing Style" },
        { key: "voicePreference", label: "Voice" },
      ],
    },
  ]

  return (
    <FormLayout
      title="Content Brief"
      description="Review and approve your content brief"
      currentStep={4}
      onNext={handleNext}
      nextLabel="Create Content"
    >
      <div className="space-y-6">
        {briefSections.map((section, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-lg font-medium">{section.title}</h3>
            <Card>
              <CardContent className="p-4 space-y-3">
                {section.fields.map((field) => (
                  <div key={field.key} className="grid grid-cols-3 gap-2 items-start">
                    <span className="text-sm font-medium">{field.label}:</span>
                    <span className="text-sm col-span-2">
                      {getDisplayValue(field.key, (formData as any)[field.key])}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}

        <div className="space-y-3">
          <Label htmlFor="additionalNotes" className="text-base font-medium">
            Additional Notes
          </Label>
          <Textarea
            id="additionalNotes"
            placeholder="Add any additional instructions or requirements..."
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-md p-4">
          <div className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="text-sm font-medium">Ready to create your content</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Click "Create Content" to generate your content based on this brief. You'll be able to edit and refine
                it in the editor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FormLayout>
  )
}
