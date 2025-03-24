"use client"

import { useState, useEffect } from "react"
import { FormLayout } from "@/components/create/form-layout"
import { useFormState, ContentFormData } from "@/hooks/use-form-state"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function StylePage() {
  const { formData, updateFormData } = useFormState()
  const [localData, setLocalData] = useState<{
    contentTone: string,
    writingStyle: string,
    voicePreference: "first" | "second" | "third" | "",
  }>({
    contentTone: formData.contentTone || "",
    writingStyle: formData.writingStyle || "",
    voicePreference: formData.voicePreference || "",
  })

  // Update local state when form data changes
  useEffect(() => {
    setLocalData({
      contentTone: formData.contentTone || "",
      writingStyle: formData.writingStyle || "",
      voicePreference: formData.voicePreference || "",
    })
  }, [formData])

  const handleChange = (field: string, value: string) => {
    setLocalData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNext = () => {
    // Validate form
    if (!localData.contentTone) {
      alert("Please select a content tone")
      return false
    }

    if (!localData.writingStyle) {
      alert("Please select a writing style")
      return false
    }

    if (!localData.voicePreference) {
      alert("Please select a voice preference")
      return false
    }

    // Save data
    updateFormData(localData as Partial<ContentFormData>)
    return true
  }

  const toneOptions = [
    { value: "professional", label: "Professional", description: "Formal and business-like" },
    { value: "conversational", label: "Conversational", description: "Casual and friendly" },
    { value: "friendly", label: "Friendly", description: "Warm and approachable" },
    { value: "authoritative", label: "Authoritative", description: "Expert and commanding" },
    { value: "enthusiastic", label: "Enthusiastic", description: "Excited and energetic" },
    { value: "neutral", label: "Neutral", description: "Balanced and impartial" },
  ]

  const styleOptions = [
    { value: "formal", label: "Formal", description: "Structured, precise, and professional" },
    { value: "casual", label: "Casual", description: "Relaxed, approachable, and conversational" },
    { value: "technical", label: "Technical", description: "Detailed, specific, and specialized" },
    { value: "storytelling", label: "Storytelling", description: "Narrative-focused and descriptive" },
    { value: "narrative", label: "Narrative", description: "Story-driven and engaging" },
    { value: "persuasive", label: "Persuasive", description: "Compelling arguments and calls to action" },
    { value: "educational", label: "Educational", description: "Clear explanations and instructional" },
  ]

  const voiceOptions = [
    { value: "first", label: "First Person (I, we)", description: "Personal and direct perspective" },
    { value: "second", label: "Second Person (you)", description: "Directly addresses the reader" },
    { value: "third", label: "Third Person (they, it)", description: "Objective and observational" },
  ]

  return (
    <FormLayout
      title="Style"
      description="Choose the tone and style for your content"
      currentStep={3}
      onNext={handleNext}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <Label className="text-base font-medium">Content Tone</Label>
          <RadioGroup
            value={localData.contentTone}
            onValueChange={(value) => handleChange("contentTone", value)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {toneOptions.map((tone) => (
              <div key={tone.value} className="flex items-start space-x-2">
                <RadioGroupItem value={tone.value} id={`tone-${tone.value}`} className="mt-1" />
                <Label htmlFor={`tone-${tone.value}`} className="flex flex-col cursor-pointer">
                  <span>{tone.label}</span>
                  <span className="text-xs text-muted-foreground mt-1">{tone.description}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label className="text-base font-medium">Writing Style</Label>
          <RadioGroup
            value={localData.writingStyle}
            onValueChange={(value) => handleChange("writingStyle", value)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {styleOptions.map((style) => (
              <div key={style.value} className="flex items-start space-x-2">
                <RadioGroupItem value={style.value} id={`style-${style.value}`} className="mt-1" />
                <Label htmlFor={`style-${style.value}`} className="flex flex-col cursor-pointer">
                  <span>{style.label}</span>
                  <span className="text-xs text-muted-foreground mt-1">{style.description}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label className="text-base font-medium">Voice Preference</Label>
          <RadioGroup
            value={localData.voicePreference}
            onValueChange={(value: "first" | "second" | "third") => handleChange("voicePreference", value)}
            className="space-y-3"
          >
            {voiceOptions.map((voice) => (
              <div key={voice.value} className="flex items-start space-x-2">
                <RadioGroupItem value={voice.value as "first" | "second" | "third"} id={`voice-${voice.value}`} className="mt-1" />
                <Label htmlFor={`voice-${voice.value}`} className="flex flex-col cursor-pointer">
                  <span>{voice.label}</span>
                  <span className="text-xs text-muted-foreground mt-1">{voice.description}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
    </FormLayout>
  )
}
