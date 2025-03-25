"use client"

import { useState, useEffect } from "react"
import { FormLayout } from "@/components/create/form-layout"
import { useFormState } from "@/hooks/use-form-state"
import { Label, Textarea, RadioGroup, RadioGroupItem, Badge, Checkbox } from "@/lib/design-system"
import { Users, Lightbulb, BookOpen, Brain } from "lucide-react"
import { cn } from "@/lib/utils"

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
    { 
      value: "beginner", 
      label: "Beginner", 
      description: "New to the topic with limited background knowledge",
      icon: <Lightbulb className="h-5 w-5" />,
    },
    { 
      value: "intermediate", 
      label: "Intermediate", 
      description: "Familiar with basic concepts but not an expert",
      icon: <BookOpen className="h-5 w-5" />,
    },
    { 
      value: "advanced", 
      label: "Advanced", 
      description: "Highly knowledgeable with deep understanding of the topic",
      icon: <Brain className="h-5 w-5" />,
    },
  ]

  const interestOptions = [
    { value: "industry-news", label: "Industry News" },
    { value: "how-to-guides", label: "How-to Guides" },
    { value: "case-studies", label: "Case Studies" },
    { value: "data-research", label: "Data & Research" },
    { value: "trends", label: "Trends" },
    { value: "tools-resources", label: "Tools & Resources" },
  ]

  const charactersRemaining = 500 - (localData.targetAudience?.length || 0)

  return (
    <FormLayout
      title="Audience"
      description="Specify your target readers to tailor the content"
      currentStep={2}
      onNext={handleNext}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="targetAudience" className="text-base font-medium flex gap-2 items-center">
              <Users className="h-5 w-5 text-primary" />
              Target Audience
            </Label>
            <Badge variant={charactersRemaining < 50 ? "destructive" : "outline"} className="font-normal">
              {charactersRemaining} characters remaining
            </Badge>
          </div>
          <Textarea
            id="targetAudience"
            placeholder="Describe your target audience (e.g., Marketing professionals at B2B companies)"
            value={localData.targetAudience}
            onChange={(e) => handleChange("targetAudience", e.target.value)}
            maxLength={500}
            className={cn(
              "min-h-[120px] transition-colors duration-200", 
              localData.targetAudience 
                ? "border-primary/50 shadow-sm" 
                : "border-muted"
            )}
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
              <div 
                key={level.value} 
                className={cn(
                  "flex items-start space-x-2 p-3 rounded-lg border transition-all",
                  localData.audienceKnowledgeLevel === level.value
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-muted hover:border-muted-foreground/20 hover:bg-muted/30"
                )}
              >
                <RadioGroupItem value={level.value} id={level.value} className="mt-1" />
                <Label htmlFor={level.value} className="flex cursor-pointer w-full">
                  <div className="flex items-center gap-2 min-w-[140px]">
                    <div className={cn(
                      "p-1.5 rounded-full",
                      localData.audienceKnowledgeLevel === level.value 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground"
                    )}>
                      {level.icon}
                    </div>
                    <span className="font-medium">{level.label}</span>
                  </div>
                  <span className="text-sm text-muted-foreground mt-0.5">{level.description}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <Label className="text-base font-medium">Audience Interests</Label>
            <Badge variant="outline" className="font-normal">
              {localData.audienceInterests?.length || 0} selected
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {interestOptions.map((interest) => {
              const isSelected = (localData.audienceInterests || []).includes(interest.value);
              return (
                <div 
                  key={interest.value} 
                  className={cn(
                    "flex items-center space-x-2 p-3 rounded-md border transition-all cursor-pointer",
                    isSelected 
                      ? "border-primary/50 bg-primary/5" 
                      : "border-muted hover:border-muted-foreground/20"
                  )}
                  onClick={() => handleInterestToggle(interest.value)}
                >
                  <Checkbox
                    id={interest.value}
                    checked={isSelected}
                    className={isSelected ? "text-primary" : ""}
                    onCheckedChange={() => handleInterestToggle(interest.value)}
                  />
                  <Label htmlFor={interest.value} className="cursor-pointer flex-1">
                    {interest.label}
                  </Label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </FormLayout>
  )
}

