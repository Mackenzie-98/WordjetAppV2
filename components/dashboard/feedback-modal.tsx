"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface FeedbackModalProps {
  onClose: () => void;
}

export function FeedbackModal({ onClose }: FeedbackModalProps) {
  const [feedback, setFeedback] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  const handleSubmit = () => {
    // En una aplicación real, aquí enviaríamos el feedback a un servidor
    console.log("Feedback submitted:", { feedback, selectedEmoji });
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-background rounded-lg shadow-lg w-full max-w-md p-6 mx-4">
        <h2 className="text-xl font-semibold mb-2">Leave Feedback</h2>
        <p className="text-muted-foreground mb-4">
          We'd love to hear what went well or how we can improve the product experience.
        </p>
        
        <Textarea
          placeholder="Your feedback"
          className="min-h-[100px] mb-4"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        
        <div className="flex gap-2 mb-4">
          <button 
            onClick={() => setSelectedEmoji("😔")} 
            className={`text-2xl p-2 rounded-full ${selectedEmoji === "😔" ? "bg-accent" : "hover:bg-accent/50"} transition-colors`}
          >
            😔
          </button>
          <button 
            onClick={() => setSelectedEmoji("🙂")} 
            className={`text-2xl p-2 rounded-full ${selectedEmoji === "🙂" ? "bg-accent" : "hover:bg-accent/50"} transition-colors`}
          >
            🙂
          </button>
          <button 
            onClick={() => setSelectedEmoji("😄")} 
            className={`text-2xl p-2 rounded-full ${selectedEmoji === "😄" ? "bg-accent" : "hover:bg-accent/50"} transition-colors`}
          >
            😄
          </button>
        </div>
        
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
} 