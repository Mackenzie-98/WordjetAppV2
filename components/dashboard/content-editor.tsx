"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export function ContentEditor() {
  const { theme } = useTheme()
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: `
      <h1>Content Marketing Strategy Guide</h1>
      <p>In today's digital landscape, having a solid content marketing strategy is essential for business growth and customer engagement. This guide will help you optimize your approach.</p>
      <h2>1. Understand Your Audience</h2>
      <p>The foundation of any successful content marketing strategy is a deep understanding of your target audience. Create detailed buyer personas that include:</p>
      <ul>
        <li>Demographics</li>
        <li>Pain points and challenges</li>
        <li>Goals and aspirations</li>
        <li>Preferred content formats</li>
        <li>Online behavior patterns</li>
      </ul>
      <h2>2. Set Clear Objectives</h2>
      <p>Define what you want to achieve with your content marketing efforts. Your goals might include:</p>
      <ul>
        <li>Increasing brand awareness</li>
        <li>Generating quality leads</li>
        <li>Improving conversion rates</li>
        <li>Enhancing customer retention</li>
        <li>Establishing thought leadership</li>
      </ul>
      <h2>3. Develop a Content Calendar</h2>
      <p>Plan your content production and distribution schedule. A content calendar helps ensure consistency and alignment with business objectives and seasonal trends.</p>
      <h2>4. Focus on Quality Over Quantity</h2>
      <p>It's better to publish fewer pieces of high-quality content than to flood your channels with mediocre material. Quality content:</p>
      <ul>
        <li>Addresses specific audience needs</li>
        <li>Provides actionable insights</li>
        <li>Is well-researched and accurate</li>
        <li>Features engaging multimedia elements</li>
      </ul>
      <h2>5. Optimize for Search Engines</h2>
      <p>Implement SEO best practices to increase content visibility:</p>
      <ul>
        <li>Conduct keyword research</li>
        <li>Optimize headlines and meta descriptions</li>
        <li>Create SEO-friendly URLs</li>
        <li>Include internal and external links</li>
        <li>Use alt text for images</li>
      </ul>
    `,
  })

  // Make the editor fill available space and add padding
  useEffect(() => {
    if (editor) {
      const editorElement = document.querySelector('.ProseMirror') as HTMLElement
      if (editorElement) {
        editorElement.style.minHeight = 'calc(100% - 40px)'
        editorElement.style.padding = '20px'
        editorElement.classList.add('no-scrollbar')
      }
    }
  }, [editor])

  // Apply dark mode styles similar to Microsoft Word
  useEffect(() => {
    if (!editor) return

    const editorElement = document.querySelector('.ProseMirror') as HTMLElement
    if (!editorElement) return

    if (theme === 'dark') {
      // Add Word-like dark mode styling
      editorElement.style.backgroundColor = '#1e1e1e'
      editorElement.style.color = '#ffffff'
      
      // Style headings
      const headings = editorElement.querySelectorAll('h1, h2, h3, h4, h5, h6')
      headings.forEach(heading => {
        (heading as HTMLElement).style.color = '#e0e0e0'
      })
      
      // Style links
      const links = editorElement.querySelectorAll('a')
      links.forEach(link => {
        (link as HTMLElement).style.color = '#4dc1ff'
      })
      
      // Style lists
      const listItems = editorElement.querySelectorAll('li')
      listItems.forEach(item => {
        (item as HTMLElement).style.color = '#ffffff'
      })
    } else {
      // Reset to light mode
      editorElement.style.backgroundColor = ''
      editorElement.style.color = ''
      
      // Reset headings
      const headings = editorElement.querySelectorAll('h1, h2, h3, h4, h5, h6')
      headings.forEach(heading => {
        (heading as HTMLElement).style.color = ''
      })
      
      // Reset links
      const links = editorElement.querySelectorAll('a')
      links.forEach(link => {
        (link as HTMLElement).style.color = ''
      })
      
      // Reset lists
      const listItems = editorElement.querySelectorAll('li')
      listItems.forEach(item => {
        (item as HTMLElement).style.color = ''
      })
    }
  }, [editor, theme])

  return (
    <div className="flex-1 overflow-auto h-full bg-background no-scrollbar">
      <EditorContent 
        editor={editor} 
        className="h-full min-h-[500px] prose prose-sm sm:prose lg:prose-lg max-w-none xl:max-w-[800px] 2xl:max-w-[900px] mx-auto dark:prose-invert" 
      />
    </div>
  )
}

