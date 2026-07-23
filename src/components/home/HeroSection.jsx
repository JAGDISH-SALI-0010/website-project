import styles from "./HeroSection.module.css";
import Button from "@/components/shared/Button";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <p className={`${styles.brand} slide-up`}>
            PYDISCIPLE
          </p>
          <h1 className={`${styles.title} slide-up delay-1`}>
            Master Python. <br className={styles.break} />
            <span className={styles.gradient}>Without the noise.</span>
          </h1>
          <p className={`${styles.subtitle} slide-up delay-2`}>
            Discover the highest-quality, curated learning resources for Python.
            From official docs to advanced courses—all in one place.
          </p>
          <div className={`${styles.actions} slide-up delay-3`}>
            <Button href="/resources" variant="primary">
              Explore Resources
            </Button>
            <Button href="/categories" variant="secondary">
              Browse Categories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
