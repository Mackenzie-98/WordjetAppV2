"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useFormState } from "@/hooks/use-form-state"
import { Loader2 } from "lucide-react"

export default function CreatePage() {
  const router = useRouter()
  const { resetForm } = useFormState()

  // Redireccionar automáticamente a /create/type después de limpiar form
  useEffect(() => {
    // Primero limpiar cualquier dato antiguo del localStorage
    localStorage.removeItem("wordjet_content_form") // Eliminar el formato antiguo
    localStorage.removeItem("formData") // Eliminar el nuevo formato por si acaso
    
    // Luego reiniciar completamente el formulario
    resetForm()
    
    // Pequeño retraso para asegurar que todo se ha procesado correctamente
    const redirectTimer = setTimeout(() => {
      router.push("/create/type")
    }, 300)
    
    return () => clearTimeout(redirectTimer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Mostrar un indicador de carga mientras se redirecciona
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">Preparando formulario...</p>
      </div>
    </div>
  )
}
