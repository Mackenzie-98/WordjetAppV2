"use client"

import { useState, useEffect } from "react"
import { FormLayout } from "@/components/create/form-layout"
import { useFormState } from "@/hooks/use-form-state"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { FileText, Layout, BookOpen, MessageSquare, FileBarChart, ClipboardList } from "lucide-react"

export default function ContentTypePage() {
  const { formData, updateFormData } = useFormState()
  
  // Siempre inicializamos el estado local con los valores del formData o vacíos
  const [localData, setLocalData] = useState({
    contentType: formData.contentType || "",
    purpose: formData.purpose || "",
    topic: formData.topic || "",
    primaryKeyword: formData.primaryKeyword || "",
  })

  // Si formData cambia, actualizamos el estado local
  useEffect(() => {
    // Cuando el formData cambia, actualizamos el estado local
    setLocalData({
      contentType: formData.contentType || "",
      purpose: formData.purpose || "",
      topic: formData.topic || "",
      primaryKeyword: formData.primaryKeyword || "",
    })
  }, [formData])

  const handleChange = (field: string, value: string) => {
    setLocalData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNext = () => {
    // Validar formulario
    if (!localData.contentType) {
      alert("Please select a content type")
      return false
    }

    if (!localData.topic) {
      alert("Please enter a topic")
      return false
    }

    // Guardar datos antes de avanzar
    updateFormData(localData)
    return true
  }

  const contentTypes = [
    {
      value: "pillar-page",
      label: "Pillar Page",
      icon: <FileText className="h-5 w-5" />,
      description: "Comprehensive content covering a broad topic in depth",
    },
    {
      value: "blog-post",
      label: "Blog Post",
      icon: <FileText className="h-5 w-5" />,
      description: "SEO-optimized article with valuable information on a specific topic",
    },
    {
      value: "landing-page",
      label: "Landing Page",
      icon: <Layout className="h-5 w-5" />,
      description: "Page designed to convert visitors into leads or customers",
    },
    {
      value: "essay",
      label: "Essay",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Argumentative text with clear introduction, development, and conclusion",
    },
    {
      value: "opinion-piece",
      label: "Opinion Piece",
      icon: <MessageSquare className="h-5 w-5" />,
      description: "Article presenting a viewpoint or analysis on a current topic",
    },
    {
      value: "white-paper",
      label: "White Paper",
      icon: <FileBarChart className="h-5 w-5" />,
      description: "Technical document explaining a problem and presenting a solution",
    },
    {
      value: "case-study",
      label: "Case Study",
      icon: <ClipboardList className="h-5 w-5" />,
      description: "Detailed analysis of a project or situation with results and learnings",
    },
  ]

  const purposes = [
    { value: "inform", label: "Inform", description: "Educate your audience with facts and insights" },
    { value: "persuade", label: "Persuade", description: "Convince your audience to take action or adopt a viewpoint" },
    { value: "entertain", label: "Entertain", description: "Engage your audience with interesting or amusing content" },
    { value: "instruct", label: "Instruct", description: "Guide your audience through a process or procedure" },
  ]

  return (
    <FormLayout
      title="Content Type & Topic"
      description="Define what type of content you want to create"
      currentStep={1}
      onNext={handleNext}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <Label className="text-base font-medium">Content Type</Label>
          <RadioGroup
            value={localData.contentType}
            onValueChange={(value) => handleChange("contentType", value)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {contentTypes.map((type) => (
              <div key={type.value} className="flex items-start space-x-2">
                <RadioGroupItem value={type.value} id={type.value} className="mt-1" />
                <Label htmlFor={type.value} className="flex flex-col cursor-pointer">
                  <span className="flex items-center gap-1.5">
                    {type.icon}
                    {type.label}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">{type.description}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label className="text-base font-medium">Purpose</Label>
          <RadioGroup
            value={localData.purpose}
            onValueChange={(value) => handleChange("purpose", value)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {purposes.map((purpose) => (
              <div key={purpose.value} className="flex items-start space-x-2">
                <RadioGroupItem value={purpose.value} id={purpose.value} className="mt-1" />
                <Label htmlFor={purpose.value} className="flex flex-col cursor-pointer">
                  <span>{purpose.label}</span>
                  <span className="text-xs text-muted-foreground mt-1">{purpose.description}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="topic" className="text-base font-medium">
            Topic
          </Label>
          <Input
            id="topic"
            placeholder="E.g., Benefits of content marketing for small businesses"
            value={localData.topic}
            onChange={(e) => handleChange("topic", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="primaryKeyword" className="text-base font-medium">
            Primary Keyword
          </Label>
          <Input
            id="primaryKeyword"
            placeholder="E.g., content marketing benefits"
            value={localData.primaryKeyword}
            onChange={(e) => handleChange("primaryKeyword", e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            This keyword will be optimized throughout your content for SEO
          </p>
        </div>
      </div>
    </FormLayout>
  )
}
