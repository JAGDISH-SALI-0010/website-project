import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const btnClass = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    // Check if it's an external link
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={btnClass} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={btnClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
}
