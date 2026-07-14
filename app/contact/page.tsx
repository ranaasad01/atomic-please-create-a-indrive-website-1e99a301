"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";
import { Car, Briefcase, Building2, MapPin, Send, CheckCircle, MessageCircle, Globe, Camera, Briefcase as Linkedin } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const contactOptions = [
  {
    id: "rider",
    icon: Car,
    title: "Rider Support",
    description:
      "Issues with a trip, payment, or account? Our rider support team is available 24/7.",
    cta: "Visit Rider Help Center",
    href: "#",
  },
  {
    id: "driver",
    icon: Briefcase,
    title: "Driver Support",
    description:
      "Questions about earnings, documents, or your driver account? We\u2019ve got you.",
    cta: "Visit Driver Help Center",
    href: "#",
  },
  {
    id: "business",
    icon: Building2,
    title: "Business Inquiries",
    description:
      "Interested in partnerships, press, or enterprise solutions? Reach our business team.",
    cta: "Email Business Team",
    href: "mailto:business@indrive.com",
  },
];

const offices = [
  {
    id: "hq",
    region: "Global HQ",
    city: "Limassol, Cyprus",
    address: "Anexartisias & Athinon, Limassol 3040, Cyprus",
    mapsHref: "#",
  },
  {
    id: "americas",
    region: "Americas",
    city: "São Paulo, Brazil",
    address: "Av. Paulista 1374, São Paulo, SP 01310-100",
    mapsHref: "#",
  },
  {
    id: "africa",
    region: "Africa & ME",
    city: "Dubai, UAE",
    address: "Dubai Internet City, Building 17, Dubai, UAE",
    mapsHref: "#",
  },
  {
    id: "apac",
    region: "Asia Pacific",
    city: "Almaty, Kazakhstan",
    address: "Al-Farabi Ave 77/7, Almaty 050060",
    mapsHref: "#",
  },
];

const socials = [
  {
    id: "twitter",
    icon: MessageCircle,
    label: "Twitter / X",
    href: "https://twitter.com/indrive",
  },
  {
    id: "facebook",
    icon: Globe,
    label: "Facebook",
    href: "https://facebook.com/indrive",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/indrive",
  },
  {
    id: "instagram",
    icon: Camera,
    label: "Instagram",
    href: "https://instagram.com/indrive",
  },
];

const subjectOptions = [
  "General Inquiry",
  "Rider Support",
  "Driver Support",
  "Partnership",
  "Press",
  "Other",
];

// ─── Input style helper ───────────────────────────────────────────────────────

const inputClass =
  "w-full bg-[#1A1A1A] border border-white/10 text-white rounded-lg p-3 focus:border-[#C8F53F] focus:outline-none transition-colors placeholder:text-white/30";

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#1A1A1A] text-white overflow-x-hidden">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[52vh] flex items-center justify-center overflow-hidden mesh-bg">
        {/* background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#C8F53F]/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#C8F53F]/5 blur-[90px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-32">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C8F53F]/30 bg-[#C8F53F]/10 text-[#C8F53F] text-sm font-semibold tracking-wide mb-6">
              Get in Touch
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold font-heading leading-tight mb-6">
              We&apos;re Here{" "}
              <span className="text-[#C8F53F]">to Help</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re a rider, driver, or partner — our team is
              ready to assist you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 2. CONTACT OPTIONS ───────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              How Can We Help?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option, i) => {
              const Icon = option.icon;
              return (
                <Reveal key={option.id} delay={i * 0.1}>
                  <div className="h-full bg-[#2D2D2D] rounded-2xl border border-white/8 p-8 flex flex-col gap-5 hover:border-[#C8F53F]/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#C8F53F]/10 flex items-center justify-center">
                      <Icon size={24} className="text-[#C8F53F]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-heading mb-2">
                        {option.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                    <Link
                      href={option.href}
                      className="inline-flex items-center gap-2 text-[#C8F53F] text-sm font-semibold hover:underline mt-auto"
                    >
                      {option.cta}
                      <Send size={14} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. CONTACT FORM ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
              Send Us a Message
            </h2>
            <p className="text-white/50 text-center mb-10">
              Fill in the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-[#2D2D2D] rounded-2xl p-8 border border-white/8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle size={56} className="text-[#C8F53F]" />
                  <h3 className="text-2xl font-bold font-heading">
                    Message Sent!
                  </h3>
                  <p className="text-white/60">
                    Thanks! We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        subject: "General Inquiry",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#C8F53F] text-[#1A1A1A] font-semibold text-sm hover:bg-[#d4f75a] transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/70 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/70 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-white/70 mb-1.5"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/70 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#C8F53F] text-[#1A1A1A] font-bold text-base hover:bg-[#d4f75a] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. REGIONAL OFFICES ──────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
              Our Offices
            </h2>
            <p className="text-white/50 text-center mb-12">
              Find us around the world.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {offices.map((office, i) => (
              <Reveal key={office.id} delay={i * 0.1}>
                <div className="bg-[#2D2D2D] rounded-xl border border-white/8 p-6 flex flex-col gap-4 hover:border-[#C8F53F]/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C8F53F]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#C8F53F]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[#C8F53F] text-xs font-semibold uppercase tracking-wider">
                        {office.region}
                      </span>
                      <h3 className="text-lg font-bold font-heading mt-0.5">
                        {office.city}
                      </h3>
                      <p className="text-white/50 text-sm mt-1">
                        {office.address}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={office.mapsHref}
                    className="text-sm text-white/40 hover:text-[#C8F53F] transition-colors font-medium"
                  >
                    Get Directions →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SOCIAL LINKS ──────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#111111] border-t border-white/8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-2xl font-bold font-heading">Follow Us</h2>
              <p className="text-white/50 text-sm">
                Stay up to date with the latest from inDrive.
              </p>
              <div className="flex items-center gap-4">
                {socials.map(({ id, icon: Icon, label, href }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#C8F53F] hover:border-[#C8F53F]/40 hover:bg-[#C8F53F]/5 transition-all duration-200"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
