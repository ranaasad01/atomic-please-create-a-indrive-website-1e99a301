"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Clock, DollarSign, Shield, Star, ChevronRight, Car, FileText, UserCheck, Smartphone, MapPin, ArrowRight } from 'lucide-react';
import { BRAND } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { useTranslations } from "next-intl";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "driverSignup.steps.step1.title",
    description: "driverSignup.steps.step1.description",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "driverSignup.steps.step2.title",
    description: "driverSignup.steps.step2.description",
  },
  {
    number: "03",
    icon: DollarSign,
    title: "driverSignup.steps.step3.title",
    description: "driverSignup.steps.step3.description",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "driverSignup.benefits.flexible.title",
    description: "driverSignup.benefits.flexible.description",
    stat: "driverSignup.benefits.flexible.stat",
    statLabel: "driverSignup.benefits.flexible.statLabel",
  },
  {
    icon: DollarSign,
    title: "driverSignup.benefits.fare.title",
    description: "driverSignup.benefits.fare.description",
    stat: "driverSignup.benefits.fare.stat",
    statLabel: "driverSignup.benefits.fare.statLabel",
  },
  {
    icon: Star,
    title: "driverSignup.benefits.payouts.title",
    description: "driverSignup.benefits.payouts.description",
    stat: "driverSignup.benefits.payouts.stat",
    statLabel: "driverSignup.benefits.payouts.statLabel",
  },
  {
    icon: Shield,
    title: "driverSignup.benefits.insurance.title",
    description: "driverSignup.benefits.insurance.description",
    stat: "driverSignup.benefits.insurance.stat",
    statLabel: "driverSignup.benefits.insurance.statLabel",
  },
];

const requirements = [
  { icon: Car, text: "driverSignup.requirements.items.car" },
  { icon: FileText, text: "driverSignup.requirements.items.license" },
  { icon: Shield, text: "driverSignup.requirements.items.insurance" },
  { icon: Smartphone, text: "driverSignup.requirements.items.smartphone" },
  { icon: UserCheck, text: "driverSignup.requirements.items.background" },
  { icon: MapPin, text: "driverSignup.requirements.items.city" },
];

const cities = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
  "Philadelphia", "San Antonio", "San Diego", "Dallas", "Miami",
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  agreed: boolean;
}

