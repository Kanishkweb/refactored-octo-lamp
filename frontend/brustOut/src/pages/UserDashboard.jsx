import {
  Search,
  ChevronDown,
  HeartHandshake,
  MessageCircle,
  Clock,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const UserDashboard = () => {
  const pieData = [
    { name: "Completed", value: 6, color: "#22c55e" },
    { name: "Ongoing", value: 2, color: "#3b82f6" },
    { name: "Cancelled", value: 1, color: "#ef4444" },
  ];

  const listeners = [
    {
      name: "Aarav",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Meera",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Kabir",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-6">
      {/* NAV */}
      <nav className="flex items-center justify-between bg-[#0f172a]/60 backdrop-blur border border-slate-800 p-4 rounded-2xl mb-8">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg overflow-hidden border border-indigo-500/40">
            <img
              src="/icon2.png"
              alt="EmoMate"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => (window.location.href = "/")}
            />
          </div>
          <span className="text-xl font-bold text-white">My Dashboard</span>
        </div>

        <div className="relative w-1/3">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
          <input
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            placeholder="Search listeners or chats"
          />
        </div>

        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="/user-avatar.webp" alt="User" />
          </div>
          <span className="text-sm">You</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </nav>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="col-span-8 space-y-6">
          {/* RECENT LISTENERS */}
          <section className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6">
            <h3 className="flex items-center gap-2 mb-4 text-lg font-semibold">
              <HeartHandshake className="w-5 h-5 text-pink-400" />
              People who listened to you
            </h3>

            <div className="flex gap-4 overflow-x-auto">
              {listeners.map((l, i) => (
                <div
                  key={i}
                  className="
                    min-w-44
                    bg-slate-900
                    border border-slate-800
                    p-5
                    rounded-2xl
                    text-center
                    hover:border-indigo-500
                    transition
                  "
                >
                  {/* Avatar */}
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-indigo-500/40">
                    <img
                      src={l.avatar}
                      alt={l.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-sm font-semibold text-white">{l.name}</p>
                  <p className="text-xs text-slate-400 mb-4">
                    Session completed
                  </p>

                  <button
                    onClick={() => (window.location.href = "/chat")}
                    className="
                      w-full
                      bg-indigo-600
                      hover:bg-indigo-500
                      px-4
                      py-2
                      rounded-xl
                      text-xs
                      font-semibold
                      transition
                      active:scale-95
                    "
                  >
                    View session
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-linear-to-r from-[#0f172a] to-[#312e81] border border-indigo-500/20 rounded-3xl p-8 flex items-center justify-between">
            <div>
              <p className="text-indigo-300 font-bold uppercase tracking-wide">
                Need to talk?
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Find a listener right now
              </p>
            </div>

            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl text-sm font-semibold">
              <MessageCircle className="w-4 h-4" />
              Start new chat
            </button>
          </section>
        </div>

        {/* RIGHT */}
        <aside className="col-span-4">
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6">
            <h3 className="flex items-center gap-2 mb-6 text-lg font-semibold">
              <Clock className="w-5 h-5 text-purple-400" />
              Your Listening Stats
            </h3>

            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={55}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {pieData.map((item, i) => (
                      <Cell key={i} fill={item.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-4 mt-4 text-xs">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  {item.name}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Stat label="Sessions taken" value="9" />
              <Stat label="Listeners met" value="5" />
              <Stat label="Active chats" value="1" />
              <Stat label="Avg rating" value="4.9 ⭐" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
    <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wide">
      {label}
    </p>
    <p className="text-xl font-bold text-white mt-1">{value}</p>
  </div>
);

export default UserDashboard;
