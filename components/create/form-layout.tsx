"use client"

import type { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/lib/design-system"
import { ProgressBar } from "./progress-bar"
import { Button } from "@/lib/design-system"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useFormState, FORM_STEPS } from "@/hooks/use-form-state"
import { useEffect, useState } from "react"

interface FormLayoutProps {
  children: ReactNode
  title: string
  description: string
  currentStep: number
  onNext?: () => boolean | Promise<boolean> // Return false to prevent navigation
  onBack?: () => void
  nextLabel?: string
  backLabel?: string
  hideProgress?: boolean
  showNextButton?: boolean
}

export function FormLayout({
  children,
  title,
  description,
  currentStep,
  onNext,
  onBack,
  nextLabel = "Next",
  backLabel = "Back",
  hideProgress = false,
  showNextButton = true,
}: FormLayoutProps) {
  const router = useRouter()
  const { updateFormData } = useFormState()
  const [isFromDashboard, setIsFromDashboard] = useState(false)

  // Check if we're creating content from dashboard
  useEffect(() => {
    // Check if we've already stored this in the session
    const fromDashboard = localStorage.getItem('wordjet_from_dashboard') === 'true'
    
    if (fromDashboard) {
      setIsFromDashboard(true)
    }
  }, [])

  const handleNext = async () => {
    // If onNext is provided, check if we can proceed
    if (onNext) {
      const canProceed = await Promise.resolve(onNext())
      if (!canProceed) return // Don't proceed if validation fails
    }

    // Calculate the next step directly
    const nextStepIndex = currentStep + 1
    if (nextStepIndex < FORM_STEPS.length) {
      // Update the currentStep in the form state
      updateFormData({ currentStep: nextStepIndex })
      
      // Navigate directly to the next route
      const nextRoute = FORM_STEPS[nextStepIndex]
      router.push(`/create/${nextRoute}`)
    }
  }

  const handleBack = () => {
    // If onBack is provided, call it
    if (onBack) {
      onBack()
    }

    // Calculate the previous step directly
    const prevStepIndex = currentStep - 1
    if (prevStepIndex >= 0) {
      // Update the currentStep in the form state
      updateFormData({ currentStep: prevStepIndex })
      
      // Navigate directly to the previous route
      const prevRoute = FORM_STEPS[prevStepIndex]
      router.push(`/create/${prevRoute}`)
    }
  }

  // Only show progress bar if we're NOT coming from the dashboard
  const shouldShowProgress = !hideProgress && !isFromDashboard

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      {shouldShowProgress && <ProgressBar currentStep={currentStep} className="mb-6" />}

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent>
          {children}

          <div className="flex justify-between mt-8">
            {currentStep > 0 ? (
              <Button variant="outline" onClick={handleBack} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {backLabel}
              </Button>
            ) : (
              <div></div> // Empty div to maintain spacing
            )}

            {showNextButton && (
              <Button onClick={handleNext} className="gap-2">
                {nextLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