export default function DriverSignupPage() {
  const t = useTranslations();

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="bg-[#1A1A1A] text-white min-h-screen overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-10 blur-[120px]"
            style={{ background: "#C8F53F" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInUp}>
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
                  style={{
                    color: "#C8F53F",
                    borderColor: "rgba(200,245,63,0.3)",
                    background: "rgba(200,245,63,0.08)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: "#C8F53F" }}
                  />
                  {t("driverSignup.hero.badge")}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 font-heading"
              >
                {t("driverSignup.hero.headline1")}{" "}
                <span style={{ color: "#C8F53F" }}>
                  {t("driverSignup.hero.headline2")}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg"
              >
                {t("driverSignup.hero.subtext")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-6 mb-10"
              >
                {(["stat1", "stat2", "stat3"] as const).map((key) => (
                  <div key={key}>
                    <div
                      className="text-3xl font-extrabold font-heading"
                      style={{ color: "#C8F53F" }}
                    >
                      {t(`driverSignup.hero.${key}.value`)}
                    </div>
                    <div className="text-white/50 text-sm mt-0.5">
                      {t(`driverSignup.hero.${key}.label`)}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.a
                variants={fadeInUp}
                href="#signup-form"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("signup-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-200"
                style={{
                  background: "#C8F53F",
                  color: "#1A1A1A",
                }}
              >
                {t("driverSignup.hero.cta")}
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>

            {/* Right — driver image card */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)] border border-white/10">
                <img
                  src="https://www.minneapolis.aaa.com/sites/default/files/article_featured/Senior-Behind-the-Wheel-Classes_900x600.jpg"
                  alt={t("driverSignup.hero.imageAlt")}
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />
                {/* Floating earnings card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-[#1A1A1A]/90 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/50 text-xs mb-1">
                        {t("driverSignup.hero.earningsCard.label")}
                      </p>
                      <p
                        className="text-2xl font-extrabold font-heading"
                        style={{ color: "#C8F53F" }}
                      >
                        {t("driverSignup.hero.earningsCard.amount")}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-orange-400 text-sm font-semibold">
                      <span>↑</span>
                      <span>{t("driverSignup.hero.earningsCard.growth")}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3-Step Onboarding Timeline ── */}
      <Reveal>
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C8F53F" }}
              >
                {t("driverSignup.steps.eyebrow")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
                {t("driverSignup.steps.heading")}
              </h2>
            </div>

            <div className="relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-white/10" />

              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <Reveal key={step.number} delay={i * 0.12}>
                      <div className="relative flex flex-col items-center text-center group">
                        <div
                          className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 transition-all duration-300 group-hover:scale-110"
                          style={{
                            background: "rgba(200,245,63,0.08)",
                            borderColor: "rgba(200,245,63,0.3)",
                          }}
                        >
                          <Icon
                            size={28}
                            style={{ color: "#C8F53F" }}
                          />
                          <span
                            className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                            style={{
                              background: "#C8F53F",
                              color: "#1A1A1A",
                            }}
                          >
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 font-heading">
                          {t(step.title)}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                          {t(step.description)}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Benefits Grid ── */}
      <Reveal>
        <section
          className="py-20 md:py-28"
          style={{ background: "rgba(200,245,63,0.03)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "#C8F53F" }}
                >
                  {t("driverSignup.benefits.eyebrow")}
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading leading-tight">
                  {t("driverSignup.benefits.heading")}
                </h2>
              </div>
              <p className="text-white/50 text-lg leading-relaxed">
                {t("driverSignup.benefits.subtext")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <Reveal key={benefit.title} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-2xl p-6 border border-white/8 bg-white/3 hover:border-[#C8F53F]/30 transition-all duration-300 flex flex-col"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                        style={{ background: "rgba(200,245,63,0.1)" }}
                      >
                        <Icon size={22} style={{ color: "#C8F53F" }} />
                      </div>
                      <div
                        className="text-3xl font-extrabold font-heading mb-1"
                        style={{ color: "#C8F53F" }}
                      >
                        {t(benefit.stat)}
                      </div>
                      <div className="text-white/40 text-xs mb-3">
                        {t(benefit.statLabel)}
                      </div>
                      <h3 className="text-base font-bold mb-2 font-heading">
                        {t(benefit.title)}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed flex-1">
                        {t(benefit.description)}
                      </p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Requirements Checklist ── */}
      <Reveal>
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "#C8F53F" }}
                >
                  {t("driverSignup.requirements.eyebrow")}
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading mb-6">
                  {t("driverSignup.requirements.heading")}
                </h2>
                <p className="text-white/50 text-base leading-relaxed mb-8">
                  {t("driverSignup.requirements.subtext")}
                </p>
                <motion.a
                  href="#signup-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("signup-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 border"
                  style={{
                    borderColor: "rgba(200,245,63,0.4)",
                    color: "#C8F53F",
                  }}
                >
                  {t("driverSignup.requirements.cta")}
                  <ChevronRight size={16} />
                </motion.a>
              </motion.div>

              {/* Right — checklist */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {requirements.map((req, i) => {
                  const Icon = req.icon;
                  return (
                    <motion.div
                      key={req.text}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-3 p-4 rounded-xl border border-white/8 bg-white/3"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(200,245,63,0.1)" }}
                      >
                        <Icon size={16} style={{ color: "#C8F53F" }} />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm font-medium leading-snug">
                          {t(req.text)}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Sign-Up Form ── */}
      <Reveal>
        <section
          id="signup-form"
          className="py-20 md:py-28 border-t border-white/5"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C8F53F" }}
              >
                {t("driverSignup.form.eyebrow")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading mb-4">
                {t("driverSignup.form.heading")}
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                {t("driverSignup.form.subtext")}
              </p>
            </div>

            {submitted ? (
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                className="rounded-3xl border p-12 text-center"
                style={{
                  background: "rgba(200,245,63,0.05)",
                  borderColor: "rgba(200,245,63,0.2)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "rgba(200,245,63,0.15)" }}
                >
                  <Check size={36} style={{ color: "#C8F53F" }} />
                </div>
                <h3 className="text-2xl font-extrabold font-heading mb-3">
                  {t("driverSignup.form.success.heading")}
                </h3>
                <p className="text-white/50 text-base leading-relaxed mb-8 max-w-sm mx-auto">
                  {t("driverSignup.form.success.subtext")}
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
                  style={{ background: "#C8F53F", color: "#1A1A1A" }}
                >
                  {t("driverSignup.form.success.cta")}
                </Link>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-3xl border p-8 md:p-10 space-y-6"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      {t("driverSignup.form.fields.firstName")}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder={t("driverSignup.form.placeholders.firstName")}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8F53F]/50 focus:ring-1 focus:ring-[#C8F53F]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      {t("driverSignup.form.fields.lastName")}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder={t("driverSignup.form.placeholders.lastName")}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8F53F]/50 focus:ring-1 focus:ring-[#C8F53F]/30 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    {t("driverSignup.form.fields.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder={t("driverSignup.form.placeholders.email")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8F53F]/50 focus:ring-1 focus:ring-[#C8F53F]/30 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    {t("driverSignup.form.fields.phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder={t("driverSignup.form.placeholders.phone")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8F53F]/50 focus:ring-1 focus:ring-[#C8F53F]/30 transition-all"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    {t("driverSignup.form.fields.city")}
                  </label>
                  <select
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C8F53F]/50 focus:ring-1 focus:ring-[#C8F53F]/30 transition-all appearance-none"
                  >
                    <option value="" disabled>
                      {t("driverSignup.form.placeholders.city")}
                    </option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Vehicle info */}
                <div>
                  <p className="text-sm font-semibold text-white/70 mb-3">
                    {t("driverSignup.form.fields.vehicleInfo")}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5">
                        {t("driverSignup.form.fields.vehicleYear")}
                      </label>
                      <input
                        type="text"
                        name="vehicleYear"
                        value={form.vehicleYear}
                        onChange={handleChange}
                        required
                        placeholder="2020"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8F53F]/50 focus:ring-1 focus:ring-[#C8F53F]/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5">
                        {t("driverSignup.form.fields.vehicleMake")}
                      </label>
                      <input
                        type="text"
                        name="vehicleMake"
                        value={form.vehicleMake}
                        onChange={handleChange}
                        required
                        placeholder="Toyota"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8F53F]/50 focus:ring-1 focus:ring-[#C8F53F]/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5">
                        {t("driverSignup.form.fields.vehicleModel")}
                      </label>
                      <input
                        type="text"
                        name="vehicleModel"
                        value={form.vehicleModel}
                        onChange={handleChange}
                        required
                        placeholder="Camry"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8F53F]/50 focus:ring-1 focus:ring-[#C8F53F]/30 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreed"
                    name="agreed"
                    checked={form.agreed}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 rounded accent-[#C8F53F] cursor-pointer"
                  />
                  <label
                    htmlFor="agreed"
                    className="text-white/50 text-sm leading-relaxed cursor-pointer"
                  >
                    {t("driverSignup.form.terms.prefix")}{" "}
                    <span
                      className="underline underline-offset-2 cursor-pointer"
                      style={{ color: "#C8F53F" }}
                    >
                      {t("driverSignup.form.terms.termsLink")}
                    </span>{" "}
                    {t("driverSignup.form.terms.and")}{" "}
                    <span
                      className="underline underline-offset-2 cursor-pointer"
                      style={{ color: "#C8F53F" }}
                    >
                      {t("driverSignup.form.terms.privacyLink")}
                    </span>
                    .
                  </label>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                  className="w-full py-4 rounded-full font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                  style={{ background: "#C8F53F", color: "#1A1A1A" }}
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-[#1A1A1A]/30 border-t-[#1A1A1A] rounded-full animate-spin" />
                      {t("driverSignup.form.submitting")}
                    </>
                  ) : (
                    <>
                      {t("driverSignup.form.submit")}
                      <ArrowRight size={18} />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </div>
        </section>
      </Reveal>

      {/* ── Bottom CTA Banner ── */}
      <Reveal>
        <section className="py-16 md:py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,245,63,0.08) 0%, rgba(200,245,63,0.03) 100%)",
                borderColor: "rgba(200,245,63,0.15)",
              }}
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight mb-2">
                  {t("driverSignup.banner.heading")}
                </h2>
                <p className="text-white/50 text-base">
                  {t("driverSignup.banner.subtext")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <motion.a
                  href={BRAND.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-full font-semibold text-sm border border-white/20 text-white hover:bg-white/5 transition-all duration-200 text-center"
                >
                  {t("driverSignup.banner.appStore")}
                </motion.a>
                <motion.a
                  href={BRAND.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 text-center"
                  style={{ background: "#C8F53F", color: "#1A1A1A" }}
                >
                  {t("driverSignup.banner.googlePlay")}
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}