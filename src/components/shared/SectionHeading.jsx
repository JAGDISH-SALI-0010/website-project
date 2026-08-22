import styles from "./SectionHeading.module.css";

export default function SectionHeading({ title, subtitle, label, className = "" }) {
  return (
    <div className={`${styles.container} ${className}`}>
      {label && <p className={styles.label}>{label}</p>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
