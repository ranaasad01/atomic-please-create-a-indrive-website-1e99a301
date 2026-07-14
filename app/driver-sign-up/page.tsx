"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Car, DollarSign, Clock, Shield, Star, ChevronDown, ArrowRight, User, Mail, Phone, MapPin, FileText, Sparkles } from 'lucide-react';
import { BRAND } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { useTranslations } from "next-intl";

const benefits = [
  {
    id: "earnings",
    icon: DollarSign,
    title: "Keep More of What You Earn",
    description:
      "Set your own fare and negotiate directly with riders. No hidden fees eating into your income.",
  },
  {
    id: "schedule",
    icon: Clock,
    title: "Drive on Your Schedule",
    description:
      "Work whenever you want. No minimum hours, no mandatory shifts. Your time, your rules.",
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety First, Always",
    description:
      "24/7 support, in-app emergency button, and ride tracking so you and your passengers stay protected.",
  },
  {
    id: "rating",
    icon: Star,
    title: "Build Your Reputation",
    description:
      "A strong rating means more ride requests. Deliver great service and watch your earnings grow.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Fill out the form below with your personal details and vehicle information.",
  },
  {
    number: "02",
    title: "Submit Your Documents",
    description: "Upload your driver's license, vehicle registration, and insurance documents.",
  },
  {
    number: "03",
    title: "Pass Background Check",
    description: "We run a quick background check to keep the platform safe for everyone.",
  },
  {
    number: "04",
    title: "Start Earning",
    description: "Once approved, go online and start accepting ride requests in your area.",
  },
];

const faqs = [
  {
    id: "faq1",
    question: "What documents do I need to sign up?",
    answer:
      "You'll need a valid driver's license, vehicle registration, proof of insurance, and a government-issued ID. All documents must be current and not expired.",
  },
  {
    id: "faq2",
    question: "How long does the approval process take?",
    answer:
      "Most drivers are approved within 2-3 business days after submitting all required documents. Background checks typically complete within 24 hours.",
  },
  {
    id: "faq3",
    question: "What vehicle requirements are there?",
    answer:
      "Your vehicle must be 2010 or newer, have 4 doors, pass a vehicle inspection, and be registered in your name or an immediate family member's name.",
  },
  {
    id: "faq4",
    question: "How does fare negotiation work?",
    answer:
      "Riders propose a fare for their trip. You can accept it, counter-offer, or decline. This gives you full control over which rides you take and at what price.",
  },
  {
    id: "faq5",
    question: "When and how do I get paid?",
    answer:
      "Earnings are transferred to your linked bank account weekly. You can also request instant payouts for a small fee whenever your balance exceeds $10.",
  },
];

const stats = [
  { value: "150+", label: "Cities Worldwide" },
  { value: "50M+", label: "Rides Completed" },
  { value: "4.8★", label: "Average Driver Rating" },
  { value: "$28/hr", label: "Average Driver Earnings" },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  licenseNumber: string;
  agreeTerms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  city?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  licenseNumber?: string;
  agreeTerms?: string;
}

