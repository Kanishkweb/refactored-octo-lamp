import { listener } from "../../data/dummyChat";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-[#020517]">
      <div>
        <h2 className="text-lg font-semibold text-white">
          {listener.name} ({listener.role})
        </h2>
      </div>

      <div className="flex items-center gap-2 text-sm text-green-400">
        <span className="w-2 h-2 rounded-full bg-green-400"></span>
        Online
      </div>
    </div>
  );
}
