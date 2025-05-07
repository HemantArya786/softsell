"use client"

import { useState, useCallback, type ChangeEvent, type FormEvent } from "react"
import type { Message } from "./types"
import { sendChatMessage } from "@/app/actions/chat-actions"

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }, [])

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()

      if (!input.trim() || isLoading) return

      // Add user message to chat
      const userMessage: Message = { role: "user", content: input }
      setMessages((prev) => [...prev, userMessage])

      // Clear input and set loading
      setInput("")
      setIsLoading(true)

      try {
        // Send message to AI
        const response = await sendChatMessage(userMessage.content, messages)

        // Add AI response to chat
        setMessages((prev) => [...prev, { role: "assistant", content: response }])
      } catch (error) {
        console.error("Error sending message:", error)
        // Add error message
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
          },
        ])
      } finally {
        setIsLoading(false)
      }
    },
    [input, isLoading, messages],
  )

  return {
    messages,
    input,
    setInput,
    isLoading,
    handleInputChange,
    handleSubmit,
  }
}
