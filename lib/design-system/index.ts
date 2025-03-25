'use client'

// Main export file for the design system

// UI Components
export { Button, buttonVariants } from "./components/ui/button"
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./components/ui/card"
export { Input } from "./components/ui/input"
export { Label } from "./components/ui/label"
export { Textarea } from "./components/ui/textarea"
export { Checkbox } from "./components/ui/checkbox"
export { RadioGroup, RadioGroupItem } from "./components/ui/radio-group"
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
export { Switch } from "./components/ui/switch"
export { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"

// Theme
export { ThemeProvider } from "./components/theme-provider"
export { ThemeToggle } from "./components/theme-toggle"
export { DesignSystemProvider } from "./design-system-provider"

// Utils
export { cn } from "./lib/utils"

// Demo components
export { Documentation } from "./documentation"
export { TestComponent } from "./test-component"
export { SidebarExample } from "./components/ui/sidebar-example"

// UI Components
export { Toaster } from "./components/ui/toaster"
export { Badge } from "./components/ui/badge"
export { useToast } from "./components/ui/use-toast"
export { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "./components/ui/dropdown-menu"
export { Separator } from "./components/ui/separator"
export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "./components/ui/dialog"
export { Slider } from "./components/ui/slider"
export { ScrollArea } from "./components/ui/scroll-area"
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
} from "./components/ui/table"
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./components/ui/tooltip" 

// Sidebar Component
export {
  Sidebar,
  SidebarProvider,
  SidebarMenuAction,
  SidebarTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar
} from "./components/ui/sidebar" 