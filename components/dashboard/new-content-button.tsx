"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useFormState } from "@/hooks/use-form-state"

export function NewContentButton() {
  const router = useRouter()
  const { resetForm } = useFormState()

  const handleClick = () => {
    // Reset the form data when starting a new content
    resetForm()
    router.push("/create")
  }

  return (
    <Button size="sm" className="gap-1.5" onClick={handleClick}>
      <PlusCircle className="h-4 w-4" />
      New Content
    </Button>
  )
}

