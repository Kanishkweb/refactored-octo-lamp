import React from "react";

const UserSection = ({ title, users }) => (
  <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm">
    <h3 className="text-xl font-semibold mb-4 text-secondary">{title}</h3>

    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
      {Array.isArray(users) &&
        users.map((url, index) => (
          <div
            key={index}
            className="avatar hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="w-16 md:w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={url} alt="user" />
            </div>
          </div>
        ))}
    </div>
  </div>
);

function UserHomePage() {
  const demoImg =
    "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp";

  const userList = [demoImg, demoImg, demoImg, demoImg, demoImg];

  return (
    <div className="min-h-screen bg-base-300 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1 bg-primary text-primary-content rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-2xl">
            <div className="avatar">
              <div className="w-28 rounded-2xl ring ring-white/20">
                <img
                  src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                  alt="Profile"
                />
              </div>
            </div>

            <div className="text-center lg:text-left space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">ID NAME</h2>

              <p className="badge badge-secondary badge-outline py-3 px-4">
                Problem: Depression
              </p>

              {/* Dropdown */}
              <div className="dropdown dropdown-bottom mt-4">
                <button
                  tabIndex={0}
                  className="btn btn-sm btn-ghost bg-white/10 hover:bg-white/20 border-none normal-case"
                >
                  Manage Status ▼
                </button>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 text-base-content rounded-box z-10 w-52 p-2 shadow-2xl border border-base-200"
                >
                  <li>
                    <button>Edit Profile</button>
                  </li>
                  <li>
                    <button>Privacy Settings</button>
                  </li>
                  <li>
                    <button className="text-error">Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Premium Section */}
          <div className="lg:col-span-2 bg-base-100 rounded-3xl p-8 shadow-xl border border-base-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                Past Listeners
                <span className="badge badge-warning font-bold">PREMIUM</span>
              </h3>

              <button className="btn btn-ghost btn-sm text-primary">
                View All
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              {userList.map((url, i) => (
                <div key={i} className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src={url} alt="premium user" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserSection title="Recommended Listeners for You" users={userList} />
          <UserSection
            title="People with Similar Experience"
            users={userList}
          />
        </div>
      </div>
    </div>
  );
}

export default UserHomePage;
