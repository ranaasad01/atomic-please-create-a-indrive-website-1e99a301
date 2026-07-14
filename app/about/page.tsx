"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";
import { Globe, Users, MapPin, Heart, Shield, Zap, Scale, ArrowRight, Quote } from 'lucide-react';

// ─── Inline data ────────────────────────────────────────────────────────────

const stats = [
  { value: "150+", label: "Countries", icon: Globe },
  { value: "150M+", label: "Users Worldwide", icon: Users },
  { value: "700+", label: "Cities Served", icon: MapPin },
  { value: "2012", label: "Founded", icon: Zap },
];

const values = [
  {
    id: "fairness",
    icon: Scale,
    title: "Fairness First",
    description:
      "We believe every ride should be a fair deal. Our negotiation model puts pricing power in the hands of riders and drivers, not algorithms.",
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety Always",
    description:
      "From verified driver profiles to real-time trip sharing, safety is built into every layer of the inDrive experience.",
  },
  {
    id: "community",
    icon: Heart,
    title: "Community Driven",
    description:
      "We exist to serve the communities we operate in. Local drivers keep more of what they earn, strengthening neighborhoods from within.",
  },
  {
    id: "speed",
    icon: Zap,
    title: "Relentless Speed",
    description:
      "We move fast, adapt to local needs, and ship solutions that matter. Bureaucracy slows people down — we refuse to let it slow you down.",
  },
];

const team = [
  {
    id: "1",
    name: "Arsen Tomsky",
    role: "Co-Founder & CEO",
    image: "https://tcgplayer-cdn.tcgplayer.com/product/177579_in_600x600.jpg",
    bio: "Arsen founded inDrive in Yakutsk, Russia in 2012 after a local taxi cartel hiked prices during a severe cold snap. His mission: give people a fair alternative.",
  },
  {
    id: "2",
    name: "Mikhail Belyaev",
    role: "Chief Technology Officer",
    image: "https://files-prod.tii.ae/inline-images/Mikhail%20Belyaev.png",
    bio: "Mikhail leads the engineering teams building the platform that connects millions of riders and drivers across six continents.",
  },
  {
    id: "3",
    name: "Vera Zhukova",
    role: "Chief Operating Officer",
    image: "https://saltcreekballet.org/wp-content/uploads/2018/09/DSC00791b.jpg",
    bio: "Vera oversees global operations, ensuring inDrive's expansion into new markets is both rapid and deeply rooted in local context.",
  },
  {
    id: "4",
    name: "Daniel Osei",
    role: "VP, Africa & Middle East",
    image: "https://www.hss.edu/globalassets/images/profiles/daniel-osei-headshot",
    bio: "Daniel drives inDrive's fastest-growing regional portfolio, bringing fair-fare mobility to cities across Africa and the Middle East.",
  },
];

// ─── Animation variants ──────────────────────────────────────────────────────

const heroHeading: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const heroSub: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.18 },
  },
};

const staggerGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="bg-[#1A1A1A] text-white overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 bg-[#111111]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,245,63,0.18) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroHeading}
          >
            <span
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full border"
              style={{
                color: BRAND.accent,
                borderColor: `${BRAND.accent}40`,
                backgroundColor: `${BRAND.accent}10`,
              }}
            >
              {t("about.eyebrow")}
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] text-balance mb-6">
              {t("about.hero_title_1")}{" "}
              <span style={{ color: BRAND.accent }}>
                {t("about.hero_title_accent")}
              </span>{" "}
              {t("about.hero_title_2")}
            </h1>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={heroSub}
            className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto text-pretty"
          >
            {t("about.hero_subtitle")}
          </motion.p>
        </div>
      </section>

      {/* ── Origin Story ─────────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: image */}
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                  style={{
                    background: `radial-gradient(ellipse at center, ${BRAND.accent}, transparent 70%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_48px_rgba(0,0,0,0.5)]">
                  <img
                    src="https://restofworld.org/wp-content/uploads/2022/05/DJI_0860-scaled.jpg"
                    alt="Yakutsk, Russia — where inDrive was born"
                    className="w-full aspect-[4/3] object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/60 text-xs tracking-widest uppercase">
                      {t("about.origin_image_caption")}
                    </p>
                    <p className="text-white font-semibold text-sm mt-1">
                      {t("about.origin_image_location")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: copy */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-balance">
                  {t("about.origin_title")}
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  {t("about.origin_body_1")}
                </p>
                <p className="text-white/60 leading-relaxed mb-10">
                  {t("about.origin_body_2")}
                </p>

                {/* Pull quote */}
                <blockquote className="relative pl-6 border-l-2 border-[#C8F53F]">
                  <Quote
                    size={20}
                    className="absolute -top-1 -left-1 opacity-40"
                    style={{ color: BRAND.accent }}
                    aria-hidden="true"
                  />
                  <p
                    className="text-xl sm:text-2xl font-semibold leading-snug tracking-tight text-balance"
                    style={{ color: BRAND.accent }}
                  >
                    {t("about.pull_quote")}
                  </p>
                  <footer className="mt-3 text-white/40 text-sm">
                    {t("about.pull_quote_attribution")}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Global Stats Bar ─────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-16 border-y border-white/10 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={cardReveal}
                    className="flex flex-col items-center text-center gap-3"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${BRAND.accent}15`,
                        border: `1px solid ${BRAND.accent}30`,
                      }}
                    >
                      <Icon size={22} style={{ color: BRAND.accent }} />
                    </div>
                    <div>
                      <p
                        className="text-4xl font-bold tracking-tight"
                        style={{ color: BRAND.accent }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-white/50 text-sm mt-1">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border"
                style={{
                  color: BRAND.accent,
                  borderColor: `${BRAND.accent}40`,
                  backgroundColor: `${BRAND.accent}10`,
                }}
              >
                {t("about.values_eyebrow")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
                {t("about.values_title")}
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
                {t("about.values_subtitle")}
              </p>
            </div>

            <motion.div
              variants={staggerGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.id}
                    variants={cardReveal}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#C8F53F]/30 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.3)]"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        backgroundColor: `${BRAND.accent}15`,
                        border: `1px solid ${BRAND.accent}30`,
                      }}
                    >
                      <Icon size={22} style={{ color: BRAND.accent }} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{val.title}</h3>
                    <p className="text-white/50 leading-relaxed text-sm">
                      {val.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── Leadership ───────────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-24 md:py-32 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border"
                style={{
                  color: BRAND.accent,
                  borderColor: `${BRAND.accent}40`,
                  backgroundColor: `${BRAND.accent}10`,
                }}
              >
                {t("about.team_eyebrow")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
                {t("about.team_title")}
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
                {t("about.team_subtitle")}
              </p>
            </div>

            <motion.div
              variants={staggerGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {team.map((member) => (
                <motion.div
                  key={member.id}
                  variants={cardReveal}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-[#C8F53F]/20 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.3)]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = "none";
                        const parent = el.parentElement;
                        if (parent) {
                          parent.style.background =
                            "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)";
                          const initials = document.createElement("div");
                          initials.className =
                            "absolute inset-0 flex items-center justify-center text-3xl font-bold text-white/20";
                          initials.textContent = member.name
                            .split(" ")
                            .map((n) => n.charAt(0))
                            .join("");
                          parent.appendChild(initials);
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <p className="font-semibold text-white">{member.name}</p>
                    <p
                      className="text-xs font-medium mt-0.5 mb-3"
                      style={{ color: BRAND.accent }}
                    >
                      {member.role}
                    </p>
                    <p className="text-white/40 text-xs leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── Closing CTA ──────────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(ellipse 70% 60% at 50% 50%, ${BRAND.accent}30, transparent 70%)`,
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-balance">
              {t("about.cta_title")}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 text-pretty">
              {t("about.cta_subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/driver-signup"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#1A1A1A] transition-all duration-200 shadow-[0_4px_24px_rgba(200,245,63,0.3)]"
                  style={{ backgroundColor: BRAND.accent }}
                >
                  {t("about.cta_driver")}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <a
                  href={BRAND.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                >
                  {t("about.cta_download")}
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}