import {
  Star,
  MessageCircle,
  Phone,
  Info,
  Lock,
  AlertCircle,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function UserToListener() {
  const listener = {
    id: "L-001",
    name: "Listener ID",
    tagline: "Here to listen without judgment",
    rating: 5,
    about: `This listener provides a safe and calm space for you to express your thoughts freely.
They focus on listening with empathy and patience, without giving advice or judgment.

You can talk about stress, loneliness, overthinking, or anything that feels heavy.
Your feelings are valid, and you are not alone here.`,
  }

  const stats = [
    { label: "Felt lighter after sharing", value: 82 },
    { label: "Felt understood", value: 91 },
    { label: "Would listen again", value: 76 },
  ]

  const similarListeners = [
    "Calm listener • Night support",
    "Empathetic • Relationship talks",
    "Soft-spoken • Anxiety support",
  ]

  return (
    <div
      className="min-h-screen px-4 py-8"
      style={{ backgroundColor: "#020517" }}
    >
      <div className="max-w-5xl mx-auto space-y-6">

        {/* TOP CARD */}
        <Card className="p-6" style={{ backgroundColor: "#0f1729" }}>
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="w-28 h-28 border-2" style={{ borderColor: "#91c3fd" }}>
              <AvatarImage src="/avatar.webp" />
              <AvatarFallback
                style={{ backgroundColor: "#5048e5", color: "#91c3fd" }}
              >
                LI
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white">
                {listener.name}
              </h1>

              <div className="flex items-center gap-1 mt-2">
                {[...Array(listener.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: "#91c3fd" }}
                  />
                ))}
              </div>

              <p className="mt-3 text-[#cbd5e1]">
                {listener.tagline}
              </p>

              <div className="flex gap-3 mt-4">
                {[MessageCircle, Phone, Info].map((Icon, i) => (
                    <Button
                        key={i}
                        size="icon"
                        variant="outline"
                        className="border-[#91c3fd] text-[#91c3fd] hover:bg-[#91c3fd] hover:text-white"
                    >
                      <Icon />
                    </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* DESCRIPTION */}
        <Card className="p-6" style={{ backgroundColor: "#0f1729" }}>
          <h2 className="text-xl font-semibold text-[#91c3fd] mb-3">
            Listener Description
          </h2>
          <p className="text-[#e2e8f0] leading-relaxed whitespace-pre-line">
            {listener.about}
          </p>
        </Card>

        {/* PREMIUM LOCKED */}
        <Card className="p-6 relative overflow-hidden" style={{ backgroundColor: "#0f1729" }}>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="flex items-center gap-2 text-[#91c3fd]">
              <Lock />
              <span>Premium Feature</span>
            </div>
          </div>

          <p className="text-[#94a3b8] opacity-50">
            Session recording available for premium users.
          </p>
        </Card>

        {/* STATS */}
        <Card className="p-6" style={{ backgroundColor: "#0f1729" }}>
          <h2 className="text-[#91c3fd] font-semibold mb-4">
            Emotional Impact
          </h2>

          {stats.map((item, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between text-sm text-white mb-1">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="w-full h-2 bg-[#020517] rounded">
                <div
                  className="h-2 rounded"
                  style={{
                    width: `${item.value}%`,
                    background:
                      "linear-gradient(90deg, #5048e5, #91c3fd)",
                  }}
                />
              </div>
            </div>
          ))}
        </Card>

        {/* SIMILAR */}
        <Card className="p-6" style={{ backgroundColor: "#0f1729" }}>
          <h2 className="text-[#91c3fd] font-semibold mb-4">
            Similar Listeners
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {similarListeners.map((text, i) => (
              <div
                key={i}
                className="p-4 rounded border"
                style={{
                  backgroundColor: "#020517",
                  borderColor: "#91c3fd20",
                }}
              >
                <p className="text-[#e2e8f0] text-sm">{text}</p>
                <Button
                  disabled
                  className="mt-3 w-full"
                  style={{
                    backgroundColor: "#5048e520",
                    color: "#91c3fd80",
                  }}
                >
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* SAFETY */}
        <Card className="p-6" style={{ backgroundColor: "#0f1729" }}>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[#91c3fd] font-semibold">
              Safety & Trust
            </h2>
            <div
                className="inline-flex items-center gap-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md px-4 py-2 cursor-pointer transition-colors"
            >
              <AlertCircle className="w-4 h-4" />
              Report
            </div>


          </div>

          <p className="text-[#94a3b8] text-sm">
            Listeners are not professionals. This platform is for emotional
            support only.
          </p>
        </Card>

      </div>
    </div>
  )
}
