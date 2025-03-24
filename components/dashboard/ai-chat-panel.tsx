"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Send, Bot, User, Sparkles, FileText, Search, Wand2, X, Maximize2, Minimize2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function AIChatPanel() {
  const [isOpen, setIsOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("chat")
  const [input, setInput] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
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
        className="fixed bottom-4 right-4 rounded-full h-12 w-12 shadow-md z-20"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <div
      className={cn(
        "flex flex-col border-l bg-card transition-all duration-300 ease-in-out",
        isExpanded ? "w-full md:w-1/2 lg:w-1/3" : isMobile ? "w-full" : "w-80",
        isMobile && "fixed inset-0 z-50"
      )}
    >
      <div className="flex items-center justify-between p-3 border-b">
        <h3 className="text-sm font-medium">AI Assistant</h3>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="h-8 w-8 mr-1" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="grid grid-cols-3 p-1 m-2">
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex-1 flex flex-col p-0 m-0">
          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex w-max max-w-[80%] rounded-lg p-3",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                <div>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 pt-2">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-2"
            >
              <Input
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </TabsContent>

        {/* Insights tab content */}
        <TabsContent
          value="insights"
          className="flex-1 flex flex-col h-[400px] data-[state=inactive]:hidden"
        >
          <div className="flex-1 overflow-y-auto p-3">
            <div className="space-y-4">
              <div className="border rounded-lg p-3">
                <h4 className="font-medium text-sm mb-1">Writing Clarity</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Your content is clear and well-structured.
                </p>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: "85%" }} />
                </div>
              </div>

              <div className="border rounded-lg p-3">
                <h4 className="font-medium text-sm mb-1">SEO Optimization</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Consider adding more relevant keywords.
                </p>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full" style={{ width: "60%" }} />
                </div>
              </div>

              <div className="border rounded-lg p-3">
                <h4 className="font-medium text-sm mb-1">Engagement Score</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Your content is engaging but could use more active voice.
                </p>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{ width: "70%" }} />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tools tab content */}
        <TabsContent
          value="tools"
          className="flex-1 flex flex-col h-[400px] data-[state=inactive]:hidden"
        >
          <div className="flex-1 overflow-y-auto p-3">
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Improve Writing</span>
              </Button>

              <Button variant="outline" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span>Generate Outline</span>
              </Button>

              <Button variant="outline" className="w-full justify-start gap-2">
                <Wand2 className="h-4 w-4 text-primary" />
                <span>Fix Grammar</span>
              </Button>

              <Button variant="outline" className="w-full justify-start gap-2">
                <Search className="h-4 w-4 text-primary" />
                <span>Research Topic</span>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

