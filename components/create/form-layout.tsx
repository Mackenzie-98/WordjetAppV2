"use client"

import type { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressBar } from "./progress-bar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useFormState, FORM_STEPS } from "@/hooks/use-form-state"

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
}: FormLayoutProps) {
  const router = useRouter()
  const { updateFormData } = useFormState()

  const handleNext = async () => {
    // Si se proporciona onNext, verificamos si podemos proceder
    if (onNext) {
      const canProceed = await Promise.resolve(onNext())
      if (!canProceed) return // No procedemos si la validación falla
    }

    // Calculamos el siguiente paso directamente
    const nextStepIndex = currentStep + 1
    if (nextStepIndex < FORM_STEPS.length) {
      // Actualizamos el currentStep en el estado del formulario
      updateFormData({ currentStep: nextStepIndex })
      
      // Navegamos directamente a la siguiente ruta
      const nextRoute = FORM_STEPS[nextStepIndex]
      router.push(`/create/${nextRoute}`)
    }
  }

  const handleBack = () => {
    // Si se proporciona onBack, lo llamamos
    if (onBack) {
      onBack()
    }

    // Calculamos el paso anterior directamente
    const prevStepIndex = currentStep - 1
    if (prevStepIndex >= 0) {
      // Actualizamos el currentStep en el estado del formulario
      updateFormData({ currentStep: prevStepIndex })
      
      // Navegamos directamente a la ruta anterior
      const prevRoute = FORM_STEPS[prevStepIndex]
      router.push(`/create/${prevRoute}`)
    }
  }

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      {!hideProgress && <ProgressBar currentStep={currentStep} className="mb-6" />}

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

            <Button onClick={handleNext} className="gap-2">
              {nextLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
