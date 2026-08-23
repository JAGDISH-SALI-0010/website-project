import SectionHeading from "@/components/shared/SectionHeading";
import { getCategories, resources } from "@/data/resources";
import Link from "next/link";
import styles from "./Categories.module.css";

export const metadata = {
  title: 'Browse by Category',
  description:
    'Explore Python learning resources organized by category — from core fundamentals and data science to web development, automation, and beyond. Find exactly what you need, fast.',
  openGraph: {
    title: 'Python Learning Categories — PyDisciple',
    description:
      'Browse curated Python resources by topic: fundamentals, data science, web frameworks, automation, tools, and more.',
    url: 'https://pydisciple.vercel.app/categories',
  },
};

export default function CategoriesPage() {
  const categories = getCategories();
  
  // Count resources per category
  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = resources.filter(r => r.category === cat).length;
    return acc;
  }, {});

  return (
    <div className="fade-in" style={{ padding: "4rem 0" }}>
      <div className="container">
        <SectionHeading 
          title="Browse by Category" 
          subtitle="Find exactly what you're looking for by selecting a topic." 
        />
        
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <Link 
              href={`/resources?category=${encodeURIComponent(category)}`} 
              key={category} 
              className={`${styles.card} slide-up`}
              style={{ animationDelay: `${(index % 4) * 0.1}s` }}
            >
              <h3 className={styles.title}>{category}</h3>
              <p className={styles.count}>
                {categoryCounts[category]} {categoryCounts[category] === 1 ? 'Resource' : 'Resources'}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
