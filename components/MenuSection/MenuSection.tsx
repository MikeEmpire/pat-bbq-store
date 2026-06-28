import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import styles from "./MenuSection.module.css";

// ─── Content ─────────────────────────────────────────────────────────────────
//
// Confirm all item names and descriptions with client before launch.
// The Figma export used generated placeholder copy — the descriptions here
// are rewritten to be conservative and match the tone of existing production copy.
// Specific claims (e.g. "12+ hour smoke", "Santa Maria-style") require client sign-off.
//
// TODO (content): Replace item descriptions with client-verified copy.
// TODO (content): Confirm the correct Package names and guest-count tiers with client.

interface MenuItem {
  name: string;
  desc: string;
  tag?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  photo: string;
  photoAlt: string;
  items: MenuItem[];
}

const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "smoked-meats",
    name: "Smoked Meats",
    photo: "https://images.unsplash.com/photo-1623174025518-b49000fb653d?w=900&h=1100&fit=crop&auto=format",
    photoAlt: "Sliced smoked brisket on a wood cutting board",
    items: [
      { name: "Brisket", desc: "Real wood-smoked low and slow, hand-sliced to order", tag: "House Favorite" },
      { name: "Baby Back Ribs", desc: "Fall-off-the-bone with our signature dry rub", tag: undefined },
      { name: "Tri-Tip", desc: "Our original recipe — the sandwich that started it all", tag: undefined },
      { name: "Pulled Pork", desc: "Slow-smoked all day, served with house sauce", tag: undefined },
      { name: "BBQ Chicken", desc: "Smoked and sauced on-site for every event", tag: undefined },
      { name: "Sausage Links", desc: "Grilled fresh on-site, great alongside any protein", tag: undefined },
    ],
  },
  {
    id: "signature-sides",
    name: "Signature Sides",
    photo: "https://images.unsplash.com/photo-1445012973386-d2fa141ff003?w=900&h=1100&fit=crop&auto=format",
    photoAlt: "Catering trays filled with BBQ sides",
    items: [
      { name: "Creamy Mac & Cheese", desc: "Rich, baked, and always a crowd favorite", tag: undefined },
      { name: "Baked Beans", desc: "Slow-cooked with smoky depth and house seasoning", tag: undefined },
      { name: "Coleslaw", desc: "Tangy house-made slaw, served fresh and cold", tag: undefined },
      { name: "Cornbread", desc: "Baked on-site with honey butter", tag: undefined },
      { name: "Potato Salad", desc: "Classic old-school recipe, made from scratch", tag: undefined },
      { name: "Green Salad", desc: "Fresh garden salad to round out your spread", tag: undefined },
    ],
  },
  {
    id: "packages",
    name: "Packages",
    photo: "https://images.unsplash.com/photo-1778078985242-d2bc75199f05?w=900&h=1100&fit=crop&auto=format",
    photoAlt: "Chef grilling at an outdoor catering event",
    items: [
      { name: "The Backyard", desc: "2 proteins · 2 sides · Ideal for smaller gatherings", tag: undefined },
      { name: "The Social", desc: "3 proteins · 3 sides · Perfect for mid-size events", tag: "Most Popular" },
      { name: "The Grand", desc: "4 proteins · 4 sides · Large celebrations and receptions", tag: undefined },
      { name: "Festival Setup", desc: "Full on-site pit with high-volume service capacity", tag: undefined },
      { name: "Custom Build", desc: "Mix & match — every event is different, we'll build your spread", tag: undefined },
    ],
  },
];

const PHONE_HREF = "tel:+19517723910";

// ─── Component ────────────────────────────────────────────────────────────────

