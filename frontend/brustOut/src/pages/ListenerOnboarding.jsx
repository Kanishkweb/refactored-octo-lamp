import { useState } from "react";

const steps = ["Basic Info", "Availability", "Experience", "Empathy", "Submit"];

export default function ListenerOnboarding() {
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    age: "",
    languages: [],
    hours: "",
    mode: [],
    experience: "",
    comfortAreas: [],
    whyListener: "",
    responseStyle: "",
    ethicsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (Array.isArray(form[name])) {
        setForm({
          ...form,
          [name]: checked
            ? [...form[name], value]
            : form[name].filter((v) => v !== value),
        });
      } else {
        setForm({ ...form, [name]: checked });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validateStep = () => {
    setError("");

    if (step === 0) {
      if (!form.name || !form.age || form.languages.length === 0) {
        setError("Please fill all required fields.");
        return false;
      }
      if (Number(form.age) < 18) {
        setError("You are not eligible to become a listener.");
        return false;
      }
    }

    if (step === 1) {
      if (!form.hours || form.mode.length === 0) {
        setError("Please complete this step.");
        return false;
      }
    }

    if (step === 2) {
      if (!form.experience || form.comfortAreas.length === 0) {
        setError("Please select your experience and topics.");
        return false;
      }
    }

    if (step === 3) {
      if (!form.whyListener || !form.responseStyle || !form.ethicsAccepted) {
        setError("All fields are required to continue.");
        return false;
      }
    }

    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020517] px-4">
      <div className="w-full max-w-2xl bg-[#0f1729] rounded-2xl shadow-2xl p-8 text-white">
        <h1 className="text-3xl font-bold text-[#91c3fd] mb-2">
          Become a Listener
        </h1>
        <p className="text-white/70 mb-6">
          Your empathy can make someone feel safe, heard, and less alone.
        </p>
        <div className="flex gap-2 mb-8">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full ${
                i <= step ? "bg-[#5048e5]" : "bg-white/20"
              }`}
            />
          ))}
        </div>
        {step === 0 && (
          <div className="space-y-4">
            <Input
              label="Preferred Name *"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <Input
              label="Age (18+)"
              name="age"
              type="number"
              min={1}
              value={form.age}
              onChange={handleChange}
              required
            />

            {form.age && Number(form.age) < 18 && (
              <p className="text-red-400 text-sm">
                You are not eligible to become a listener
              </p>
            )}

            <MultiSelect
              label="Languages you're comfortable with *"
              name="languages"
              options={["English", "Hindi", "Hinglish", "Marathi"]}
              values={form.languages}
              onChange={handleChange}
            />
          </div>
        )}
        {step === 1 && (
          <div className="space-y-4">
            <RadioGroup
              label="Weekly Availability *"
              name="hours"
              value={form.hours}
              options={["2–4 hrs", "4–6 hrs", "6+ hrs"]}
              onChange={handleChange}
            />
            <MultiSelect
              label="You're comfortable with *"
              name="mode"
              options={["Text Chat", "Voice Call"]}
              values={form.mode}
              onChange={handleChange}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <Select
              label="Your experience *"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              options={[
                "Friends / Family",
                "Online communities",
                "Volunteering",
                "No experience but willing to help",
              ]}
            />
            <MultiSelect
              label="Topics you're comfortable supporting *"
              name="comfortAreas"
              options={[
                "Breakups",
                "Loneliness",
                "Anxiety",
                "Career stress",
                "Family pressure",
              ]}
              values={form.comfortAreas}
              onChange={handleChange}
            />
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <Textarea
              label="Why do you want to be a listener? *"
              name="whyListener"
              value={form.whyListener}
              onChange={handleChange}
            />
            <Textarea
              label="How do you respond when someone is overwhelmed? *"
              name="responseStyle"
              value={form.responseStyle}
              onChange={handleChange}
            />
            <label className="flex gap-3 text-sm text-white/80">
              <input
                type="checkbox"
                name="ethicsAccepted"
                checked={form.ethicsAccepted}
                onChange={handleChange}
              />
              I agree to EmoMate's safety & ethics guidelines *
            </label>
          </div>
        )}
        {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
        <div className="flex justify-between mt-10">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20"
            >
              Back
            </button>
          )}

          {step < steps.length - 1 ? (
            <button
              onClick={nextStep}
              className="ml-auto px-6 py-2 rounded-lg bg-[#5048e5] font-semibold disabled:opacity-40"
            >
              Continue
            </button>
          ) : (
            <button className="ml-auto px-8 py-3 rounded-xl bg-[#91c3fd] text-[#020517] font-bold">
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const Input = ({ label, ...props }) => (
  <div>
    <label className="block mb-1 text-sm text-white/70">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-2 rounded-lg bg-[#020517] border border-white/10"
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block mb-1 text-sm text-white/70">{label}</label>
    <textarea
      {...props}
      rows={4}
      className="w-full px-4 py-2 rounded-lg bg-[#020517] border border-white/10"
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div>
    <label className="block mb-1 text-sm text-white/70">{label}</label>
    <select
      {...props}
      className="w-full px-4 py-2 rounded-lg bg-[#020517] border border-white/10"
    >
      <option value="">Select</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

const RadioGroup = ({ label, options, name, value, onChange }) => (
  <div>
    <p className="mb-2 text-sm text-white/70">{label}</p>
    <div className="flex gap-4">
      {options.map((o) => (
        <label key={o} className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name={name}
            value={o}
            checked={value === o}
            onChange={onChange}
          />
          {o}
        </label>
      ))}
    </div>
  </div>
);

const MultiSelect = ({ label, options, name, values, onChange }) => (
  <div>
    <p className="mb-2 text-sm text-white/70">{label}</p>
    <div className="flex flex-wrap gap-3">
      {options.map((o) => (
        <label key={o} className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name={name}
            value={o}
            checked={values.includes(o)}
            onChange={onChange}
          />
          {o}
        </label>
      ))}
    </div>
  </div>
);
