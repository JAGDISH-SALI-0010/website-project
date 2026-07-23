import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.text}>
            &copy; {new Date().getFullYear()} Python Resources Hub. Built for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}
