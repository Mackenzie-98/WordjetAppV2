"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useAuthContext } from "@/components/auth/auth-provider"

// Google Icon component
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
)

// Content sequence for animation
interface ContentSequenceItem {
  name: string;
  icon: string;
  color: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login, isAuthenticated } = useAuthContext()
  const [isLoading, setIsLoading] = useState(false)
  const animationRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [showGlow, setShowGlow] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [lineWidths, setLineWidths] = useState([0, 0, 0, 0])
  
  // Get the redirect URL from the query parameters
  const redirectUrl = searchParams.get("redirect") || "/dashboard"

  // Content sequence for animation
  const contentSequence: ContentSequenceItem[] = [
    { name: "Blog Post", icon: "📝", color: "from-blue-500 to-cyan-400" },
    { name: "Product Description", icon: "🛍️", color: "from-purple-500 to-pink-500" },
    { name: "Social Media", icon: "📱", color: "from-orange-500 to-amber-400" },
    { name: "Email Newsletter", icon: "📧", color: "from-emerald-500 to-teal-400" },
  ]

  // Create animation particles
  useEffect(() => {
    function createParticles() {
      const particlesArray: Particle[] = []
      for (let i = 0; i < 20; i++) {
        particlesArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 2,
          opacity: Math.random() * 0.5 + 0.1
        })
      }
      setParticles(particlesArray)
    }
    
    createParticles()
    
    // Start the animation loop
    let lastTimestamp = 0
    let animationFrameId: number
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const elapsed = timestamp - lastTimestamp
      
      if (elapsed > 2000) {
        // Update content sequence
        setCurrentStep((prev) => (prev + 1) % contentSequence.length)
        
        // Reset and animate line widths
        setLineWidths([0, 0, 0, 0])
        setTimeout(() => {
          setLineWidths(lineWidths.map(() => Math.random() * 60 + 40))
        }, 500)
        
        // Toggle glow effect
        setShowGlow(true)
        setTimeout(() => setShowGlow(false), 1000)
        
        lastTimestamp = timestamp
      }
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animationFrameId = requestAnimationFrame(animate)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  
  const handleGoogleLogin = async () => {
    setIsLoading(true)
    
    console.log("Starting Google login simulation")
    try {
      await login(redirectUrl)
    } catch (error) {
      console.error("Error during login:", error)
      setIsLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl flex flex-row overflow-hidden shadow-lg border-none">
        {/* Left Login Side */}
        <div className="w-full md:w-1/2 bg-background p-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-xs mx-auto w-full text-center"
          >
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tighter">WORDJET_</h1>
              <p className="text-muted-foreground text-sm mt-1">AI Content Generator</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-medium">Sign in</h2>
              <p className="text-muted-foreground text-sm mt-1">
                to start creating amazing content
              </p>
              {redirectUrl && redirectUrl !== "/dashboard" && (
                <p className="text-xs text-muted-foreground mt-2">
                  You'll be redirected after login
                </p>
              )}
            </div>
            
            <Button 
              variant="outline" 
              className="w-full h-11 flex items-center justify-center gap-2 relative group overflow-hidden"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-current border-r-transparent rounded-full animate-spin mx-auto" />
              ) : (
                <>
                  <GoogleIcon />
                  <span>Continue with Google</span>
                  <div className="absolute inset-0 w-0 bg-primary/5 transition-all duration-300 group-hover:w-full"></div>
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground mt-8">
              By continuing, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </p>
          </motion.div>
        </div>
        
        {/* Right Animation Side - Hidden on mobile */}
        <div className="hidden md:block w-1/2 bg-muted p-8 flex flex-col justify-center items-center relative border-l" ref={animationRef}>
          {/* Magic particle background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute rounded-full bg-primary/30"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  opacity: particle.opacity,
                  animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`
                }}
              />
            ))}
          </div>
          
          {/* Animation Container */}
          <div className={`relative w-full max-w-xs border border-primary/20 rounded-lg p-6 bg-background transition-all duration-500 ${showGlow ? 'shadow-[0_0_15px_rgba(var(--primary)/0.3)]' : 'shadow-sm'}`}>
            {/* Current content type with gradient */}
            <div className="mb-6 flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${contentSequence[currentStep].color} text-white`}>
                <span className="text-xl">{contentSequence[currentStep].icon}</span>
              </div>
              <div>
                <span className="font-medium">{contentSequence[currentStep].name}</span>
                <div className="h-1 w-12 bg-gradient-to-r from-primary/80 to-primary/20 rounded-full mt-1"></div>
              </div>
            </div>
            
            {/* Content lines animation */}
            <div className="space-y-4">
              {lineWidths.map((width, index) => (
                <motion.div 
                  key={index} 
                  className="h-3 bg-primary/10 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${width}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div 
                    className="h-full rounded-full bg-primary/40"
                    style={{ opacity: 0.8 }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Typing effect when lines are generating */}
            <div className="mt-4 h-4 flex items-center">
              <div className={`text-xs font-mono text-primary/70 ${Math.max(...lineWidths) > 30 && Math.max(...lineWidths) < 90 ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                Generating<span className="inline-flex overflow-hidden">
                  <span className="animate-[ellipsis_1.5s_infinite]">.</span>
                  <span className="animate-[ellipsis_1.5s_0.3s_infinite]">.</span>
                  <span className="animate-[ellipsis_1.5s_0.6s_infinite]">.</span>
                </span>
              </div>
              <div className={`text-xs font-mono text-primary/70 ml-auto ${Math.max(...lineWidths) >= 90 ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                Complete ✓
              </div>
            </div>
          </div>
          
          {/* Message at the bottom */}
          <p className="text-xs text-muted-foreground text-center mt-8 max-w-xs">
            WordJet helps you create high-quality content in minutes, not hours. Sign in to start your content creation journey.
          </p>
        </div>
      </Card>
      
      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        @keyframes ellipsis {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
