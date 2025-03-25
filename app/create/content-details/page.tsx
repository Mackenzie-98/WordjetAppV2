"use client"

import { useState, useEffect } from "react"
import { FormLayout } from "@/components/create/form-layout"
import { useFormState } from "@/hooks/use-form-state"
import { Label, RadioGroup, RadioGroupItem, Input, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Textarea, Badge } from "@/lib/design-system"
import { FileText, Layout, BookOpen, MessageSquare, FileBarChart, ClipboardList, HelpCircle, X } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function ContentDetailsPage() {
  const { formData, updateFormData } = useFormState()
  
  // Initialize local state with formData values or empty strings
  const [localData, setLocalData] = useState({
    contentType: formData.contentType || "",
    purpose: formData.purpose || "",
    topic: formData.topic || "",
    primaryKeyword: formData.primaryKeyword || "",
    secondaryKeyword: "",
    keywords: formData.keywords || [],
  })

  // Update local state when form data changes
  useEffect(() => {
    setLocalData({
      contentType: formData.contentType || "",
      purpose: formData.purpose || "",
      topic: formData.topic || "",
      primaryKeyword: formData.primaryKeyword || "",
      secondaryKeyword: "",
      keywords: formData.keywords || [],
    })
  }, [formData])

  const handleChange = (field: keyof typeof localData, value: any) => {
    setLocalData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    // Validate form
    if (!localData.contentType) {
      alert("Please select a content type")
      return false
    }

    if (!localData.topic) {
      alert("Please enter a topic")
      return false
    }

    // Save data before proceeding
    updateFormData(localData)
    return true
  }

  const contentTypes = [
    {
      value: "pillar-page",
      label: "Pillar Page",
      icon: <FileText className="h-5 w-5" />,
      description: "Comprehensive content covering a broad topic in depth",
      tooltip: "Ideal for establishing topical authority and capturing multiple keywords. Usually 3000+ words."
    },
    {
      value: "blog-post",
      label: "Blog Post",
      icon: <FileText className="h-5 w-5" />,
      description: "SEO-optimized article with valuable information on a specific topic",
      tooltip: "Perfect for regular content updates. Usually 1000-2000 words focused on a specific keyword."
    },
    {
      value: "landing-page",
      label: "Landing Page",
      icon: <Layout className="h-5 w-5" />,
      description: "Page designed to convert visitors into leads or customers",
      tooltip: "Conversion-focused with strong calls to action. Usually shorter and benefit-oriented."
    },
    {
      value: "essay",
      label: "Essay",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Argumentative text with clear introduction, development, and conclusion",
      tooltip: "Presents an argument or perspective with supporting evidence. Usually 1500-3000 words."
    },
    {
      value: "opinion-piece",
      label: "Opinion Piece",
      icon: <MessageSquare className="h-5 w-5" />,
      description: "Article presenting a viewpoint or analysis on a current topic",
      tooltip: "Takes a clear stance on a controversial or timely topic. Usually 800-1500 words."
    },
    {
      value: "white-paper",
      label: "White Paper",
      icon: <FileBarChart className="h-5 w-5" />,
      description: "Technical document explaining a problem and presenting a solution",
      tooltip: "Data-rich authoritative document for lead generation. Usually 3000-5000 words with research."
    },
    {
      value: "case-study",
      label: "Case Study",
      icon: <ClipboardList className="h-5 w-5" />,
      description: "Detailed analysis of a project or situation with results and learnings",
      tooltip: "Shows real-world results and proves value with specific examples. Usually 1000-2000 words."
    },
  ]

  const purposes = [
    { 
      value: "inform", 
      label: "Inform", 
      description: "Educate your audience with facts and insights",
      tooltip: "Focus on providing clear, unbiased information to help readers understand a topic"
    },
    { 
      value: "persuade", 
      label: "Persuade", 
      description: "Convince your audience to take action or adopt a viewpoint",
      tooltip: "Use compelling arguments and evidence to change opinions or drive specific actions"
    },
    { 
      value: "entertain", 
      label: "Entertain", 
      description: "Engage your audience with interesting or amusing content",
      tooltip: "Focus on creating an enjoyable experience that keeps readers engaged"
    },
    { 
      value: "instruct", 
      label: "Instruct", 
      description: "Guide your audience through a process or procedure",
      tooltip: "Provide clear step-by-step guidance to help readers accomplish a specific task"
    },
  ]

  const handleContentTypeSelect = (value: string) => {
    handleChange("contentType", value)
  }

  const handleKeywordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && localData.secondaryKeyword.trim()) {
      e.preventDefault()
      addKeyword()
    }
  }

  const addKeyword = () => {
    if (!localData.secondaryKeyword.trim()) return
    
    // Asegurarse de que keywords es un array
    const currentKeywords = localData.keywords || []
    
    // Don't add duplicates
    if (!currentKeywords.includes(localData.secondaryKeyword.trim())) {
      handleChange("keywords", [...currentKeywords, localData.secondaryKeyword.trim()])
    }
    
    handleChange("secondaryKeyword", "")
  }

  const removeKeyword = (keyword: string) => {
    const currentKeywords = localData.keywords || []
    handleChange("keywords", currentKeywords.filter(k => k !== keyword))
  }

  return (
    <FormLayout
      title="Content Type & Topic"
      description="Define what type of content you want to create"
      currentStep={1}
      onNext={handleNext}
    >
      <TooltipProvider>
        <div className="space-y-8">
          <div className="space-y-4">
            <Label className="text-base font-medium">Content Type</Label>
            <RadioGroup
              value={localData.contentType}
              onValueChange={handleContentTypeSelect}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {contentTypes.map((type) => (
                <div 
                  key={type.value} 
                  className={`flex items-start space-x-2 p-3 rounded-md transition-colors ${
                    localData.contentType === type.value ? 'bg-primary/5 border border-primary/20' : 'hover:bg-muted/50'
                  }`}
                >
                  <RadioGroupItem value={type.value} id={type.value} className="mt-1" />
                  <Label htmlFor={type.value} className="flex flex-col cursor-pointer w-full">
                    <span className="flex items-center gap-1.5">
                      {type.icon}
                      {type.label}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-3.5 w-3.5 text-muted-foreground ml-1 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>{type.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
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
                <div 
                  key={purpose.value} 
                  className={`flex items-start space-x-2 p-3 rounded-md transition-colors ${
                    localData.purpose === purpose.value ? 'bg-primary/5 border border-primary/20' : 'hover:bg-muted/50'
                  }`}
                >
                  <RadioGroupItem value={purpose.value} id={purpose.value} className="mt-1" />
                  <Label htmlFor={purpose.value} className="flex flex-col cursor-pointer w-full">
                    <span className="flex items-center gap-1.5">
                      {purpose.label}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-3.5 w-3.5 text-muted-foreground ml-1 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{purpose.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">{purpose.description}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-base font-medium">
                Topic
              </Label>
              <Textarea
                id="topic"
                placeholder="E.g., Benefits of content marketing for small businesses"
                value={localData.topic}
                onChange={(e) => handleChange("topic", e.target.value)}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Be specific and clear about your main topic (25-60 characters recommended)
              </p>
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
                onKeyDown={handleKeywordKeyDown}
                onBlur={addKeyword}
              />
              <p className="text-xs text-muted-foreground">
                This keyword will be optimized throughout your content for SEO
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Keywords</h3>
            <p className="text-sm text-muted-foreground">Add keywords related to your content (press Enter to add)</p>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  value={localData.secondaryKeyword}
                  onChange={(e) => handleChange("secondaryKeyword", e.target.value)}
                  onKeyDown={handleKeywordKeyDown}
                  onBlur={addKeyword}
                  placeholder="Add keywords..."
                  className="flex-1"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {localData.keywords.map((keyword) => (
                  <Badge 
                    key={keyword} 
                    variant="secondary"
                    className="px-3 py-1 gap-1 text-sm"
                  >
                    {keyword}
                    <X 
                      className="h-3 w-3 cursor-pointer" 
                      onClick={() => removeKeyword(keyword)}
                    />
                  </Badge>
                ))}
                {localData.keywords.length === 0 && (
                  <div className="text-sm text-muted-foreground italic">No keywords added yet</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </FormLayout>
  )
} 