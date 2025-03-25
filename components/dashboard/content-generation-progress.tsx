"use client"

import { useEffect, useState, useRef } from "react"
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from "@/lib/design-system"
import { CheckCircle2, Clock, LoaderCircle, X, RefreshCw } from "lucide-react"

interface ContentGenerationProgressProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  formData: Record<string, any>
  onComplete: () => void
  onRegenerate: () => void
  onCancel: () => void
}

export function ContentGenerationProgress({ 
  open, 
  onOpenChange,
  formData, 
  onComplete, 
  onRegenerate,
  onCancel
}: ContentGenerationProgressProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  // Define the steps for content generation process
  const steps = [
    { name: "Analyzing brief", icon: LoaderCircle, duration: 2000 },
    { name: "Initial research", icon: LoaderCircle, duration: 2500 },
    { name: "SEO analysis", icon: LoaderCircle, duration: 3000 },
    { name: "Creating outline", icon: LoaderCircle, duration: 2000 },
    { name: "Developing content", icon: LoaderCircle, duration: 3500 },
    { name: "Final review", icon: LoaderCircle, duration: 1500 },
  ]

  const stepsRef = useRef(steps)

  // Reset state when dialog opens
  useEffect(() => {
    if (open) {
      setCurrentStep(0)
      setProgress(0)
      setIsComplete(false)
    }
  }, [open])

  // Handle step progression
  useEffect(() => {
    if (!open) return

    if (currentStep < stepsRef.current.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1)
        
        // When all steps are complete
        if (currentStep === stepsRef.current.length - 1) {
          setIsComplete(true)
        }
      }, stepsRef.current[currentStep].duration)

      return () => clearTimeout(timer)
    }
  }, [currentStep, open])

  // Update progress percentage
  useEffect(() => {
    if (!open) return
    
    const steps = stepsRef.current

    // For current step, calculate partial progress
    if (currentStep < steps.length) {
      const intervalTime = 100
      const stepProgress = currentStep > 0 ? (currentStep / steps.length) * 100 : 0
      const nextStepProgress = ((currentStep + 1) / steps.length) * 100
      const progressDiff = nextStepProgress - stepProgress

      const updateInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= nextStepProgress) {
            clearInterval(updateInterval)
            return prev
          }
          return prev + progressDiff / (steps[currentStep].duration / intervalTime)
        })
      }, intervalTime)

      return () => clearInterval(updateInterval)
    } else {
      setProgress(100)
    }
  }, [currentStep, open])

  const handleDialogClose = (open: boolean) => {
    // Only allow closing if complete or manually cancelled
    if (!open && !isComplete) {
      onCancel()
    }
    onOpenChange(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Creating Your Content</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-5 my-2">
          <div className="text-center">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <svg className="w-24 h-24">
                  <circle
                    className="text-muted/30"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="38"
                    cx="48"
                    cy="48"
                  />
                  <circle
                    className="text-primary"
                    strokeWidth="4"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="38"
                    cx="48"
                    cy="48"
                    strokeDasharray="239"
                    strokeDashoffset={(239 - (239 * progress) / 100)}
                    style={{ transition: "stroke-dashoffset 0.5s ease" }}
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-xl font-bold">
                    {Math.round(progress)}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 px-1">
            {steps.map((step, index) => {
              const StepIcon = step.icon
              const isComplete = index < currentStep
              const isInProgress = index === currentStep && !isComplete

              return (
                <div
                  key={index}
                  className={`flex items-center p-2 rounded-md border transition-colors ${
                    isComplete
                      ? "border-green-200 bg-green-50 dark:border-green-900/30 dark:bg-green-900/20"
                      : isInProgress
                        ? "border-blue-200 bg-blue-50 dark:border-blue-900/30 dark:bg-blue-900/20"
                        : "border-gray-100 bg-gray-50 dark:border-gray-800/30 dark:bg-gray-800/20"
                  }`}
                >
                  <div className="mr-2 flex-shrink-0">
                    {isComplete ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500 dark:text-green-400" />
                    ) : isInProgress ? (
                      <LoaderCircle className="h-4 w-4 text-blue-500 dark:text-blue-400 animate-spin" />
                    ) : (
                      <Clock className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <p
                      className={`font-medium text-sm ${
                        isComplete
                          ? "text-green-700 dark:text-green-400"
                          : isInProgress
                            ? "text-blue-700 dark:text-blue-400"
                            : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {step.name}
                    </p>
                  </div>
                  {(isComplete || isInProgress) && (
                    <div className="ml-auto">
                      {isComplete ? (
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">Done</span>
                      ) : (
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Processing</span>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
          {!isComplete ? (
            <Button 
              variant="outline" 
              onClick={onCancel} 
              className="w-full sm:w-auto gap-1"
            >
              <X className="h-4 w-4" />
              Cancel
            </Button>
          ) : (
            <>
              <Button 
                variant="outline" 
                onClick={onRegenerate} 
                className="w-full sm:w-auto gap-1"
              >
                <RefreshCw className="h-4 w-4" />
                Regenerate
              </Button>
              <Button 
                onClick={onComplete} 
                className="w-full sm:w-auto gap-1"
              >
                <CheckCircle2 className="h-4 w-4" />
                Accept & Continue
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 