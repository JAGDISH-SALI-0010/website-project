import styles from "./SectionHeading.module.css";

export default function SectionHeading({ title, subtitle, className = "" }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
