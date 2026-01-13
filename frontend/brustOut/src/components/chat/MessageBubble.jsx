import { listener, user } from "../../data/dummyChat";

export default function MessageBubble({ message }) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex items-end gap-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <img
          src={listener.avatar}
          alt="listener"
          className="w-8 h-8 rounded-full"
        />
      )}

      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
          isUser
            ? "bg-primary text-white rounded-br-none"
            : "bg-[#1f2933] text-gray-200 rounded-bl-none"
        }`}
      >
        {message.text}
        <div className="text-[10px] text-gray-400 mt-1 text-right">
          {message.time}
        </div>
      </div>

      {isUser && (
        <img src={user.avatar} alt="user" className="w-8 h-8 rounded-full" />
      )}
    </div>
  );
}
