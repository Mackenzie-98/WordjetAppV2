"use client"

import { useEffect, useState } from "react"
import { FormLayout } from "@/components/create/form-layout"
import { useFormState } from "@/hooks/use-form-state"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, Textarea, Button } from "@/lib/design-system"
import { useRouter } from "next/navigation"
import { Check, FileCheck, User, Palette, ClipboardList, Edit, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

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

    // Save draft ID to localStorage - in a real app you would create a real draft in the database
    const draftId = "blog-post" // Default to blog post for demo
    localStorage.setItem('wordjet_current_draft', draftId)
    localStorage.setItem('wordjet_show_generation_progress', 'true')
    
    // Check if we're coming from dashboard
    const isFromDashboard = localStorage.getItem('wordjet_from_dashboard') === 'true'
    
    if (isFromDashboard) {
      // If from dashboard, skip login and go directly to editor
      router.push(`/dashboard/editor/${draftId}`)
    } else {
      // Only redirect to login if coming from Get Started flow
      router.push(`/login?redirect=/dashboard/editor/${draftId}`)
    }
    
    return false // Prevent automatic form navigation
  }
  
  const handleEdit = (section: string) => {
    // Navigate based on which section needs editing
    switch(section) {
      case "content-details":
        router.push("/create/content-details");
        break;
      case "audience":
        router.push("/create/audience");
        break;
      case "style":
        router.push("/create/style");
        break;
      default:
        router.back();
    }
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
      case "voicePreference":
        const voiceMap = {
          first: "First Person (I, we)",
          second: "Second Person (you)",
          third: "Third Person (they, it)"
        }
        return voiceMap[value as keyof typeof voiceMap] || value
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
      id: "content-details",
      title: "Content Details",
      icon: <FileCheck className="h-5 w-5" />,
      fields: [
        { key: "contentType", label: "Content Type" },
        { key: "topic", label: "Topic" },
        { key: "primaryKeyword", label: "Primary Keyword" },
        { key: "purpose", label: "Purpose" },
      ],
    },
    {
      id: "audience",
      title: "Audience Information",
      icon: <User className="h-5 w-5" />,
      fields: [
        { key: "targetAudience", label: "Target Audience" },
        { key: "audienceKnowledgeLevel", label: "Knowledge Level" },
        { key: "audienceInterests", label: "Interests" },
      ],
    },
    {
      id: "style",
      title: "Style Preferences",
      icon: <Palette className="h-5 w-5" />,
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
      nextLabel=""
      showNextButton={false}
    >
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-3">
          {briefSections.map((section, index) => (
            <Card key={index} className={cn(
              "border-l-4",
              index === 0 ? "border-l-blue-500" : 
              index === 1 ? "border-l-green-500" : 
              "border-l-purple-500"
            )}>
              <CardHeader className="pb-2 pr-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-md flex items-center gap-2">
                    {section.icon}
                    {section.title}
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0" 
                    onClick={() => handleEdit(section.id)}
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit {section.title}</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {section.fields.map((field) => {
                  const value = getDisplayValue(field.key, (formData as any)[field.key]);
                  return (
                    <div key={field.key} className="grid gap-1">
                      <span className="text-sm font-medium">{field.label}</span>
                      <span className={cn(
                        "text-sm rounded p-1", 
                        value === "Not specified" 
                          ? "text-muted-foreground italic" 
                          : "bg-muted/50"
                      )}>
                        {value}
                      </span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Additional Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              id="additionalNotes"
              placeholder="Add any additional instructions or requirements..."
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="min-h-[100px] mt-2"
            />
          </CardContent>
        </Card>

        <div className="bg-primary/10 border border-primary/20 rounded-md p-4">
          <div className="flex items-start gap-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-full">
              <Check className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-base font-medium">Ready to create your content</h4>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Click "Create Content" to generate your content based on this brief. You'll be able to edit and refine
                it in the editor.
              </p>
              <div className="flex justify-end">
                <Button 
                  onClick={handleNext} 
                  className="gap-2"
                >
                  <Check className="h-4 w-4" />
                  Create Content
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormLayout>
  )
}
