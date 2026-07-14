"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Shield, UserCheck, AlertTriangle, Share2, Star, Phone, EyeOff, CheckCircle, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const safetyFeatures = [
  {
    id: "driver-verification",
    icon: UserCheck,
    title: "Driver Verification",
    description:
      "All drivers undergo identity verification, license checks, and background screening before their first ride.",
  },
  {
    id: "in-app-sos",
    icon: AlertTriangle,
    title: "In-App SOS",
    description:
      "One tap sends your location and trip details to emergency services and your trusted contacts.",
  },
  {
    id: "trip-sharing",
    icon: Share2,
    title: "Real-Time Trip Sharing",
    description:
      "Share your live trip link with family or friends so they can follow along in real time.",
  },
  {
    id: "two-way-ratings",
    icon: Star,
    title: "Two-Way Ratings",
    description:
      "Both riders and drivers rate each trip. Low-rated users are flagged and reviewed by our safety team.",
  },
  {
    id: "safety-support",
    icon: Phone,
    title: "24/7 Safety Support",
    description:
      "Our dedicated safety team is available around the clock to respond to any incident or concern.",
  },
  {
    id: "masked-numbers",
    icon: EyeOff,
    title: "Masked Phone Numbers",
    description:
      "Your personal phone number is never shared. All calls and messages go through our secure in-app system.",
  },
];

const riderTips = [
  "Verify your driver's photo and plate before entering",
  "Share your trip with a trusted contact",
  "Use the in-app SOS button in emergencies",
  "Rate your driver after every trip",
  "Report any issue directly in the app",
];

const driverTips = [
  "Riders are verified with phone numbers",
  "Rate and block problematic riders",
  "Emergency SOS available at all times",
  "Dedicated driver support line",
  "Trip insurance coverage in select markets",
];

