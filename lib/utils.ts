import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utilidades para cookies
export const cookies = {
  // Obtener una cookie
  get: (name: string): string | undefined => {
    const cookieString = document.cookie
    const cookies = cookieString.split('; ')
    const cookie = cookies.find(c => c.startsWith(`${name}=`))
    return cookie ? cookie.split('=')[1] : undefined
  },

  // Establecer una cookie
  set: (name: string, value: string, options: Record<string, any> = {}): void => {
    let cookieString = `${name}=${value}`
    
    if (options.maxAge) cookieString += `; max-age=${options.maxAge}`
    if (options.path) cookieString += `; path=${options.path}`
    if (options.domain) cookieString += `; domain=${options.domain}`
    if (options.secure) cookieString += `; secure`
    
    document.cookie = cookieString
  },

  // Eliminar una cookie
  remove: (name: string): void => {
    document.cookie = `${name}=; max-age=0; path=/`
  }
}

// Utilidades para localStorage
export const storage = {
  // Obtener un valor de localStorage
  get: (key: string, defaultValue: any = null): any => {
    if (typeof window === 'undefined') return defaultValue
    
    const value = localStorage.getItem(key)
    if (value === null) return defaultValue
    
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  },

  // Guardar un valor en localStorage
  set: (key: string, value: any): void => {
    if (typeof window === 'undefined') return
    
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.setItem(key, value)
    }
  },

  // Eliminar un valor de localStorage
  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    localStorage.removeItem(key)
  }
}
