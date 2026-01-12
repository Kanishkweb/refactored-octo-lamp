import { useState } from "react";

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [experience, setExperience] = useState("");
  const [feeling, setFeeling] = useState("");
  const [likedMost, setLikedMost] = useState([]);
  const [thoughts, setThoughts] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleLikedMostToggle = (option) => {
    setLikedMost((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = async () => {
    const payload = {
      rating,
      experience,
      feeling,
      likedMost,
      thoughts,
      createdAt: new Date().toISOString(),
    };

    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (err) {
      console.error("Feedback submit failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#020517] text-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-3">
            Your experience matters to us
          </h1>
          <p className="text-gray-400">
            Thank you for taking a moment to share your thoughts.
          </p>
        </div>

        <div className="bg-[#0b0f2a] rounded-2xl p-8 shadow-xl border border-[#1c1c1c]">
          <div className="mb-8">
            <p className="mb-3 text-sm text-gray-300">Rate your session</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  type="button"
                >
                  <svg
                    className={`w-9 h-9 ${
                      star <= rating ? "fill-[#97ce23]" : "fill-gray-600"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm text-gray-300">
              Overall experience on EmoMate
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Excellent", "Good", "Average", "Not so good"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setExperience(opt)}
                  className={`px-4 py-3 rounded-lg border ${
                    experience === opt
                      ? "bg-[#97ce2320] border-[#97ce23] text-[#97ce23]"
                      : "border-gray-700 hover:border-gray-500"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm text-gray-300">
              Did you feel better after the session?
            </p>
            <div className="flex flex-col gap-3">
              {["Yes, much better", "A little better", "No change"].map(
                (opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFeeling(opt)}
                    className={`px-4 py-3 rounded-lg border text-left ${
                      feeling === opt
                        ? "bg-[#97ce2320] border-[#97ce23] text-[#97ce23]"
                        : "border-gray-700 hover:border-gray-500"
                    }`}
                  >
                    {opt}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm text-gray-300">
              What did you like about the mentor?
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Good listener",
                "Very understanding",
                "Helpful advice",
                "Made me feel comfortable",
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleLikedMostToggle(opt)}
                  className={`px-4 py-3 rounded-lg border text-left ${
                    likedMost.includes(opt)
                      ? "bg-[#97ce2320] border-[#97ce23] text-[#97ce23]"
                      : "border-gray-700 hover:border-gray-500"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm text-gray-300">
              Anything else you'd like to share?
            </p>
            <textarea
              value={thoughts}
              onChange={(e) => setThoughts(e.target.value)}
              rows={4}
              placeholder="Your thoughts are safe here..."
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 focus:border-[#97ce23] outline-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={submitted}
            className="w-full py-4 rounded-lg bg-[#97ce23] text-black font-semibold hover:opacity-90 transition"
          >
            {submitted ? "Thank you 💚" : "Submit Feedback"}
          </button>
        </div>
      </div>
    </div>
  );
}
