import Link from "next/link";
import styles from "./Header.module.css";
import ThemeToggle from "@/components/shared/ThemeToggle";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link className={styles.logo} href="/">
            PyDisciple
          </Link>

          <div className={styles.navRight}>
            <ul className={styles.links}>
              <li>
                <Link className={styles.link} href="/resources">
                  Resources
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/categories">
                  Categories
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/about">
                  About
                </Link>
              </li>
            </ul>

            {/* Always visible Theme Switcher on both Desktop & Mobile */}
            <div className={styles.themeToggleWrapper}>
              <ThemeToggle/>
            </div>

            {/* Mobile Hamburger Toggle */}
            <input type="checkbox" id="menu-toggle" className={styles.checkboxToggle} />
            <label htmlFor="menu-toggle" className={styles.menuToggle} aria-label="Open Menu">
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </label>

            {/* Mobile Menu Overlay */}
            <div className={styles.mobileOverlay}>
              <div className={styles.mobileOverlayHeader}>
                <label htmlFor="menu-toggle" className={styles.closeToggle} aria-label="Close Menu">
                  ✕
                </label>
              </div>
              <div className={styles.overlayNav}>
                <Link className={styles.overlayLink} href="/resources">
                  Resources
                </Link>
                <Link className={styles.overlayLink} href="/categories">
                  Categories
                </Link>
                <Link className={styles.overlayLink} href="/about">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
