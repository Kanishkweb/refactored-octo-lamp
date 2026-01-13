export default function Login() {
  return (
    <div className="min-h-screen bg-[#020517] flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center gap-24 w-full max-w-6xl">
        {/* LOGIN CARD */}
        <div
          className="
            bg-[#0f1729]
            text-white
            rounded-2xl

            w-full max-w-lg
            min-h-115

            border border-[#5048e5]/20

            transition-all duration-300

            p-10
            shadow-2xl
          "
        >
          <h2 className="text-2xl font-semibold text-[#91c3fd] mb-8 text-center">
            Login
          </h2>

          {/* CONTINUE WITH GOOGLE */}
          <button
            type="button"
            className="
              w-full mb-6
              px-4 py-3
              rounded-xl
              hidden
              border-2 border-[#5048e5]/30
              text-white font-medium

              hover:bg-[#5048e5]/10
              transition
            "
          >
            Continue with Google
          </button>

          {/* DIVIDER */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#5048e5]/30" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#0f1729] text-[#91c3fd]/70 font-medium">
                login with email
              </span>
            </div>
          </div>

          {/* EMAIL */}
          <label className="block mb-2 text-sm text-[#91c3fd]/80">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="
              w-full mb-6
              px-4 py-3
              rounded-lg

              bg-[#020517]
              text-white placeholder:text-[#91c3fd]/50

              border-2 border-[#5048e5]/30
              focus:border-[#91c3fd]
              focus:ring-4 focus:ring-[#5048e5]/30

              outline-none
            "
          />

          {/* PASSWORD */}
          <label className="block mb-2 text-sm text-[#91c3fd]/80">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="
              w-full mb-8
              px-4 py-3
              rounded-lg

              bg-[#020517]
              text-white placeholder:text-[#91c3fd]/50

              border-2 border-[#5048e5]/30
              focus:border-[#91c3fd]
              focus:ring-4 focus:ring-[#5048e5]/30

              outline-none
            "
          />

          {/* LOGIN BUTTON */}
          <button
            type="button"
            className="
              w-full
              py-3
              rounded-xl

              bg-[#5048e5]
              text-white font-semibold

              hover:bg-[#4338ca]
              transition-all

              shadow-lg shadow-[#5048e5]/40
            "
          >
            Login
          </button>
        </div>

        {/* IMAGE */}
        <img
          src="https://www.inetsoft.com/images/screenshots/gallery/census.PNG"
          alt="dashboard"
          className="
            hidden lg:block
            h-105
            w-auto

            transition-transform duration-700 ease-out
            transform-gpu
            rotate-x-12 rotate-y-12
            hover:rotate-x-0 hover:rotate-y-0 hover:scale-[1.02]
          "
        />
      </div>
    </div>
  );
}
