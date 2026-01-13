import { useEffect, useRef, useState } from "react";
// import { io } from "socket.io-client"; // backend ready

import ChatHeader from "../components/chat/ChatHeader";
import MessageBubble from "../components/chat/MessageBubble";
import ChatInput from "../components/chat/ChatInput";
import { listener, initialMessages } from "../data/dummyChat";

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef(null);

  // 🔌 SOCKET PLACEHOLDER (backend friendly)
  useEffect(() => {
    /*
    const socket = io("SERVER_URL");

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.disconnect();
    */
  }, []);

  // ⬇️ Auto scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);

    // socket.emit("send_message", newMessage);
  };

  return (
    <div className="h-screen flex flex-col bg-[#020517] overflow-hidden">
      <ChatHeader listener={listener} />

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}
