"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { navLinks, BRAND } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const getLinkHref = (href: string, type: string) => {
    if (type === "anchor") {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A1A1A]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold tracking-tight font-heading">
              <span className="text-white">in</span>
              <span style={{ color: "#C8F53F" }}>Drive</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.type === "route" && pathname === link.href;
              const resolvedHref = getLinkHref(link.href, link.type);

              return (
                <Link
                  key={link.href}
                  href={resolvedHref}
                  onClick={
                    link.type === "anchor"
                      ? (e) => handleAnchorClick(e, link.href)
                      : undefined
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#C8F53F]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {t(`nav.${link.label.toLowerCase().replace(/ /g, "_")}`)}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/driver-signup"
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[#C8F53F] text-[#1A1A1A] hover:bg-[#d4f75a] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              {t("nav.cta")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? t("nav.close_menu") : t("nav.open_menu")}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-[#1A1A1A]/98 backdrop-blur-md border-t border-white/10"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const resolvedHref = getLinkHref(link.href, link.type);
                return (
                  <Link
                    key={link.href}
                    href={resolvedHref}
                    onClick={
                      link.type === "anchor"
                        ? (e) => handleAnchorClick(e, link.href)
                        : () => setMobileOpen(false)
                    }
                    className="px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 font-medium transition-all"
                  >
                    {t(`nav.${link.label.toLowerCase().replace(/ /g, "_")}`)}
                  </Link>
                );
              })}
              <Link
                href="/driver-signup"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 rounded-full text-sm font-semibold bg-[#C8F53F] text-[#1A1A1A] text-center hover:bg-[#d4f75a] transition-all"
              >
                {t("nav.cta")}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}