"use client";

import { useTranslations } from "next-intl";
import { motion, type Variants } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { ArrowRight, Check, Star, Shield, Zap, MapPin, CreditCard, Users } from 'lucide-react';

/* ── shared variants ─────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HomePage() {
  const t = useTranslations("home");

  const features = [
    { title: t("feature1_title"), body: t("feature1_body"), icon: Zap },
    { title: t("feature2_title"), body: t("feature2_body"), icon: Shield },
    { title: t("feature3_title"), body: t("feature3_body"), icon: Star },
    { title: t("feature4_title"), body: t("feature4_body"), icon: Shield },
    { title: t("feature5_title"), body: t("feature5_body"), icon: MapPin },
    { title: t("feature6_title"), body: t("feature6_body"), icon: CreditCard },
  ];

  const testimonials = [
    {
      quote: t("t1_quote"),
      name: t("t1_name"),
      loc: t("t1_location"),
      img: "https://resources.motogp.pulselive.com/photo-resources/2025/05/08/cf79aa65-3c89-4c52-ba98-e957a48e28ca/Dv3UiJHP.png?height=700&width=800",
      alt: t("t1_image_alt"),
    },
    {
      quote: t("t2_quote"),
      name: t("t2_name"),
      loc: t("t2_location"),
      img: "https://i.ytimg.com/vi/w152h3Q8m1g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPt5LVUQ5uxCt765Sq1idWuJ_Utw",
      alt: t("t2_image_alt"),
    },
    {
      quote: t("t3_quote"),
      name: t("t3_name"),
      loc: t("t3_location"),
      img: "https://im.rediff.com/getahead/2013/jun/03chithra-priya1.jpg",
      alt: t("t3_image_alt"),
    },
  ];

  const stats = [
    { val: t("stats_rides"), label: t("stats_rides_label") },
    { val: t("stats_cities"), label: t("stats_cities_label") },
    { val: t("stats_countries"), label: t("stats_countries_label") },
    { val: t("stats_drivers"), label: t("stats_drivers_label") },
  ];

  const steps = [
    { num: t("how_step1_num"), title: t("how_step1_title"), body: t("how_step1_body") },
    { num: t("how_step2_num"), title: t("how_step2_title"), body: t("how_step2_body") },
    { num: t("how_step3_num"), title: t("how_step3_title"), body: t("how_step3_body") },
  ];

  const driverStats = [
    { val: t("driver_stat1_value"), label: t("driver_stat1_label") },
    { val: t("driver_stat2_value"), label: t("driver_stat2_label") },
    { val: t("driver_stat3_value"), label: t("driver_stat3_label") },
  ];

  const heroBadges = [
    t("hero_badge_rides"),
    t("hero_badge_cities"),
    t("hero_badge_countries"),
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#1A1A1A]">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#C8F135]/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8F135]/5 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* left copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-[#C8F135]/30 bg-[#C8F135]/10 text-[#C8F135] text-sm font-medium tracking-wide"
            >
              <MapPin size={13} />
              {t("hero_eyebrow")}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white"
            >
              {t("hero_title_1")}{" "}
              <span className="text-[#C8F135]">{t("hero_title_2")}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/60 leading-relaxed max-w-lg"
            >
              {t("hero_subtitle")}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/drive-with-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C8F135] text-[#1A1A1A] font-semibold text-sm hover:bg-[#d4f54d] transition-all duration-300 shadow-[0_0_24px_rgba(200,241,53,0.25)] hover:shadow-[0_0_36px_rgba(200,241,53,0.4)]"
              >
                {t("hero_cta_primary")} <ArrowRight size={15} />
              </Link>
              <Link
                href="/drive-with-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                {t("hero_cta_secondary")}
              </Link>
            </motion.div>

            {/* trust badges */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 pt-4 border-t border-white/10"
            >
              {heroBadges.map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-sm text-white/50">
                  <Check size={13} className="text-[#C8F135]" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* right image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)] border border-white/10">
              <img
                src="https://techcrunch.com/wp-content/uploads/2023/07/2023-07-11-InDrive-102.jpg"
                alt={t("hero_image_alt")}
                className="w-full h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
            </div>
            {/* floating fare card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-6 -left-8 bg-[#242424] border border-white/10 rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <p className="text-xs text-white/40 mb-1">Fare agreed</p>
              <p className="text-2xl font-bold text-[#C8F135]">$8.50</p>
              <p className="text-xs text-white/50 mt-0.5">Downtown to Airport</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────────── */}
      <Reveal>
        <section className="bg-[#C8F135] py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeUp} className="flex flex-col gap-1">
                  <span className="text-4xl font-bold text-[#1A1A1A] tracking-tight">{s.val}</span>
                  <span className="text-sm font-medium text-[#1A1A1A]/60">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <Reveal>
        <section className="py-28 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* image side */}
              <div className="relative order-2 lg:order-1">
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
                  <img
                    src="https://blog.indrive.com/_next/image?url=https%3A%2F%2Fwpcms.indrive.com%2Fwp-content%2Fuploads%2F2026%2F01%2F5P0A6228.jpg&w=1200&q=90"
                    alt={t("how_image_alt")}
                    className="w-full h-[480px] object-cover"
                  />
                </div>
              </div>

              {/* steps side */}
              <div className="order-1 lg:order-2 flex flex-col gap-10">
                <div>
                  <span className="text-[#C8F135] text-sm font-semibold tracking-widest uppercase">
                    {t("how_eyebrow")}
                  </span>
                  <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
                    {t("how_title")}
                  </h2>
                  <p className="mt-4 text-white/50 leading-relaxed">{t("how_subtitle")}</p>
                </div>

                <div className="flex flex-col gap-8">
                  {steps.map((step) => (
                    <div key={step.num} className="flex gap-5 group">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C8F135]/10 border border-[#C8F135]/30 flex items-center justify-center text-[#C8F135] text-xs font-bold group-hover:bg-[#C8F135] group-hover:text-[#1A1A1A] transition-all duration-300">
                        {step.num}
                      </span>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── FEATURES BENTO ───────────────────────────────────────── */}
      <Reveal>
        <section className="py-28 bg-[#141414]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="text-[#C8F135] text-sm font-semibold tracking-widest uppercase">
                {t("features_eyebrow")}
              </span>
              <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
                {t("features_title")}
              </h2>
              <p className="mt-4 text-white/50 max-w-xl mx-auto leading-relaxed">
                {t("features_subtitle")}
              </p>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {features.map(({ title, body, icon: Icon }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative rounded-2xl border border-white/[0.08] bg-[#1E1E1E] p-7 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.3)] hover:border-[#C8F135]/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C8F135]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#C8F135]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <Reveal>
        <section className="py-28 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <span className="text-[#C8F135] text-sm font-semibold tracking-widest uppercase">
                {t("testimonials_eyebrow")}
              </span>
              <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance max-w-xl">
                {t("testimonials_title")}
              </h2>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid md:grid-cols-3 gap-6"
            >
              {testimonials.map((item) => (
                <motion.div
                  key={item.name}
                  variants={fadeUp}
                  className="flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-[#1E1E1E] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className="fill-[#C8F135] text-[#C8F135]" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">{item.quote}</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-white/[0.08]">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-[#C8F135]/20"
                    />
                    <div>
                      <p className="text-white text-sm font-semibold">{item.name}</p>
                      <p className="text-white/40 text-xs">{item.loc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── DRIVER SPLIT ─────────────────────────────────────────── */}
      <Reveal>
        <section className="py-28 bg-[#141414]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* copy */}
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-[#C8F135] text-sm font-semibold tracking-widest uppercase">
                    {t("driver_eyebrow")}
                  </span>
                  <h2 className="mt-3 text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
                    {t("driver_title")}
                  </h2>
                  <p className="mt-4 text-white/50 leading-relaxed max-w-lg">
                    {t("driver_subtitle")}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {driverStats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/[0.08] bg-[#1E1E1E] p-4 text-center"
                    >
                      <p className="text-2xl font-bold text-[#C8F135]">{s.val}</p>
                      <p className="text-xs text-white/40 mt-1 leading-snug">{s.label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/drive-with-us"
                  className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C8F135] text-[#1A1A1A] font-semibold text-sm hover:bg-[#d4f54d] transition-all duration-300 shadow-[0_0_24px_rgba(200,241,53,0.2)]"
                >
                  {t("driver_cta")} <ArrowRight size={15} />
                </Link>
              </div>

              {/* image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
                  <img
                    src="https://refreshmiami.com/wp-content/uploads/2023/07/indrive.jpeg"
                    alt={t("driver_image_alt")}
                    className="w-full h-[460px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/50 to-transparent" />
                </div>
                {/* floating earnings card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-[#242424] border border-white/10 rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Users size={13} className="text-[#C8F135]" />
                    <p className="text-xs text-white/40">This week</p>
                  </div>
                  <p className="text-2xl font-bold text-white">$412</p>
                  <p className="text-xs text-[#C8F135] mt-0.5">+18% vs last week</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── DOWNLOAD CTA ─────────────────────────────────────────── */}
      <Reveal>
        <section className="py-28 bg-[#1A1A1A]">
          <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
            <div className="relative rounded-3xl overflow-hidden border border-[#C8F135]/20 bg-gradient-to-br from-[#C8F135]/10 via-[#1E1E1E] to-[#1E1E1E] p-16 shadow-[0_0_80px_rgba(200,241,53,0.08)]">
              <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#C8F135]/10 blur-[80px]" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
                  {t("cta_title")}
                </h2>
                <p className="text-white/50 max-w-md leading-relaxed">{t("cta_subtitle")}</p>
                <div className="flex flex-wrap gap-4 justify-center mt-2">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-[#1A1A1A] font-semibold text-sm shadow-[0_4px_16px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_24px_rgba(255,255,255,0.25)] transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    {t("cta_app_store")}
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#C8F135] text-[#1A1A1A] font-semibold text-sm shadow-[0_0_24px_rgba(200,241,53,0.25)] hover:shadow-[0_0_36px_rgba(200,241,53,0.4)] transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                      <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-2.93-2.93-10.66 15.33zM20.7 10.06l-2.87-1.63-3.28 3.28 3.28 3.28 2.9-1.65c.83-.47.83-1.81-.03-2.28zM2.14.46C1.9.72 1.76 1.1 1.76 1.6v20.8c0 .5.14.88.38 1.14l.06.06 11.65-11.65v-.27L2.2.4l-.06.06zM14.19 8.41l-3.28-3.28-8.73-4.97 12.01 8.25z" />
                    </svg>
                    {t("cta_google_play")}
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
