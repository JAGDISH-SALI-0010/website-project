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
          <input type="checkbox" id="menu-toggle" className={styles.checkboxToggle} />
          
          <label htmlFor="menu-toggle" className={styles.menuToggle}>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </label>

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

          <div className={styles.mobileOverlay}>
            <label htmlFor="menu-toggle" className={styles.closeToggle}>
              ✕
            </label>
            <div className={styles.overlayNav}>
              <Link href="/resources" className={`${styles.overlayLink} text-3xl font-bold`}>
                Resources
              </Link>
              <Link href="/categories" className={`${styles.overlayLink} text-3xl font-bold`}>
                Categories
              </Link>
              <Link href="/about" className={`${styles.overlayLink} text-3xl font-bold`}>
                About
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
