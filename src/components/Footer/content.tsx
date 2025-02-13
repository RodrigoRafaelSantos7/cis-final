import React from "react";
import styles from "./style.module.scss";

export default function Content() {
  return (
    <div className={styles.footer}>
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div className={styles.section1}>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <h1>Coral Infantil de Setúbal</h1>
      <p>
        © Coral Infantil de Setúbal {new Date().getFullYear()} - Todos os
        direitos reservados
      </p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navColumn}>
        <h3>About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className={styles.navColumn}>
        <h3>Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  );
};