export default function DriverSignupPage() {
  const t = useTranslations();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    licenseNumber: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = t("driver_signup.error_required");
    if (!formData.lastName.trim()) newErrors.lastName = t("driver_signup.error_required");
    if (!formData.email.trim()) newErrors.email = t("driver_signup.error_required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = t("driver_signup.error_email");
    if (!formData.phone.trim()) newErrors.phone = t("driver_signup.error_required");
    if (!formData.city.trim()) newErrors.city = t("driver_signup.error_required");
    if (!formData.vehicleMake.trim()) newErrors.vehicleMake = t("driver_signup.error_required");
    if (!formData.vehicleModel.trim()) newErrors.vehicleModel = t("driver_signup.error_required");
    if (!formData.vehicleYear.trim()) newErrors.vehicleYear = t("driver_signup.error_required");
    if (!formData.licenseNumber.trim()) newErrors.licenseNumber = t("driver_signup.error_required");
    if (!formData.agreeTerms) newErrors.agreeTerms = t("driver_signup.error_terms");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C8F53F]/50 focus:border-[#C8F53F]/50 ${
      errors[field] ? "border-rose-500/60" : "border-white/10 hover:border-white/20"
    }`;

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-[#C8F53F]/10 border border-[#C8F53F]/30 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle size={40} style={{ color: "#C8F53F" }} />
          </motion.div>
          <h1 className="text-3xl font-bold text-white font-heading mb-3">
            {t("driver_signup.success_title")}
          </h1>
          <p className="text-white/60 leading-relaxed mb-8">
            {t("driver_signup.success_body")}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C8F53F] text-[#1A1A1A] font-semibold text-sm hover:bg-[#d4f75a] transition-all duration-200 hover:scale-105"
          >
            {t("driver_signup.back_home")}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="bg-[#1A1A1A] text-white overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
            style={{ background: "#C8F53F" }}
          />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 blur-[100px] bg-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
                  style={{
                    color: "#C8F53F",
                    borderColor: "rgba(200,245,63,0.3)",
                    background: "rgba(200,245,63,0.08)",
                  }}
                >
                  <Sparkles size={12} />
                  {t("driver_signup.hero_badge")}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-balance"
              >
                {t("driver_signup.hero_title_1")}{" "}
                <span style={{ color: "#C8F53F" }}>
                  {t("driver_signup.hero_title_accent")}
                </span>
                {", "}
                {t("driver_signup.hero_title_2")}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl"
              >
                {t("driver_signup.hero_subtitle")}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-2">
                <a
                  href="#signup-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#signup-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{ background: "#C8F53F", color: "#1A1A1A" }}
                >
                  {t("driver_signup.hero_cta")}
                  <ArrowRight size={16} />
                </a>
                <span className="text-white/40 text-sm">{t("driver_signup.hero_note")}</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Reveal>
        <section className="border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, i) => (
                <motion.div key={stat.label} variants={scaleIn} className="text-center">
                  <div
                    className="text-3xl md:text-4xl font-bold font-heading mb-1"
                    style={{ color: "#C8F53F" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Benefits */}
      <Reveal>
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4">
                {t("driver_signup.benefits_title")}
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">
                {t("driver_signup.benefits_subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <Reveal key={benefit.id} delay={i * 0.08}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="flex gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-[#C8F53F]/20 hover:bg-white/[0.05] transition-all duration-300"
                      style={{ borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(200,245,63,0.1)", border: "1px solid rgba(200,245,63,0.2)" }}
                      >
                        <Icon size={22} style={{ color: "#C8F53F" }} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1.5">{benefit.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* How It Works */}
      <Reveal>
        <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4">
                {t("driver_signup.steps_title")}
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">
                {t("driver_signup.steps_subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.1}>
                  <div className="relative">
                    {i < steps.length - 1 && (
                      <div
                        className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                        style={{ background: "linear-gradient(to right, rgba(200,245,63,0.3), transparent)" }}
                      />
                    )}
                    <div className="relative z-10">
                      <div
                        className="text-5xl font-bold font-heading mb-4 leading-none"
                        style={{ color: "rgba(200,245,63,0.15)" }}
                      >
                        {step.number}
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Sign-Up Form */}
      <section id="signup-form" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: copy */}
            <Reveal>
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:sticky lg:top-28"
              >
                <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-6">
                  {t("driver_signup.form_heading")}
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  {t("driver_signup.form_subheading")}
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Car, text: t("driver_signup.form_bullet_1") },
                    { icon: DollarSign, text: t("driver_signup.form_bullet_2") },
                    { icon: Clock, text: t("driver_signup.form_bullet_3") },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.text} className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(200,245,63,0.1)" }}
                        >
                          <Icon size={16} style={{ color: "#C8F53F" }} />
                        </div>
                        <span className="text-white/70 text-sm">{item.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div
                  className="mt-10 p-5 rounded-2xl border"
                  style={{ background: "rgba(200,245,63,0.04)", borderColor: "rgba(200,245,63,0.15)" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Shield size={18} style={{ color: "#C8F53F" }} />
                    <span className="text-white font-semibold text-sm">
                      {t("driver_signup.form_trust_title")}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {t("driver_signup.form_trust_body")}
                  </p>
                </div>
              </motion.div>
            </Reveal>

            {/* Right: form */}
            <Reveal>
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="bg-white/[0.03] border border-white/8 rounded-3xl p-8 md:p-10 space-y-8"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  {/* Personal Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <User size={16} style={{ color: "#C8F53F" }} />
                      <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                        {t("driver_signup.section_personal")}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/60 text-xs mb-1.5">
                          {t("driver_signup.label_first_name")}
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          placeholder={t("driver_signup.placeholder_first_name")}
                          className={inputClass("firstName")}
                        />
                        {errors.firstName && (
                          <p className="text-rose-400 text-xs mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs mb-1.5">
                          {t("driver_signup.label_last_name")}
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          placeholder={t("driver_signup.placeholder_last_name")}
                          className={inputClass("lastName")}
                        />
                        {errors.lastName && (
                          <p className="text-rose-400 text-xs mt-1">{errors.lastName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs mb-1.5">
                          {t("driver_signup.label_email")}
                        </label>
                        <div className="relative">
                          <Mail
                            size={15}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
                          />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder={t("driver_signup.placeholder_email")}
                            className={`${inputClass("email")} pl-10`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-rose-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs mb-1.5">
                          {t("driver_signup.label_phone")}
                        </label>
                        <div className="relative">
                          <Phone
                            size={15}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
                          />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            placeholder={t("driver_signup.placeholder_phone")}
                            className={`${inputClass("phone")} pl-10`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-white/60 text-xs mb-1.5">
                          {t("driver_signup.label_city")}
                        </label>
                        <div className="relative">
                          <MapPin
                            size={15}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
                          />
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => handleChange("city", e.target.value)}
                            placeholder={t("driver_signup.placeholder_city")}
                            className={`${inputClass("city")} pl-10`}
                          />
                        </div>
                        {errors.city && (
                          <p className="text-rose-400 text-xs mt-1">{errors.city}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <Car size={16} style={{ color: "#C8F53F" }} />
                      <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                        {t("driver_signup.section_vehicle")}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/60 text-xs mb-1.5">
                          {t("driver_signup.label_vehicle_make")}
                        </label>
                        <input
                          type="text"
                          value={formData.vehicleMake}
                          onChange={(e) => handleChange("vehicleMake", e.target.value)}
                          placeholder={t("driver_signup.placeholder_vehicle_make")}
                          className={inputClass("vehicleMake")}
                        />
                        {errors.vehicleMake && (
                          <p className="text-rose-400 text-xs mt-1">{errors.vehicleMake}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs mb-1.5">
                          {t("driver_signup.label_vehicle_model")}
                        </label>
                        <input
                          type="text"
                          value={formData.vehicleModel}
                          onChange={(e) => handleChange("vehicleModel", e.target.value)}
                          placeholder={t("driver_signup.placeholder_vehicle_model")}
                          className={inputClass("vehicleModel")}
                        />
                        {errors.vehicleModel && (
                          <p className="text-rose-400 text-xs mt-1">{errors.vehicleModel}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs mb-1.5">
                          {t("driver_signup.label_vehicle_year")}
                        </label>
                        <select
                          value={formData.vehicleYear}
                          onChange={(e) => handleChange("vehicleYear", e.target.value)}
                          className={`${inputClass("vehicleYear")} appearance-none`}
                        >
                          <option value="" disabled>
                            {t("driver_signup.placeholder_vehicle_year")}
                          </option>
                          {Array.from({ length: 15 }, (_, i) => 2024 - i).map((year) => (
                            <option key={year} value={String(year)} className="bg-[#1A1A1A]">
                              {year}
                            </option>
                          ))}
                        </select>
                        {errors.vehicleYear && (
                          <p className="text-rose-400 text-xs mt-1">{errors.vehicleYear}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs mb-1.5">
                          {t("driver_signup.label_license")}
                        </label>
                        <div className="relative">
                          <FileText
                            size={15}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
                          />
                          <input
                            type="text"
                            value={formData.licenseNumber}
                            onChange={(e) => handleChange("licenseNumber", e.target.value)}
                            placeholder={t("driver_signup.placeholder_license")}
                            className={`${inputClass("licenseNumber")} pl-10`}
                          />
                        </div>
                        {errors.licenseNumber && (
                          <p className="text-rose-400 text-xs mt-1">{errors.licenseNumber}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5 flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={formData.agreeTerms}
                          onChange={(e) => handleChange("agreeTerms", e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                            formData.agreeTerms
                              ? "border-[#C8F53F] bg-[#C8F53F]"
                              : "border-white/20 bg-transparent group-hover:border-white/40"
                          }`}
                        >
                          {formData.agreeTerms && (
                            <CheckCircle size={12} className="text-[#1A1A1A]" />
                          )}
                        </div>
                      </div>
                      <span className="text-white/50 text-sm leading-relaxed">
                        {t("driver_signup.terms_prefix")}{" "}
                        <Link
                          href="#"
                          className="underline hover:text-white transition-colors"
                          style={{ color: "#C8F53F" }}
                        >
                          {t("driver_signup.terms_link")}
                        </Link>{" "}
                        {t("driver_signup.terms_and")}{" "}
                        <Link
                          href="#"
                          className="underline hover:text-white transition-colors"
                          style={{ color: "#C8F53F" }}
                        >
                          {t("driver_signup.privacy_link")}
                        </Link>
                        .
                      </span>
                    </label>
                    {errors.agreeTerms && (
                      <p className="text-rose-400 text-xs mt-2 ml-8">{errors.agreeTerms}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl font-semibold text-[#1A1A1A] text-base transition-all duration-200 flex items-center justify-center gap-2"
                    style={{ background: "#C8F53F" }}
                  >
                    {t("driver_signup.submit_button")}
                    <ArrowRight size={18} />
                  </motion.button>

                  <p className="text-center text-white/30 text-xs">
                    {t("driver_signup.submit_note")}
                  </p>
                </form>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Reveal>
        <section className="py-24 md:py-32 bg-white/[0.02] border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4">
                {t("driver_signup.faq_title")}
              </h2>
              <p className="text-white/50 text-lg">
                {t("driver_signup.faq_subtitle")}
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <Reveal key={faq.id} delay={i * 0.06}>
                  <motion.div
                    className="rounded-2xl border overflow-hidden transition-all duration-200"
                    style={{
                      borderColor: openFaq === faq.id ? "rgba(200,245,63,0.25)" : "rgba(255,255,255,0.06)",
                      background: openFaq === faq.id ? "rgba(200,245,63,0.04)" : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                      aria-expanded={openFaq === faq.id}
                    >
                      <span className="text-white font-medium text-sm pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown size={18} className="text-white/40" />
                      </motion.div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === faq.id ? "auto" : 0,
                        opacity: openFaq === faq.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-white/50 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Final CTA */}
      <Reveal>
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
              style={{ background: "rgba(200,245,63,0.06)", border: "1px solid rgba(200,245,63,0.15)" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(200,245,63,0.08) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4 text-white">
                  {t("driver_signup.cta_title")}
                </h2>
                <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
                  {t("driver_signup.cta_subtitle")}
                </p>
                <motion.a
                  href="#signup-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#signup-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#1A1A1A] text-base transition-all duration-200"
                  style={{ background: "#C8F53F" }}
                >
                  {t("driver_signup.cta_button")}
                  <ArrowRight size={18} />
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}