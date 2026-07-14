"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MessageCircle as Twitter, Briefcase as Linkedin, Globe as Facebook, Camera as Instagram } from 'lucide-react';
import { BRAND } from "@/lib/data";
import { useTranslations } from "next-intl";

const footerLinks = {
  company: [
    { label: "footer.about", href: "/about", type: "route" },
    { label: "footer.careers", href: "/careers", type: "route" },
    { label: "footer.press", href: "#", type: "route" },
    { label: "footer.blog", href: "/blog", type: "route" },
  ],
  riders: [
    { label: "footer.how_it_works", href: "#how-it-works", type: "anchor" },
    { label: "footer.safety", href: "/safety", type: "route" },
    { label: "footer.cities", href: "/cities", type: "route" },
    { label: "footer.app_download", href: "/get-app", type: "route" },
  ],
  drivers: [
    { label: "footer.drive_with_us", href: "/driver-signup", type: "route" },
    { label: "footer.driver_benefits", href: "/driver-signup#benefits", type: "route" },
    { label: "footer.driver_faq", href: "#", type: "route" },
    { label: "footer.earnings", href: "#", type: "route" },
  ],
};

const socials = [
  { icon: Twitter, href: "https://twitter.com/indrive", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com/indrive", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/company/indrive", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/indrive", label: "Instagram" },
];

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLinkHref = (href: string, type: string) => {
    if (type === "anchor") {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  return (
    <footer className="bg-[#111111] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight font-heading">
                <span className="text-white">in</span>
                <span style={{ color: "#C8F53F" }}>Drive</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#C8F53F] hover:border-[#C8F53F]/30 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              {t("footer.company_heading")}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.type === "route" ? (
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-[#C8F53F] text-sm transition-colors duration-200"
                    >
                      {t(link.label)}
                    </Link>
                  ) : (
                    <Link
                      href={getLinkHref(link.href, link.type)}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-white/50 hover:text-[#C8F53F] text-sm transition-colors duration-200"
                    >
                      {t(link.label)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Riders */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              {t("footer.riders_heading")}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.riders.map((link) => (
                <li key={link.label}>
                  {link.type === "route" ? (
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-[#C8F53F] text-sm transition-colors duration-200"
                    >
                      {t(link.label)}
                    </Link>
                  ) : (
                    <Link
                      href={getLinkHref(link.href, link.type)}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-white/50 hover:text-[#C8F53F] text-sm transition-colors duration-200"
                    >
                      {t(link.label)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Drivers */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              {t("footer.drivers_heading")}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.drivers.map((link) => (
                <li key={link.label}>
                  {link.type === "route" ? (
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-[#C8F53F] text-sm transition-colors duration-200"
                    >
                      {t(link.label)}
                    </Link>
                  ) : (
                    <Link
                      href={getLinkHref(link.href, link.type)}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-white/50 hover:text-[#C8F53F] text-sm transition-colors duration-200"
                    >
                      {t(link.label)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              {t("footer.cookies")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
