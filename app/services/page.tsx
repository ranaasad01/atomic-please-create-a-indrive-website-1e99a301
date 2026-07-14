"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";
import { Car, Package, Truck, ClipboardList, Bike, Check, ArrowRight } from 'lucide-react';

// ─── Service data ────────────────────────────────────────────────────────────

const services = [
  {
    id: "rides",
    eyebrow: "Rides",
    icon: Car,
    title: "City Rides, Your Way",
    description:
      "The original inDrive experience. Propose your fare, choose your driver, and ride without surge pricing.",
    features: [
      "Fare negotiation with every ride",
      "Choose driver by rating & vehicle",
      "No surge pricing ever",
    ],
    cta: "Request a Ride",
    ctaHref: "/get-app",
    stats: [
      { label: "Avg. wait", value: "3 min" },
      { label: "Cities", value: "700+" },
      { label: "Savings", value: "Up to 30%" },
    ],
  },
  {
    id: "delivery",
    eyebrow: "Delivery",
    icon: Package,
    title: "Fast & Reliable Delivery",
    description:
      "Send packages across the city in minutes. Track every delivery in real time.",
    features: [
      "Same-day city delivery",
      "Real-time package tracking",
      "Secure handling guarantee",
    ],
    cta: "Send a Package",
    ctaHref: "/get-app",
    stats: [
      { label: "Delivery time", value: "< 2 hrs" },
      { label: "Success rate", value: "99.2%" },
      { label: "Coverage", value: "500+ cities" },
    ],
  },
  {
    id: "freight",
    eyebrow: "Freight",
    icon: Truck,
    title: "Heavy Freight, Simplified",
    description:
      "Move large cargo with verified freight drivers. Get competitive quotes instantly.",
    features: [
      "Verified freight operators",
      "Competitive instant quotes",
      "Door-to-door logistics",
    ],
    cta: "Move Freight",
    ctaHref: "/get-app",
    stats: [
      { label: "Max load", value: "20 tons" },
      { label: "Operators", value: "50K+" },
      { label: "Routes", value: "200+ cities" },
    ],
  },
  {
    id: "tasks",
    eyebrow: "Tasks",
    icon: ClipboardList,
    title: "Get Tasks Done",
    description:
      "Hire trusted helpers for moving, assembly, cleaning, and more. Rate and review every tasker.",
    features: [
      "Vetted local taskers",
      "Flexible scheduling",
      "Transparent pricing",
    ],
    cta: "Post a Task",
    ctaHref: "/get-app",
    stats: [
      { label: "Task types", value: "30+" },
      { label: "Avg. rating", value: "4.8 ★" },
      { label: "Taskers", value: "100K+" },
    ],
  },
  {
    id: "courier",
    eyebrow: "Courier",
    icon: Bike,
    title: "Express Courier Service",
    description:
      "Ultra-fast document and small parcel delivery by bike or scooter. Perfect for urgent sends.",
    features: [
      "Under 60-minute delivery",
      "Live GPS tracking",
      "Proof of delivery photo",
    ],
    cta: "Send Now",
    ctaHref: "/get-app",
    stats: [
      { label: "Avg. delivery", value: "45 min" },
      { label: "Couriers", value: "80K+" },
      { label: "On-time rate", value: "97%" },
    ],
  },
];

// ─── Service visual card ─────────────────────────────────────────────────────

function ServiceVisual({
  service,
}: {
  service: (typeof services)[number];
}) {
  const Icon = service.icon;
  return (
    <div className="bg-[#2D2D2D] rounded-2xl p-8 flex flex-col gap-6 border border-white/10 h-full min-h-[320px]">
      {/* Icon + name */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl bg-[#C8F53F]/10 flex items-center justify-center flex-shrink-0">
          <Icon size={32} color="#C8F53F" strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-white/50 text-xs uppercase tracking-widest font-medium">
            inDrive
          </p>
          <p className="text-white font-bold text-xl font-heading">
            {service.eyebrow}
          </p>
        </div>
      </div>

      {/* Decorative stat pills grid */}
      <div className="grid grid-cols-1 gap-3 mt-auto">
        {service.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center justify-between bg-white/5 border border-white/8 rounded-xl px-4 py-3"
          >
            <span className="text-white/50 text-sm">{stat.label}</span>
            <span className="text-[#C8F53F] font-bold text-sm font-heading">
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* Decorative bottom bar */}
      <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#C8F53F]/60 via-[#C8F53F]/20 to-transparent" />
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main className="bg-[#1A1A1A] text-white overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mesh-bg">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#C8F53F]/8 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-[#C8F53F]/5 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-32 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Eyebrow */}
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8F53F]/30 bg-[#C8F53F]/10 text-[#C8F53F] text-sm font-semibold tracking-wide"
            >
              Our Services
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-extrabold font-heading leading-[1.05] tracking-tight"
            >
              One App.{" "}
              <span className="text-[#C8F53F]">Endless</span>
              <br />
              Possibilities.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              From daily commutes to freight logistics, {BRAND.name} connects
              you with the right service at a fair price.
            </motion.p>

            {/* Service pills */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-3 mt-4"
            >
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D2D2D] border border-white/10 text-white/80 text-sm font-medium hover:border-[#C8F53F]/40 hover:text-[#C8F53F] transition-all duration-200"
                  >
                    <Icon size={16} />
                    {s.eyebrow}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES DETAIL ───────────────────────────────────────────────── */}
      <section className="py-8">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              id={service.id}
              className="py-20 border-b border-white/5 last:border-b-0"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Content side */}
                  <Reveal>
                    <div className="flex flex-col gap-6">
                      {/* Eyebrow */}
                      <div className="inline-flex items-center gap-2 self-start">
                        <div className="w-8 h-8 rounded-lg bg-[#C8F53F]/10 flex items-center justify-center">
                          <Icon size={16} color="#C8F53F" />
                        </div>
                        <span className="text-[#C8F53F] text-sm font-semibold uppercase tracking-widest">
                          {service.eyebrow}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-4xl md:text-5xl font-extrabold font-heading leading-tight">
                        {service.title}
                      </h2>

                      {/* Description */}
                      <p className="text-white/60 text-lg leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="flex flex-col gap-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-white/80"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#C8F53F]/15 flex items-center justify-center flex-shrink-0">
                              <Check size={12} color="#C8F53F" strokeWidth={2.5} />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="mt-2">
                        <Link
                          href={service.ctaHref}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C8F53F] text-[#1A1A1A] font-bold text-sm hover:bg-[#d4f75a] transition-all duration-200 hover:scale-105 active:scale-95"
                        >
                          {service.cta}
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </Reveal>

                  {/* Visual side */}
                  <Reveal delay={0.15}>
                    <ServiceVisual service={service} />
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#C8F53F]/6 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C8F53F]/30 bg-[#C8F53F]/10 text-[#C8F53F] text-sm font-semibold tracking-wide mb-6">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              Start using{" "}
              <span className="text-[#C8F53F]">{BRAND.name}</span> today
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Join millions of riders and drivers who choose fair pricing and
              real choice every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-app"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C8F53F] text-[#1A1A1A] font-bold text-base hover:bg-[#d4f75a] transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Download the App
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/driver-signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-base hover:border-[#C8F53F]/50 hover:text-[#C8F53F] transition-all duration-200"
              >
                Drive With Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
