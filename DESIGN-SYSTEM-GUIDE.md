# WordJet Design System Integration Guide

This guide explains how to effectively use the design system in your WordJet project.

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Component Usage](#component-usage)
4. [Theme System](#theme-system)
5. [Adding New Components](#adding-new-components)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

## Introduction

The WordJet design system provides a consistent set of UI components, styles, and utilities that ensure a cohesive user experience across the application. All components follow accessibility best practices and are designed to be responsive.

## Getting Started

### Importing Components

Import components directly from the design system:

```tsx
import { Button, Card, Input, Label } from "@/lib/design-system"
```

### Theme Provider

The application is already wrapped with `DesignSystemProvider` in the root layout. This provider manages theme context and ensures all components respond to theme changes.

```tsx
// app/layout.tsx
import { DesignSystemProvider, Toaster } from "@/lib/design-system"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <DesignSystemProvider>
          {/* rest of your app */}
          {children}
          <Toaster />
        </DesignSystemProvider>
      </body>
    </html>
  )
}
```

## Component Usage

### Basic Components

The design system includes several core components:

#### Buttons

```tsx
<Button>Default Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

#### Cards

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the main content of the card.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

#### Form Elements

```tsx
<div className="space-y-2">
  <Label htmlFor="name">Name</Label>
  <Input id="name" placeholder="Enter your name" />
</div>
```

### Utility Functions

The design system includes the `cn` utility function for combining class names:

```tsx
import { cn } from "@/lib/design-system"

const className = cn(
  "base-class",
  isActive && "active-class",
  variant === "primary" ? "primary-class" : "secondary-class"
)
```

## Theme System

### Theme Toggle

Include the theme toggle in your UI to allow users to switch between light and dark modes:

```tsx
import { ThemeToggle } from "@/lib/design-system"

export function Header() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <Logo />
        <ThemeToggle />
      </div>
    </header>
  )
}
```

### CSS Variables

The design system uses CSS variables for colors, spacing, and other design tokens. These are defined in `app/globals.css` and automatically applied to components:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* and so on */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* and so on */
}
```

## Adding New Components

1. Create a new component file in `/lib/design-system/components/ui/`
2. Follow the existing pattern for styling and functionality
3. Export the component from `/lib/design-system/index.ts`
4. Add documentation in the `/app/design-system` route

Example:

```tsx
// lib/design-system/components/ui/my-component.tsx
import * as React from "react"
import { cn } from "../../lib/utils"

export interface MyComponentProps {
  // props definition
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div 
        className={cn(
          "your-base-styles-here", 
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
MyComponent.displayName = "MyComponent"

// Add to lib/design-system/index.ts
export { MyComponent } from "./components/ui/my-component"
```

## Best Practices

1. **Consistent Imports**: Always import from `@/lib/design-system` rather than individual component files
2. **Follow Component Patterns**: Use existing components as templates for new ones
3. **Mobile-First**: Always design with mobile-first in mind using responsive Tailwind classes
4. **Accessibility**: Ensure components have proper ARIA attributes and keyboard navigation
5. **Theme Awareness**: Components should adapt to both light and dark themes

## Troubleshooting

### Common Issues

#### Component Not Found
- Ensure you've imported the component correctly from `@/lib/design-system`
- Check that the component is exported in `lib/design-system/index.ts`

#### Styling Issues
- Check for conflicting Tailwind classes
- Verify that the component is inside the `DesignSystemProvider`
- Ensure globals.css is imported in your layout

#### Type Errors
- Update the path mappings in `tsconfig.json` if needed
- Make sure your component props extend proper React types

### Support Resources

For more information, visit the design system documentation at [/design-system](/design-system) in the application.

---

## Full Component Documentation

For complete documentation of all available components, their props, and examples, visit the design system documentation route at `/design-system` in your browser when running the development server. 