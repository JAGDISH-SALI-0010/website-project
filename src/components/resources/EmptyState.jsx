import styles from "./EmptyState.module.css";
import Button from "@/components/shared/Button";

export default function EmptyState({ onClear }) {
  return (
    <div className={`${styles.container} fade-in`}>
      <svg 
        className={styles.icon} 
        width="48" 
        height="48" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <h3 className={styles.title}>No resources found</h3>
      <p className={styles.description}>
        We couldn't find anything matching your current search and filter criteria.
      </p>
      <Button onClick={onClear} variant="secondary">
        Clear Filters
      </Button>
    </div>
  );
}
