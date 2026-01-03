import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content mt-3 z-1 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Explore</a>
              <ul className="p-2">
                <li>
                  <a>For Students</a>
                </li>
                <li>
                  <a>For Mentors</a>
                </li>
              </ul>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>

        <Link to="/" className=" px-2">
          <img
            src="/icon2.png"
            alt="EmoMate"
            className="
      w-12 h-12
      sm:w-14 sm:h-14
      lg:w-16 lg:h-16
      object-contain
    "
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <Link to="/" className="cursor-pointer z-10">
              Home
            </Link>
          </li>

          <li>
            <details>
              <summary>Explore</summary>
              <ul className="p-2 bg-base-100 rounded-box w-44 shadow">
                <li>
                  <a>For Students</a>
                </li>
                <li>
                  <a>For Mentors</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link
          to="/signup"
          className="btn bg-[#20233c50] text-black hover:bg-[#81808a] border-none"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
