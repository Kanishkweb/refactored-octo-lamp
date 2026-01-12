function error404() {

    return (


        <>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <svg
                        width="600"
                        height="300"
                        viewBox="0 0 600 300"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#5048e5" />
                                <stop offset="100%" stop-color="#91c3fd" />
                            </linearGradient>
                        </defs>


                        <rect width="100%" height="100%" fill="#020517" />

                        <text
                            x="50%"
                            y="50%"
                            text-anchor="middle"
                            dominant-baseline="middle"
                            font-size="140"
                            font-weight="800"
                            font-family="Arial, Helvetica, sans-serif"
                            fill="url(#grad)"
                            letter-spacing="10"
                        >
                            404
                        </text>

                        <text
                            x="50%"
                            y="72%"
                            text-anchor="middle"
                            font-size="20"
                            font-family="Arial, Helvetica, sans-serif"
                            fill="#cbd5f5"
                            opacity="0.9"
                        >
                            Page Not Found
                        </text>
                    </svg>

                </div>
                <div className="rounded-4xl bg-[#5048e5] py-2 px-3 hover:bg-linear-to-r ease-in duration-200 hover:shadow-lg hover:shadow-[#5048e5]/50 hover:scale-105 hover:cursor-pointer to-[#91c3fd] from-[#5048e5]">
                    &#8592; Back to Home
                </div>


            </div>
        </>


    )
}

export default error404;