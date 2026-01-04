function UserHomePage() {

    return (
        <>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 h-screen">
            <div className="lg:col-span-1 bg-base-200 flex flex-col lg:flex-row
                items-center gap-6 px-6 rounded-xl">

                {/* Avatar */}
                <div className="avatar shrink-0">
                    <div className="w-24 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 items-center lg:items-start">
                    <p className="text-2xl leading-tight">ID NAME</p>
                    <p className="text-md leading-snug opacity-80">PROBLEM IN SHORT</p>

                    {/* Dropdown */}
                    <div className="dropdown dropdown-bottom dropdown-start mt-2">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-sm rounded-xl"
                        >
                            Click ▼
                        </div>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
                        >
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="lg:col-span-2 bg-base-200 py-4 px-6
                flex flex-col items-start">

                <p className="text-2xl leading-tight mb-4">
                    Past Listeners (premium)
                </p>

                <div className="flex flex-col lg:flex-row
                  w-full items-center lg:items-start
                  justify-center lg:justify-start gap-4">


                    <img className="avatar w-24 rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    <img className="avatar w-24 rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    <img className="avatar w-24 rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />

                    <img className="avatar w-24 rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />


                </div>
            </div>


            <div className="lg:col-span-3 bg-base-200"><div className="lg:col-span-2 bg-base-200 py-4 px-6
                flex flex-col items-start">

                <p className="text-2xl leading-tight mb-4">
                    Listener for this Problem-
                </p>
                <div className="flex flex-col lg:flex-row
                  w-full items-center lg:items-start
                  justify-center lg:justify-start gap-4">


                    <img className="avatar w-24 rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    <img className="avatar w-24 rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    <img className="avatar w-24 rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />

                    <img className="avatar w-24 rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />


                </div>
            </div>
            </div>
            <div className="lg:col-span-3 bg-base-200"><div className="lg:col-span-2 bg-base-200 py-4 px-6
                flex flex-col items-start">

                <p className="text-2xl leading-tight mb-4">
                    People with similar experience -
                </p>
                <div className="flex flex-col lg:flex-row
                  w-full items-center lg:items-start
                  justify-center lg:justify-start gap-4">


                    <img className="avatar w-24 rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    <img className="avatar w-24 rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    <img className="avatar w-24 rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />

                    <img className="avatar w-24 rounded-full" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />


                </div>
            </div>
            </div>

        </div>
    </>
    );
}
export default UserHomePage;