"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MapPin, Globe, Search, CheckCircle } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "700+", label: "Cities" },
  { value: "150+", label: "Countries" },
  { value: "6", label: "Continents" },
  { value: "100M+", label: "Rides" },
];

interface Region {
  id: string;
  name: string;
  count: string;
  cities: string[];
}

const REGIONS: Region[] = [
  {
    id: "latin-america",
    name: "Latin America",
    count: "120+ cities",
    cities: ["São Paulo", "Mexico City", "Buenos Aires", "Bogotá", "Lima", "Santiago", "Caracas", "Quito"],
  },
  {
    id: "africa",
    name: "Africa",
    count: "90+ cities",
    cities: ["Lagos", "Nairobi", "Cairo", "Accra", "Dar es Salaam", "Kampala", "Addis Ababa", "Casablanca"],
  },
  {
    id: "eastern-europe-cis",
    name: "Eastern Europe & CIS",
    count: "150+ cities",
    cities: ["Moscow", "Almaty", "Tashkent", "Kyiv", "Minsk", "Tbilisi", "Yerevan", "Baku"],
  },
  {
    id: "south-southeast-asia",
    name: "South & Southeast Asia",
    count: "80+ cities",
    cities: ["Delhi", "Mumbai", "Dhaka", "Karachi", "Colombo", "Kathmandu", "Lahore", "Pune"],
  },
  {
    id: "middle-east",
    name: "Middle East",
    count: "60+ cities",
    cities: ["Dubai", "Riyadh", "Cairo", "Amman", "Beirut", "Baghdad", "Kuwait City", "Muscat"],
  },
  {
    id: "central-asia",
    name: "Central Asia",
    count: "50+ cities",
    cities: ["Astana", "Bishkek", "Dushanbe", "Ashgabat", "Samarkand", "Fergana", "Shymkent", "Aktobe"],
  },
];

const COMING_SOON_CITIES = ["London", "New York", "Tokyo", "Sydney", "Toronto", "Berlin"];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CitiesPage() {
  const [query, setQuery] = useState("");

  const filteredRegions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return REGIONS;
    return REGIONS.map((region) => ({
      ...region,
      cities: region.cities.filter((city) => city.toLowerCase().includes(q)),
    })).filter((region) => region.cities.length > 0);
  }, [query]);

  const hasResults = filteredRegions.length > 0;

  return (
    <main className="bg-[#1A1A1A] text-white overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mesh-bg">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#C8F53F]/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-[#C8F53F]/5 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-28 text-center">
          {/* Eyebrow */}
          <Reveal>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                background: "rgba(200,245,63,0.12)",
                color: BRAND.accent,
                border: "1px solid rgba(200,245,63,0.25)",
              }}
            >
              <Globe size={13} />
              Global Presence
            </span>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.08}>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              inDrive in{" "}
              <span style={{ color: BRAND.accent }} className="glow-lime-text">
                700+ Cities
              </span>{" "}
              Worldwide
            </h1>
          </Reveal>

          {/* Subheading */}
          <Reveal delay={0.14}>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              From Yakutsk to São Paulo, we&apos;re bringing fair-fare mobility to every corner of the globe.
            </p>
          </Reveal>

          {/* Stat pills */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <span style={{ color: BRAND.accent }}>{stat.value}</span>
                  <span className="text-white/70">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SEARCH BAR ────────────────────────────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-xl"
              style={{
                background: "#2D2D2D",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Search size={20} className="text-white/40 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for your city..."
                className="flex-1 bg-transparent text-white placeholder-white/40 text-base outline-none"
                aria-label="Search cities"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-white/40 hover:text-white transition-colors text-sm"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── REGIONS GRID ──────────────────────────────────────────────────── */}
      <section className="py-8 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {!hasResults && (
            <Reveal>
              <div className="text-center py-20">
                <MapPin size={48} className="mx-auto mb-4 text-white/20" />
                <p className="text-white/50 text-lg">
                  No cities found for &ldquo;<span className="text-white">{query}</span>&rdquo;
                </p>
                <button
                  onClick={() => setQuery("")}
                  className="mt-4 text-sm underline"
                  style={{ color: BRAND.accent }}
                >
                  Clear search
                </button>
              </div>
            </Reveal>
          )}

          {hasResults && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRegions.map((region, idx) => (
                <Reveal key={region.id} delay={idx * 0.06}>
                  <div
                    className="rounded-2xl p-6 h-full flex flex-col gap-5 transition-all duration-300 hover:border-[#C8F53F]/30 hover:-translate-y-1"
                    style={{
                      background: "#2D2D2D",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Region header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: "rgba(200,245,63,0.12)" }}
                        >
                          <Globe size={18} style={{ color: BRAND.accent }} />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-white leading-tight">
                          {region.name}
                        </h3>
                      </div>
                      <span
                        className="shrink-0 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                        style={{
                          background: "rgba(200,245,63,0.1)",
                          color: BRAND.accent,
                          border: "1px solid rgba(200,245,63,0.2)",
                        }}
                      >
                        {region.count}
                      </span>
                    </div>

                    {/* City list */}
                    <ul className="grid grid-cols-2 gap-y-2.5 gap-x-3">
                      {region.cities.map((city) => (
                        <li key={city} className="flex items-center gap-2 text-sm text-white/75">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ background: BRAND.accent }}
                            aria-hidden="true"
                          />
                          {city}
                        </li>
                      ))}
                    </ul>

                    {/* Active badge */}
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2">
                      <CheckCircle size={14} style={{ color: BRAND.accent }} />
                      <span className="text-xs text-white/50">All cities active</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── COMING SOON ───────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ background: "#111111" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                background: "rgba(251,191,36,0.1)",
                color: "#FBBF24",
                border: "1px solid rgba(251,191,36,0.25)",
              }}
            >
              <MapPin size={13} />
              Expanding Soon
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Coming to More Cities
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-white/50 text-base mb-10 max-w-xl mx-auto">
              We&apos;re expanding rapidly. These major cities are next on our roadmap.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="flex flex-wrap justify-center gap-3">
              {COMING_SOON_CITIES.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: "#FBBF24" }}
                    aria-hidden="true"
                  />
                  <span className="text-white/80">{city}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div
              className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #2D2D2D 0%, #1f1f1f 100%)",
                border: "1px solid rgba(200,245,63,0.15)",
              }}
            >
              {/* Glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,245,63,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ background: "rgba(200,245,63,0.12)" }}
                >
                  <MapPin size={26} style={{ color: BRAND.accent }} />
                </div>

                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Don&apos;t see your city?
                </h2>
                <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
                  We&apos;re growing fast. Request your city and we&apos;ll notify you when inDrive launches near you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:cities@indrive.com?subject=City%20Request"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{
                      background: BRAND.accent,
                      color: "#1A1A1A",
                    }}
                  >
                    Request Your City
                  </a>
                  <Link
                    href="/get-app"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border border-white/20 text-white hover:bg-white/5 transition-all duration-200"
                  >
                    Download the App
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
