"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, DollarSign, Users, MapPin, MessageCircle, CreditCard, Shield } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const features = [
  {
    id: "negotiate",
    icon: DollarSign,
    title: "Negotiate Your Fare",
    desc: "Set your own price and let drivers compete for your ride. No surge pricing ever.",
  },
  {
    id: "choose-driver",
    icon: Users,
    title: "Choose Your Driver",
    desc: "See driver ratings, vehicle info, and photo before you confirm.",
  },
  {
    id: "tracking",
    icon: MapPin,
    title: "Real-Time Tracking",
    desc: "Track your ride live and share your trip with trusted contacts.",
  },
  {
    id: "chat",
    icon: MessageCircle,
    title: "In-App Chat",
    desc: "Communicate directly with your driver without sharing your number.",
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Safe Payments",
    desc: "Pay cash or card. All transactions are secure and transparent.",
  },
  {
    id: "support",
    icon: Shield,
    title: "24/7 Support",
    desc: "Round-the-clock support for any issue, any time, anywhere.",
  },
];

const screenshots = [
  {
    id: "set-fare",
    label: "Set Your Fare",
    desc: "Propose a price that works for you. No algorithm, no surge.",
    accent: "#C8F53F",
  },
  {
    id: "pick-driver",
    label: "Pick Your Driver",
    desc: "Browse driver profiles, ratings, and vehicle details.",
    accent: "#C8F53F",
  },
  {
    id: "track-ride",
    label: "Track Your Ride",
    desc: "Follow your journey in real time and share with loved ones.",
    accent: "#C8F53F",
  },
];

const trustBadges = [
  { value: "100M+", label: "Rides" },
  { value: "4.8★", label: "Rating" },
  { value: "150+", label: "Countries" },
];

