export default function Premium() {
    const TickIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 me-2 text-secondary shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
            />
        </svg>
    )

    return (
        <>
            <div className="bg-background min-h-screen w-full flex items-center justify-center px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Card 1 – Basic */}
                    <div className="card w-96 bg-primary text-accent border border-white/10 shadow-xl transition-all duration-300 ease-out hover:-translate-y-2">
                        <div className="card-body">

              <span className="badge badge-sm bg-[#5048e5] rounded-4xl text-white border-none w-fit">
                Basic
              </span>

                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-bold text-white">Basic</h2>
                                <span className="text-xl text-accent">Free</span>
                            </div>

                            <ul className="mt-6 flex flex-col gap-3 text-sm">
                                {[
                                    "Limited Chat Support",
                                    "Listener Access via Chat Only",
                                    "Standard Mentor Support",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <TickIcon />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                <button className="btn btn-block bg-white/10 text-white hover:bg-white/20 border-none">
                                    Get Started
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Card 2 – Premium */}
                    <div className="card w-96 bg-primary text-accent border border-white/10 shadow-[0_0_40px_rgba(80,72,229,0.35)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(80,72,229,0.55)]">
                        <div className="card-body">

              <span className="badge badge-sm bg-[#5048e5] rounded-4xl text-white border-none w-fit">
                Most Popular
              </span>

                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-bold text-white">Premium</h2>
                                <span className="text-xl text-accent">₹ 29/mo</span>
                            </div>

                            <ul className="mt-6 flex flex-col gap-3 text-sm">
                                {[
                                    "Chat Support Anytime, Day or Night",
                                    "Call Listeners Instantly",
                                    "Get Help Faster with Mentor Priority",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <TickIcon />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                <button className="btn btn-block bg-secondary hover:bg-secondary/90 text-white border-none">
                                    Subscribe
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}