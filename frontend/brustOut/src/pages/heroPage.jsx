import { useNavigate } from "react-router-dom";

export default function HeroPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <div className="flex flex-col gap-15">
          <div className="flex flex-col items-center justify-center w-full gap-10 m-10">
            <div className="h-full text-center text-4xl lg:text-6xl px-10 text-[#91c3fd] font-bold">
              You don't have to face it alone
            </div>
            <div className="text-center text-white/70">
              Connect with empathetic mentors anonymously. Share your feelings
              in a safe, judgment-free space whenever you need support.
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
              <button
                onClick={() => navigate("/signup")}
                className="bg-[#5048e5] text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
              >
                Start Talking Now
              </button>
              <button className="bg-transparent border border-[#5048e5] text-[#5048e5] px-6 py-3 rounded-xl hover:bg-[#5048e5] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <p className="text-5xl font-bold text-[#91c3fd]">How it works?</p>
            <div className="flex flex-col lg:flex-row items-center justify-around gap-8 px-4 py-10">
              <div
                className="card w-72 min-h-57.5
 bg-[#1c2229] hover:bg-[#0f1729] hover:scale-102 hover:text-white shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="card-body items-center text-center">
                  <span className="badge bg-amber-600 badge-lg">Step 1</span>
                  <h2 className="card-title text-xl text-[#91c3fd] font-bold mt-2">
                    Sign up anonymously
                  </h2>
                  <p className="text-sm text-white/70">
                    No personal information required. Your privacy is our
                    priority from the start.
                  </p>
                </div>
              </div>

              <div
                className="card w-72 min-h-57.5
 hover:bg-[#0f1729] hover:scale-102 hover:text-white bg-[#1c2229] shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="card-body items-center text-center">
                  <span className="badge badge-secondary badge-lg">Step 2</span>
                  <h2 className="card-title text-xl font-bold mt-2">
                    Share your feelings
                  </h2>
                  <p className="text-sm text-gray-500">
                    Express what you're going through in a safe, judgment-free
                    environment.
                  </p>
                </div>
              </div>

              <div
                className="card w-72  min-h-57.5
hover:bg-[#0f1729] hover:scale-102 hover:text-white bg-[#1c2229] shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="card-body items-center text-center">
                  <span className="badge badge-accent badge-lg">Step 3</span>
                  <h2 className="card-title text-xl font-bold mt-2">
                    Connect with a mentor
                  </h2>
                  <p className="text-sm text-gray-500">
                    Get matched with an empathetic mentor who understands and
                    cares.
                  </p>
                </div>
              </div>

              <div
                className="card w-72 min-h-57.5
 hover:bg-[#0f1729] hover:scale-102 hover:text-white bg-[#1c2229] shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="card-body items-center text-center">
                  <span className="badge badge-success badge-lg">Step 4</span>
                  <h2 className="card-title text-xl font-bold mt-2">
                    Feel supported
                  </h2>
                  <p className="text-sm text-gray-500">
                    Receive the emotional support you need, whenever you need
                    it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-4">
          <p className="text-5xl font-bold">Why choose Us?</p>

          <div className="flex flex-col gap-6 items-center lg:grid lg:grid-cols-3 lg:gap-8 px-6 py-12">
            <div className="card w-96 bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="card-body gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-base-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <h2 className="card-title">Completely Anonymous</h2>
                <p>
                  Your identity is always protected. Share freely without fear
                  of judgment.
                </p>
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="card-body gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-base-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                </div>
                <h2 className="card-title">24/7 Availability</h2>
                <p>Support is available whenever you need it, day or night.</p>
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="card-body gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-base-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="9" cy="7" r="4" />
                    <circle cx="17" cy="7" r="3" />
                    <path d="M3 21v-2a6 6 0 0112 0v2" />
                    <path d="M14 21v-2a5 5 0 015-5" />
                  </svg>
                </div>
                <h2 className="card-title">Empathetic Mentors</h2>
                <p>
                  Connect with trained mentors who truly care about your
                  wellbeing.
                </p>
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="card-body gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-base-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2l2.5 6L21 10l-6.5 2L12 18l-2.5-6L3 10l6.5-2z" />
                  </svg>
                </div>
                <h2 className="card-title">Instant Matching</h2>
                <p>
                  Get connected with the right mentor quickly and seamlessly.
                </p>
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="card-body gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-base-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15a4 4 0 01-4 4H7l-4 3V7a4 4 0 014-4h10a4 4 0 014 4z" />
                  </svg>
                </div>
                <h2 className="card-title">Safe Conversations</h2>
                <p>
                  Every conversation is private, secure, and moderated for
                  safety.
                </p>
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="card-body gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-base-200">
                  {/* Heart Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M12 21s-7-4.35-9-8.5C1.5 8 4.5 5 8 6.5
                       10 7.5 12 10 12 10s2-2.5 4-3.5
                       C19.5 5 22.5 8 21 12.5
                       19 16.65 12 21 12 21z"
                    />
                  </svg>
                </div>
                <h2 className="card-title">Judgment-Free Zone</h2>
                <p>
                  A welcoming space where you can be yourself and feel
                  understood.
                </p>
              </div>
            </div>
          </div>
          <section className="px-6 py-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-4xl font-bold text-base-content mb-4">
                Built with safety in mind
              </h2>
              <p className="text-base-content/70 text-lg">
                We&apos;ve implemented multiple layers of protection to ensure
                you feel safe and secure at all times.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="card bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <div className="card-body flex-row gap-5 items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100">
                    {/* Shield Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      End-to-end encryption
                    </h3>
                    <p className="text-base-content/70">
                      Your conversations are encrypted and secure. Nobody can
                      access them except you and your mentor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <div className="card-body flex-row gap-5 items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100">
                    {/* Eye Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      No data tracking
                    </h3>
                    <p className="text-base-content/70">
                      We don&apos;t track or sell your personal information.
                      Your privacy is guaranteed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <div className="card-body flex-row gap-5 items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100">
                    {/* User Check Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="9" cy="7" r="4" />
                      <path d="M3 21v-2a6 6 0 0112 0v2" />
                      <path d="M16 11l2 2 4-4" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Verified mentors
                    </h3>
                    <p className="text-base-content/70">
                      All mentors are carefully screened, trained, and verified
                      before joining our community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <div className="card-body flex-row gap-5 items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100">
                    {/* Alert Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Crisis resources
                    </h3>
                    <p className="text-base-content/70">
                      Immediate access to crisis helplines and professional
                      resources when you need them most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="px-6 py-24 bg-[#020517] text-white">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#91c3fd] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-white/70 text-lg">
                Everything you need to know before getting started with EmoMate.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "What is EmoMate and who is it for?",
                  a: "EmoMate is a safe and anonymous emotional support platform. It’s for anyone who feels overwhelmed, lonely, or simply needs someone to talk to without fear of judgment.",
                },
                {
                  q: "Is EmoMate free to use?",
                  a: "Yes, EmoMate offers free emotional support through trained listeners. We also offer a Premium plan with extended sessions and mentor access.",
                },
                {
                  q: "Are my conversations private?",
                  a: "Absolutely. All conversations are confidential and protected. We do not track, record, or share your personal data.",
                },
                {
                  q: "Who are the mentors on EmoMate?",
                  a: "Mentors are trained and verified individuals who provide empathetic guidance and emotional support in a safe, respectful manner.",
                },
                {
                  q: "What if I need urgent help?",
                  a: "If you are in immediate danger or crisis, please contact local emergency services or a crisis helpline. EmoMate is for emotional support, not emergency care.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-full bg-[#0f1729] rounded-xl p-5 box-border"
                >
                  <button
                    type="button"
                    className="w-full text-left font-semibold text-lg"
                    onClick={(e) => {
                      const el = e.currentTarget.nextSibling;
                      el.classList.toggle("hidden");
                    }}
                  >
                    {item.q}
                  </button>

                  <p className="mt-4 text-white/70 leading-relaxed hidden">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-white/70 mb-4">Still have questions?</p>
              <button className="bg-[#5048e5] px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                Contact Support
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
