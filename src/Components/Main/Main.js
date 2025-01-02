// Main.js
import React from 'react';
import Section from './Section';
import styles from './Main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      <Section title="Little Lemon" className={styles.heroSection}>
        <p>Welcome to our restaurant</p>
        <button>Reserve a Table</button>
      </Section>
      <Section title="Specials" className={styles.specialsSection}>
        {/* Specials content here */}
      </Section>
      <Section title="Testimonials" className={styles.testimonialsSection}>
        {/* Testimonials content here */}
      </Section>
    </main>
  );
}

export default Main;