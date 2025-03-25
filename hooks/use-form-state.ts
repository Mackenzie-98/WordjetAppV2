"use client"

import { useEffect, useState } from "react"

// Define the types for our form data
export interface ContentFormData {
  contentType?: string
  topic?: string
  purpose?: string
  primaryKeyword?: string
  secondaryKeywords?: string[]
  keywords?: string[]
  targetAudience?: string
  audienceKnowledgeLevel?: "beginner" | "intermediate" | "advanced"
  audienceInterests?: string[]
  contentTone?: string
  writingStyle?: string
  voicePreference?: "first" | "second" | "third"
  additionalNotes?: string
  lastUpdated?: number
  currentStep?: number
}

export const FORM_STEPS = ["create", "content-details", "audience", "style", "brief", "editor"]

// Define a helper function to check if the form data has expired
const isFormDataExpired = (formData: ContentFormData): boolean => {
  const now = Date.now()
  const lastUpdated = formData.lastUpdated || 0
  // Form data expires after 2 hours (7200000 milliseconds)
  return now - lastUpdated > 7200000
}

export const useFormState = () => {
  const [formData, setFormData] = useState<ContentFormData>({
    currentStep: 0,
    lastUpdated: Date.now(),
    keywords: []
  })

  // Load form data from localStorage on initial render
  useEffect(() => {
    const loadFormData = () => {
      const storedData = localStorage.getItem("formData")
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData) as ContentFormData
          // Only use stored data if it hasn't expired
          if (!isFormDataExpired(parsedData)) {
            // Ensure keywords exists
            if (!parsedData.keywords) {
              parsedData.keywords = []
            }
            setFormData(parsedData)
            return
          }
        } catch (e) {
          console.error("Error parsing form data from localStorage", e)
        }
      }
      
      // If no valid data is found, use default values
      setFormData({
        currentStep: 0,
        lastUpdated: Date.now(),
        keywords: []
      })
    }

    loadFormData()
  }, [])

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (formData) {
      localStorage.setItem("formData", JSON.stringify(formData))
    }
  }, [formData])

  // Update form data with new values
  const updateFormData = (data: Partial<ContentFormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
      lastUpdated: Date.now(), // Always update the lastUpdated timestamp
    }))
  }

  // Reset form data to initial state
  const resetForm = () => {
    // Clear localStorage
    localStorage.removeItem("formData")
    
    // Reset state
    setFormData({
      currentStep: 0,
      lastUpdated: Date.now(),
      keywords: []
    })
  }

  // Navigate to a specific step
  const goToStep = (step: number) => {
    if (step >= 0 && step < FORM_STEPS.length) {
      updateFormData({ currentStep: step })
      return FORM_STEPS[step]
    }
    return null
  }

  // Navigate to the next step
  const nextStep = () => {
    const currentStep = formData.currentStep || 0
    if (currentStep < FORM_STEPS.length - 1) {
      const nextStepIndex = currentStep + 1
      updateFormData({ currentStep: nextStepIndex })
      return FORM_STEPS[nextStepIndex]
    }
    return null
  }

  // Navigate to the previous step
  const prevStep = () => {
    const currentStep = formData.currentStep || 0
    if (currentStep > 0) {
      const prevStepIndex = currentStep - 1
      updateFormData({ currentStep: prevStepIndex })
      return FORM_STEPS[prevStepIndex]
    }
    return null
  }

  return {
    formData,
    updateFormData,
    resetForm,
    goToStep,
    nextStep,
    prevStep,
  }
}
