/* Client component: handles form state and validation */
"use client";

import { useState, FormEvent } from "react";
import { site } from "@/content/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  message: string;
  website: string; // honeypot
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  partySize: "",
  message: "",
  website: ""
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(
    field: keyof FormState,
    value: string
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const nextErrors: Errors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) nextErrors.email = "Please enter your email.";
    if (values.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!values.date.trim()) nextErrors.date = "Please select a preferred date.";
    if (!values.time.trim()) nextErrors.time = "Please add a preferred time.";
    if (!values.partySize.trim()) nextErrors.partySize = "Please add a party size.";
    if (!values.message.trim()) nextErrors.message = "Tell us a bit about your visit.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    if (values.website.trim()) {
      // Honeypot filled – silently ignore
      setStatus("success");
      return;
    }
    setStatus("submitting");
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (!endpoint) {
        throw new Error("Missing form endpoint.");
      }
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        date: values.date,
        time: values.time,
        partySize: values.partySize,
        message: values.message,
        _subject: "New Shisu Sushi contact request",
        _replyto: values.email
      };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80"
      aria-describedby="contact-form-description"
    >
      <p
        id="contact-form-description"
        className="text-xs text-white/60"
      >
        Use this form to ask about reservations, private events, or anything else.
      </p>

      {/* Honeypot */}
      <div className="hidden">
        <label htmlFor="website">
          Website
        </label>
        <input
          id="website"
          name="website"
          type="text"
          autoComplete="off"
          value={values.website}
          onChange={(e) => handleChange("website", e.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Name"
          id="name"
          required
          value={values.name}
          error={errors.name}
          onChange={(v) => handleChange("name", v)}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(v) => handleChange("email", v)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Field
          label="Phone"
          id="phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(v) => handleChange("phone", v)}
        />
        <Field
          label="Preferred date"
          id="date"
          type="date"
          required
          value={values.date}
          error={errors.date}
          onChange={(v) => handleChange("date", v)}
        />
        <Field
          label="Preferred time"
          id="time"
          type="time"
          required
          value={values.time}
          error={errors.time}
          onChange={(v) => handleChange("time", v)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Party size"
          id="partySize"
          required
          value={values.partySize}
          error={errors.partySize}
          onChange={(v) => handleChange("partySize", v)}
        />
      </div>

      <Field
        label="Message"
        id="message"
        as="textarea"
        required
        value={values.message}
        error={errors.message}
        onChange={(v) => handleChange("message", v)}
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-shisu-gold px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-shisu-black hover:bg-shisu-gold/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-xs text-emerald-300">
          Thank you—your message has been sent. We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-300">
          Something went wrong. Please try again, or reach out at {site.email}.
        </p>
      )}
    </form>
  );
}

type FieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  as?: "input" | "textarea";
};

function Field({
  label,
  id,
  value,
  onChange,
  error,
  required,
  type = "text",
  as = "input"
}: FieldProps) {
  const common = {
    id,
    name: id,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    className:
      "w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-sm text-shisu-ivory placeholder:text-white/40 focus-visible:border-shisu-gold focus-visible:outline-none",
    "aria-invalid": error ? "true" : "false",
    "aria-describedby": error ? `${id}-error` : undefined
  };

  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="block text-xs font-medium uppercase tracking-[0.2em] text-white/60"
      >
        {label}
        {required && <span className="ml-1 text-red-300">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea {...(common as any)} rows={4} />
      ) : (
        <input {...(common as any)} type={type} />
      )}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}


