import {
  Search,
  ChevronDown,
  Clock,
  PlayCircle,
  PieChart as PieIcon,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const EmoMateDashboard = () => {
  const pieData = [
    { name: "Resolved", value: 52, color: "#22c55e" },
    { name: "Ongoing", value: 18, color: "#3b82f6" },
    { name: "Pending", value: 12, color: "#f59e0b" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-6">
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
          <span className="text-xl font-bold text-white">Listeners</span>
        </div>

        <div className="relative w-1/3">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
          <input
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            placeholder="Search users or sessions"
          />
        </div>

        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
          <div className="relative">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-700">
              <img
                src="/avatar.webp"
                alt="Listener"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0f172a] rounded-full" />
          </div>
          <span className="text-sm">Dr. Sam</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </nav>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <section className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6">
            <h3 className="flex items-center gap-2 mb-4 text-lg font-semibold">
              <Clock className="w-5 h-5 text-indigo-400" />
              People you helped recently
            </h3>

            <div className="flex gap-4 overflow-x-auto">
              {[1042, 2042, 3042, 4042].map((id) => (
                <div
                  key={id}
                  className="min-w-40 bg-slate-900 border border-slate-800 p-4 rounded-2xl hover:border-indigo-500 transition"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-full mb-3" />

                  <p className="text-sm font-medium text-white">User #{id}</p>

                  <p className="text-xs text-slate-400 mb-3">
                    Session completed
                  </p>

                  <button
                    className="
    relative overflow-hidden
    bg-indigo-600 !important
    text-white
    border border-indigo-500
    px-4 py-2 rounded-xl text-xs font-medium
    transition
    active:scale-[0.97]
  "
                    style={{ backgroundColor: "#4f46e5" }} // force override
                  >
                    <span className="relative z-10">
                      View session summary →
                    </span>

                    <span
                      className="
      pointer-events-none
      absolute inset-0
      bg-white/15
      opacity-0
      hover:opacity-100
      transition-opacity
    "
                    />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-linear-to-r from-[#0f172a] to-[#1e1b4b] border border-indigo-500/20 rounded-3xl p-8 flex items-center justify-between">
            <div>
              <p className="text-indigo-300 font-bold uppercase tracking-wide">
                UPCOMING SESSIONS
              </p>
              <p className="text-sm text-slate-400 mt-1">
                People waiting to connect with you
              </p>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-4xl font-black text-white">7</span>
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl text-sm font-semibold">
                <PlayCircle className="w-4 h-4" />
                Start next session
              </button>
            </div>
          </section>
        </div>

        <aside className="col-span-4">
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6">
            <h3 className="flex items-center gap-2 mb-6 text-lg font-semibold">
              <PieIcon className="w-5 h-5 text-purple-400" />
              Your Session Analytics
            </h3>

            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={85}
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
              <Stat label="People helped today" value="12" />
              <Stat label="Total conversations" value="52" />
              <Stat label="Currently listening" value="18" />
              <Stat label="Avg rating" value="4.8 ⭐" />
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

export default EmoMateDashboard;
