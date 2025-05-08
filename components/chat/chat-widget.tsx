"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ChatMessage } from "./chat-message";
import { ExampleQuestions } from "./example-questions";
import { useChat } from "./use-chat";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  return (
    <div className="fixed  bottom-4 right-5 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="flex flex-col w-80 sm:w-96 h-[500px] bg-white dark:bg-slate-950 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                    SS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-sm">SoftSell Assistant</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Ask me anything about selling licenses
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4 text-center">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                      SS
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="font-medium">
                      Welcome to SoftSell Assistant
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      How can I help you with selling your software licenses
                      today?
                    </p>
                  </div>
                  <ExampleQuestions />
                </div>
              ) : (
                messages.map((message, index) => (
                  <ChatMessage key={index} message={message} />
                ))
              )}
              {isLoading && (
                <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">
                    SoftSell Assistant is typing...
                  </span>
                </div>
              )}
            </div>

            {/* Chat input */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Chat button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-center w-14 h-14 rounded-full shadow-lg",
          "bg-slate-900 text-white hover:bg-slate-800",
          "dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200",
          "focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
}
