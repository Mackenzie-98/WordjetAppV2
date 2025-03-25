"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useFormState } from "@/hooks/use-form-state"
import { Loader2, FileText } from "lucide-react"

export default function CreatePage() {
  const router = useRouter()
  const { resetForm } = useFormState()

  // Redirect automatically to /create/content-details after clearing form
  useEffect(() => {
    // First clean any old data from localStorage
    localStorage.removeItem("wordjet_content_form") // Remove old format
    localStorage.removeItem("formData") // Remove new format just in case
    
    // We're not getting here from the homepage "Get Started" button
    // Remove the dashboard flag if it exists from a previous session
    if (!localStorage.getItem('wordjet_from_dashboard')) {
      localStorage.removeItem('wordjet_from_dashboard')
    }
    
    // Then reset the form completely
    resetForm()
    
    // Small delay to ensure everything has been processed correctly
    const redirectTimer = setTimeout(() => {
      router.push("/create/content-details")
    }, 300)
    
    return () => clearTimeout(redirectTimer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Show a loading indicator while redirecting
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="flex flex-col items-center text-center max-w-sm p-4">
        <div className="relative mb-6">
          <FileText className="h-12 w-12 text-primary opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
        <h1 className="text-xl font-semibold mb-2">Preparing Your Content Creation</h1>
        <p className="text-muted-foreground">
          Setting up your personalized content creation workflow. You'll be redirected momentarily...
        </p>
      </div>
    </div>
  )
}
