/* Client component: handles form state and validation using React Hook Form + Zod */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { site } from "@/content/site";

const contactFormSchema = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z.string().email("Please enter a valid email.").min(1, "Please enter your email."),
  phone: z.string().optional(),
  date: z.string().min(1, "Please select a preferred date."),
  time: z.string().min(1, "Please add a preferred time."),
  partySize: z.string().min(1, "Please add a party size."),
  message: z.string().min(1, "Tell us a bit about your visit."),
  website: z.string().optional() // honeypot
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      partySize: "",
      message: "",
      website: ""
    }
  });

  const websiteValue = watch("website");

  async function onSubmit(data: ContactFormData) {
    // Honeypot check
    if (data.website?.trim()) {
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
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: data.date,
        time: data.time,
        partySize: data.partySize,
        message: data.message,
        _subject: "New Shisu Sushi contact request",
        _replyto: data.email
      };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        <label htmlFor="website">Website</label>
        <input
          id="website"
          {...register("website")}
          type="text"
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Name"
          id="name"
          required
          error={errors.name?.message}
          {...register("name")}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          required
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Field
          label="Phone"
          id="phone"
          type="tel"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Field
          label="Preferred date"
          id="date"
          type="date"
          required
          error={errors.date?.message}
          {...register("date")}
        />
        <Field
          label="Preferred time"
          id="time"
          type="time"
          required
          error={errors.time?.message}
          {...register("time")}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Party size"
          id="partySize"
          required
          error={errors.partySize?.message}
          {...register("partySize")}
        />
      </div>

      <Field
        label="Message"
        id="message"
        as="textarea"
        required
        error={errors.message?.message}
        {...register("message")}
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
  error?: string;
  required?: boolean;
  type?: string;
  as?: "input" | "textarea";
} & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function Field({
  label,
  id,
  error,
  required,
  type = "text",
  as = "input",
  ...props
}: FieldProps) {
  const common = {
    id,
    className:
      "w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-sm text-shisu-ivory placeholder:text-white/40 focus-visible:border-shisu-gold focus-visible:outline-none",
    "aria-invalid": error ? "true" : "false",
    "aria-describedby": error ? `${id}-error` : undefined,
    ...props
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
