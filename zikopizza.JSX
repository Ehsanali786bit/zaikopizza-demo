import { useState, useEffect } from "react";
import {
  Pizza,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  Star,
  Flame,
  Menu,
  X,
} from "lucide-react";

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Menu", "Deals", "About", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/70 backdrop-blur-md shadow-glass border-b border-white/50"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group select-none">
          <div className="relative">
            <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center shadow-cta group-hover:scale-110 transition-transform duration-300">
              <Pizza className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-green rounded-full border-2 border-white" />
          </div>
          <div className="leading-none">
            <span className="font-display font-bold text-xl text-brand-green tracking-tight">
              Zaiko
            </span>
            <span className="font-display font-bold text-xl text-brand-red tracking-tight">
              Pizza
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm font-medium text-gray-700 hover:text-brand-red transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#menu"
            className="hidden md:inline-flex items-center gap-2 bg-brand-red text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full shadow-cta hover:bg-brand-red-dark hover:shadow-none hover:translate-y-0.5 transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            Order Now
          </a>
          <button
            className="md:hidden text-gray-700 hover:text-brand-red transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-md border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-gray-700 hover:text-brand-red font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-body font-semibold text-sm px-5 py-3 rounded-full shadow-cta"
            onClick={() => setMobileOpen(false)}
          >
            <Phone className="w-4 h-4" />
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-brand-cream overflow-hidden flex items-center"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* large soft circle top-right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-red/5" />
        {/* green blob bottom-left */}
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-brand-green/5" />
        {/* dotted grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.2" fill="#2A6A3A" opacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        {/* diagonal red stripe */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-red/[0.04] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* ── Left: Copy ── */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 self-start bg-brand-red/10 border border-brand-red/20 text-brand-red font-body font-semibold text-xs px-4 py-2 rounded-full"
            style={{ animation: "fadeIn 0.6s ease forwards" }}
          >
            <Flame className="w-3.5 h-3.5" />
            B-17 Islamabad · Open till 2:00 AM
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.05] tracking-tight"
            style={{ animation: "fadeUp 0.8s ease 0.1s both" }}
          >
            Flavour In{" "}
            <span className="relative inline-block text-brand-red">
              Every
              {/* underline squiggle */}
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 w-full h-3 text-brand-red/40"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,6 Q25,0 50,6 T100,6 T150,6 T200,6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            <span className="text-brand-green">Slice.</span>
          </h1>

          {/* Sub-copy */}
          <p
            className="font-body text-gray-600 text-lg leading-relaxed max-w-md"
            style={{ animation: "fadeUp 0.8s ease 0.25s both" }}
          >
            Handcrafted pizzas, zinger burgers, loaded wraps — made fresh with
            bold flavours that keep you coming back. Dine in or order for
            delivery.
          </p>

          {/* Stars */}
          <div
            className="flex items-center gap-2"
            style={{ animation: "fadeUp 0.8s ease 0.35s both" }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <span className="font-body text-sm text-gray-500">
              4.8 · 200+ happy customers
            </span>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: "fadeUp 0.8s ease 0.45s both" }}
          >
            <a
              href="#menu"
              className="inline-flex items-center gap-2.5 bg-brand-red text-white font-body font-bold text-base px-8 py-4 rounded-full shadow-cta hover:bg-brand-red-dark hover:shadow-none hover:translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              <Pizza className="w-5 h-5" />
              Order Now
            </a>
            <a
              href="#deals"
              className="inline-flex items-center gap-2.5 border-2 border-brand-green text-brand-green font-body font-bold text-base px-8 py-4 rounded-full hover:bg-brand-green hover:text-white transition-all duration-200"
            >
              View Deals
            </a>
          </div>

          {/* Info pills */}
          <div
            className="flex flex-wrap gap-3 pt-2"
            style={{ animation: "fadeUp 0.8s ease 0.55s both" }}
          >
            {[
              { icon: Clock, text: "10:30 AM – 2:00 AM" },
              { icon: MapPin, text: "B-1 Markaz, B-17 Islamabad" },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 font-body text-xs text-gray-600 px-3 py-1.5 rounded-full shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 text-brand-green" />
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: Pizza visual ── */}
        <div className="relative flex items-center justify-center">
          {/* Glow ring */}
          <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-brand-red/10 blur-3xl" />

          {/* Main pizza circle */}
          <div
            className="relative z-10 w-72 h-72 md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-orange-50 to-red-50 border-4 border-white shadow-hero flex items-center justify-center"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            {/* Emoji pizza (replace with real image once you have assets) */}
            <span
              className="text-[140px] md:text-[180px] select-none"
              role="img"
              aria-label="pizza"
            >
              🍕
            </span>
          </div>

          {/* Floating badge: price */}
          <div
            className="absolute top-8 -left-4 md:left-4 bg-white rounded-2xl shadow-glass border border-gray-100 px-4 py-3 flex items-center gap-3"
            style={{ animation: "fadeUp 1s ease 0.6s both" }}
          >
            <div className="w-9 h-9 bg-brand-red/10 rounded-xl flex items-center justify-center">
              <Pizza className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <p className="font-body text-xs text-gray-500">Regular Pizza</p>
              <p className="font-display font-bold text-gray-900 text-sm">
                from Rs.649
              </p>
            </div>
          </div>

          {/* Floating badge: deal */}
          <div
            className="absolute bottom-8 -right-4 md:right-2 bg-brand-green text-white rounded-2xl shadow-glass px-4 py-3 flex items-center gap-3"
            style={{ animation: "fadeUp 1s ease 0.75s both" }}
          >
            <Flame className="w-5 h-5 text-white shrink-0" />
            <div>
              <p className="font-body text-xs text-white/80">Best Deal</p>
              <p className="font-display font-bold text-sm">Family @ Rs.3699</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#menu"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-brand-red transition-colors"
        style={{ animation: "fadeIn 1.2s ease 1s both" }}
      >
        <span className="font-body text-xs tracking-widest uppercase">
          Explore Menu
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}

/* ─────────────────────────────────────────
   APP ROOT
───────────────────────────────────────── */
export default function App() {
  return (
    <div className="font-body bg-brand-cream min-h-screen">
      <Navbar />
      <Hero />

      {/* Placeholder sections – you'll fill these in next steps */}
      <section id="menu" className="min-h-screen flex items-center justify-center bg-white">
        <p className="font-display text-3xl text-gray-300">Menu section coming soon…</p>
      </section>
    </div>
  );
}