function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  // TODO (interactivity): Replace static activeTab index with useState-driven tab switching.
  // The tab buttons below are rendered with onClick stubs and aria-selected attributes
  // so the structure is ready for tab interactivity without layout changes.
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeCategory = MENU_CATEGORIES[activeTab];

  return (
    <section
      id="menu"
      tabIndex={-1}
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-labelledby="menu-heading"
    >
      <div className={styles.container}>

        {/* ── Section header — split layout ─────────────────────── */}
        {/*
         * Left: eyebrow + heading
         * Right: "Download Full Menu" text CTA — lets visitor jump to the full
         *        catering PDF without scrolling the whole section.
         */}
        <div
          className={styles.sectionHeader}
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>The Full Spread</p>
            <h2 id="menu-heading" className={styles.heading}>
              Our Menu
            </h2>
          </div>
          <div className={styles.headerRight}>
            <a
              href="/menu/new-menu.PNG"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadLink}
              download="PTrains-BBQ-Menu.PNG"
            >
              View Full Menu
              <svg
                className={styles.arrowIcon}
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 10.5L10.5 2.5M10.5 2.5H4.5M10.5 2.5V8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Category tab bar ─────────────────────────────────────── */}
        {/*
         * TODO (interactivity): Tab switching is wired up via useState(activeTab).
         * Currently clicking a tab updates the displayed category immediately.
         * Future enhancement: add a CSS transition/fade between category panels.
         */}
        <div
          className={styles.tabBar}
          role="tablist"
          aria-label="Menu categories"
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          {MENU_CATEGORIES.map((cat, i) => (
            <button
              key={cat.id}
              role="tab"
              id={`menu-tab-${cat.id}`}
              aria-selected={activeTab === i}
              aria-controls={`menu-panel-${cat.id}`}
              className={`${styles.tab} ${activeTab === i ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* ── Menu body — photo + item list ────────────────────────── */}
        {/*
         * 5-column grid: photo panel (2 cols) + item list (3 cols).
         * On mobile: photo stacks above list (single column, photo fixed height).
         * TODO (interactivity): Animate panel transitions between tabs (cross-fade or slide).
         */}
        <div
          className={styles.menuBody}
          role="tabpanel"
          id={`menu-panel-${activeCategory.id}`}
          aria-labelledby={`menu-tab-${activeCategory.id}`}
          style={{ "--delay": "160ms" } as React.CSSProperties}
        >

          {/* Left: featured category photo */}
          <div className={styles.photoPanel}>
            <div className={styles.photoWrap}>
              <Image
                src={activeCategory.photo}
                alt={activeCategory.photoAlt}
                fill
                sizes="(max-width: 767px) 100vw, 40vw"
                className={styles.photo}
                priority={activeTab === 0}
              />
              {/* Category identity overlay at the bottom of the photo */}
              <div className={styles.photoOverlay} aria-hidden="true">
                <p className={styles.photoEyebrow}>Now Serving</p>
                <p className={styles.photoCategoryName}>{activeCategory.name}</p>
              </div>
            </div>
          </div>

          {/* Right: menu items list */}
          <div className={styles.itemList}>
            {activeCategory.items.map((item, i) => (
              <div key={item.name} className={styles.itemRow}>
                <div className={styles.itemContent}>
                  <div className={styles.itemNameRow}>
                    <span className={styles.itemIndex} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    {item.tag && (
                      <span className={styles.itemTag}>{item.tag}</span>
                    )}
                  </div>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              </div>
            ))}

            {/* ── Custom quote CTA row ─────────────────────────────── */}
            {/*
             * Sits inside the item list panel so it is visually part of the menu.
             * Phone CTA (verified number). "Get a Quote" is the conversion ask.
             * TODO (content): Verify bookings@ptrainsbbq.com before adding an email CTA.
             */}
            <div className={styles.quoteCta}>
              <div className={styles.quoteCtaText}>
                <p className={styles.quoteCtaHeading}>Custom menus available</p>
                <p className={styles.quoteCtaBody}>
                  Every event is different — we&apos;ll build the perfect spread.
                </p>
              </div>
              <a href={PHONE_HREF} className="ds-button-primary">
                Get a Quote
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MenuSection;
