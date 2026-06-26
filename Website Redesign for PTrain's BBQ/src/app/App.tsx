import { useState, useEffect, useRef } from "react";
import { Phone, Mail, Menu as MenuIcon, X, Star, ArrowRight, MapPin, ChevronRight } from "lucide-react";
import menuImg from "@/imports/_menu_2025PTrainsCateringMenu.png";

// ─── DATA ──────────────────────────────────────────────────────────────────

const menuCategories = [
  {
    name: "Smoked Meats",
    photo: "https://images.unsplash.com/photo-1623174025518-b49000fb653d?w=900&h=1100&fit=crop&auto=format",
    photoAlt: "Sliced smoked brisket on a wood cutting board",
    items: [
      { name: "Brisket", desc: "Oak-smoked 12+ hours, hand-sliced to order", tag: "House Favorite" },
      { name: "Baby Back Ribs", desc: "Fall-off-the-bone with signature dry rub", tag: null },
      { name: "Tri-Tip", desc: "Santa Maria-style, garlic & rosemary", tag: null },
      { name: "Pulled Pork", desc: "Apple cider brined, slow-smoked all day", tag: null },
      { name: "BBQ Chicken", desc: "Half chicken, smoked & sauced to order", tag: null },
      { name: "Jalapeño Cheddar Sausage", desc: "House-made links, grilled fresh on-site", tag: "New" },
    ],
  },
  {
    name: "Signature Sides",
    photo: "https://images.unsplash.com/photo-1445012973386-d2fa141ff003?w=900&h=1100&fit=crop&auto=format",
    photoAlt: "Catering trays filled with BBQ sides",
    items: [
      { name: "Four-Cheese Mac", desc: "Baked golden, creamy & impossibly rich", tag: null },
      { name: "Smoked Baked Beans", desc: "Slow-cooked with burnt brisket ends", tag: null },
      { name: "Southern Coleslaw", desc: "Tangy, house-made, served ice cold", tag: null },
      { name: "Cast Iron Cornbread", desc: "Honey butter, baked fresh on-site", tag: null },
      { name: "Elote Street Corn", desc: "Cotija, chili lime, fresh cilantro", tag: "SoCal Special" },
      { name: "Mustard Potato Salad", desc: "Dill, celery, old-school recipe", tag: null },
    ],
  },
  {
    name: "Packages",
    photo: "https://images.unsplash.com/photo-1778078985242-d2bc75199f05?w=900&h=1100&fit=crop&auto=format",
    photoAlt: "Chef grilling at an outdoor catering event",
    items: [
      { name: "The Backyard", desc: "2 proteins · 2 sides · Up to 25 guests", tag: null },
      { name: "The Social", desc: "3 proteins · 3 sides · Up to 50 guests", tag: "Most Popular" },
      { name: "The Grand", desc: "4 proteins · 4 sides · Up to 100 guests", tag: null },
      { name: "Festival Setup", desc: "Full on-site pit · 500+ guest capacity", tag: null },
      { name: "Custom Build", desc: "Mix & match · Any size · Any occasion", tag: null },
    ],
  },
];

const services = [
  { label: "01", title: "Weddings", desc: "From intimate backyard ceremonies to grand receptions. We bring the fire and the flavor your guests will talk about for years." },
  { label: "02", title: "Corporate Events", desc: "Impress clients, reward teams, and elevate your next company gathering with catering people actually look forward to." },
  { label: "03", title: "Private Parties", desc: "Birthdays, graduations, quinceañeras — every milestone deserves unforgettable food made with real love and real smoke." },
  { label: "04", title: "Festivals & Fairs", desc: "Full pit setup, high-volume service, and the kind of aroma that draws a crowd from three blocks away." },
];

