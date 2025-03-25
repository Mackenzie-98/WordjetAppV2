"use client"

import { cn } from "@/lib/utils"
import { FORM_STEPS } from "@/hooks/use-form-state"
import { FileText, Users, Palette, FileCheck } from "lucide-react"

interface ProgressBarProps {
  currentStep: number
  className?: string
}

export function ProgressBar({ currentStep, className }: ProgressBarProps) {
  // Skip the first step (create) in the progress bar
  const displaySteps = FORM_STEPS.slice(1, -1)
  const currentDisplayStep = currentStep > 0 ? currentStep - 1 : 0

  const stepIcons = [
    <FileText key="content-details" className="h-5 w-5" />,
    <Users key="audience" className="h-5 w-5" />,
    <Palette key="style" className="h-5 w-5" />,
    <FileCheck key="brief" className="h-5 w-5" />,
  ]

  const stepLabels = ["Content Details", "Audience", "Style", "Brief"]

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-2">
        {displaySteps.map((_, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col items-center",
              index <= currentDisplayStep ? "text-primary" : "text-muted-foreground",
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border-2",
                index < currentDisplayStep
                  ? "bg-primary border-primary text-primary-foreground"
                  : index === currentDisplayStep
                    ? "border-primary bg-background"
                    : "border-muted-foreground bg-background",
              )}
            >
              {stepIcons[index]}
            </div>
            <span className="text-xs mt-1 hidden sm:block">{stepLabels[index]}</span>
          </div>
        ))}
      </div>

      <div className="relative w-full h-1 bg-muted mt-5 mb-8">
        <div
          className="absolute h-1 bg-primary transition-all duration-300"
          style={{
            width: `${(currentDisplayStep / (displaySteps.length - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

