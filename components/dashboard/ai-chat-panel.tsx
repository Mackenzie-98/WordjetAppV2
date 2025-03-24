"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Send, Bot, User, Sparkles, FileText, Search, Wand2, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function AIChatPanel() {
  const [isOpen, setIsOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("chat")
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi there! I'm your AI assistant. How can I help with your content today?",
    },
  ])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I understand you're asking about " +
          input +
          ". Let me help you with that. What specific aspects would you like me to address?",
      }

      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="absolute bottom-4 right-4 rounded-full h-12 w-12 shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <Sparkles className="h-5 w-5 text-primary" />
      </Button>
    )
  }

  return (
    <div className="w-80 border-l bg-card flex flex-col h-full">
      <div className="border-b p-3 flex items-center justify-between">
        <h2 className="font-semibold flex items-center">
          <Sparkles className="h-4 w-4 mr-2 text-primary" />
          AI Assistant
        </h2>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="grid w-full grid-cols-3 p-1 bg-muted/50">
          <TabsTrigger value="chat" className="text-xs">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            Chat
          </TabsTrigger>
          <TabsTrigger value="research" className="text-xs">
            <Search className="h-3.5 w-3.5 mr-1.5" />
            Research
          </TabsTrigger>
          <TabsTrigger value="generate" className="text-xs">
            <FileText className="h-3.5 w-3.5 mr-1.5" />
            Generate
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex-1 flex flex-col p-0 m-0 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-2 rounded-lg p-3",
                    message.role === "assistant" ? "bg-muted/50" : "bg-primary/10",
                  )}
                >
                  {message.role === "assistant" ? (
                    <Bot className="h-5 w-5 mt-1 text-primary" />
                  ) : (
                    <User className="h-5 w-5 mt-1 text-muted-foreground" />
                  )}
                  <div className="text-sm">{message.content}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 border-t">
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your content..."
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </TabsContent>

        <TabsContent value="research" className="flex-1 flex flex-col p-0 m-0 overflow-hidden">
          <div className="p-4 flex-1 overflow-y-auto">
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Research Topic</label>
                <Input placeholder="E.g., digital marketing trends 2024" />
              </div>
              <Button type="button" className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Research Topic
              </Button>
            </form>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Research will include:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Trend analysis</li>
                <li>Related keywords</li>
                <li>Recommended sources</li>
                <li>Relevant statistics</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="generate" className="flex-1 flex flex-col p-0 m-0 overflow-hidden">
          <div className="p-4 flex-1 overflow-y-auto">
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Content Topic</label>
                <Input placeholder="E.g., Benefits of content marketing" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Keywords</label>
                <Input placeholder="E.g., digital marketing, SEO, content" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Target Audience</label>
                <Input placeholder="E.g., Marketing professionals, small businesses" />
              </div>
              <Button type="button" className="w-full">
                <Wand2 className="h-4 w-4 mr-2" />
                Generate Content
              </Button>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

