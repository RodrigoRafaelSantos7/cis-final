"use client";
import styles from "./index.module.css";
import Lenis from "lenis";
import { useEffect } from "react";
import Footer from "~/components/Footer";
import SmoothParallaxScroll from "~/components/SmoothParallaxScroll";
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
      <div className={styles.zoomParallaxTitle}>
        <h1 className={styles.title}>Coral Infantil de Setúbal</h1>
      </div>
      <ZoomParallax />
      <div>
        <h1>Livros</h1>
      </div>
      <SmoothParallaxScroll />
      <Footer />
    </main>
  );
}
