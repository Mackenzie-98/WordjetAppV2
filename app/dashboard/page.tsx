import { EditorTabs } from "@/components/dashboard/editor-tabs"
import { EditorToolbar } from "@/components/dashboard/editor-toolbar"
import { ContentEditor } from "@/components/dashboard/content-editor"
import { NewContentButton } from "@/components/dashboard/new-content-button"

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-6 py-3 border-b">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <NewContentButton />
      </div>

      <div className="flex-1 overflow-hidden">
        <EditorTabs />
        <EditorToolbar />
        <ContentEditor />
      </div>
    </div>
  )
}

