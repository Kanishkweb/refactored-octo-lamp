import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="p-4 border-t border-gray-700 bg-[#020517]">
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-lg bg-[#1f2933] text-white outline-none"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 rounded-lg bg-primary text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
