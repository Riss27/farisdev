"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, CheckCircle2, Copy, Check } from "lucide-react";
import FadeIn from "./FadeIn";
import Magnetic from "./Magnetic";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, success
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});
  const timeoutRef = useRef(null);
  const copyTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rohmanfaris11@gmail.com");
      setCopied(true);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is unavailable
      setCopied(false);
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );

    window.open(`mailto:rohmanfaris11@gmail.com?subject=${subject}&body=${body}`, "_blank");

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });

    timeoutRef.current = setTimeout(() => {
      setStatus("idle");
    }, 6000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-forest/15 overflow-hidden relative transition-colors duration-500">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 max-w-[1600px] mx-auto">
        
        {/* Left Column: Heading & Info */}
        <div className="lg:col-span-5 relative flex flex-col justify-between h-full">
          <div>
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-6 sm:mb-12 text-forest">
                Get in Touch
              </h2>
            </FadeIn>
            
            <div className="mb-12">
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <span className="w-2 h-2 bg-pink shadow-[0_0_8px_rgba(244,63,94,0.45)] animate-pulse block rounded-full"></span>
                  <span className="uppercase tracking-widest text-[10px] sm:text-xs font-bold text-forest-muted">Available For New Opportunities</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase leading-[0.9] mb-6 text-forest lg:max-w-md">
                  Let's build<br />
                  something<br />
                  <span className="text-pink">solid.</span>
                </h3>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="text-forest/75 font-light text-base sm:text-lg max-w-sm mb-12">
                  I'm open to opportunities, collaborations, or just a chat about structural design and code.
                </p>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col items-start gap-4">
              <span className="text-xs uppercase tracking-widest text-forest-muted font-bold">Direct Message</span>
              <a 
                href="mailto:rohmanfaris11@gmail.com"
                className="relative inline-flex items-center gap-4 text-lg sm:text-xl md:text-2xl font-medium tracking-tight pb-2 group break-all"
              >
                <span className="relative z-10 text-forest group-hover:text-pink transition-colors duration-300">rohmanfaris11@gmail.com</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink transform origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"></span>
                <ArrowUpRight size={24} className="text-forest group-hover:text-pink group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 relative z-10 hidden sm:block" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-forest/25 bg-forest/[0.04] hover:bg-forest/[0.12] hover:border-forest/60 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 text-xs font-mono text-forest transition-all duration-200 group/copy"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-pink" aria-hidden="true" />
                    <span className="text-pink font-semibold">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="transition-colors duration-200 group-hover/copy:text-pink text-forest/70" aria-hidden="true" />
                    <span className="transition-colors duration-200 text-forest">Copy email address</span>
                  </>
                )}
              </button>
            </div>
          </FadeIn>
          
          {/* Decorative Background Text */}
          <div className="hidden lg:block absolute bottom-0 left-0 opacity-[0.02] select-none pointer-events-none leading-none whitespace-nowrap overflow-visible origin-bottom-left lg:transform lg:-rotate-90 -z-10 text-forest">
            <span className="text-[5rem] sm:text-[7rem] md:text-[10rem] font-black tracking-tighter">LINK</span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <FadeIn delay={0.4} direction="left" className="lg:col-span-7 flex flex-col justify-center">
          <div className="bg-cream-surface/90 border border-forest/15 p-6 sm:p-10 md:p-12 relative overflow-hidden group/form rounded-[28px] shadow-[0_20px_50px_rgba(22,46,32,0.04)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-forest/[0.04] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity duration-700 opacity-50 group-focus-within/form:opacity-100"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-8">
              
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-forest-muted font-bold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full bg-transparent border-b ${errors.name ? 'border-pink' : 'border-forest/20'} py-3 px-0 text-forest placeholder:text-forest-muted/50 focus:outline-none focus:border-pink focus:ring-0 transition-colors duration-300`}
                    placeholder="John Doe"
                    disabled={status === "loading"}
                  />
                  {errors.name && <span id="name-error" className="absolute -bottom-5 left-0 text-[10px] text-pink uppercase tracking-wider font-semibold">{errors.name}</span>}
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-forest-muted font-bold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full bg-transparent border-b ${errors.email ? 'border-pink' : 'border-forest/20'} py-3 px-0 text-forest placeholder:text-forest-muted/50 focus:outline-none focus:border-pink focus:ring-0 transition-colors duration-300`}
                    placeholder="john@example.com"
                    disabled={status === "loading"}
                  />
                  {errors.email && <span id="email-error" className="absolute -bottom-5 left-0 text-[10px] text-pink uppercase tracking-wider font-semibold">{errors.email}</span>}
                </div>
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2 relative mt-4">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-forest-muted font-bold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full bg-transparent border-b ${errors.message ? 'border-pink' : 'border-forest/20'} py-3 px-0 text-forest placeholder:text-forest-muted/50 focus:outline-none focus:border-pink focus:ring-0 transition-colors duration-300 resize-none`}
                  placeholder="Tell me about your project..."
                  disabled={status === "loading"}
                />
                {errors.message && <span id="message-error" className="absolute -bottom-5 left-0 text-[10px] text-pink uppercase tracking-wider font-semibold">{errors.message}</span>}
              </div>

              {/* Submit Button & Status Indicator */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 justify-between border-t border-forest/15 pt-8">
                
                <div role="status" aria-live="polite">
                  {status === "success" ? (
                    <div className="flex items-center gap-3 text-pink animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span className="text-xs uppercase tracking-widest font-bold">Mail App Triggered</span>
                    </div>
                  ) : (
                    <p className="text-xs uppercase tracking-widest text-forest-muted sm:max-w-xs text-center sm:text-left hidden sm:block">
                      Fills will launch your mail client directly.
                    </p>
                  )}
                </div>

                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    className="relative overflow-hidden bg-forest text-cream hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(22,46,32,0.25)] active:translate-y-0 active:scale-[0.98] font-bold uppercase tracking-widest text-xs px-8 py-4 flex items-center justify-center gap-3 group transition-all duration-200 w-full sm:w-auto min-w-[180px] rounded-full shadow-[0_8px_20px_rgba(22,46,32,0.14)]"
                  >
                    <span className="relative z-10 flex items-center gap-3 text-cream">
                      {status === "success" ? (
                        <>Opened Mailer</>
                      ) : (
                        <>
                          Send Message
                          <ArrowUpRight size={16} className="transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-pink text-cream/70" aria-hidden="true" />
                        </>
                      )}
                    </span>
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
