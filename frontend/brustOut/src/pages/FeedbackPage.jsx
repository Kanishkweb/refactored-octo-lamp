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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
      setTimeout(() => window.location.reload(), 1000);
    } catch (err) {
      console.error("Feedback submit failed", err);
    }
  };

  return (
      <div className="min-h-screen bg-[#020517] text-white px-4 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3">
              Your experience matters to us
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Thank you for taking a moment to share your thoughts.
            </p>
          </div>

          {/* Card */}
          <div className="bg-[#0b0f2a] rounded-2xl p-5 sm:p-8 shadow-xl border border-[#1c1c1c]">

            {/* Rating */}
            <div className="mb-6 sm:mb-8">
              <p className="mb-3 text-sm text-gray-300">Rate your session</p>
              <div className="flex flex-wrap gap-2 lg:justify-center justify-start">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        onClick={() => setRating(star)}
                        type="button"
                        className="p-1"
                    >
                      <svg
                          className={`w-8 h-8 sm:w-9 sm:h-9 ${
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

            {/* Experience */}
            <div className="mb-6 sm:mb-8">
              <p className="mb-3 text-sm text-gray-300">
                Overall experience on EmoMate
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Excellent", "Good", "Average", "Not so good"].map((opt) => (
                    <button
                        key={opt}
                        onClick={() => setExperience(opt)}
                        className={`px-4 py-3 rounded-lg border text-sm sm:text-base ${
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

            {/* Feeling */}
            <div className="mb-6 sm:mb-8">
              <p className="mb-3 text-sm text-gray-300">
                Did you feel better after the session?
              </p>
              <div className="flex flex-col gap-3">
                {["Yes, much better", "A little better", "No change"].map(
                    (opt) => (
                        <button
                            key={opt}
                            onClick={() => setFeeling(opt)}
                            className={`px-4 py-3 rounded-lg border text-left text-sm sm:text-base ${
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

            {/* Liked most */}
            <div className="mb-6 sm:mb-8">
              <p className="mb-3 text-sm text-gray-300">
                What did you like about the listener?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Good listener",
                  "Very understanding",
                  "Helpful advice",
                  "Made me feel comfortable",
                ].map((opt) => (
                    <button
                        key={opt}
                        onClick={() => handleLikedMostToggle(opt)}
                        className={`px-4 py-3 rounded-lg border text-left text-sm sm:text-base ${
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

            {/* Thoughts */}
            <div className="mb-6 sm:mb-8">
              <p className="mb-3 text-sm text-gray-300">
                Anything else you'd like to share?
              </p>
              <textarea
                  value={thoughts}
                  onChange={(e) => setThoughts(e.target.value)}
                  rows={4}
                  placeholder="Your thoughts are safe here..."
                  className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm sm:text-base focus:border-[#97ce23] outline-none"
              />
            </div>

            {/* Submit */}
            <button
                onClick={handleSubmit}
                disabled={submitted}
                className="w-full py-3 sm:py-4 rounded-lg bg-[#97ce23] text-black font-semibold text-sm sm:text-base hover:opacity-90 transition"
            >
              {submitted ? "Thank you 💚" : "Submit Feedback"}
            </button>
          </div>
        </div>
      </div>
  );
}