const testimonials = [
  { name: "Maria G.", event: "Wedding · Temecula", stars: 5, text: "PTrain's BBQ made our reception absolutely unforgettable. Every single guest asked for the brisket recipe. The team was professional, on time, and the food was extraordinary." },
  { name: "Derek W.", event: "Corporate Event · San Diego", stars: 5, text: "We've tried many caterers for company events. PTrain's is the only one that got a standing ovation. The tri-tip alone is worth booking them for any occasion." },
  { name: "Anita R.", event: "Birthday Party · Riverside", stars: 5, text: "Ordered for 80 guests and everything was perfect. The pulled pork was incredible and the sides were just as good. Will book again for every family event." },
];

const navLinks = [
  { label: "Menu", id: "menu" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Testimonials", id: "testimonials" },
];

const heroSlides = [
  {
    url: "https://images.unsplash.com/photo-1623174025518-b49000fb653d?w=1200&h=1600&fit=crop&auto=format",
    alt: "Sliced smoked brisket on a wood cutting board",
    label: "Smoked Brisket",
  },
  {
    url: "https://images.unsplash.com/photo-1760537517818-90165a2f0dbc?w=1200&h=1600&fit=crop&auto=format",
    alt: "Meat cooking on a grill with smoke rising",
    label: "On-Site Pit",
  },
  {
    url: "https://images.unsplash.com/photo-1697384874178-3f2afa6bed7b?w=1200&h=1600&fit=crop&auto=format",
    alt: "Pitmaster hand-slicing smoked brisket",
    label: "Hand-Sliced",
  },
  {
    url: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1200&h=1600&fit=crop&auto=format",
    alt: "Board of grilled meats at a catering event",
    label: "The Full Spread",
  },
  {
    url: "https://images.unsplash.com/photo-1778078985242-d2bc75199f05?w=1200&h=1600&fit=crop&auto=format",
    alt: "Chef grilling food under a tent at an outdoor catering event",
    label: "Event Catering",
  },
];

const TICKER_ITEMS = [
  "SMOKED ON-SITE",
  "SOUTHERN CALIFORNIA",
  "EST. 2010",
  "WEDDINGS",
  "CORPORATE EVENTS",
  "500+ EVENTS SERVED",
  "FAMILY OWNED",
  "FESTIVALS",
  "PROUDLY SoCal",
  "15 YEARS OF SMOKE",
];

// ─── COMPONENT ─────────────────────────────────────────────────────────────

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  const cat = menuCategories[activeMenu];

  return (
    <div className="bg-background text-foreground overflow-x-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ─── KEYFRAMES ─── */}
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 28s linear infinite;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease both; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* Hero responsive color switching: light-on-dark (mobile) → dark-on-light (desktop) */
        .hero-text         { color: var(--primary-foreground); }
        .hero-colored-line { color: var(--accent); }
        .hero-muted        { color: rgba(248,244,237,0.68); }
        .hero-stat-label   { color: rgba(248,244,237,0.48); }
        .hero-divider      { background-color: rgba(248,244,237,0.18); }
        .hero-outline-btn  { border-color: rgba(248,244,237,0.5); color: rgba(248,244,237,0.9); }
        @media (min-width: 1024px) {
          .hero-text         { color: var(--foreground); }
          .hero-colored-line { color: var(--primary); }
          .hero-muted        { color: var(--muted-foreground); }
          .hero-stat-label   { color: var(--muted-foreground); }
          .hero-divider      { background-color: var(--border); }
          .hero-outline-btn  { border-color: var(--foreground); color: var(--foreground); }
          .hero-outline-btn:hover { background-color: var(--foreground); color: var(--background); }
        }
      `}</style>

      {/* ─── NAV ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border backdrop-blur-md" : "bg-transparent"
        }`}
        style={scrolled ? { backgroundColor: "rgba(248,244,237,0.96)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} style={{ fontFamily: "'Fraunces', serif" }} className="flex items-baseline gap-1">
            <span className="text-xl md:text-2xl font-black tracking-tight">PTrain&apos;s</span>
            <span className="text-xl md:text-2xl font-black italic" style={{ color: "var(--primary)" }}>&nbsp;BBQ</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </button>
            ))}
          </nav>

          <a href="tel:+19617713118" className="hidden md:flex items-center gap-2 px-6 py-2.5 text-xs font-bold tracking-[0.15em] uppercase text-primary-foreground transition-opacity hover:opacity-85" style={{ backgroundColor: "var(--primary)" }}>
            <Phone size={12} /> Call Now
          </a>

          <button className="md:hidden p-1 text-foreground" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
            {navOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>

        {navOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-8 flex flex-col gap-6">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-lg font-bold tracking-wide uppercase text-foreground">
                {l.label}
              </button>
            ))}
            <a href="tel:+19617713118" className="flex items-center justify-center gap-2 py-4 text-xs font-bold tracking-[0.15em] uppercase text-primary-foreground" style={{ backgroundColor: "var(--primary)" }}>
              <Phone size={12} /> Call Now
            </a>
            <a href="mailto:bookings@ptrainsbbq.com" className="flex items-center justify-center gap-2 py-4 text-xs font-bold tracking-[0.15em] uppercase border-2 border-foreground text-foreground">
              <Mail size={12} /> Email Us
            </a>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section id="hero" className="relative flex flex-col lg:flex-row overflow-hidden" style={{ height: "100svh", minHeight: 640, maxHeight: 1000 }}>

        {/* Mobile background: full-bleed slider with dark overhead gradient */}
        <div className="absolute inset-0 lg:hidden bg-foreground">
          {heroSlides.map((slide, i) => (
            <img
              key={slide.url}
              src={slide.url}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: activeSlide === i ? 1 : 0, transition: "opacity 1.2s ease" }}
            />
          ))}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(35,20,9,0.93) 0%, rgba(35,20,9,0.55) 55%, rgba(35,20,9,0.22) 100%)" }} />
        </div>

        {/* LEFT PANEL: text on ivory (desktop) / over dark image (mobile) */}
        <div className="relative z-10 flex flex-col justify-end w-full lg:w-[52%] px-8 md:px-12 lg:px-14 xl:px-16 pt-28 pb-12 md:pb-16 lg:pb-20 bg-transparent lg:bg-background">

          <p className="text-[10px] font-bold tracking-[0.32em] uppercase mb-5" style={{ color: "var(--accent)" }}>
            Southern California &middot; Est. 2010
          </p>

          {/* Four-line stacked headline — editorial rhythm, size hierarchy */}
          <h1
            className="font-black leading-[0.87] tracking-tight mb-7"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(3rem, 7.5vw, 6rem)" }}
          >
            <span className="block hero-text">The BBQ</span>
            <span className="block hero-colored-line italic">That</span>
            <span className="block hero-text">Changes</span>
            <span className="block hero-text" style={{ fontSize: "0.75em" }}>Everything.</span>
          </h1>

          <p className="hero-muted text-sm md:text-base leading-relaxed mb-9 max-w-sm">
            From Temecula to San Diego — authentic Southern-style smoke for weddings, corporate events, and celebrations of every size.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="tel:+19617713118"
              className="flex items-center justify-center gap-2.5 px-7 py-4 font-bold text-[11px] tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-85"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <Phone size={13} /> Call Now
            </a>
            <button
              onClick={() => scrollTo("menu")}
              className="hero-outline-btn flex items-center justify-center gap-2.5 px-7 py-4 font-bold text-[11px] tracking-[0.18em] uppercase border-2 transition-colors"
            >
              View Menu <ArrowRight size={13} />
            </button>
          </div>

          {/* Stats row */}
          <div className="flex items-center">
            {[
              { num: "500+", label: "Events" },
              { num: "15+",  label: "Years"  },
              { num: "5★",   label: "Rated"  },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className={i > 0 ? "px-5 md:px-7" : "pr-5 md:pr-7"}>
                  <p className="hero-text font-black text-2xl md:text-3xl leading-none" style={{ fontFamily: "'Fraunces', serif" }}>{s.num}</p>
                  <p className="hero-stat-label text-[9px] mt-1 font-bold tracking-[0.2em] uppercase">{s.label}</p>
                </div>
                {i < 2 && <div className="hero-divider h-8 w-px flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: crossfade image slider (desktop only) */}
        <div className="hidden lg:block lg:w-[48%] relative overflow-hidden bg-foreground">
          {heroSlides.map((slide, i) => (
            <img
              key={slide.url}
              src={slide.url}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: activeSlide === i ? 1 : 0, transition: "opacity 1.2s ease" }}
            />
          ))}

          {/* Bottom scrim */}
          <div
            className="absolute inset-x-0 bottom-0 h-44 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(35,20,9,0.75), transparent)" }}
          />

          {/* Slide label — bottom left */}
          <div className="absolute bottom-8 left-8 z-10">
            <p className="text-[9px] font-bold tracking-[0.28em] uppercase mb-1" style={{ color: "var(--accent)" }}>Now Serving</p>
            <p className="text-xl font-black" style={{ fontFamily: "'Fraunces', serif", color: "var(--primary-foreground)" }}>
              {heroSlides[activeSlide].label}
            </p>
          </div>

          {/* Counter + pill dots — bottom right */}
          <div className="absolute bottom-8 right-8 z-10 flex flex-col items-end gap-3">
            <p className="text-[10px] font-bold tracking-[0.2em]" style={{ color: "rgba(248,244,237,0.5)" }}>
              {String(activeSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </p>
            <div className="flex items-center gap-1.5">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    height: 5,
                    width: activeSlide === i ? 22 : 5,
                    borderRadius: 3,
                    backgroundColor: activeSlide === i ? "var(--accent)" : "rgba(248,244,237,0.28)",
                    transition: "width 0.35s ease, background-color 0.35s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Gold seam line at the split edge */}
          <div className="absolute inset-y-0 left-0 w-[3px] z-10" style={{ backgroundColor: "var(--accent)", opacity: 0.55 }} />
        </div>

        {/* Mobile: pill dots at bottom */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1.5 lg:hidden z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                height: 5,
                width: activeSlide === i ? 20 : 5,
                borderRadius: 3,
                backgroundColor: activeSlide === i ? "var(--accent)" : "rgba(248,244,237,0.3)",
                transition: "width 0.35s ease",
              }}
            />
          ))}
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div className="overflow-hidden py-4" style={{ backgroundColor: "var(--primary)" }}>
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-4 text-xs font-bold tracking-[0.25em] uppercase whitespace-nowrap" style={{ color: "var(--primary-foreground)" }}>
              {item}
              <span style={{ color: "var(--accent)", fontSize: "1.1em" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── MENU ─── */}
      <section id="menu" className="py-20 md:py-28" style={{ backgroundColor: "var(--secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--accent)" }}>The Full Spread</p>
              <h2 className="text-5xl md:text-6xl font-black leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>Our Menu</h2>
            </div>
            <a
              href={menuImg}
              target="_blank"
              rel="noreferrer"
              className="self-start md:self-auto flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase border-b-2 pb-0.5 transition-opacity hover:opacity-70"
              style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
            >
              Download Full Menu <ArrowRight size={13} />
            </a>
          </div>

          {/* Category tabs */}
          <div className="flex gap-0 mb-0 overflow-x-auto scrollbar-hide">
            {menuCategories.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActiveMenu(i)}
                className="flex-shrink-0 px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase transition-all border-b-2"
                style={
                  activeMenu === i
                    ? { borderBottomColor: "var(--primary)", color: "var(--primary)", backgroundColor: "var(--card)" }
                    : { borderBottomColor: "var(--border)", color: "var(--muted-foreground)", backgroundColor: "transparent" }
                }
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Menu body: photo + list */}
          <div className="border border-t-0 border-border" style={{ backgroundColor: "var(--card)" }}>
            <div className="grid grid-cols-1 lg:grid-cols-5">

              {/* Left: featured photo */}
              <div className="lg:col-span-2 h-72 lg:h-auto overflow-hidden bg-muted relative">
                <img
                  key={cat.photo}
                  src={cat.photo}
                  alt={cat.photoAlt}
                  className="w-full h-full object-cover fade-up"
                />
                {/* Category label on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: "linear-gradient(to top, rgba(35,20,9,0.85), transparent)" }}>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>Now Serving</p>
                  <p className="text-2xl font-black" style={{ fontFamily: "'Fraunces', serif", color: "var(--primary-foreground)" }}>{cat.name}</p>
                </div>
              </div>

              {/* Right: item list */}
              <div className="lg:col-span-3 divide-y" style={{ borderColor: "var(--border)" }}>
                {cat.items.map((item, i) => (
                  <div key={item.name} className="flex items-start justify-between p-6 md:p-7 group hover:bg-secondary/50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold tracking-widest" style={{ color: "var(--muted-foreground)" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-bold text-base md:text-lg" style={{ fontFamily: "'Fraunces', serif" }}>{item.name}</h3>
                        {item.tag && (
                          <span className="text-[10px] font-bold tracking-[0.15em] uppercase px-2 py-0.5" style={{ backgroundColor: "var(--accent)", color: "var(--foreground)" }}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed ml-8" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
                    </div>
                    <ChevronRight size={16} className="mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }} />
                  </div>
                ))}

                {/* Quote CTA at bottom of list */}
                <div className="p-6 md:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ backgroundColor: "rgba(107,29,42,0.06)" }}>
                  <div>
                    <p className="font-bold text-sm">Custom menus available</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>Every event is different — we'll build the perfect spread.</p>
                  </div>
                  <a href="mailto:bookings@ptrainsbbq.com" className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase text-primary-foreground transition-opacity hover:opacity-85" style={{ backgroundColor: "var(--primary)" }}>
                    <Mail size={11} /> Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--accent)" }}>What We Do</p>
              <h2 className="text-5xl md:text-6xl font-black leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>Catering<br />Services</h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
              On-site pit setup, serving staff, and cleanup — all included. We handle the fire so you can enjoy the celebration.
            </p>
          </div>

          {/* 2×2 bordered grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border border-border">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="p-8 md:p-10 group hover:bg-secondary transition-colors"
                style={{
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                  borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                }}
              >
                <p className="text-xs font-bold tracking-[0.25em] mb-5" style={{ color: "var(--accent)" }}>{svc.label}</p>
                <h3 className="text-3xl font-black mb-3" style={{ fontFamily: "'Fraunces', serif" }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
              </div>
            ))}
          </div>

          {/* Photo strip */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="overflow-hidden bg-muted h-52 md:h-64">
              <img src="https://images.unsplash.com/photo-1760537517818-90165a2f0dbc?w=700&h=600&fit=crop&auto=format" alt="Meat smoking on a grill with smoke rising" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden bg-muted h-52 md:h-64">
              <img src="https://images.unsplash.com/photo-1697384874178-3f2afa6bed7b?w=700&h=600&fit=crop&auto=format" alt="Pitmaster slicing smoked brisket" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden bg-muted h-52 md:h-64 col-span-2 md:col-span-1">
              <img src="https://images.unsplash.com/photo-1778078985242-d2bc75199f05?w=700&h=600&fit=crop&auto=format" alt="Chef grilling food under a tent at outdoor catering event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-20 md:py-28" style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-5" style={{ color: "var(--accent)" }}>The Story</p>
              <h2 className="text-5xl md:text-6xl font-black leading-[0.9] mb-8" style={{ fontFamily: "'Fraunces', serif" }}>
                Born in the<br />Backyard.<br />
                <em className="not-italic" style={{ color: "var(--accent)" }}>Built for the Stage.</em>
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(248,244,237,0.75)" }}>
                PTrain&apos;s BBQ started with one smoker, a parking lot, and a simple obsession — making the best brisket in Southern California. What began as a weekend passion turned into a full-service catering operation serving hundreds of events a year across San Diego, Riverside, Orange County, and beyond.
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(248,244,237,0.75)" }}>
                Every protein is slow-smoked on-site. Every side made from scratch. Every event treated like family. That hasn&apos;t changed since day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+19617713118" className="flex items-center justify-center gap-2 px-7 py-3.5 font-bold text-xs tracking-[0.15em] uppercase transition-opacity hover:opacity-85" style={{ backgroundColor: "var(--primary-foreground)", color: "var(--primary)" }}>
                  <Phone size={12} /> Call Us Today
                </a>
                <a href="mailto:bookings@ptrainsbbq.com" className="flex items-center justify-center gap-2 px-7 py-3.5 font-bold text-xs tracking-[0.15em] uppercase border-2 transition-colors hover:bg-white/10" style={{ borderColor: "rgba(248,244,237,0.35)", color: "var(--primary-foreground)" }}>
                  <Mail size={12} /> Email Us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden" style={{ backgroundColor: "rgba(107,29,42,0.4)" }}>
                <img
                  src="https://images.unsplash.com/photo-1632173543603-9552d41805bf?w=800&h=1067&fit=crop&auto=format"
                  alt="Close-up of smoked brisket being sliced"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              {/* Gold badge */}
              <div className="absolute -bottom-6 -left-6 p-6 md:-bottom-8 md:-left-8" style={{ backgroundColor: "var(--accent)" }}>
                <p className="font-black text-4xl leading-none" style={{ fontFamily: "'Fraunces', serif", color: "var(--foreground)" }}>15+</p>
                <p className="text-xs font-bold mt-1" style={{ color: "var(--foreground)" }}>Years of Smoke</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" className="py-20 md:py-28 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--accent)" }}>Don&apos;t Take Our Word</p>
              <h2 className="text-5xl md:text-6xl font-black leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>What Guests Say</h2>
            </div>
            {/* Dot nav */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)} className="w-2.5 h-2.5 rounded-full transition-all" style={{ backgroundColor: activeTestimonial === i ? "var(--primary)" : "var(--border)" }} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
          </div>

          {/* Featured testimonial */}
          <div className="relative">
            {/* Giant quote mark */}
            <div className="absolute -top-6 -left-4 pointer-events-none select-none leading-none" style={{ fontFamily: "'Fraunces', serif", fontSize: "12rem", color: "var(--secondary)", lineHeight: 1 }}>&ldquo;</div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  onClick={() => setActiveTestimonial(i)}
                  className="p-8 border cursor-pointer transition-all"
                  style={{
                    borderColor: activeTestimonial === i ? "var(--primary)" : "var(--border)",
                    backgroundColor: activeTestimonial === i ? "var(--card)" : "transparent",
                  }}
                >
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={12} style={{ fill: "var(--accent)", color: "var(--accent)" }} />
                    ))}
                  </div>
                  <p
                    className="text-base md:text-lg leading-relaxed mb-6"
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontStyle: "italic",
                      color: activeTestimonial === i ? "var(--foreground)" : "var(--muted-foreground)",
                    }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs mt-0.5 text-muted-foreground">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 md:py-28 border-t border-border overflow-hidden" style={{ backgroundColor: "var(--secondary)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: "var(--accent)" }}>Ready to Book?</p>
          <h2 className="font-black leading-[0.88] tracking-tight mb-6" style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(3.5rem, 9vw, 8rem)" }}>
            Let&apos;s Make Your<br />
            <em className="not-italic" style={{ color: "var(--primary)" }}>Event Legendary.</em>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
            Available throughout Southern California. Reach out today to check availability and get your custom quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="tel:+19617713118" className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-10 py-4 font-bold text-xs tracking-[0.15em] uppercase text-primary-foreground transition-opacity hover:opacity-85" style={{ backgroundColor: "var(--primary)" }}>
              <Phone size={14} /> Call Now
            </a>
            <a href="mailto:bookings@ptrainsbbq.com" className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-10 py-4 font-bold text-xs tracking-[0.15em] uppercase border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors">
              <Mail size={14} /> Email Us
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground">
            <MapPin size={12} />
            <span>Serving San Diego · Riverside · Orange County · Los Angeles</span>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative overflow-hidden pt-16 pb-0" style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>

        {/* Oversized background wordmark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-black whitespace-nowrap leading-none"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(6rem, 20vw, 18rem)",
              color: "rgba(248,244,237,0.045)",
              letterSpacing: "-0.02em",
            }}
          >
            PTRAIN&apos;S BBQ
          </span>
        </div>

        {/* Main footer grid */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-14">

          {/* Top row: logo + columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* Col 1: Brand */}
            <div className="lg:col-span-1">
              <p className="text-3xl font-black mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                PTrain&apos;s<br />
                <em className="not-italic" style={{ color: "var(--accent)" }}>BBQ</em>
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(248,244,237,0.55)" }}>
                Proudly serving Southern California for 15+ years.
              </p>
              <p className="text-xs mt-4 font-bold" style={{ color: "rgba(248,244,237,0.45)" }}>
                Serves 50–500+ Guests
              </p>
            </div>

            {/* Col 2: Navigate */}
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5" style={{ color: "var(--accent)" }}>Navigate</p>
              <nav className="flex flex-col gap-3">
                {["Menu", "Services", "About", "Testimonials", "Contact"].map((l) => (
                  <button
                    key={l}
                    onClick={() => scrollTo(l.toLowerCase())}
                    className="text-left text-sm font-bold tracking-wide uppercase transition-opacity hover:opacity-60"
                    style={{ color: "var(--primary-foreground)" }}
                  >
                    {l}
                  </button>
                ))}
              </nav>
            </div>

            {/* Col 3: Social */}
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5" style={{ color: "var(--accent)" }}>Find Us</p>
              <nav className="flex flex-col gap-3">
                {[
                  { label: "Instagram", href: "https://instagram.com/ptrainsbbq" },
                  { label: "TikTok", href: "https://tiktok.com/@ptrainsbbq" },
                  { label: "Facebook", href: "https://facebook.com/ptrainsbbq" },
                  { label: "Yelp", href: "https://yelp.com" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold tracking-wide uppercase transition-opacity hover:opacity-60"
                    style={{ color: "var(--primary-foreground)" }}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Col 4: Contact */}
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5" style={{ color: "var(--accent)" }}>Contact</p>
              <div className="flex flex-col gap-4">
                <a href="tel:+19617713118" className="flex items-center gap-2 text-sm font-bold tracking-wide transition-opacity hover:opacity-60" style={{ color: "var(--primary-foreground)" }}>
                  <Phone size={13} style={{ color: "var(--accent)" }} />
                  (961) 771-3118
                </a>
                <a href="mailto:bookings@ptrainsbbq.com" className="flex items-center gap-2 text-xs font-bold tracking-wide transition-opacity hover:opacity-60" style={{ color: "var(--primary-foreground)" }}>
                  <Mail size={13} style={{ color: "var(--accent)" }} />
                  bookings@ptrainsbbq.com
                </a>
                <div className="flex items-start gap-2 text-xs" style={{ color: "rgba(248,244,237,0.5)" }}>
                  <MapPin size={13} className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                  <span>San Diego · Riverside<br />Orange County · LA</span>
                </div>
                <a href="tel:+19617713118" className="mt-2 flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold tracking-[0.15em] uppercase transition-opacity hover:opacity-85" style={{ backgroundColor: "var(--accent)", color: "var(--foreground)" }}>
                  <Phone size={11} /> Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="relative border-t py-5 px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(248,244,237,0.12)", backgroundColor: "rgba(0,0,0,0.2)" }}>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "rgba(248,244,237,0.4)" }}>
            © 2025 PTrain&apos;s BBQ · All Rights Reserved
          </p>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "rgba(248,244,237,0.4)" }}>
            @ptrainsbbq · Southern California&apos;s Premier BBQ Catering
          </p>
        </div>
      </footer>
    </div>
  );
}
