import React from "react";
import Content from "./content";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <div
      className={styles.footerWrapper}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <Content />
        </div>
      </div>
    </div>
  );
}
