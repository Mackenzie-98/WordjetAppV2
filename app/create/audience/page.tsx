"use client"

import { useState, useEffect } from "react"
import { FormLayout } from "@/components/create/form-layout"
import { useFormState } from "@/hooks/use-form-state"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function AudiencePage() {
  const { formData, updateFormData } = useFormState()
  const [localData, setLocalData] = useState({
    targetAudience: formData.targetAudience || "",
    audienceKnowledgeLevel: formData.audienceKnowledgeLevel || "intermediate",
    audienceInterests: formData.audienceInterests || [],
  })

  // Update local state when form data changes
  useEffect(() => {
    setLocalData({
      targetAudience: formData.targetAudience || "",
      audienceKnowledgeLevel: formData.audienceKnowledgeLevel || "intermediate",
      audienceInterests: formData.audienceInterests || [],
    })
  }, [formData])

  const handleChange = (field: string, value: any) => {
    setLocalData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleInterestToggle = (interest: string) => {
    setLocalData((prev) => {
      const interests = prev.audienceInterests || []
      if (interests.includes(interest)) {
        return {
          ...prev,
          audienceInterests: interests.filter((i) => i !== interest),
        }
      } else {
        return {
          ...prev,
          audienceInterests: [...interests, interest],
        }
      }
    })
  }

  const handleNext = () => {
    // Validate form
    if (!localData.targetAudience) {
      alert("Please describe your target audience")
      return false
    }

    // Save data
    updateFormData(localData)
    return true
  }

  const knowledgeLevels = [
    { value: "beginner", label: "Beginner", description: "New to the topic with limited background knowledge" },
    { value: "intermediate", label: "Intermediate", description: "Familiar with basic concepts but not an expert" },
    { value: "advanced", label: "Advanced", description: "Highly knowledgeable with deep understanding of the topic" },
  ]

  const interestOptions = [
    { value: "industry-news", label: "Industry News" },
    { value: "how-to-guides", label: "How-to Guides" },
    { value: "case-studies", label: "Case Studies" },
    { value: "data-research", label: "Data & Research" },
    { value: "trends", label: "Trends" },
    { value: "tools-resources", label: "Tools & Resources" },
  ]

  return (
    <FormLayout
      title="Audience"
      description="Specify your target readers to tailor the content"
      currentStep={2}
      onNext={handleNext}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="targetAudience" className="text-base font-medium">
            Target Audience
          </Label>
          <Textarea
            id="targetAudience"
            placeholder="Describe your target audience (e.g., Marketing professionals at B2B companies)"
            value={localData.targetAudience}
            onChange={(e) => handleChange("targetAudience", e.target.value)}
            className="min-h-[100px]"
          />
          <p className="text-xs text-muted-foreground">
            Be specific about demographics, job roles, pain points, and goals
          </p>
        </div>

        <div className="space-y-4">
          <Label className="text-base font-medium">Audience Knowledge Level</Label>
          <RadioGroup
            value={localData.audienceKnowledgeLevel as string}
            onValueChange={(value) => handleChange("audienceKnowledgeLevel", value)}
            className="space-y-3"
          >
            {knowledgeLevels.map((level) => (
              <div key={level.value} className="flex items-start space-x-2">
                <RadioGroupItem value={level.value} id={level.value} className="mt-1" />
                <Label htmlFor={level.value} className="flex flex-col cursor-pointer">
                  <span>{level.label}</span>
                  <span className="text-xs text-muted-foreground mt-1">{level.description}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label className="text-base font-medium">Audience Interests</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {interestOptions.map((interest) => (
              <div key={interest.value} className="flex items-center space-x-2">
                <Checkbox
                  id={interest.value}
                  checked={(localData.audienceInterests || []).includes(interest.value)}
                  onCheckedChange={() => handleInterestToggle(interest.value)}
                />
                <Label htmlFor={interest.value} className="cursor-pointer">
                  {interest.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FormLayout>
  )
}

