# Technical Context: WordJet

## Core Technologies

### Frontend Framework
- **Next.js 15.1.0**: React framework for server-rendered applications
- **React 19**: UI library for component-based development
- **TypeScript**: Strongly typed JavaScript for improved development experience

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on top of Tailwind and Radix UI
- **Radix UI**: Unstyled, accessible UI components
- **Lucide React**: Icon library with clean, consistent icons
- **Framer Motion**: Animation library for React

### Form Handling
- **React Hook Form**: Form state management library
- **Zod**: Schema validation library
- **Custom form state hook**: For multi-step form management

### State Management
- **React Context**: For global state management
- **LocalStorage**: For persisting form state between pages
- **Custom hooks**: For encapsulating and sharing logic

## Development Environment

### Package Management
- **pnpm**: Fast, disk space efficient package manager
- **Node.js**: JavaScript runtime

### Build Tools
- **Next.js built-in build system**
- **PostCSS**: For CSS processing
- **Tailwind plugins**: For extended tailwind functionality

### Code Quality
- **ESLint**: For code linting
- **TypeScript**: For type checking

## Directory Structure

```
/app                    # Next.js app directory (App Router)
  /create               # Content creation flow
    /type               # Step 1: Content type selection
    /audience           # Step 2: Audience definition
    /style              # Step 3: Style selection
    /brief              # Step 4: Content brief
    /editor             # Step 5: Content editor
  /dashboard            # User dashboard
    /project            # Project view
    /editor             # Content editor
  /login                # Authentication

/components             # Reusable components
  /ui                   # UI components (from shadcn/ui)
  /create               # Components for creation flow
  /dashboard            # Components for dashboard

/hooks                  # Custom React hooks
/lib                    # Utility functions and libraries
/public                 # Static assets
/styles                 # Global styles
/design_system          # Design system components and documentation
```

## Dependencies Overview

### UI Components
- **@radix-ui/react-*** components: Low-level UI primitives
- **class-variance-authority**: For component style variants
- **clsx** and **tailwind-merge**: For conditional class manipulation
- **cmdk**: Command menu component
- **sonner**: Toast notifications
- **vaul**: Drawer component

### Form Components
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **react-hook-form**: Form state management
- **zod**: Schema validation

### Data Visualization
- **recharts**: Charting library for React
- **date-fns**: Date manipulation library

### UI Enhancement
- **embla-carousel-react**: Carousel component
- **react-day-picker**: Date picker component
- **react-resizable-panels**: Resizable panel components

## Technical Constraints

1. **Client-Side Focus**: 
   - Currently primarily client-side with limited server-side functionality
   - Will eventually need API integration for persistence

2. **Browser Compatibility**:
   - Support for modern browsers (last 2 versions)
   - Progressive enhancement for older browsers

3. **Performance Considerations**:
   - Lazy loading for route components
   - Optimized image handling
   - Minimizing bundle size

4. **Accessibility Requirements**:
   - WCAG 2.1 AA compliance
   - Keyboard navigation support
   - Screen reader compatibility

## Future Technical Considerations

1. **Authentication Integration**:
   - NextAuth.js or similar for authentication
   - JWT or session-based auth strategy

2. **Database Integration**:
   - Choice of database (likely PostgreSQL)
   - ORM selection (Prisma preferred)

3. **AI Service Integration**:
   - API integration with language models
   - Content generation optimization

4. **Testing Strategy**:
   - Jest for unit testing
   - Cypress for E2E testing
   - Component testing with React Testing Library 