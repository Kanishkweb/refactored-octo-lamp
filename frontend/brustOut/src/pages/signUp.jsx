import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex justify-center bg-linear-to-br from-[#020517] via-[#020517] to-[#0f1729] px-4 pt-32 pb-12">
      <div className="w-full max-w-md">
        <div className="bg-[#0f1729] rounded-2xl shadow-2xl p-8 border border-[#5048e5]/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5048e5] rounded-2xl mb-4 shadow-lg shadow-[#5048e5]/40">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">
              Create Account
            </h1>
            <p className="text-[#91c3fd]/80">Join us today and get started</p>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full px-4 py-3 border-2 border-[#5048e5]/30 rounded-xl hover:bg-[#5048e5]/10 font-medium text-white transition">
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#5048e5]/30" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#0f1729] text-[#91c3fd]/70 font-medium">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-7 mt-6">
            {[
              { type: "text", name: "name", placeholder: "Full Name" },
              { type: "email", name: "email", placeholder: "Email address" },
              { type: "password", name: "password", placeholder: "Password" },
              {
                type: "password",
                name: "confirmPassword",
                placeholder: "Confirm Password",
              },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                className="
                  w-full px-4 py-3
                  bg-[#020517]
                  border-2 border-[#5048e5]/30
                  rounded-xl
                  text-white placeholder:text-[#91c3fd]/50
                  focus:border-[#91c3fd]
                  focus:ring-4 focus:ring-[#5048e5]/30
                  outline-none
                "
              />
            ))}

            <button
              type="submit"
              className="
                w-full
                bg-[#5048e5]
                text-white
                font-semibold
                py-3.5
                rounded-xl
                hover:bg-[#4338ca]
                transition-all
                shadow-lg shadow-[#5048e5]/40
              "
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-[#91c3fd]/70 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#91c3fd] font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
