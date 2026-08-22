import {
  SiPython,
  SiDjango,
  SiFlask,
  SiNumpy,
  SiPandas,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiJupyter,
  SiAnaconda,
  SiScikitlearn,
  SiPostgresql,
} from "react-icons/si";
import Link from "next/link";
import styles from "./TechMarquee.module.css";

const TECH_ITEMS = [
  { name: "Python",       Icon: SiPython },
  { name: "Django",       Icon: SiDjango },
  { name: "Flask",        Icon: SiFlask },
  { name: "NumPy",        Icon: SiNumpy },
  { name: "Pandas",       Icon: SiPandas },
  { name: "FastAPI",      Icon: SiFastapi },
  { name: "PyTorch",      Icon: SiPytorch },
  { name: "TensorFlow",   Icon: SiTensorflow },
  { name: "Jupyter",      Icon: SiJupyter },
  { name: "Anaconda",     Icon: SiAnaconda },
  { name: "Scikit-learn", Icon: SiScikitlearn },
  { name: "PostgreSQL",   Icon: SiPostgresql },
];

export default function TechMarquee() {
  return (
    <section className={styles.section}>
      <p className={styles.tagline}>
        Covering every corner of the Python ecosystem
      </p>

      {/* Outer wrapper: overflow:hidden + mask fade live here */}
      <div className={styles.marqueeWrapper}>
        {/* Inner scrolling track — translateX applied here */}
        <div className={styles.track} aria-hidden="true">
          {/* First copy */}
          {TECH_ITEMS.map(({ name, Icon }) => (
            <Link key={`a-${name}`} href="/resources" className={styles.item}>
              <Icon className={styles.icon} aria-hidden="true" />
              <span>{name}</span>
            </Link>
          ))}
          {/* Exact duplicate → enables seamless -50% loop */}
          {TECH_ITEMS.map(({ name, Icon }) => (
            <Link key={`b-${name}`} href="/resources" className={styles.item}>
              <Icon className={styles.icon} aria-hidden="true" />
              <span>{name}</span>
            </Link>
          ))}
        </div>

        {/* Visually-hidden accessible list (one copy, no aria-hidden) */}
        <ul className={styles.srOnly}>
          {TECH_ITEMS.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
