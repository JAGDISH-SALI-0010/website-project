import SectionHeading from "@/components/shared/SectionHeading";
import styles from "./About.module.css";

export const metadata = {
  title: "About | PyDisciple",
  description: "Learn more about PyDisciple and our mission to help developers master Python.",
};

export default function AboutPage() {
  return (
    <div className="fade-in" style={{ padding: "4rem 0 6rem" }}>
      <div className="container">
        <SectionHeading 
          title="About PyDisciple" 
          subtitle="Curating the best of the Python ecosystem." 
        />
        
        <div style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.7", opacity: 0.8 }} className="slide-up">
          <p style={{ marginBottom: "1.5rem" }}>
            PyDisciple is a curated learning platform built to help developers master Python through carefully selected resources. We focus on quality over quantity, so you can spend less time searching and more time learning.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            From official documentation and roadmaps to books, courses, tools, and real-world projects, every resource is thoughtfully selected to support your learning journey.
          </p>
          <p>
            Whether you are just starting out with <code>print("Hello, World!")</code> or building advanced Python applications, PyDisciple is designed to grow with you. Our mission is simple: help you master Python—without the noise.
          </p>
        </div>

        {/* Feature 1: Curation Principles */}
        <section className={`${styles.section} slide-up`}>
          <h2 className={styles.sectionTitle}>Our Curation Principles</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🎯</div>
              <h3 className={styles.cardTitle}>Zero Noise & Spam</h3>
              <p className={styles.cardText}>
                Quality over quantity. Every resource is reviewed so you don't waste time on outdated tutorials or fluff.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>⚡</div>
              <h3 className={styles.cardTitle}>Direct & Free Access</h3>
              <p className={styles.cardText}>
                Direct Drive links for Books and Cheat Sheets, and verified official links for documentations.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>🛠️</div>
              <h3 className={styles.cardTitle}>Practical & Modern</h3>
              <p className={styles.cardText}>
                Focused on modern Python standards, real-world tools, and actionable code for fast learning.
              </p>
            </div>
          </div>
        </section>

        {/* Feature 2: Suggest a Resource */}
        <div className={`${styles.ctaBox} slide-up`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Know a hidden gem resource?</h3>
            <p className={styles.ctaText}>
              Found an exceptional Python book, cheat sheet, or tool? Help the community by sharing it with us.
            </p>
          </div>
          <a 
            href="https://forms.gle/5NxEV4UaYoLa9gbR6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaButton}
          >
            Suggest Resource ↗
          </a>
        </div>

        {/* Feature 3: Built With Tech Stack */}
        <section className={`${styles.techSection} slide-up`}>
          <span className={styles.techLabel}>Built With Modern Open Web</span>
          <div className={styles.techBadges}>
            <span className={styles.badge}>⚡ Next.js</span>
            <span className={styles.badge}>⚛️ React</span>
            <span className={styles.badge}>🎨 CSS Modules</span>
            <span className={styles.badge}>▲ Vercel</span>
            <span className={styles.badge}>🌐 100% Free & Open</span>
          </div>
        </section>

        {/* Feature 4: Creator / Community Note */}
        <div className={`${styles.creatorSection} slide-up`}>
          <h3 className={styles.creatorTitle}>Built for Python Learners</h3>
          <p className={styles.creatorText}>
            PyDisciple is an independent project dedicated to making Python education accessible, structured, and distraction-free for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
