"use client"

import { Button } from "@/components/ui/button"
import { useChat } from "./use-chat"

const EXAMPLE_QUESTIONS = [
  "How do I sell my license?",
  "What types of licenses do you accept?",
  "How long does the process take?",
  "How much can I get for my license?",
]

export function ExampleQuestions() {
  const { setInput, handleSubmit } = useChat()

  const handleQuestionClick = (question: string) => {
    setInput(question)
    // Submit the form with a slight delay to show the question being set
    setTimeout(() => {
      handleSubmit(new Event("submit") as any)
    }, 100)
  }

  return (
    <div className="space-y-2 w-full">
      <p className="text-xs text-slate-500 dark:text-slate-400">Try asking:</p>
      <div className="flex flex-col gap-2">
        {EXAMPLE_QUESTIONS.map((question, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="justify-start text-left h-auto py-2 text-xs"
            onClick={() => handleQuestionClick(question)}
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  )
}
