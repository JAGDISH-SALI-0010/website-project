"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import ThemeToggle from "@/components/shared/ThemeToggle";
import LogoIcon from "@/components/shared/LogoIcon";
import { getCategories } from "@/data/resources";

// Grouped category structure for the premium mega-menu
const CATEGORY_GROUPS = [
  {
    label: "Learn",
    categories: ["Books", "Courses", "Tutorials", "Official Documentation"],
  },
  {
    label: "Build",
    categories: ["Libraries", "Tools", "Practice Websites", "GitHub Repository", "Colab Notebooks"],
  },
  {
    label: "Reference",
    categories: ["Cheat Sheets", "Notes", "YouTube Channels"],
  },
];

export default function Header() {
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [dropdownOpen,   setDropdownOpen]   = useState(false);
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false);

  const categories    = getCategories();
  const allCategories = ["All", ...categories];

  // Build grouped structure filtered to only include categories that exist in data
  const categorySet = new Set(categories);
  const filteredGroups = CATEGORY_GROUPS.map((g) => ({
    ...g,
    categories: g.categories.filter((c) => categorySet.has(c)),
  })).filter((g) => g.categories.length > 0);

  const wrapperRef    = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const onMouseEnter = () => {
    clearTimeout(closeTimerRef.current);
    setDropdownOpen(true);
  };

  const onMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const closeMobile = () => {
    setMenuOpen(false);
    setMobileCatsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>

          <Link className={styles.logo} href="/">
            <LogoIcon size={28} className={styles.logoIcon} />
            <span className={styles.logoPy} aria-hidden="true">Py</span>
            <span className={styles.logoDisciple} aria-hidden="true">Disciple</span>
            {/* Screen-reader-only full text so the link reads as one word */}
            <span className={styles.srOnly}>PyDisciple</span>
          </Link>

          <div className={styles.navRight}>

            <ul className={styles.links}>

              {/* Resources — unchanged plain link */}
              <li>
                <Link className={styles.link} href="/resources">
                  Resources
                </Link>
              </li>

              {/* Categories — mega menu */}
              <li
                ref={wrapperRef}
                className={styles.categoryWrapper}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <button
                  className={`${styles.link} ${styles.categoryTrigger}`}
                  onClick={() => setDropdownOpen((o) => !o)}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  Categories
                  <svg
                    className={`${styles.triggerChevron} ${dropdownOpen ? styles.triggerChevronOpen : ""}`}
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 3.5L5 6.5L8 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  className={`${styles.dropdownPanel} ${dropdownOpen ? styles.dropdownVisible : ""}`}
                  role="menu"
                  aria-label="Browse categories"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {/* "All" shortcut row */}
                  <div className={styles.dropdownAllRow}>
                    <Link
                      href="/resources"
                      className={`${styles.dropdownItem} ${styles.dropdownItemAll}`}
                      onClick={() => setDropdownOpen(false)}
                      role="menuitem"
                      tabIndex={dropdownOpen ? 0 : -1}
                    >
                      All Categories
                    </Link>
                  </div>

                  {/* Grouped columns */}
                  <div className={styles.dropdownGroups}>
                    {filteredGroups.map((group) => (
                      <div key={group.label} className={styles.dropdownGroup}>
                        <span className={styles.dropdownGroupLabel}>{group.label}</span>
                        <div className={styles.dropdownGroupItems}>
                          {group.categories.map((cat) => (
                            <Link
                              key={cat}
                              href={`/resources?category=${encodeURIComponent(cat.toLowerCase())}`}
                              className={styles.dropdownItem}
                              onClick={() => setDropdownOpen(false)}
                              role="menuitem"
                              tabIndex={dropdownOpen ? 0 : -1}
                            >
                              {cat}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              {/* About — unchanged plain link */}
              <li>
                <Link className={styles.link} href="/about">
                  About
                </Link>
              </li>

            </ul>

            <div className={styles.themeToggleWrapper}>
              <ThemeToggle />
            </div>

            {/* Mobile hamburger button */}
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
              aria-expanded={menuOpen}
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>

          </div>

          {/* Mobile full-screen overlay — conditionally rendered */}
          {menuOpen && (
            <div className={styles.mobileOverlay}>
              <div className={styles.mobileOverlayHeader}>
                <button
                  className={styles.closeToggle}
                  onClick={closeMobile}
                  aria-label="Close Menu"
                >
                  ✕
                </button>
              </div>

              <nav className={styles.overlayNav} aria-label="Mobile navigation">

                <Link className={styles.overlayLink} href="/resources" onClick={closeMobile}>
                  Resources
                </Link>

                {/* Mobile Categories accordion */}
                <div className={styles.mobileAccordion}>
                  <button
                    className={`${styles.overlayLink} ${styles.overlayAccordionBtn}`}
                    onClick={() => setMobileCatsOpen((o) => !o)}
                    aria-expanded={mobileCatsOpen}
                  >
                    <span>Categories</span>
                    <svg
                      className={`${styles.mobileChevron} ${mobileCatsOpen ? styles.mobileChevronOpen : ""}`}
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4.5 6.75L9 11.25L13.5 6.75"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Smooth height via grid-template-rows trick */}
                  <div
                    className={`${styles.mobileCatList} ${mobileCatsOpen ? styles.mobileCatListOpen : ""}`}
                  >
                    <div className={styles.mobileCatListInner}>
                      {allCategories.map((cat) => (
                        <Link
                          key={cat}
                          href={
                            cat === "All"
                              ? "/resources"
                              : `/resources?category=${encodeURIComponent(cat.toLowerCase())}`
                          }
                          className={styles.mobileCatLink}
                          onClick={closeMobile}
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link className={styles.overlayLink} href="/about" onClick={closeMobile}>
                  About
                </Link>

              </nav>
            </div>
          )}

        </nav>
      </div>
    </header>
  );
}
