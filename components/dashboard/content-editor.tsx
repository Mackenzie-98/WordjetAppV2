"use client"

import { useState } from "react"

export function ContentEditor() {
  const [content, setContent] = useState(`
# Welcome to WordJet

This is a sample document to demonstrate the editor capabilities. You can edit this content directly.

## Key Features

- **AI-Powered Writing**: Get assistance with content generation and editing
- **Multi-Format Export**: Share your content across different platforms
- **Collaborative Editing**: Work with your team in real-time
- **Version History**: Track changes and revert when needed

## Getting Started

1. Create a new document
2. Use the toolbar to format your content
3. Save and share your work

> The AI assistant can help you improve your writing, fix grammar issues, and suggest enhancements.

Happy writing!
  `)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div
        className="prose prose-sm dark:prose-invert max-w-none"
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => setContent(e.currentTarget.textContent || "")}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

