import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { Message } from "./types"

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={cn("flex items-start gap-2 sm:gap-4", isUser ? "flex-row-reverse" : "flex-row")}>
      <Avatar className="h-8 w-8 mt-0.5">
        <AvatarFallback
          className={cn(
            isUser ? "bg-slate-300 dark:bg-slate-700" : "bg-slate-900 text-white dark:bg-white dark:text-slate-900",
          )}
        >
          {isUser ? "U" : "SS"}
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "rounded-lg px-3 py-2 max-w-[80%] text-sm",
          isUser
            ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            : "bg-slate-900 dark:bg-white text-white dark:text-slate-900",
        )}
      >
        {message.content}
      </div>
    </div>
  )
}
