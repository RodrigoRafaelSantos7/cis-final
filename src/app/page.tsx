"use client";
import styles from "./index.module.css";
import Lenis from "lenis";
import { useEffect } from "react";
import ZoomParallax from "~/components/ZoomParallax";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.main}>
      <ZoomParallax />
    </main>
  );
}