const communityStandards = [
  {
    id: "respect",
    title: "Respect",
    description:
      "Treat every person with dignity. Harassment of any kind is grounds for permanent removal.",
  },
  {
    id: "honesty",
    title: "Honesty",
    description:
      "Accurate profiles, honest ratings, and transparent pricing keep our community trustworthy.",
  },
  {
    id: "accountability",
    title: "Accountability",
    description:
      "Every trip is logged. Our team reviews reports and takes swift action on violations.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function SafetyPage() {
  return (
    <main className="bg-[#1A1A1A] text-white overflow-x-hidden">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden mesh-bg">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#C8F53F]/8 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8F53F]/5 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-32 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Shield icon */}
            <motion.div
              variants={fadeInUp}
              className="w-24 h-24 rounded-full bg-[#C8F53F]/10 border border-[#C8F53F]/20 flex items-center justify-center mb-2"
            >
              <Shield size={48} className="text-[#C8F53F]" />
            </motion.div>

            {/* Eyebrow */}
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8F53F]/10 border border-[#C8F53F]/20 text-[#C8F53F] text-sm font-semibold tracking-wide uppercase"
            >
              Your Safety, Our Priority
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight"
            >
              Built Safe.{" "}
              <span className="text-[#C8F53F]">Designed to Protect.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
            >
              Every feature, every policy, every decision at inDrive is made with your safety in
              mind — whether you&apos;re a rider or a driver.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. SAFETY FEATURES GRID ──────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#C8F53F]/10 border border-[#C8F53F]/20 text-[#C8F53F] text-sm font-semibold tracking-wide uppercase mb-4">
              Built-In Protection
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Safety Features
            </h2>
            <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
              Comprehensive tools and policies that protect every trip, every time.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {safetyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  variants={fadeInUp}
                  className="bg-[#2D2D2D] rounded-2xl p-7 border border-white/8 hover:border-[#C8F53F]/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C8F53F]/10 flex items-center justify-center mb-5 group-hover:bg-[#C8F53F]/20 transition-colors">
                    <Icon size={24} className="text-[#C8F53F]" />
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-3">{feature.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 3. RIDER SAFETY ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <Reveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#C8F53F]/10 border border-[#C8F53F]/20 text-[#C8F53F] text-sm font-semibold tracking-wide uppercase mb-6">
                For Riders
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                Ride with{" "}
                <span className="text-[#C8F53F]">Confidence</span>
              </h2>
              <ul className="space-y-4">
                {riderTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-[#C8F53F] mt-0.5 shrink-0"
                    />
                    <span className="text-white/75 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Right: styled card visual */}
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="bg-[#2D2D2D] rounded-3xl p-8 border border-white/8 glow-lime">
                  {/* Mock phone UI */}
                  <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#C8F53F]/20 flex items-center justify-center">
                        <Shield size={20} className="text-[#C8F53F]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Trip Active</p>
                        <p className="text-xs text-white/40">Safety features enabled</p>
                      </div>
                      <span className="ml-auto text-xs bg-[#C8F53F]/10 text-[#C8F53F] px-2 py-1 rounded-full border border-[#C8F53F]/20">
                        Live
                      </span>
                    </div>

                    <div className="space-y-3">
                      {[
                        { label: "Driver verified", status: "✓" },
                        { label: "Trip shared with contact", status: "✓" },
                        { label: "SOS ready", status: "✓" },
                        { label: "Route monitored", status: "✓" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/8"
                        >
                          <span className="text-sm text-white/70">{item.label}</span>
                          <span className="text-[#C8F53F] font-bold">{item.status}</span>
                        </div>
                      ))}
                    </div>

                    <button className="mt-6 w-full py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-red-500/20 transition-colors">
                      <AlertTriangle size={16} />
                      Emergency SOS
                    </button>
                  </div>
                </div>
                {/* Decorative glow dot */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#C8F53F]/15 blur-2xl" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. DRIVER SAFETY ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: styled card visual */}
            <Reveal>
              <div className="relative">
                <div className="bg-[#2D2D2D] rounded-3xl p-8 border border-white/8">
                  <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#C8F53F]/20 flex items-center justify-center">
                        <UserCheck size={20} className="text-[#C8F53F]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Driver Dashboard</p>
                        <p className="text-xs text-white/40">All protections active</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { label: "Rider verified", value: "Phone confirmed" },
                        { label: "Your rating", value: "4.9 ★" },
                        { label: "Support line", value: "Available" },
                        { label: "SOS status", value: "Armed" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/8"
                        >
                          <span className="text-sm text-white/70">{item.label}</span>
                          <span className="text-[#C8F53F] text-sm font-semibold">{item.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <button className="py-2.5 rounded-xl bg-[#C8F53F]/10 border border-[#C8F53F]/20 text-[#C8F53F] text-xs font-semibold hover:bg-[#C8F53F]/20 transition-colors">
                        Call Support
                      </button>
                      <button className="py-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold hover:bg-red-500/20 transition-colors">
                        SOS
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#C8F53F]/10 blur-2xl" />
              </div>
            </Reveal>

            {/* Right: copy */}
            <Reveal delay={0.15}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#C8F53F]/10 border border-[#C8F53F]/20 text-[#C8F53F] text-sm font-semibold tracking-wide uppercase mb-6">
                For Drivers
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                Drive with{" "}
                <span className="text-[#C8F53F]">Peace of Mind</span>
              </h2>
              <ul className="space-y-4">
                {driverTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-[#C8F53F] mt-0.5 shrink-0"
                    />
                    <span className="text-white/75 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. COMMUNITY GUIDELINES ──────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#C8F53F]/10 border border-[#C8F53F]/20 text-[#C8F53F] text-sm font-semibold tracking-wide uppercase mb-4">
              How We Operate
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Community Standards
            </h2>
            <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
              The principles that guide every interaction on the inDrive platform.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {communityStandards.map((standard, index) => (
              <motion.div
                key={standard.id}
                variants={fadeInUp}
                className="relative bg-[#2D2D2D] rounded-2xl p-8 border border-white/8 hover:border-[#C8F53F]/30 transition-all duration-300 text-center group"
              >
                {/* Large number background */}
                <span className="absolute top-4 right-6 text-7xl font-bold text-white/4 font-heading select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-[#C8F53F]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C8F53F]/20 transition-colors">
                  <Shield size={28} className="text-[#C8F53F]" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4">{standard.title}</h3>
                <p className="text-white/55 leading-relaxed">{standard.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="bg-[#2D2D2D] rounded-3xl p-12 md:p-16 border border-white/8 text-center relative overflow-hidden">
              {/* Background glow */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#C8F53F]/8 blur-[80px]" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#C8F53F]/10 border border-[#C8F53F]/20 flex items-center justify-center mx-auto mb-6">
                  <Shield size={32} className="text-[#C8F53F]" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                  Questions about safety?
                </h2>
                <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto">
                  Our support teams are here to help. Reach out through the help centers or
                  download the app to access safety features directly.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-200 text-sm font-semibold"
                  >
                    Rider Help Center
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-200 text-sm font-semibold"
                  >
                    Driver Help Center
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/get-app"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C8F53F] text-[#1A1A1A] hover:bg-[#d4f75a] transition-all duration-200 text-sm font-bold hover:scale-105 active:scale-95"
                  >
                    Download the App
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
