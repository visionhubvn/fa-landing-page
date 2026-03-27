"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, RotateCw, Send, User, Bot } from "lucide-react";
import { marked } from "marked";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Chào bạn! Tôi là trợ lý AI của anh **Nguyễn Văn A**. Bạn quan tâm đến khóa học *Agentic AI* hay các giải pháp *N8N/MCP* của chúng tôi?",
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      
      if (data.role === "assistant") {
        setMessages((prev) => [...prev, data]);
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Xin lỗi, hệ thống đang gặp sự cố. Bạn vui lòng thử lại sau nhé!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    // 1. Animation xoay (handled by framer-motion via state)
    // 2. Clear history
    setMessages([]);
    
    setTimeout(() => {
      // 3. Show default message
      setMessages([
        {
          role: "assistant",
          content: "Hội thoại đã được làm mới. Tôi sẵn sàng hỗ trợ bạn!",
        },
      ]);
      // 4. Stop animation sau 500ms
      setIsRefreshing(false);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] font-body">
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full kinetic-gradient flex items-center justify-center text-on-primary shadow-2xl relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={32} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare size={32} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary-container rounded-full border-2 border-surface flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5, originX: "100%", originY: "100%" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.5 }}
            className="absolute bottom-20 right-0 w-[90vw] sm:w-[400px] h-[600px] max-h-[70vh] glass-panel border border-outline-variant/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-outline-variant/10 flex items-center justify-between bg-surface-container/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full kinetic-gradient flex items-center justify-center font-bold text-lg text-on-primary">
                  A
                </div>
                <div>
                  <h3 className="font-headline font-bold text-white text-sm">AI Specialist Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-primary-fixed rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-primary-fixed uppercase tracking-wider font-bold">Online Now</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  animate={isRefreshing ? { rotate: 360 } : { rotate: 0 }}
                  transition={isRefreshing ? { duration: 0.5, repeat: Infinity, ease: "linear" } : { duration: 0.2 }}
                  onClick={handleRefresh}
                  className="p-2 hover:bg-white/10 rounded-lg text-on-surface-variant transition-colors"
                  title="Reset hội thoại"
                >
                  <RotateCw size={18} />
                </motion.button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg text-on-surface-variant transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-primary-container text-on-primary-fixed rounded-tr-none"
                        : "bg-surface-container-high border border-outline-variant/10 text-on-surface rounded-tl-none font-light"
                    }`}
                  >
                    <div 
                      className="chat-markdown prose prose-invert prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: marked.parse(msg.content) }}
                    />
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-surface-container-high border border-outline-variant/10 p-4 rounded-2xl rounded-tl-none inline-flex items-center gap-2">
                    <span className="text-xs text-on-surface-variant font-medium">Đang nhập</span>
                    <div className="flex gap-1">
                      <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 bg-primary-fixed rounded-full"></motion.span>
                      <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary-fixed rounded-full"></motion.span>
                      <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary-fixed rounded-full"></motion.span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-surface-container-highest/30 backdrop-blur-md border-t border-outline-variant/10">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Hỏi tôi bất cứ điều gì..."
                  className="w-full bg-surface-container text-white py-3 pl-4 pr-12 rounded-xl border border-outline-variant/20 focus:outline-none focus:border-primary-container transition-all text-sm placeholder:text-outline/50"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 text-primary-fixed hover:text-primary hover:scale-110 transition-all disabled:opacity-30 disabled:scale-100"
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="text-[10px] text-center text-outline mt-3 uppercase tracking-widest font-bold">
                AI Assistant Powered by 9Router
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
