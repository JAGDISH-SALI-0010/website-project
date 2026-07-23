import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            PyDisciple
          </Link>
          <ul className={styles.links}>
            <li>
              <Link href="/resources" className={styles.link}>
                Resources
              </Link>
            </li>
            <li>
              <Link href="/categories" className={styles.link}>
                Categories
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.link}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
