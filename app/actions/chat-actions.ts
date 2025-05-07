"use server"
import type { Message } from "@/components/chat/types"

// Knowledge base for the assistant
const KNOWLEDGE_BASE = `
SoftSell is a platform for buying and selling software licenses.

Process for selling licenses:
1. Upload License - Submit your license details through our secure portal for review
2. Get Valuation - Receive a competitive market valuation within 24 hours
3. Get Paid - Accept our offer and receive payment through your preferred method

Types of licenses we accept:
- Enterprise Software
- Cloud Services
- SaaS Subscriptions
- Desktop Applications
- Other specialized software licenses

Typical timeline:
- Valuation within 24 hours
- Payment within 3 business days after accepting offer

Value of licenses:
- Depends on software type, age, and market demand
- Enterprise licenses typically retain 40-70% of original value
- Cloud and SaaS licenses typically retain 30-60% of original value
- We offer the best market rates due to our extensive network

Security:
- All transactions are secured with industry-leading encryption
- We follow strict data protection protocols
- Your information is never shared with third parties without consent

Contact information:
- Email: info@softsell.com
- Phone: (123) 456-7890
- Website: www.softsell.com
`

export async function sendChatMessage(userMessage: string, chatHistory: Message[]): Promise<string> {
  try {
    // Format chat history for the AI
    const formattedHistory = chatHistory
      .map((msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
      .join("\n")

    // Create the prompt with context
    const prompt = `
You are SoftSell Assistant, a helpful AI assistant for SoftSell, a platform for buying and selling software licenses.
Use the following knowledge base to answer user questions:

${KNOWLEDGE_BASE}

Chat history:
${formattedHistory}

User: ${userMessage}
`
  } catch (error) {
    console.error("Error in sendChatMessage:", error)
    return "An error occurred while processing your message."
  }
}
