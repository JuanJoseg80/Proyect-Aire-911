'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Send, Trash2 } from "lucide-react";

export default function ChatInterface({ onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you today?", sender: "ai" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: input, sender: "user" },
      ]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, text: "This is a simulated AI response.", sender: "ai" },
        ]);
      }, 1000);
    }
  };

  const handleClear = () => {
    setMessages([{ id: 1, text: "Hello! How can I assist you today?", sender: "ai" }]);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="bg-[#F198C0] text-white p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Virtual Assistant</h1>
        <Button onClick={onClose} className="w-10 h-10 bg-white rounded-full">X</Button> {/* Botón para cerrar */}
      </header>

      <div className="flex-grow p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-[#F198C0] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={handleSend} className="bg-[#F198C0] hover:bg-[#f0759e] text-white">
            <Send className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-[#F198C0] text-[#F198C0]">
            <Mic className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-2 flex justify-end">
          <Button variant="ghost" onClick={handleClear} className="text-gray-500 hover:text-[#F198C0]">
            <Trash2 className="h-5 w-5 mr-2" />
            Clear Chat
          </Button>
        </div>
      </div>
    </div>
  );
}
