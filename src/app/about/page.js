import SectionHeading from "@/components/shared/SectionHeading";
import { LuShieldCheck, LuRefreshCw, LuSparkles, LuUsers, LuArrowUpRight, LuGem, LuTarget, LuZap, LuWrench } from "react-icons/lu";
import styles from "./About.module.css";

export const metadata = {
  title: 'About PyDisciple',
  description:
    'Learn about PyDisciple — an independent, community-driven project dedicated to curating the best Python learning resources. No ads, no clutter, just quality.',
  openGraph: {
    title: 'About PyDisciple — Our Mission & Curation Principles',
    description:
      'PyDisciple is built for Python learners by Python enthusiasts. Discover how we curate resources and why quality beats quantity.',
    url: 'https://pydisciple.vercel.app/about',
  },
};

export default function AboutPage() {
  return (
    <div className="fade-in" style={{ padding: "4rem 0 6rem" }}>
      <div className="container">
        <SectionHeading 
          title="About PyDisciple" 
          subtitle="Curating the best of the Python ecosystem." 
        />
        
        <div className={styles.introBlock}>
          {/* Lead paragraph — larger, higher opacity */}
          <p className={`${styles.introParagraph} ${styles.introLead} slide-up`} style={{ animationDelay: "0s" }}>
            PyDisciple is a curated learning platform built to help developers
            master Python through carefully selected resources. We focus on{" "}
            <span className={styles.highlight}>quality over quantity</span>, so
            you can spend less time searching and more time learning.
          </p>

          {/* Second paragraph */}
          <p className={`${styles.introParagraph} slide-up`} style={{ animationDelay: "0.1s" }}>
            From{" "}
            <span className={styles.highlight}>official documentation and roadmaps</span>{" "}
            to books, courses, tools, and real-world projects, every resource is
            thoughtfully selected to support your learning journey.
          </p>

          {/* Third paragraph */}
          <p className={`${styles.introParagraph} slide-up`} style={{ animationDelay: "0.2s" }}>
            Whether you are just starting out with{" "}
            <code>print(&quot;Hello, World!&quot;)</code> or building advanced
            Python applications, PyDisciple is designed to grow with you. Our
            mission is simple: help you master Python—
            <span className={styles.highlight}>without the noise</span>.
          </p>
        </div>

        {/* Feature 1: Curation Principles */}
        <section className={`${styles.section} slide-up`}>
          <h2 className={styles.sectionTitle}>Our Curation Principles</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIconWrap}>
                <LuTarget className={styles.cardIconSvg} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>Zero Noise &amp; Spam</h3>
              <p className={styles.cardText}>
                Quality over quantity. Every resource is reviewed so you don't waste time on outdated tutorials or fluff.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIconWrap}>
                <LuZap className={styles.cardIconSvg} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>Direct &amp; Free Access</h3>
              <p className={styles.cardText}>
                Direct Drive links for Books and Cheat Sheets, and verified official links for documentations.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIconWrap}>
                <LuWrench className={styles.cardIconSvg} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>Practical &amp; Modern</h3>
              <p className={styles.cardText}>
                Focused on modern Python standards, real-world tools, and actionable code for fast learning.
              </p>
            </div>
          </div>
        </section>

        {/* Feature 2: Suggest a Resource */}
        <div className={`${styles.ctaBox} slide-up`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              <LuGem className={styles.ctaTitleIcon} aria-hidden="true" />
              Know a hidden gem resource?
            </h3>
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
            Suggest Resource
            <span className={styles.ctaArrow} aria-hidden="true">
              <LuArrowUpRight />
            </span>
          </a>
        </div>

        {/* Feature 3: Trust / Value Badges */}
        <section className={`${styles.techSection} slide-up`}>
          <span className={styles.techLabel}>Why PyDisciple</span>
          <div className={styles.techBadges}>
            <span className={styles.badge}>
              <span className={styles.badgeIconWrap} aria-hidden="true">
                <LuShieldCheck className={styles.badgeIcon} />
              </span>
              No ads, no clutter
            </span>
            <span className={styles.badge}>
              <span className={styles.badgeIconWrap} aria-hidden="true">
                <LuRefreshCw className={styles.badgeIcon} />
              </span>
              Regularly updated
            </span>
            <span className={styles.badge}>
              <span className={styles.badgeIconWrap} aria-hidden="true">
                <LuSparkles className={styles.badgeIcon} />
              </span>
              Hand-picked, not scraped
            </span>
            <span className={styles.badge}>
              <span className={styles.badgeIconWrap} aria-hidden="true">
                <LuUsers className={styles.badgeIcon} />
              </span>
              Community-driven
            </span>
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
