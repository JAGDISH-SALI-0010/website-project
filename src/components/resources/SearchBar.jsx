import styles from "./SearchBar.module.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className={styles.container}>
      <svg 
        className={styles.icon} 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        className={styles.input}
        placeholder="Search resources by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
