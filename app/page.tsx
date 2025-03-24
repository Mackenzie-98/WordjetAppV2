import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">WordJet</h1>
          <div className="space-x-2">
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl">
          Create content that <span className="text-primary">converts</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-2xl text-muted-foreground">
          WordJet helps you create high-quality content in minutes, not hours. Powered by AI, designed for humans.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/create/type">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="#features">
            <Button variant="outline" size="lg" className="px-8">
              Learn More
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
