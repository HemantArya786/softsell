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

// Mock responses for common questions
const MOCK_RESPONSES: Record<string, string> = {
  "how do i sell my license":
    "To sell your license with SoftSell, follow these 3 simple steps:\n\n1. Upload your license details through our secure portal\n2. Receive a valuation within 24 hours\n3. Accept our offer and get paid within 3 business days",

  "what types of licenses do you accept":
    "We accept a wide range of software licenses including:\n\n- Enterprise Software\n- Cloud Services\n- SaaS Subscriptions\n- Desktop Applications\n- Other specialized software licenses\n\nIf you're unsure about your specific license, please contact us and we'll be happy to help.",

  "how long does the process take":
    "Our process is designed to be quick and efficient:\n\n- You'll receive a valuation within 24 hours of submitting your license details\n- Once you accept our offer, payment is typically processed within 3 business days\n\nThe entire process usually takes less than a week from start to finish.",

  "how much can i get for my license":
    "The value of your license depends on several factors:\n\n- Type of software\n- Age of the license\n- Current market demand\n\nTypically, enterprise licenses retain 40-70% of their original value, while cloud and SaaS licenses retain 30-60%. We pride ourselves on offering the best market rates thanks to our extensive network of buyers.",
}

// Function to get a response based on the user's message
function getResponse(message: string): string {
  // Convert message to lowercase for case-insensitive matching
  const lowerMessage = message.toLowerCase()

  // Check for exact matches in our mock responses
  for (const [key, response] of Object.entries(MOCK_RESPONSES)) {
    if (lowerMessage.includes(key)) {
      return response
    }
  }

  // Check for keywords to provide relevant responses
  if (lowerMessage.includes("security") || lowerMessage.includes("safe") || lowerMessage.includes("protect")) {
    return "At SoftSell, security is our top priority. We use industry-leading encryption for all transactions and follow strict data protection protocols. Your information is never shared with third parties without your consent."
  }

  if (lowerMessage.includes("contact") || lowerMessage.includes("support") || lowerMessage.includes("help")) {
    return "You can reach our support team through:\n\n- Email: info@softsell.com\n- Phone: (123) 456-7890\n- Or by filling out the contact form on our website\n\nOur team is available Monday-Friday, 9am-5pm EST."
  }

  if (lowerMessage.includes("payment") || lowerMessage.includes("money") || lowerMessage.includes("paid")) {
    return "We offer multiple payment methods including direct bank transfer, PayPal, and cryptocurrency. Once you accept our offer, payment is typically processed within 3 business days."
  }

  // Default response if no specific match is found
  return "Thank you for your question about SoftSell. We're a leading platform for buying and selling software licenses. We make the process simple with our three-step approach: upload your license, get a valuation within 24 hours, and receive payment within 3 business days after accepting our offer. Is there something specific about our services you'd like to know more about?"
}

export async function sendChatMessage(userMessage: string, chatHistory: Message[]): Promise<string> {
  try {
    // Add a small delay to simulate processing time (optional)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Get response based on user message
    const response = getResponse(userMessage)

    return response
  } catch (error) {
    console.error("Error in sendChatMessage:", error)
    return "I'm sorry, I'm having trouble processing your request right now. Please try again later or contact our support team at info@softsell.com."
  }
}
