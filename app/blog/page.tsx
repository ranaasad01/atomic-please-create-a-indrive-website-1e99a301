"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BookOpen, Tag, Calendar, User, ArrowRight } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

type Category = "All" | "Product" | "Driver Stories" | "Cities" | "Safety" | "Company";

interface Article {
  id: string;
  category: Exclude<Category, "All">;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const CATEGORIES: Category[] = ["All", "Product", "Driver Stories", "Cities", "Safety", "Company"];

const ARTICLES: Article[] = [
  {
    id: "1",
    category: "Driver Stories",
    title: "From Unemployed to Top-Rated: Ahmed's Story in Lagos",
    excerpt: "Ahmed went from job loss to earning 3x minimum wage in 6 months driving with inDrive.",
    author: "Ahmed K.",
    date: "May 28, 2025",
  },
  {
    id: "2",
    category: "Cities",
    title: "inDrive Launches in 12 New African Cities",
    excerpt: "Our fastest expansion yet brings fair-fare rides to millions of new users across Sub-Saharan Africa.",
    author: "City Team",
    date: "May 20, 2025",
  },
  {
    id: "3",
    category: "Safety",
    title: "New In-App SOS: How We Built It and Why It Matters",
    excerpt: "A deep dive into the engineering and policy decisions behind our new emergency feature.",
    author: "Safety Team",
    date: "May 15, 2025",
  },
  {
    id: "4",
    category: "Product",
    title: "Introducing inDrive Delivery: Same-Day, Fair Price",
    excerpt: "Our new delivery service brings the same negotiation model to package delivery.",
    author: "Product Team",
    date: "May 8, 2025",
  },
  {
    id: "5",
    category: "Company",
    title: "inDrive Reaches 150 Million Users",
    excerpt: "A milestone moment for our team and the communities we serve worldwide.",
    author: "Editorial",
    date: "April 30, 2025",
  },
  {
    id: "6",
    category: "Driver Stories",
    title: "Maria's 5-Star Journey: Driving in São Paulo",
    excerpt: "How flexibility and fair earnings helped Maria support her family on her own schedule.",
    author: "Maria S.",
    date: "April 22, 2025",
  },
  {
    id: "7",
    category: "Cities",
    title: "Why Southeast Asia is inDrive's Next Big Frontier",
    excerpt: "Market analysis and on-the-ground stories from our newest regional expansion.",
    author: "City Team",
    date: "April 15, 2025",
  },
  {
    id: "8",
    category: "Product",
    title: "inDrive Tasks: Hire Local Help in Minutes",
    excerpt: "Everything you need to know about our newest service category.",
    author: "Product Team",
    date: "April 8, 2025",
  },
  {
    id: "9",
    category: "Safety",
    title: "Driver Verification 2.0: Faster, Smarter, Safer",
    excerpt: "We've upgraded our driver onboarding to make verification faster without compromising safety.",
    author: "Safety Team",
    date: "April 1, 2025",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#C8F53F]/15 text-[#C8F53F] border border-[#C8F53F]/20">
      <Tag size={10} />
      {category}
    </span>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="group flex flex-col bg-[#2D2D2D] rounded-xl border border-white/8 hover:border-[#C8F53F]/40 transition-all duration-300 overflow-hidden">
      {/* Decorative top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#C8F53F]/40 to-transparent" />

      <div className="flex flex-col flex-1 p-6 gap-4">
        <CategoryBadge category={article.category} />

        <h3 className="font-heading font-bold text-white text-lg leading-snug group-hover:text-[#C8F53F] transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed line-clamp-2 flex-1">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-white/8">
          <div className="flex items-center gap-3 text-white/40 text-xs">
            <span className="flex items-center gap-1">
              <User size={12} />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {article.date}
            </span>
          </div>
          <span className="flex items-center gap-1 text-[#C8F53F] text-xs font-semibold group-hover:gap-2 transition-all duration-200">
            Read More <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles =
    activeCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main className="bg-[#1A1A1A] text-white overflow-x-hidden">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[52vh] flex items-center justify-center overflow-hidden mesh-bg">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#C8F53F]/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#C8F53F]/4 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-28 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8F53F]/30 bg-[#C8F53F]/10 text-[#C8F53F] text-sm font-semibold mb-6">
              <BookOpen size={14} />
              inDrive Stories
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              News, Insights &{" "}
              <span className="text-[#C8F53F]">Driver Stories</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              The latest from the world of urban mobility, product updates, and the people who make inDrive move.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 2. FEATURED POST ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <Reveal>
          <h2 className="font-heading font-bold text-2xl text-white mb-8">
            Featured Article
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-0 bg-[#2D2D2D] rounded-2xl border border-white/8 overflow-hidden hover:border-[#C8F53F]/30 transition-all duration-300">
            {/* Left: Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 gap-6">
              <CategoryBadge category="Product Update" />

              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white leading-snug">
                How inDrive's Fare Negotiation Changed Urban Mobility Forever
              </h3>

              <p className="text-white/60 text-base leading-relaxed">
                When we launched fare negotiation in 2012, the industry called it impossible. Here's how a simple idea from Yakutsk became a global movement.
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C8F53F]/20 border border-[#C8F53F]/30 flex items-center justify-center text-[#C8F53F] font-bold text-sm font-heading">
                  IE
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">inDrive Editorial</p>
                  <p className="text-white/40 text-xs flex items-center gap-1">
                    <Calendar size={11} /> June 12, 2025
                  </p>
                </div>
              </div>

              <div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C8F53F] text-[#1A1A1A] font-semibold text-sm hover:bg-[#d4f75a] transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right: Visual placeholder */}
            <div className="relative min-h-[280px] lg:min-h-0 bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8F53F]/5 to-transparent" />
              <div className="relative z-10 flex flex-col items-center gap-4 opacity-60">
                <div className="w-24 h-24 rounded-full bg-[#C8F53F]/10 border border-[#C8F53F]/20 flex items-center justify-center">
                  <BookOpen size={40} className="text-[#C8F53F]" />
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-[#C8F53F]/40"
                      style={{ opacity: 1 - i * 0.25 }}
                    />
                  ))}
                </div>
              </div>
              {/* Decorative grid lines */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(200,245,63,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,245,63,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 3. ARTICLE GRID ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        {/* Header + filters */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <h2 className="font-heading font-bold text-3xl text-white">Latest Articles</h2>

            {/* Category filter tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#C8F53F] text-[#1A1A1A]"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <Reveal key={article.id} delay={index * 0.05}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-white/40">
            <BookOpen size={40} className="mx-auto mb-4 opacity-40" />
            <p className="text-lg">No articles in this category yet.</p>
          </div>
        )}
      </section>

      {/* ── 4. NEWSLETTER CTA ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <Reveal>
          <div className="bg-[#2D2D2D] rounded-2xl border border-white/8 p-10 md:p-16 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Get the latest inDrive news delivered to your inbox.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C8F53F]/15 border border-[#C8F53F]/30 text-[#C8F53F] font-semibold">
                ✓ You're subscribed! Welcome to the inDrive community.
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8F53F]/50 focus:bg-white/8 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#C8F53F] text-[#1A1A1A] font-semibold text-sm hover:bg-[#d4f75a] transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
