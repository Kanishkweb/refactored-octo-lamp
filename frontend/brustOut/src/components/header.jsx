import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Header() {
  const mobileJoinRef = useRef(null);
  const desktopJoinRef = useRef(null);

  const closeMobileJoin = () => {
    if (mobileJoinRef.current) {
      mobileJoinRef.current.removeAttribute("open");
    }
  };

  const closeDesktopJoin = () => {
    if (desktopJoinRef.current) {
      desktopJoinRef.current.removeAttribute("open");
    }
  };

  return (
    <div className="navbar bg-[#020517] text-white shadow-md px-4 fixed top-0 left-0 w-full z-50">
      {/* LEFT */}
      <div className="navbar-start">
        {/* MOBILE MENU */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 w-56 rounded-box bg-[#0f1729] p-2 shadow"
          >
            <li>
              <Link to="/" onClick={closeMobileJoin}>
                Home
              </Link>
            </li>

            <li>
              <details ref={mobileJoinRef}>
                <summary>Join As</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/student-onboarding" onClick={closeMobileJoin}>
                      I Need Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/listener-onboarding" onClick={closeMobileJoin}>
                      I Want to Support
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link to="/about" onClick={closeMobileJoin}>
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* LOGO */}
        <Link to="/" className="px-2">
          <img
            src="/icon2.png"
            alt="EmoMate"
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
          />
        </Link>
      </div>

      {/* CENTER (DESKTOP MENU) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <details ref={desktopJoinRef}>
              <summary className="cursor-pointer">Join As</summary>
              <ul className="p-2 bg-[#0f1729] rounded-box w-48 shadow">
                <li>
                  <Link to="/student-onboarding" onClick={closeDesktopJoin}>
                    I Need Support
                  </Link>
                </li>
                <li>
                  <Link to="/listener-onboarding" onClick={closeDesktopJoin}>
                    I Want to Support
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>

      {/* RIGHT – Login / Signup */}
      <div className="navbar-end flex items-center gap-3">
        <Link
          to="/login"
          className="
      text-sm
      px-3 py-1.5
      rounded-md
      border border-white/20
      text-white
      hover:bg-white/10
      transition
    "
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="
      text-sm
      px-3 py-1.5
      rounded-md
      border border-white/20
      text-white
      hover:bg-white/10
      transition
    "
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
