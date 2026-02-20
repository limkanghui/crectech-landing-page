"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="px-6 py-24 md:py-32 max-w-6xl mx-auto">
      {/* Book a Meeting CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">
          Ready to explore?
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-dark mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Book a Meeting
        </h2>
        <p className="max-w-md mx-auto mb-6" style={{ color: "var(--color-muted)" }}>
          Schedule a call with the CRecTech team to explore deployment
          opportunities and partnership.
        </p>
        <a
          href="https://calendly.com/crectech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors animate-cta-pulse text-base"
        >
          Schedule via Calendly →
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Contact details */}
        <motion.div
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInLeft.transition}
        >
          <h3
            className="text-2xl font-bold text-dark mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact <span className="text-primary">Details</span>
          </h3>
          <p className="leading-relaxed mb-8" style={{ color: "var(--color-muted)" }}>
            We welcome enquiries and collaborations. Reach out to explore
            opportunities to partner with CRecTech in advancing waste-to-worth
            solutions.
          </p>
          <div className="flex items-center gap-3 text-dark">
            <span className="text-2xl" aria-hidden="true">✉</span>
            <a
              href="mailto:contact@crectech.net"
              className="font-semibold hover:text-primary transition-colors"
            >
              contact@crectech.net
            </a>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={slideInRight.initial}
          whileInView={slideInRight.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInRight.transition}
        >
          {submitted ? (
            <div className="rounded-2xl p-10 bg-bg-alt border border-primary/15 text-center">
              <p className="text-3xl mb-3" aria-hidden="true">✓</p>
              <h3
                className="font-bold text-dark text-lg mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Message sent!
              </h3>
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                Thank you for reaching out. We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 bg-white border border-primary/10 shadow-sm space-y-4"
            >
              {(
                [
                  { name: "name", label: "Name", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: "Phone Number", type: "tel", required: false },
                ] as const
              ).map((f) => (
                <div key={f.name}>
                  <label
                    htmlFor={f.name}
                    className="block text-xs font-semibold uppercase tracking-wide mb-1"
                    style={{ color: "rgba(26,46,31,0.6)" }}
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    type={f.type}
                    name={f.name}
                    value={form[f.name]}
                    onChange={handleChange}
                    placeholder={f.label}
                    required={f.required}
                    className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-bg text-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: "rgba(26,46,31,0.6)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest or project..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-bg text-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors text-sm animate-cta-pulse"
              >
                Submit →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
