import React, { useState } from "react";
import styles from "./BookingForm.module.css";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      date,
      time,
      guests,
      occasion,
    });
    alert("Reservation submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="res-date" className={styles.label}>
        Choose date
      </label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="res-time" className={styles.label}>
        Choose time
      </label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className={styles.select}
      >
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>

      <label htmlFor="guests" className={styles.label}>
        Number of guests
      </label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="occasion" className={styles.label}>
        Occasion
      </label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        className={styles.select}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" className={styles.button}>
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;