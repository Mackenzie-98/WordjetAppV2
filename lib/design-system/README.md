# Design System

This is a centralized design system for the WordJet application, providing consistent UI components, styles, and themes.

## Directory Structure

```
/lib/design-system/
├── components/          # UI and theme components
│   ├── ui/              # Reusable UI components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/                 # Utility functions
├── design-system-provider.tsx  # Main provider component
├── documentation.tsx    # Documentation component
├── index.ts             # Main export file
├── README.md            # This file
└── test-component.tsx   # Demo component
```

## Usage

Import components directly from the design system:

```tsx
import { Button, Card, Input } from "@/lib/design-system"
```

Wrap your application with the DesignSystemProvider to enable theming:

```tsx
import { DesignSystemProvider } from "@/lib/design-system"

export default function Layout({ children }) {
  return (
    <DesignSystemProvider>
      {children}
    </DesignSystemProvider>
  )
}
```

## Available Components

- **Button**: Various styles and sizes of buttons
- **Card**: Card container with header, content, and footer sections
- **Input**: Form input elements
- **Label**: Form labels
- **ThemeToggle**: Toggle between light and dark themes

## Theming

The design system includes a theme provider that supports light and dark themes. Use the ThemeToggle component to switch between themes:

```tsx
import { ThemeToggle } from "@/lib/design-system"

export default function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  )
}
```

## Utilities

The design system includes utility functions to help with common tasks:

```tsx
import { cn } from "@/lib/design-system"

// Combine class names with conditional logic
const className = cn(
  "base-class",
  isActive && "active-class",
  variant === "primary" ? "primary-class" : "secondary-class"
)
```

## Documentation

A visual documentation of all components is available at `/design-system` in the application.

## Extending

To add new components:

1. Create a new component file in `/lib/design-system/components/ui/`
2. Export the component in `/lib/design-system/index.ts`
3. Update the documentation to include the new component 