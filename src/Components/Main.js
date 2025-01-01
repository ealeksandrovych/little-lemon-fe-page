import React from 'react';
import Section from './Section';

function Main() {
  return (
    <main>
      <Section title="Little Lemon" className="hero-section">
        <p>Welcome to our restaurant</p>
        <button>Reserve a Table</button>
      </Section>
      <Section title="Specials" className="specials-section">
      </Section>
      <Section title="Testimonials" className="testimonials-section">
      </Section>
    </main>
  );
}

export default Main;