import * as React from "react"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface PathBreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  segments: {
    name: string
    href: string
  }[]
  className?: string
}

export function PathBreadcrumb({ segments, className, ...props }: PathBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-sm text-muted-foreground", className)}
      {...props}
    >
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {segments.map((segment, index) => (
          <React.Fragment key={segment.href}>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              {index === segments.length - 1 ? (
                <span className="font-medium text-foreground">{segment.name}</span>
              ) : (
                <Link
                  href={segment.href}
                  className="hover:text-foreground transition-colors"
                >
                  {segment.name}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
} 