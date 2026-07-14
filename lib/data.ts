export interface NavLink {
  label: string;
  href: string;
  type: "route" | "anchor";
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", type: "route" },
  { label: "How It Works", href: "#how-it-works", type: "anchor" },
  { label: "Services", href: "#services", type: "anchor" },
  { label: "About", href: "/about", type: "route" },
  { label: "Drive With Us", href: "/driver-signup", type: "route" },
];

export const BRAND = {
  name: "inDrive",
  tagline: "Negotiate Your Fare. Ride on Your Terms.",
  accent: "#C8F53F",
  dark: "#1A1A1A",
  appStoreUrl: "https://apps.apple.com/app/indrive/id1440099002",
  googlePlayUrl:
    "https://play.google.com/store/apps/details?id=sinet.startup.inDriver",
} as const;

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}