export default function GetAppPage() {
  return (
    <main className="bg-[#1A1A1A] text-white overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden mesh-bg">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#C8F53F]/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8F53F]/5 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-[#C8F53F]/30 bg-[#C8F53F]/10 text-[#C8F53F] text-sm font-medium"
            >
              <Smartphone size={14} />
              Available on iOS &amp; Android
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Your Ride,{" "}
              <span className="text-[#C8F53F]">Your Price.</span>
              <br />
              Download inDrive.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white/60 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Propose a fare, pick your driver, and ride on your terms. No surge
              pricing, no hidden fees — just a fair deal between you and your
              driver.
            </motion.p>

            {/* App store buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-2">
              <Link
                href={BRAND.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#2D2D2D] border border-white/10 hover:border-[#C8F53F]/40 hover:bg-[#2D2D2D]/80 transition-all duration-200 group"
              >
                <Smartphone size={22} className="text-[#C8F53F]" />
                <div className="text-left">
                  <p className="text-white/50 text-xs leading-none mb-0.5">Download on the</p>
                  <p className="text-white font-semibold text-sm leading-none">App Store</p>
                </div>
              </Link>

              <Link
                href={BRAND.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#2D2D2D] border border-white/10 hover:border-[#C8F53F]/40 hover:bg-[#2D2D2D]/80 transition-all duration-200 group"
              >
                <Smartphone size={22} className="text-[#C8F53F]" />
                <div className="text-left">
                  <p className="text-white/50 text-xs leading-none mb-0.5">Get it on</p>
                  <p className="text-white font-semibold text-sm leading-none">Google Play</p>
                </div>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-6 mt-4 pt-4 border-t border-white/10"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex flex-col">
                  <span className="text-[#C8F53F] font-bold text-xl font-heading">
                    {badge.value}
                  </span>
                  <span className="text-white/50 text-sm">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — phone mockup */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 rounded-[40px] bg-[#C8F53F]/20 blur-[60px] scale-90" />

              {/* Phone shell */}
              <div className="relative w-64 h-[520px] rounded-[40px] bg-[#2D2D2D] border border-white/10 flex flex-col overflow-hidden shadow-2xl">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-5 pb-3">
                  <span className="text-white/40 text-xs">9:41</span>
                  <div className="w-20 h-5 rounded-full bg-[#1A1A1A]" />
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* App header */}
                <div className="px-5 pb-4">
                  <p className="text-white/40 text-xs mb-1">inDrive App</p>
                  <p className="text-white font-heading font-bold text-lg leading-tight">
                    Where to?
                  </p>
                </div>

                {/* Fare negotiation UI mockup */}
                <div className="mx-4 rounded-2xl bg-[#1A1A1A] border border-white/10 p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C8F53F]" />
                    <div className="h-2 flex-1 rounded-full bg-white/10" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="h-2 w-3/4 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-1 rounded-xl bg-[#C8F53F]/10 border border-[#C8F53F]/20 p-3">
                    <p className="text-[#C8F53F] text-xs font-semibold mb-1">Your offer</p>
                    <p className="text-white font-heading font-bold text-2xl">$8.00</p>
                  </div>
                </div>

                {/* Driver cards */}
                <div className="mx-4 mt-3 flex flex-col gap-2">
                  {["Alex K. — $8.00 ✓", "Maria S. — $9.50"].map((driver) => (
                    <div
                      key={driver}
                      className="rounded-xl bg-[#1A1A1A] border border-white/10 px-3 py-2 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-white/10" />
                        <span className="text-white text-xs">{driver}</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-[#C8F53F]/20 border border-[#C8F53F]/40" />
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <div className="mx-4 mt-auto mb-6">
                  <div className="rounded-2xl bg-[#C8F53F] py-3 text-center">
                    <span className="text-[#1A1A1A] font-bold text-sm">Confirm Ride</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#C8F53F]/30 bg-[#C8F53F]/10 text-[#C8F53F] text-sm font-medium mb-4">
                Built for riders
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Why riders love inDrive
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">
                Every feature is designed to give you more control, more
                transparency, and more value on every trip.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Reveal key={feature.id} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-[#2D2D2D] border border-white/[0.08] p-6 flex flex-col gap-4 hover:border-[#C8F53F]/30 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#C8F53F]/10 border border-[#C8F53F]/20 flex items-center justify-center">
                    <feature.icon size={22} className="text-[#C8F53F]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP SCREENSHOTS ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#C8F53F]/30 bg-[#C8F53F]/10 text-[#C8F53F] text-sm font-medium mb-4">
                App preview
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                See it in action
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">
                A seamless experience from fare proposal to drop-off.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {screenshots.map((screen, i) => (
              <Reveal key={screen.id} delay={i * 0.12}>
                <div className="flex flex-col items-center gap-5">
                  {/* Phone mockup */}
                  <div
                    className={`relative w-52 rounded-[36px] bg-[#2D2D2D] border border-white/10 overflow-hidden shadow-xl ${
                      i === 1 ? "h-[420px]" : "h-[380px]"
                    }`}
                  >
                    {/* Top bar */}
                    <div className="flex justify-center pt-4 pb-2">
                      <div className="w-16 h-4 rounded-full bg-[#1A1A1A]" />
                    </div>
                    {/* Screen content */}
                    <div className="px-4 flex flex-col gap-3">
                      <div className="rounded-xl bg-[#1A1A1A] p-3">
                        <div
                          className="h-2 rounded-full mb-2"
                          style={{ background: screen.accent, opacity: 0.8 }}
                        />
                        <div className="h-2 w-3/4 rounded-full bg-white/10" />
                      </div>
                      <div className="rounded-xl bg-[#1A1A1A] p-3 flex flex-col gap-2">
                        {[1, 2, 3].map((n) => (
                          <div key={n} className="flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded-full"
                              style={{
                                background:
                                  n === 1
                                    ? `${screen.accent}33`
                                    : "rgba(255,255,255,0.06)",
                              }}
                            />
                            <div
                              className="h-2 rounded-full flex-1"
                              style={{
                                background:
                                  n === 1
                                    ? `${screen.accent}55`
                                    : "rgba(255,255,255,0.08)",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      <div
                        className="rounded-xl p-3 text-center"
                        style={{ background: `${screen.accent}22`, border: `1px solid ${screen.accent}44` }}
                      >
                        <span
                          className="text-xs font-bold"
                          style={{ color: screen.accent }}
                        >
                          {screen.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="text-center">
                    <p className="font-heading font-bold text-white text-lg mb-1">
                      {screen.label}
                    </p>
                    <p className="text-white/50 text-sm max-w-[200px] mx-auto">
                      {screen.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div
              className="rounded-3xl p-12 md:p-16 text-center"
              style={{ background: "#C8F53F" }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight">
                Ready to ride on your terms?
              </h2>
              <p className="text-[#1A1A1A]/70 text-lg mb-10 max-w-md mx-auto">
                Join over 100 million riders who negotiate their own fares with
                inDrive.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href={BRAND.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#1A1A1A] text-white hover:bg-[#2D2D2D] transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Smartphone size={20} />
                  <div className="text-left">
                    <p className="text-white/50 text-xs leading-none mb-0.5">Download on the</p>
                    <p className="font-semibold text-sm leading-none">App Store</p>
                  </div>
                </Link>

                <Link
                  href={BRAND.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#1A1A1A] text-white hover:bg-[#2D2D2D] transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Smartphone size={20} />
                  <div className="text-left">
                    <p className="text-white/50 text-xs leading-none mb-0.5">Get it on</p>
                    <p className="font-semibold text-sm leading-none">Google Play</p>
                  </div>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
