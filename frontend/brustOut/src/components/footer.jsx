import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-[#0f1729] text-white p-10">
      <aside>
        <img src="/android-chrome-512.png" alt="favicon-48.png"


          className="fill-[#91c3fd] size-30"
        />

        <p className="text-white/70">
          <span className="text-[#91c3fd] font-semibold">Emomate</span>
          <br />A safe space to talk, heal, and grow together.
        </p>
      </aside>

      <nav>
        <h6 className="footer-title text-[#91c3fd]">Services</h6>
        <Link
          to="/feedback"
          className="link link-hover text-white/70 hover:text-[#91c3fd]"
        >
          Anonymous Chat
        </Link>

        <Link
          to="/listener/L-001"
          className="link link-hover text-white/70 hover:text-[#91c3fd]"
        >
          Mentorship
        </Link>

        <Link to="/dashboard" className="text-white/70 hover:text-[#91c3fd]">
          Dashboard
        </Link>
      </nav>

      <nav>
        <h6 className="footer-title text-[#91c3fd]">Company</h6>
        <Link
          to="/about"
          className="link link-hover text-white/70 hover:text-[#91c3fd]"
        >
          About Us
        </Link>
        <a className="link link-hover text-white/70 hover:text-[#91c3fd]">
          Contact
        </a>
        <Link
          to="/listener"
          className="link link-hover text-white/70 hidden hover:text-[#91c3fd]"
        >
          none
        </Link>{" "}
      </nav>

      <nav>
        <h6 className="footer-title text-[#91c3fd]">Legal</h6>
        <a className="link link-hover text-white/70 hover:text-[#91c3fd]">
          Terms and condition
        </a>
        <a className="link link-hover text-white/70 hover:text-[#91c3fd]">
          Privacy Policy
        </a>
      </nav>
    </footer>
  );
}
