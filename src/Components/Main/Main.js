import React, { useReducer } from "react";
import Section from "../Section/Section";
import BookingPage from "../BookingPage/BookingPage"; // Import BookingPage
import styles from "./Main.module.css";

// Reducer functions for managing booking state
function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      console.log("Updating times for date:", action.date);
      // For now, return the same times; logic for dynamic updates can be added here
      return state;
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main className={styles.main}>
      <Section title="Little Lemon" className={styles.heroSection}>
        <p>Welcome to our restaurant</p>
        <button>Reserve a Table</button>
      </Section>
      
      <Section title="Specials" className={styles.specialsSection}>
    
      </Section>

      <Section title="Testimonials" className={styles.testimonialsSection}>
        
      </Section>

   
      <Section title="Reserve a Table" className={styles.bookingSection}>
        <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
      </Section>
    </main>
  );
}

export default Main;