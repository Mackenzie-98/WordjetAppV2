"use client"

import { useEffect, useState } from "react"
import { FormLayout } from "@/components/create/form-layout"
import { useFormState } from "@/hooks/use-form-state"
import { RadioGroup, RadioGroupItem, Label, Button, useToast } from "@/lib/design-system"
import {
  FileText,
  Lightbulb,
  BookOpen,
  MessagesSquare,
  Camera,
  BookMarked,
  Megaphone,
  Briefcase,
  SlidersHorizontal,
  Smile,
  Frown,
  Clock,
  User,
  Users,
  Brain,
  Layers,
  ThumbsUp,
  PenTool,
  Sparkles,
  Sword,
  Heart,
  Scroll,
  MessageCircle,
  CircleDashed,
  Compass,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { ContentFormData } from "@/hooks/use-form-state"

const WRITING_STYLES = [
  {
    value: "straightforward",
    label: "Straightforward",
    description: "Clear and to the point without flourishes",
    icon: <SlidersHorizontal className="w-5 h-5" />,
  },
  {
    value: "creative",
    label: "Creative",
    description: "Imaginative with colorful language",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    value: "persuasive",
    label: "Persuasive",
    description: "Compelling arguments to convince the reader",
    icon: <ThumbsUp className="w-5 h-5" />,
  },
  {
    value: "storytelling",
    label: "Storytelling",
    description: "Narrative that engages through story",
    icon: <Scroll className="w-5 h-5" />,
  },
  {
    value: "educational",
    label: "Educational",
    description: "Focus on teaching and explaining concepts",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    value: "conversational",
    label: "Conversational",
    description: "Casual, like talking to a friend",
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    value: "technical",
    label: "Technical",
    description: "Precise terminology for technical audiences",
    icon: <Compass className="w-5 h-5" />,
  },
  {
    value: "journalistic",
    label: "Journalistic",
    description: "Factual reporting style",
    icon: <FileText className="w-5 h-5" />,
  },
]

export default function StylePage() {
  const [localData, setLocalData] = useState<ContentFormData>({
    contentTone: "",
    writingStyle: "",
    voicePreference: undefined,
  })
  const { formData, updateFormData } = useFormState()
  const { toast } = useToast()

  // Load form data on component mount
  useEffect(() => {
    setLocalData({
      contentTone: formData.contentTone || "",
      writingStyle: formData.writingStyle || "",
      voicePreference: formData.voicePreference || undefined,
    })
  }, [formData])

  const handleChange = (field: string, value: string) => {
    setLocalData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = () => {
    // Check required fields
    if (!localData.contentTone || !localData.writingStyle || !localData.voicePreference) {
      toast({
        title: "Please fill in all fields",
        description: "All style preferences are required to proceed.",
        variant: "destructive",
      })
      return false
    }

    // Save form data
    updateFormData({
      contentTone: localData.contentTone,
      writingStyle: localData.writingStyle,
      voicePreference: localData.voicePreference,
    })

    return true // Allow navigation to next step
  }

  return (
    <FormLayout title="Style & Tone" description="Define how your content should sound" currentStep={3} onNext={handleSubmit}>
      <div className="space-y-8">
        {/* Content Tone */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Tone</h3>
          <p className="text-sm text-muted-foreground">Select the tone that best fits your content</p>

          <RadioGroup 
            value={localData.contentTone} 
            onValueChange={(value) => handleChange("contentTone", value)}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2"
          >
            <div className={cn(
              "rounded-md border-2 border-muted p-4 cursor-pointer transition",
              localData.contentTone === "professional" && "border-blue-500 bg-blue-50 dark:bg-blue-950/30"
            )}>
              <RadioGroupItem value="professional" id="tone-professional" className="sr-only" />
              <Label htmlFor="tone-professional" className="flex flex-col items-center cursor-pointer">
                <Briefcase className="h-8 w-8 mb-2 text-blue-500" />
                <span className="font-medium mb-1">Professional</span>
                <span className="text-xs text-center text-muted-foreground">Polished and business-like</span>
              </Label>
            </div>

            <div className={cn(
              "rounded-md border-2 border-muted p-4 cursor-pointer transition",
              localData.contentTone === "friendly" && "border-green-500 bg-green-50 dark:bg-green-950/30"
            )}>
              <RadioGroupItem value="friendly" id="tone-friendly" className="sr-only" />
              <Label htmlFor="tone-friendly" className="flex flex-col items-center cursor-pointer">
                <Smile className="h-8 w-8 mb-2 text-green-500" />
                <span className="font-medium mb-1">Friendly</span>
                <span className="text-xs text-center text-muted-foreground">Warm and approachable</span>
              </Label>
            </div>

            <div className={cn(
              "rounded-md border-2 border-muted p-4 cursor-pointer transition",
              localData.contentTone === "authoritative" && "border-purple-500 bg-purple-50 dark:bg-purple-950/30"
            )}>
              <RadioGroupItem value="authoritative" id="tone-authoritative" className="sr-only" />
              <Label htmlFor="tone-authoritative" className="flex flex-col items-center cursor-pointer">
                <Brain className="h-8 w-8 mb-2 text-purple-500" />
                <span className="font-medium mb-1">Authoritative</span>
                <span className="text-xs text-center text-muted-foreground">Expert and credible</span>
              </Label>
            </div>

            <div className={cn(
              "rounded-md border-2 border-muted p-4 cursor-pointer transition",
              localData.contentTone === "casual" && "border-amber-500 bg-amber-50 dark:bg-amber-950/30"
            )}>
              <RadioGroupItem value="casual" id="tone-casual" className="sr-only" />
              <Label htmlFor="tone-casual" className="flex flex-col items-center cursor-pointer">
                <MessagesSquare className="h-8 w-8 mb-2 text-amber-500" />
                <span className="font-medium mb-1">Casual</span>
                <span className="text-xs text-center text-muted-foreground">Relaxed and informal</span>
              </Label>
            </div>

            <div className={cn(
              "rounded-md border-2 border-muted p-4 cursor-pointer transition",
              localData.contentTone === "passionate" && "border-red-500 bg-red-50 dark:bg-red-950/30"
            )}>
              <RadioGroupItem value="passionate" id="tone-passionate" className="sr-only" />
              <Label htmlFor="tone-passionate" className="flex flex-col items-center cursor-pointer">
                <Heart className="h-8 w-8 mb-2 text-red-500" />
                <span className="font-medium mb-1">Passionate</span>
                <span className="text-xs text-center text-muted-foreground">Enthusiastic and bold</span>
              </Label>
            </div>

            <div className={cn(
              "rounded-md border-2 border-muted p-4 cursor-pointer transition",
              localData.contentTone === "humorous" && "border-orange-500 bg-orange-50 dark:bg-orange-950/30"
            )}>
              <RadioGroupItem value="humorous" id="tone-humorous" className="sr-only" />
              <Label htmlFor="tone-humorous" className="flex flex-col items-center cursor-pointer">
                <Smile className="h-8 w-8 mb-2 text-orange-500" />
                <span className="font-medium mb-1">Humorous</span>
                <span className="text-xs text-center text-muted-foreground">Witty and entertaining</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Writing Style */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Writing Style</h3>
          <p className="text-sm text-muted-foreground">How should the content be structured and presented?</p>

          <RadioGroup 
            value={localData.writingStyle} 
            onValueChange={(value) => handleChange("writingStyle", value)}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2"
          >
            {WRITING_STYLES.map((style) => (
              <div
                key={style.value}
                className={cn(
                  "flex items-center space-x-3 rounded-md border-2 border-muted p-3 cursor-pointer hover:bg-accent/50",
                  localData.writingStyle === style.value && "border-primary bg-primary/10"
                )}
              >
                <RadioGroupItem value={style.value} id={`style-${style.value}`} className="sr-only" />
                <div className="flex-shrink-0 text-primary">{style.icon}</div>
                <Label htmlFor={`style-${style.value}`} className="flex-1 cursor-pointer">
                  <div className="font-medium">{style.label}</div>
                  <div className="text-xs text-muted-foreground">{style.description}</div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Voice Preference */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Voice Preference</h3>
          <p className="text-sm text-muted-foreground">Select the narrative voice for your content</p>

          <RadioGroup 
            value={localData.voicePreference} 
            onValueChange={(value) => handleChange("voicePreference", value)}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2"
          >
            <div className={cn(
              "rounded-md border-2 border-muted p-4 cursor-pointer transition",
              localData.voicePreference === "first" && "border-primary bg-primary/10"
            )}>
              <RadioGroupItem value="first" id="voice-first" className="sr-only" />
              <Label htmlFor="voice-first" className="flex flex-col items-center cursor-pointer">
                <User className="h-6 w-6 mb-2" />
                <span className="font-medium mb-1">First Person</span>
                <span className="text-xs text-center text-muted-foreground">"I believe this approach works best..."</span>
              </Label>
            </div>

            <div className={cn(
              "rounded-md border-2 border-muted p-4 cursor-pointer transition",
              localData.voicePreference === "second" && "border-primary bg-primary/10"
            )}>
              <RadioGroupItem value="second" id="voice-second" className="sr-only" />
              <Label htmlFor="voice-second" className="flex flex-col items-center cursor-pointer">
                <Users className="h-6 w-6 mb-2" />
                <span className="font-medium mb-1">Second Person</span>
                <span className="text-xs text-center text-muted-foreground">"You will find this approach beneficial..."</span>
              </Label>
            </div>

            <div className={cn(
              "rounded-md border-2 border-muted p-4 cursor-pointer transition",
              localData.voicePreference === "third" && "border-primary bg-primary/10"
            )}>
              <RadioGroupItem value="third" id="voice-third" className="sr-only" />
              <Label htmlFor="voice-third" className="flex flex-col items-center cursor-pointer">
                <CircleDashed className="h-6 w-6 mb-2" />
                <span className="font-medium mb-1">Third Person</span>
                <span className="text-xs text-center text-muted-foreground">"Research shows this approach is effective..."</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </FormLayout>
  )
}
