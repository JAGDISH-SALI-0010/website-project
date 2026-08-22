import styles from "./FeaturedResources.module.css";
import SectionHeading from "@/components/shared/SectionHeading";
import ResourceCard from "@/components/resources/ResourceCard";
import { getFeaturedResources } from "@/data/resources";

export default function FeaturedResources() {
  const featured = getFeaturedResources();

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading 
          label="Handpicked for You"
          title="Featured Resources" 
          subtitle="Hand-picked tools, courses, and documentation to accelerate your Python journey."
        />
        
        <div className={styles.grid}>
          {featured.map((resource, index) => (
            <div 
              key={resource.id} 
              className="slide-up" 
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            >
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
