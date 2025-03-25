export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">BS</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2023 BlueSky Design System. All rights reserved.</p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Guidelines
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Accessibility
          </a>
        </nav>
      </div>
    </footer>
  )
}

