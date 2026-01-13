import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_SERVER_DOMAIN;

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [available, setAvailable] = useState(null);
  const [checking, setChecking] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const generateUsername = async () => {
    const res = await axios.get(`${API}/user/generate-username`);
    setFormData((p) => ({ ...p, username: res.data.username }));
  };

  useEffect(() => {
    generateUsername();
  }, []);

  useEffect(() => {
    if (!formData.username) return;

    setChecking(true);
    const t = setTimeout(async () => {
      const res = await axios.get(
        `${API}/user/check-username?username=${formData.username}`
      );
      setAvailable(res.data.available);
      setChecking(false);
    }, 500);

    return () => clearTimeout(t);
  }, [formData.username]);

  // handle Submit Form
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(`${API}/user/signup`, {
      username: formData.username,
      password: formData.password
    });

    alert("Signed up successfully");

    setFormData({
      username: "",
      password: ""
    });

    generateUsername();
    
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.error || "Signup failed");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#020517] via-[#020517] to-[#0f1729] px-4">
      <div className="w-full max-w-sm">
        <div className="bg-[#0c1324] rounded-2xl px-7 py-8 border border-[#5048e5]/15 shadow-xl">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#5048e5]/20">
              <span className="text-5xl">🌱</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-center text-xl font-semibold text-white">
            A safe place to talk
          </h1>
          <p className="text-center text-sm text-[#91c3fd] mt-1 mb-6">
            No email. No real name. Just you.
          </p>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <label className="text-xs text-[#91c3fd]/70">
              Your anonymous name
            </label>
            <span
              title="This name hides your real identity. You can change it."
              className="ml-2 cursor-help  text-gray-600"
            >
              ℹ
            </span>

            <div className="flex items-center gap-2 mt-2">
              <input
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="
                flex-1 h-11 px-4
                bg-[#020517]
                border border-[#5048e5]/30
                rounded-xl
                text-white text-sm
                focus:outline-none focus:ring-2 focus:ring-[#5048e5]/40
              "
              />

              <button
                type="button"
                onClick={generateUsername}
                className="
                h-11 w-11 flex items-center justify-center
                rounded-xl
                bg-[#5048e5]/20
                hover:bg-[#5048e5]/30
                text-white
              "
              >
                🔄
              </button>
            </div>

            <div className="text-xs mt-2 h-4">
              {checking && <span className="text-[#91c3fd]/50">Checking…</span>}
              {available === true && (
                <span className="text-green-400">Available</span>
              )}
              {available === false && (
                <span className="text-red-400">Taken</span>
              )}
            </div>

            {/* Password */}
            <label className="text-xs text-[#91c3fd]/70 mt-4 block">
              Create a password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Only you will know this"
                className="
                    w-full h-11 px-4 pr-12 mt-2
                    bg-[#020517]
                    border border-[#5048e5]/30
                    rounded-xl
                    text-white text-sm
                    focus:outline-none focus:ring-2 focus:ring-[#5048e5]/40
                    "
              />

              {/* Eye Toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                    absolute right-2 top-4 bottom-2
                    w-8
                    flex items-center justify-center
                    rounded-lg
                    text-[#91c3fd]/60
                    hover:text-[#91c3fd]
                    hover:bg-[#5048e5]/5
                    transition
                    "
                aria-label="Toggle password visibility"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {/* CTA */}
            <button
              type="submit"
              className="
                    emomate-primary-btn
                    w-full h-11 mt-6
                    rounded-xl
                    text-white text-sm font-medium
                "
            >
              Enter anonymously
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-[#91c3fd]/60 mt-4">
            Already have a name?{" "}
            <Link to="/login" className="text-[#91c3fd] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
