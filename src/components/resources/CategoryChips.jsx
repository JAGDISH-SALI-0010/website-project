import Link from "next/link";
import styles from "./CategoryChips.module.css";

export default function CategoryChips({ categories, selectedCategory, searchQuery }) {
  const currentCategory = (selectedCategory || "All").toLowerCase();

  const createCategoryUrl = (cat) => {
    const params = new URLSearchParams();
    if (cat.toLowerCase() !== "all") {
      params.set("category", cat.toLowerCase());
    }
    if (searchQuery && searchQuery.trim() !== "") {
      params.set("search", searchQuery.trim());
    }
    const queryStr = params.toString();
    return queryStr ? `/resources?${queryStr}` : "/resources";
  };

  return (
    <div className={styles.container}>
      <Link
        href={createCategoryUrl("All")}
        className={`${styles.chip} ${currentCategory === "all" ? styles.active : ""}`}
      >
        All
      </Link>
      {categories.map((cat) => {
        const isActive = currentCategory === cat.toLowerCase();
        return (
          <Link
            key={cat}
            href={createCategoryUrl(cat)}
            className={`${styles.chip} ${isActive ? styles.active : ""}`}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
}
