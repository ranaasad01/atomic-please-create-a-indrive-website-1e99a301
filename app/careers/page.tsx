"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";
import { Zap, Globe, Target, DollarSign, Laptop, Heart, BookOpen, TrendingUp, MapPin, Briefcase } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

type Department =
  | "All"
  | "Engineering"
  | "Product"
  | "Design"
  | "Operations"
  | "Marketing"
  | "Legal";

interface Job {
  id: string;
  title: string;
  department: Exclude<Department, "All">;
  location: string;
  type: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const DEPARTMENTS: Department[] = [
  "All",
  "Engineering",
  "Product",
  "Design",
  "Operations",
  "Marketing",
  "Legal",
];

const JOBS: Job[] = [
  { id: "1", title: "Senior Backend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { id: "2", title: "iOS Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { id: "3", title: "Product Manager — Rides", department: "Product", location: "Almaty / Remote", type: "Full-time" },
  { id: "4", title: "UX Designer", department: "Design", location: "Remote", type: "Full-time" },
  { id: "5", title: "Growth Marketing Manager", department: "Marketing", location: "São Paulo", type: "Full-time" },
  { id: "6", title: "City Operations Lead", department: "Operations", location: "Lagos", type: "Full-time" },
  { id: "7", title: "Legal Counsel — LATAM", department: "Legal", location: "Mexico City", type: "Full-time" },
  { id: "8", title: "Data Scientist", department: "Engineering", location: "Remote", type: "Full-time" },
  { id: "9", title: "Android Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { id: "10", title: "Brand Designer", department: "Design", location: "Remote", type: "Full-time" },
];

const CULTURE_CARDS = [
  {
    id: "move-fast",
    icon: Zap,
    title: "Move Fast",
    desc: "We ship, learn, and iterate. Bureaucracy is the enemy of progress.",
  },
  {
    id: "think-global",
    icon: Globe,
    title: "Think Global",
    desc: "Our team spans 50+ nationalities. Diverse perspectives make better products.",
  },
  {
    id: "own-impact",
    icon: Target,
    title: "Own Your Impact",
    desc: "Every team member has real ownership. Your work directly affects millions of users.",
  },
];

const VALUES = ["Fairness", "Transparency", "Speed", "Community"];

const BENEFITS = [
  { id: "salary", icon: DollarSign, title: "Competitive Salary", desc: "Market-leading compensation benchmarked globally, reviewed annually." },
  { id: "remote", icon: Laptop, title: "Remote-First", desc: "Work from anywhere. We trust you to deliver, not to sit at a desk." },
  { id: "health", icon: Heart, title: "Health Coverage", desc: "Comprehensive medical, dental, and vision for you and your family." },
  { id: "learning", icon: BookOpen, title: "Learning Budget", desc: "$2,000/year for courses, conferences, and books. Keep growing." },
  { id: "stock", icon: TrendingUp, title: "Stock Options", desc: "Own a piece of what you build. Every employee gets equity." },
  { id: "global", icon: Globe, title: "Global Team", desc: "Collaborate with brilliant people across 50+ nationalities every day." },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<Department>("All");

  const filteredJobs =
    activeTab === "All"
      ? JOBS
      : JOBS.filter((job) => job.department === activeTab);

  return (
    <main className="bg-[#1A1A1A] text-white overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mesh-bg">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#C8F53F]/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#C8F53F]/5 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-32 text-center">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C8F53F]/30 bg-[#C8F53F]/10 text-[#C8F53F] text-sm font-semibold tracking-widest uppercase mb-6">
              Join Our Team
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
              Build the Future of{" "}
              <span style={{ color: BRAND.accent }}>Urban Mobility</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              We&apos;re a global team of builders, dreamers, and problem-solvers working
              to make transportation fair for everyone.
            </p>
          </Reveal>

          {/* Stat pills */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { value: "2,000+", label: "Employees" },
                { value: "50+", label: "Nationalities" },
                { value: "30+", label: "Offices" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D2D2D] border border-white/10"
                >
                  <span className="text-[#C8F53F] font-bold text-lg font-heading">
                    {stat.value}
                  </span>
                  <span className="text-white/60 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CULTURE ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                Life at <span style={{ color: BRAND.accent }}>inDrive</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">
                We don&apos;t just build products — we build a culture where everyone can do their best work.
              </p>
            </div>
          </Reveal>

          {/* Culture cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {CULTURE_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.id} delay={i * 0.1}>
                  <div className="bg-[#2D2D2D] rounded-2xl p-8 border border-white/8 h-full flex flex-col gap-4 hover:border-[#C8F53F]/30 transition-colors duration-300">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${BRAND.accent}20` }}
                    >
                      <Icon size={24} style={{ color: BRAND.accent }} />
                    </div>
                    <h3 className="text-xl font-bold font-heading">{card.title}</h3>
                    <p className="text-white/55 leading-relaxed">{card.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Values subsection */}
          <Reveal>
            <div className="text-center">
              <h3 className="text-2xl font-bold font-heading mb-6">Our Values</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {VALUES.map((value) => (
                  <span
                    key={value}
                    className="px-6 py-2.5 rounded-full font-semibold text-sm"
                    style={{ backgroundColor: BRAND.accent, color: "#1A1A1A" }}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OPEN ROLES ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                Open <span style={{ color: BRAND.accent }}>Positions</span>
              </h2>
              <p className="text-white/50 text-lg">
                Find your next challenge and help shape the future of mobility.
              </p>
            </div>
          </Reveal>

          {/* Department filter tabs */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveTab(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeTab === dept
                      ? "text-[#1A1A1A]"
                      : "bg-[#2D2D2D] text-white/60 hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                  style={
                    activeTab === dept
                      ? { backgroundColor: BRAND.accent }
                      : undefined
                  }
                >
                  {dept}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Job list */}
          <div className="flex flex-col gap-4">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-16 text-white/40">
                No open positions in this department right now. Check back soon!
              </div>
            ) : (
              filteredJobs.map((job, i) => (
                <Reveal key={job.id} delay={i * 0.05}>
                  <div className="bg-[#2D2D2D] rounded-xl border border-white/8 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#C8F53F]/30 transition-colors duration-300">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-bold font-heading">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: BRAND.accent, color: "#1A1A1A" }}
                        >
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1 text-white/50">
                          <MapPin size={13} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-white/50">
                          <Briefcase size={13} />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@indrive.com?subject=Application: ${encodeURIComponent(job.title)}`}
                      className="shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold border border-[#C8F53F]/40 text-[#C8F53F] hover:bg-[#C8F53F] hover:text-[#1A1A1A] transition-all duration-200"
                    >
                      Apply Now
                    </a>
                  </div>
                </Reveal>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                Why <span style={{ color: BRAND.accent }}>inDrive?</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">
                We invest in our people because great products come from happy, empowered teams.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.id} delay={i * 0.08}>
                  <div className="bg-[#2D2D2D] rounded-2xl p-7 border border-white/8 flex flex-col gap-4 hover:border-[#C8F53F]/30 transition-colors duration-300 h-full">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${BRAND.accent}20` }}
                    >
                      <Icon size={22} style={{ color: BRAND.accent }} />
                    </div>
                    <h3 className="text-lg font-bold font-heading">{benefit.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Don&apos;t see your role?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/55 text-lg mb-10 leading-relaxed">
              Send us your CV and we&apos;ll reach out when the right opportunity opens.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="mailto:careers@indrive.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ backgroundColor: BRAND.accent, color: "#1A1A1A" }}
            >
              Send Open Application
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
