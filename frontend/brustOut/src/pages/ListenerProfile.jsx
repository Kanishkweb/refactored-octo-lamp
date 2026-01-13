import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Globe,
  MessageSquare,
  Phone,
  Star,
} from "lucide-react";

const listenerData = {
  name: "Sarah Johnson",
  avatar: "https://avatars.githubusercontent.com/u/193432954?v=4",
  role: "Verified Listener",
  tagline:
    "Compassionate listener here to support you through life's challenges",
  yearsOfExperience: 5,
  rating: 4.9,
  totalSessions: 1240,
  languages: ["English", "Hindi", "Hinglish"],
  availability: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: "9:00 AM - 6:00 PM",
  },
  modes: ["Chat", "Call"],
  areasOfComfort: [
    "Anxiety",
    "Stress",
    "Loneliness",
    "Depression",
    "Relationship Issues",
    "Work-Life Balance",
  ],
  about:
    "I create a safe, non-judgmental space where you can openly share your thoughts and feelings. My approach is based on empathy, patience, and active listening.",
};

export default function ListenerProfile() {
  return (
    <div className="min-h-screen bg-[#020517] px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <Card className="mb-6 border-none bg-[#0f1729] shadow-lg">
          <div className="bg-linear-to-r from-[#5048e5]/20 via-[#91c3fd]/10 to-transparent p-8">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <Avatar className="h-28 w-28 border-4 border-[#5048e5] shadow-xl">
                <AvatarImage src={listenerData.avatar} />
                <AvatarFallback className="bg-[#5048e5] text-white text-xl">
                  SJ
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <div className="mb-2 flex flex-col gap-2 md:flex-col md:items-center">
                  <h1 className="text-3xl lg:self-start font-bold text-white">
                    {listenerData.name}
                  </h1>
                  <Badge className="flex gap-1 w-33 self-center lg:self-start lg:w-40 h-auto bg-[#5048e5] text-white">
                    <CheckCircle2 className="h-4 w-4" />
                    {listenerData.role}
                  </Badge>
                </div>

                <p className="mb-4 text-[#91c3fd]/80">{listenerData.tagline}</p>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 md:justify-start">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-[#91c3fd]" />
                    <span className="font-semibold">{listenerData.rating}</span>
                  </div>
                  <span>{listenerData.totalSessions} sessions</span>
                  <span>{listenerData.yearsOfExperience} years experience</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-none bg-[#0f1729] shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Globe className="h-5 w-5 text-[#91c3fd]" />
                Basic Information
              </CardTitle>
              <CardDescription className="text-gray-400">
                Languages & availability
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold text-white">Languages</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {listenerData.languages.map((lang) => (
                    <Badge
                      key={lang}
                      className="border border-[#91c3fd]/40 bg-transparent text-[#91c3fd]"
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-white">
                  <Clock className="h-4 w-4" />
                  Availability
                </h4>
                <p className="text-gray-400">
                  {listenerData.availability.days.join(", ")}
                </p>
                <p className="font-medium text-gray-200">
                  {listenerData.availability.timeSlots}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">Mode</h4>
                <div className="mt-2 flex gap-2">
                  {listenerData.modes.map((mode) => (
                    <Badge
                      key={mode}
                      className="flex gap-1 bg-[#5048e5] text-white"
                    >
                      {mode === "Chat" ? (
                        <MessageSquare size={14} />
                      ) : (
                        <Phone size={14} />
                      )}
                      {mode}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-[#0f1729] shadow-md">
            <CardHeader>
              <CardTitle className="text-white">Areas of Comfort</CardTitle>
              <CardDescription className="text-gray-400">
                Topics I can support you with
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-2">
              {listenerData.areasOfComfort.map((area) => (
                <Badge key={area} className="bg-[#91c3fd]/20 text-[#91c3fd]">
                  {area}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-none bg-[#0f1729] shadow-md">
          <CardHeader>
            <CardTitle className="text-white">About Me</CardTitle>
            <CardDescription className="text-gray-400">
              Listening style & approach
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-gray-300">
              {listenerData.about}
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 rounded-lg bg-linear-to-r from-[#5048e5]/30 to-[#91c3fd]/20 p-6 text-center">
          <h3 className="text-2xl font-semibold text-white">Ready to talk?</h3>
          <p className="mt-2 text-gray-300">
            Start a listening session with {listenerData.name.split(" ")[0]}
          </p>
          <Button className="mt-4 bg-[#5048e5] text-white hover:bg-[#4038d9]">
            Start Listening Session
          </Button>
        </div>
      </div>
    </div>
  );
}
