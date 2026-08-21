"use client";

import { useMemo } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "@/components/shared/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  // Respect prefers-reduced-motion: pause on frame 0 if user prefers reduced motion
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Lottie Animation */}
        <div className={`${styles.animationWrapper} slide-up`}>
          <DotLottieReact
            src="/404-astronaut.lottie"
            loop={!prefersReducedMotion}
            autoplay={!prefersReducedMotion}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Heading */}
        <h1 className={`${styles.code} slide-up delay-1`}>404</h1>

        {/* Subheading */}
        <p className={`${styles.title} slide-up delay-2`}>
          This page drifted off course
        </p>

        {/* Supporting line */}
        <p className={`${styles.subtitle} slide-up delay-2`}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* CTA */}
        <div className={`${styles.actions} slide-up delay-3`}>
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </div>
    </main>
  );
}
