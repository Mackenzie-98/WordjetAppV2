"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Settings, X, FileCode, GitBranch, Play, Package, Bug, ChevronDown } from "lucide-react"

export function NavigationShowcase() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="space-y-6">
      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">VS Code-Style Tabs</CardTitle>
          <CardDescription className="text-xs">Editor tabs inspired by Visual Studio Code</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3">
          <div className="border-b border-border/60">
            <div className="flex">
              <button className="flex items-center h-8 px-3 text-xs bg-accent text-accent-foreground border-t border-l border-r border-border/60 rounded-t-sm">
                <FileCode className="h-3.5 w-3.5 mr-1.5" />
                <span>index.tsx</span>
                <X className="h-3.5 w-3.5 ml-2 opacity-60 hover:opacity-100" />
              </button>
              <button className="flex items-center h-8 px-3 text-xs text-muted-foreground hover:text-foreground">
                <FileCode className="h-3.5 w-3.5 mr-1.5" />
                <span>styles.css</span>
                <X className="h-3.5 w-3.5 ml-2 opacity-60 hover:opacity-100" />
              </button>
              <button className="flex items-center h-8 px-3 text-xs text-muted-foreground hover:text-foreground">
                <FileCode className="h-3.5 w-3.5 mr-1.5" />
                <span>utils.ts</span>
                <X className="h-3.5 w-3.5 ml-2 opacity-60 hover:opacity-100" />
              </button>
            </div>
          </div>
          <div className="p-3 bg-muted/50 rounded-sm mt-3 text-xs">
            <pre className="font-mono">
              {`import React from 'react';

export default function App() {
  return (
    <div>
      <h1>Hello, VS Code!</h1>
    </div>
  );
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">Activity Bar & Sidebar</CardTitle>
          <CardDescription className="text-xs">
            VS Code's navigation pattern with activity bar and sidebar
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3">
          <div className="flex h-64 border border-border/60 rounded-sm overflow-hidden">
            {/* Activity Bar */}
            <div className="w-10 bg-activityBar border-r border-border/60 flex-shrink-0 flex flex-col items-center py-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-accent text-accent-foreground mb-2">
                <FileCode size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground mb-2">
                <Search size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground mb-2">
                <GitBranch size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground mb-2">
                <Play size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Package size={16} />
              </Button>

              <div className="mt-auto">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                  <Settings size={16} />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-48 bg-sidebar border-r border-border/60 flex-shrink-0 overflow-y-auto">
              <div className="p-2">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground py-1 px-2">
                  Explorer
                </div>

                <div className="mt-1">
                  <div className="flex items-center py-1 px-2 text-xs text-muted-foreground">
                    <ChevronDown size={14} className="mr-1" />
                    <span>PROJECT</span>
                  </div>

                  <div className="ml-3">
                    <button className="flex items-center py-1 px-2 text-xs w-full text-left rounded-sm bg-accent text-accent-foreground">
                      <FileCode size={14} className="mr-1.5" />
                      <span>index.tsx</span>
                    </button>
                    <button className="flex items-center py-1 px-2 text-xs w-full text-left rounded-sm text-foreground hover:bg-accent/50">
                      <FileCode size={14} className="mr-1.5" />
                      <span>styles.css</span>
                    </button>
                    <button className="flex items-center py-1 px-2 text-xs w-full text-left rounded-sm text-foreground hover:bg-accent/50">
                      <FileCode size={14} className="mr-1.5" />
                      <span>utils.ts</span>
                    </button>
                    <button className="flex items-center py-1 px-2 text-xs w-full text-left rounded-sm text-foreground hover:bg-accent/50">
                      <FileCode size={14} className="mr-1.5" />
                      <span>types.d.ts</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 bg-background flex flex-col">
              <div className="h-8 flex items-center px-3 bg-header border-b border-border/60 text-xs">
                <span>index.tsx</span>
              </div>
              <div className="flex-1 p-2 text-xs font-mono">
                <div className="flex">
                  <div className="w-6 text-right pr-2 text-muted-foreground">1</div>
                  <div>
                    <span className="text-blue-400">import</span> React <span className="text-blue-400">from</span>{" "}
                    <span className="text-green-400">'react'</span>;
                  </div>
                </div>
                <div className="flex">
                  <div className="w-6 text-right pr-2 text-muted-foreground">2</div>
                  <div></div>
                </div>
                <div className="flex">
                  <div className="w-6 text-right pr-2 text-muted-foreground">3</div>
                  <div>
                    <span className="text-blue-400">export</span> <span className="text-blue-400">default</span>{" "}
                    <span className="text-blue-400">function</span> <span className="text-yellow-400">App</span>() {"{"}
                  </div>
                </div>
                <div className="flex">
                  <div className="w-6 text-right pr-2 text-muted-foreground">4</div>
                  <div>
                    {" "}
                    <span className="text-blue-400">return</span> (
                  </div>
                </div>
                <div className="flex">
                  <div className="w-6 text-right pr-2 text-muted-foreground">5</div>
                  <div>
                    {" "}
                    &lt;<span className="text-blue-400">div</span>&gt;
                  </div>
                </div>
                <div className="flex">
                  <div className="w-6 text-right pr-2 text-muted-foreground">6</div>
                  <div>
                    {" "}
                    &lt;<span className="text-blue-400">h1</span>&gt;Hello, VS Code!&lt;/
                    <span className="text-blue-400">h1</span>&gt;
                  </div>
                </div>
                <div className="flex">
                  <div className="w-6 text-right pr-2 text-muted-foreground">7</div>
                  <div>
                    {" "}
                    &lt;/<span className="text-blue-400">div</span>&gt;
                  </div>
                </div>
                <div className="flex">
                  <div className="w-6 text-right pr-2 text-muted-foreground">8</div>
                  <div> );</div>
                </div>
                <div className="flex">
                  <div className="w-6 text-right pr-2 text-muted-foreground">9</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">Status Bar</CardTitle>
          <CardDescription className="text-xs">VS Code's status bar with information and actions</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3">
          <div className="h-6 flex items-center px-3 bg-statusBar border border-border/60 rounded-sm text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <GitBranch size={12} className="mr-1" />
                <span>main</span>
              </div>
              <div>
                <Bug size={12} className="mr-1 inline-block" />
                <span>0</span>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <span>Ln 6, Col 18</span>
              <span>Spaces: 2</span>
              <span>UTF-8</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border/60">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-sm font-medium">Command Palette</CardTitle>
          <CardDescription className="text-xs">VS Code's command palette for quick access to commands</CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-3">
          <div className="border border-border/60 rounded-sm overflow-hidden">
            <div className="p-2 bg-sidebar">
              <input
                type="text"
                placeholder="Type '>' to show commands, or search files by name"
                className="w-full h-8 px-2 text-xs bg-background border border-border/60 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="max-h-48 overflow-y-auto">
              <div className="p-1 hover:bg-accent/50 cursor-pointer">
                <div className="flex items-center px-2 py-1 text-xs">
                  <FileCode size={14} className="mr-2 text-muted-foreground" />
                  <span>index.tsx</span>
                </div>
              </div>
              <div className="p-1 hover:bg-accent/50 cursor-pointer">
                <div className="flex items-center px-2 py-1 text-xs">
                  <FileCode size={14} className="mr-2 text-muted-foreground" />
                  <span>styles.css</span>
                </div>
              </div>
              <div className="p-1 hover:bg-accent/50 cursor-pointer">
                <div className="flex items-center px-2 py-1 text-xs">
                  <FileCode size={14} className="mr-2 text-muted-foreground" />
                  <span>utils.ts</span>
                </div>
              </div>
              <div className="p-1 bg-accent text-accent-foreground cursor-pointer">
                <div className="flex items-center px-2 py-1 text-xs">
                  <Settings size={14} className="mr-2" />
                  <span>Preferences: Open Settings</span>
                </div>
              </div>
              <div className="p-1 hover:bg-accent/50 cursor-pointer">
                <div className="flex items-center px-2 py-1 text-xs">
                  <Settings size={14} className="mr-2 text-muted-foreground" />
                  <span>Preferences: Open Keyboard Shortcuts</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

