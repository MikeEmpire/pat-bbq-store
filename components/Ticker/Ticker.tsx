const ITEMS = [
  "SMOKED ON-SITE",
  "SOUTHERN CALIFORNIA",
  "FAMILY OWNED",
  "WEDDINGS",
  "CORPORATE EVENTS",
  "PRIVATE PARTIES",
  "FESTIVALS",
  "BOOK YOUR EVENT",
];

function Ticker() {
  // Duplicate items so the seamless loop always has content filling the viewport
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden="true"
      style={{
        backgroundColor: "var(--ptrain-color-primary)",
        overflow: "hidden",
        padding: "0.875rem 0",
      }}
    >
      <div className="ticker-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              alignItems: "center",
              color: "var(--ptrain-color-cta-text)",
              display: "inline-flex",
              fontSize: "var(--ptrain-text-eyebrow)",
              fontWeight: 700,
              gap: "1rem",
              letterSpacing: "0.25em",
              padding: "0 1rem",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ color: "var(--ptrain-color-accent)", fontSize: "1.1em" }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
