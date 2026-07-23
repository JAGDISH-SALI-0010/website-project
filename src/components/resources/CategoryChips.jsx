import styles from "./CategoryChips.module.css";

export default function CategoryChips({ categories, selectedCategory, onSelect }) {
  return (
    <div className={styles.container}>
      <button 
        className={`${styles.chip} ${selectedCategory === "All" ? styles.active : ""}`}
        onClick={() => onSelect("All")}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${styles.chip} ${selectedCategory === cat ? styles.active : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
