"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, CheckCircle2, Copy, Check, Calendar, Send } from "lucide-react";
import FadeIn from "./FadeIn";
import Magnetic from "./Magnetic";

const EMAIL = "rohmanfaris11@gmail.com";
const CALL_LINK = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Technical Interview / Introductory Call",
)}&body=${encodeURIComponent(
  "Hi Faris,\n\nI would like to schedule a brief 15-minute call regarding...",
)}`;

const fields = [
  { name: "name", label: "Your Name", type: "text", placeholder: "John Doe", autoComplete: "name" },
  { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com", autoComplete: "email" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});
  const resetTimer = useRef(null);
  const copyTimer = useRef(null);

  useEffect(
    () => () => {
      clearTimeout(resetTimer.current);
      clearTimeout(copyTimer.current);
    },
    [],
  );

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.email.trim()) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) next.email = "Enter a valid email address";
    if (!formData.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`,
    );

    await new Promise((resolve) => setTimeout(resolve, 400));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), 6000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const submitting = status === "submitting";

  return (
    <section id="contact" className="section-base">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left: pitch + direct contact */}
        <div className="lg:col-span-5 flex flex-col">
          <FadeIn>
            <h2 className="heading-section mb-6">Get in Touch</h2>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-pink animate-pulse" aria-hidden="true" />
              <span className="uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold text-forest-muted">
                Available for new opportunities
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.14}>
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] uppercase leading-[0.92] mb-6 text-forest">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-pink">solid.</span>
            </h3>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-forest/75 text-base sm:text-lg leading-relaxed max-w-sm mb-10">
              Open to engineering roles, collaborations, or a conversation about architecture and
              interface design.
            </p>
          </FadeIn>

          <FadeIn delay={0.26}>
            <div className="flex flex-col items-start gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.24em] text-forest-muted font-bold font-mono">
                Direct inquiry
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="link-underline group items-center gap-3 text-lg sm:text-xl md:text-2xl font-medium tracking-tight pb-2 break-all"
              >
                <span className="text-forest group-hover:text-pink transition-colors duration-300">
                  {EMAIL}
                </span>
                <ArrowUpRight
                  size={22}
                  className="text-forest group-hover:text-pink transition-colors duration-300 hidden sm:block"
                  aria-hidden="true"
                />
              </a>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-forest/20 bg-forest/[0.03] hover:bg-forest/[0.09] hover:border-forest/40 text-[11px] font-mono text-forest transition-colors duration-200"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-pink" aria-hidden="true" />
                      <span className="text-pink-ink font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} className="text-forest/60" aria-hidden="true" />
                      <span>Copy email</span>
                    </>
                  )}
                </button>

                <a
                  href={CALL_LINK}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-forest/20 bg-forest/[0.03] hover:bg-forest/[0.09] hover:border-forest/40 text-[11px] font-mono text-forest transition-colors duration-200"
                >
                  <Calendar size={13} className="text-pink" aria-hidden="true" />
                  <span>Request 15-min call</span>
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="card-base p-4 max-w-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-forest font-bold">
                  Engineering availability
                </span>
              </div>
              <p className="text-xs text-forest/75 leading-relaxed">
                Fullstack and frontend roles. Replies within 24 hours.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right: form */}
        <FadeIn delay={0.2} className="lg:col-span-7" animationType="scale">
          <div className="card-base p-6 sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                {fields.map((field) => (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label
                      htmlFor={field.name}
                      className="text-[10px] uppercase tracking-[0.18em] text-forest-muted font-bold font-mono"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      autoComplete={field.autoComplete}
                      value={formData[field.name]}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors[field.name])}
                      aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                      className={`input-base ${errors[field.name] ? "input-error" : ""}`}
                      placeholder={field.placeholder}
                      disabled={submitting}
                    />
                    {errors[field.name] && (
                      <span
                        id={`${field.name}-error`}
                        className="text-[10px] text-pink-ink uppercase tracking-wider font-semibold"
                      >
                        {errors[field.name]}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[10px] uppercase tracking-[0.18em] text-forest-muted font-bold font-mono"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`input-base resize-none ${errors.message ? "input-error" : ""}`}
                  placeholder="Tell me about the role, project, or team..."
                  disabled={submitting}
                />
                {errors.message && (
                  <span
                    id="message-error"
                    className="text-[10px] text-pink-ink uppercase tracking-wider font-semibold"
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-forest/10 pt-5">
                <div role="status" aria-live="polite" className="min-h-5">
                  {status === "success" && (
                    <span className="animate-slide-up-fade inline-flex items-center gap-2 text-pink-ink text-[11px] uppercase tracking-[0.18em] font-bold">
                      <CheckCircle2 size={16} aria-hidden="true" />
                      Mail client opened
                    </span>
                  )}
                  {status === "submitting" && (
                    <span className="inline-flex items-center gap-2 text-forest text-[11px] uppercase tracking-[0.18em] font-bold">
                      <span
                        className="w-4 h-4 border-2 border-forest/20 border-t-pink rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      Opening mail client
                    </span>
                  )}
                  {status === "idle" && (
                    <span className="text-[10px] uppercase tracking-[0.16em] text-forest-muted font-mono">
                      Submits via your mail client
                    </span>
                  )}
                </div>

                <Magnetic strength={0.15}>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary disabled:opacity-60 disabled:cursor-wait"
                  >
                    {status === "success" ? (
                      <>
                        Mail opened
                        <CheckCircle2 size={14} aria-hidden="true" />
                      </>
                    ) : submitting ? (
                      <>
                        Sending
                        <span
                          className="w-3.5 h-3.5 border-2 border-cream/30 border-t-cream rounded-full animate-spin"
                          aria-hidden="true"
                        />
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={14} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </Magnetic>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
