import { Button } from "@heroui/react";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-wide">
          HeroUI Button 🚀
        </h1>

        <p className="text-gray-300 mb-8">
          Clean • Modern • Responsive
        </p>

        <Button
          color="primary"
          size="lg"
          className="
            px-10 py-6
            text-lg font-bold
            rounded-2xl
            shadow-[0_0_30px_rgba(99,102,241,0.6)]
            hover:scale-105
            active:scale-95
            transition-all
            duration-300
          "
        >
          Click Me ✨
        </Button>
      </div>
    </div>
  );
}

export default App;
