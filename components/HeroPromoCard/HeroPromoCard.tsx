import type { ReactNode } from "react";
import styles from "./HeroPromoCard.module.css";

interface HeroPromoCardProps {
  /** Small label above the emphasis word. E.g. "Complimentary" */
  title: string;
  /** The emphasis word — rendered large. E.g. "Tasting" */
  subtitle: string;
  /** Optional supporting line below the emphasis. */
  description?: string;
  /** Optional inline icon / symbol rendered above the title. */
  icon?: ReactNode;
  /**
   * Visual variant.
   * "brass"     — deep burgundy plate with gold lettering (default).
   * "parchment" — warm ivory card for light-context placements.
   */
  variant?: "brass" | "parchment";
}

function HeroPromoCard({
  title,
  subtitle,
  description,
  icon,
  variant = "brass",
}: HeroPromoCardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default HeroPromoCard;
